import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProfileCard } from './ProfileCard'
import type { ProfileMatch } from '../lib/scoring'

const match: ProfileMatch = {
  profile: {
    id: 'doomer',
    name: 'Doomer',
    summary: 'Believes advanced AI is likely to cause human extinction.',
    coords: { teleological: 0, risk: 0, socioEconomic: 0, ontological: 0, legalMoral: 0, evolutionary: 0, relational: 0, geopolitical: 0 },
  },
  distance: 3.456,
}

describe('ProfileCard', () => {
  it('shows the profile name, summary, rank, and rounded distance', () => {
    render(<ProfileCard match={match} rank={1} />)
    expect(screen.getByText('Doomer')).toBeInTheDocument()
    expect(screen.getByText('Believes advanced AI is likely to cause human extinction.')).toBeInTheDocument()
    expect(screen.getByText('Match #1')).toBeInTheDocument()
    expect(screen.getByText('Distance: 3.46')).toBeInTheDocument()
  })
})
