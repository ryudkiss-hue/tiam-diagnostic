import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProgressBar } from './ProgressBar'

describe('ProgressBar', () => {
  it('renders the label and sets the correct percentage', () => {
    render(<ProgressBar current={3} total={8} label="Axis 3 of 8" />)
    expect(screen.getByText('Axis 3 of 8')).toBeInTheDocument()
    expect(screen.getByRole('progressbar').getAttribute('aria-valuenow')).toBe('38')
  })
})
