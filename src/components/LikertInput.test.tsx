import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { LikertInput } from './LikertInput'

describe('LikertInput', () => {
  it('renders all 5 options and marks the selected one as checked', () => {
    render(<LikertInput questionId={1} value={4} onChange={() => {}} />)
    expect(screen.getByRole('radio', { name: 'Agree' }).getAttribute('aria-checked')).toBe('true')
    expect(screen.getByRole('radio', { name: 'Disagree' }).getAttribute('aria-checked')).toBe('false')
  })

  it('calls onChange with the numeric value of the clicked option', () => {
    const onChange = vi.fn()
    render(<LikertInput questionId={1} value={undefined} onChange={onChange} />)
    fireEvent.click(screen.getByRole('radio', { name: 'Strongly Agree' }))
    expect(onChange).toHaveBeenCalledWith(5)
  })
})
