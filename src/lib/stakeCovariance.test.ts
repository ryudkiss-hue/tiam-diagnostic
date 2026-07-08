import { describe, it, expect } from 'vitest'
import { computeStakeCovariance, type StakeCovarianceRecord } from './stakeCovariance'
import { axes } from '../data/axes'
import type { AxisVector } from './scoring'

function zeroVector(overrides: Partial<AxisVector> = {}): AxisVector {
  const vector = {} as AxisVector
  axes.forEach((axis) => {
    vector[axis.id] = 0
  })
  return { ...vector, ...overrides }
}

describe('computeStakeCovariance', () => {
  it('reports a near-zero etaSquared when a tag has no relationship to any axis', () => {
    const records: StakeCovarianceRecord[] = [
      { tagIds: ['ai-industry-insider'], axisVector: zeroVector({ risk: 3 }) },
      { tagIds: [], axisVector: zeroVector({ risk: -3 }) },
      { tagIds: ['ai-industry-insider'], axisVector: zeroVector({ risk: -3 }) },
      { tagIds: [], axisVector: zeroVector({ risk: 3 }) },
    ]
    const report = computeStakeCovariance(records, ['ai-industry-insider'])
    const riskEntry = report.perTagPerAxis.find((e) => e.axisId === 'risk' && e.tagId === 'ai-industry-insider')
    expect(riskEntry?.etaSquared).toBeCloseTo(0, 5)
  })

  it('reports a high etaSquared when a tag perfectly separates an axis', () => {
    const records: StakeCovarianceRecord[] = [
      { tagIds: ['automation-exposed-worker'], axisVector: zeroVector({ socioEconomic: 8 }) },
      { tagIds: ['automation-exposed-worker'], axisVector: zeroVector({ socioEconomic: 8 }) },
      { tagIds: [], axisVector: zeroVector({ socioEconomic: -8 }) },
      { tagIds: [], axisVector: zeroVector({ socioEconomic: -8 }) },
    ]
    const report = computeStakeCovariance(records, ['automation-exposed-worker'])
    const entry = report.perTagPerAxis.find(
      (e) => e.axisId === 'socioEconomic' && e.tagId === 'automation-exposed-worker',
    )
    expect(entry?.etaSquared).toBeCloseTo(1, 5)
    expect(entry?.groupMean).toBe(8)
    expect(entry?.nonGroupMean).toBe(-8)
    expect(report.maxEtaSquaredByAxis.socioEconomic).toBeCloseTo(1, 5)
  })

  it('does not adjudicate an individual record — it only reports aggregate group means', () => {
    const records: StakeCovarianceRecord[] = [
      { tagIds: ['automation-exposed-worker'], axisVector: zeroVector({ risk: 5 }) },
      { tagIds: [], axisVector: zeroVector({ risk: -5 }) },
    ]
    const report = computeStakeCovariance(records, ['automation-exposed-worker'])
    expect(report).not.toHaveProperty('perRecordVerdict')
    expect(report).not.toHaveProperty('flaggedRecords')
  })

  it('handles an empty sample without producing NaN', () => {
    const report = computeStakeCovariance([], ['automation-exposed-worker'])
    expect(report.sampleSize).toBe(0)
    axes.forEach((axis) => {
      expect(report.maxEtaSquaredByAxis[axis.id]).toBe(0)
      expect(Number.isNaN(report.maxEtaSquaredByAxis[axis.id])).toBe(false)
    })
  })

  it('computes an independent eta-squared per axis for the same tag', () => {
    const records: StakeCovarianceRecord[] = [
      { tagIds: ['ai-industry-insider'], axisVector: zeroVector({ risk: 6, ontological: 0 }) },
      { tagIds: ['ai-industry-insider'], axisVector: zeroVector({ risk: 6, ontological: 4 }) },
      { tagIds: [], axisVector: zeroVector({ risk: -6, ontological: -4 }) },
      { tagIds: [], axisVector: zeroVector({ risk: -6, ontological: 0 }) },
    ]
    const report = computeStakeCovariance(records, ['ai-industry-insider'])
    const riskEntry = report.perTagPerAxis.find((e) => e.axisId === 'risk')
    const ontologicalEntry = report.perTagPerAxis.find((e) => e.axisId === 'ontological')
    expect(riskEntry?.etaSquared).toBeCloseTo(1, 5)
    expect(ontologicalEntry?.etaSquared).toBeLessThan(1)
    expect(ontologicalEntry?.etaSquared).toBeGreaterThan(0)
  })
})
