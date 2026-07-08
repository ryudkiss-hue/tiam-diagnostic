import type { AxisId } from '../data/types'
import type { AxisVector } from './scoring'
import { axes } from '../data/axes'

export interface StakeCovarianceRecord {
  tagIds: string[]
  axisVector: AxisVector
}

export interface TagAxisCovariance {
  tagId: string
  axisId: AxisId
  groupMean: number
  nonGroupMean: number
  groupSize: number
  nonGroupSize: number
  etaSquared: number
}

export interface StakeCovarianceReport {
  sampleSize: number
  perTagPerAxis: TagAxisCovariance[]
  maxEtaSquaredByAxis: Record<AxisId, number>
}

function mean(values: number[]): number {
  if (values.length === 0) return 0
  return values.reduce((sum, v) => sum + v, 0) / values.length
}

/**
 * Unscored diagnostic only. Per the Council of High Intelligence verdict
 * (2026-07-08, "surface-two-venue"): stake must never be folded into
 * classify() as a scored axis — see MethodologySection.tsx and the "Your
 * Stake" reflection on ResultsPage.tsx for the individual-facing venue this
 * complements. This reports how much of each axis's variance a stakeholder
 * tag explains (eta-squared, tag-present vs. tag-absent groups), for
 * institutional/allocative-use gating. It adjudicates nothing about any
 * individual respondent's "true" motive — report, don't adjudicate.
 *
 * There is no live respondent dataset behind this yet (this app has no
 * backend), so nothing calls this in production. It exists so the gate
 * described in the verdict's Kill Criteria has a real instrument to run
 * against the day a respondent dataset exists, rather than the question
 * being reasoned about indefinitely from architectural absence alone.
 */
export function computeStakeCovariance(
  records: StakeCovarianceRecord[],
  tagIds: string[],
): StakeCovarianceReport {
  const perTagPerAxis: TagAxisCovariance[] = []
  const maxEtaSquaredByAxis = {} as Record<AxisId, number>

  axes.forEach((axis) => {
    const values = records.map((r) => r.axisVector[axis.id])
    const grandMean = mean(values)
    const ssTotal = values.reduce((sum, v) => sum + (v - grandMean) ** 2, 0)

    let maxEta = 0
    tagIds.forEach((tagId) => {
      const groupValues: number[] = []
      const nonGroupValues: number[] = []
      records.forEach((r) => {
        if (r.tagIds.includes(tagId)) groupValues.push(r.axisVector[axis.id])
        else nonGroupValues.push(r.axisVector[axis.id])
      })
      const groupMean = mean(groupValues)
      const nonGroupMean = mean(nonGroupValues)
      const ssBetween =
        groupValues.length * (groupMean - grandMean) ** 2 +
        nonGroupValues.length * (nonGroupMean - grandMean) ** 2
      const etaSquared = ssTotal === 0 ? 0 : ssBetween / ssTotal
      maxEta = Math.max(maxEta, etaSquared)
      perTagPerAxis.push({
        tagId,
        axisId: axis.id,
        groupMean,
        nonGroupMean,
        groupSize: groupValues.length,
        nonGroupSize: nonGroupValues.length,
        etaSquared,
      })
    })
    maxEtaSquaredByAxis[axis.id] = maxEta
  })

  return { sampleSize: records.length, perTagPerAxis, maxEtaSquaredByAxis }
}
