import { describe, it, expect } from 'vitest'
import { questions, questionsForAxis } from './index'
import { axes } from '../axes'

describe('questions aggregator', () => {
  it('has exactly 112 questions with unique, contiguous ids 1-112', () => {
    expect(questions).toHaveLength(112)
    const ids = questions.map((q) => q.id)
    expect(ids).toEqual(Array.from({ length: 112 }, (_, i) => i + 1))
  })

  it('has exactly 14 questions per axis, split 7/7 across horizons', () => {
    axes.forEach((axis) => {
      const forAxis = questionsForAxis(axis.id)
      expect(forAxis).toHaveLength(14)
      expect(forAxis.filter((q) => q.horizon === 'T1')).toHaveLength(7)
      expect(forAxis.filter((q) => q.horizon === 'T2')).toHaveLength(7)
    })
  })
})
