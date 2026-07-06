import { describe, it, expect } from 'vitest'
import { socioEconomicQuestions } from './socioEconomic'

describe('socioEconomicQuestions', () => {
  it('has 14 questions: 7 T1 and 7 T2', () => {
    expect(socioEconomicQuestions).toHaveLength(14)
    expect(socioEconomicQuestions.filter((q) => q.horizon === 'T1')).toHaveLength(7)
    expect(socioEconomicQuestions.filter((q) => q.horizon === 'T2')).toHaveLength(7)
  })

  it('uses ids 29 through 42 with no gaps or duplicates', () => {
    const ids = socioEconomicQuestions.map((q) => q.id).sort((a, b) => a - b)
    expect(ids).toEqual(Array.from({ length: 14 }, (_, i) => i + 29))
  })

  it('every question targets the socioEconomic axis', () => {
    socioEconomicQuestions.forEach((q) => expect(q.axisId).toBe('socioEconomic'))
  })
})
