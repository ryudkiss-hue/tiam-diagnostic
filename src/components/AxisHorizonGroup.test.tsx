import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { AxisHorizonGroup } from './AxisHorizonGroup'
import type { Question } from '../data/types'

const sampleQuestions: Question[] = [
  { id: 1, axisId: 'teleological', horizon: 'T1', agreeShiftsToward: 'A', statement: 'Sample statement one.' },
  { id: 2, axisId: 'teleological', horizon: 'T1', agreeShiftsToward: 'B', statement: 'Sample statement two.' },
]

describe('AxisHorizonGroup', () => {
  it('renders every question statement with its own Likert input', () => {
    render(<AxisHorizonGroup title="Right Now" questions={sampleQuestions} answers={{}} onAnswer={() => {}} />)
    expect(screen.getByText('Right Now')).toBeInTheDocument()
    expect(screen.getByText('Sample statement one.')).toBeInTheDocument()
    expect(screen.getByText('Sample statement two.')).toBeInTheDocument()
  })

  it('calls onAnswer with the question id and chosen value', () => {
    const onAnswer = vi.fn()
    render(<AxisHorizonGroup title="Right Now" questions={sampleQuestions} answers={{}} onAnswer={onAnswer} />)
    const radios = screen.getAllByRole('radio', { name: 'Agree' })
    fireEvent.click(radios[0])
    expect(onAnswer).toHaveBeenCalledWith(1, 4)
  })
})
