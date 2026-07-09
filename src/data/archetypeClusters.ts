export interface ArchetypeCluster {
  id: string
  name: string
  profileIds: string[]
}

export const archetypeClusters: ArchetypeCluster[] = [
  {
    id: 'precautionary-safety',
    name: 'Precautionary/Safety',
    profileIds: [
      'doomer', 'ai-safety-institutionalist', 'ea-longtermist',
      'rationalist-alignment-researcher', 'global-governance-technocrat',
      'near-term-ai-ethicist', 'neo-luddite-degrowth-advocate',
      'whistleblower-insider-safety-advocate', 'compute-governance-specialist',
      'eu-style-regulatory-standard-setter', 'ai-ethics-fairness-watchdog',
    ],
  },
  {
    id: 'accelerationist-techno-optimist',
    name: 'Accelerationist/Techno-Optimist',
    profileIds: [
      'eacc-maximalist', 'open-source-libertarian', 'cyberpunk-anti-corporate-accelerationist',
      'silicon-valley-techno-optimist', 'corporate-ai-pragmatist',
      'post-humanist-transhumanist', 'cosmic-vitalist-mystic', 'human-ai-augmentation-advocate',
      'national-champion-accelerationist', 'normal-technology-gradualist',
    ],
  },
  {
    id: 'state-power-security',
    name: 'State-Power/Security',
    profileIds: [
      'techno-nationalist-hawk', 'authoritarian-state-control-advocate', 'military-ai-strategist',
      'chip-sovereignty-enforcement-strategist', 'ai-arms-control-verification-specialist',
      'domestic-security-ai-efficiency-advocate',
    ],
  },
  {
    id: 'anti-concentration-populist',
    name: 'Anti-Concentration/Populist',
    profileIds: ['open-science-internationalist', 'anti-monopoly-populist', 'pragmatic-centrist', 'platform-cooperativist'],
  },
  {
    id: 'relational-companionship',
    name: 'Relational/Companionship',
    profileIds: [
      'companion-tech-romantic', 'affective-biocentrist', 'bio-conservative-traditionalist',
      'digital-rights-advocate', 'faith-rooted-ai-ethicist', 'xenocentric-steward',
      'corporate-ai-welfare-researcher',
    ],
  },
  {
    id: 'material-labor-stakes',
    name: 'Material/Labor Stakes',
    profileIds: [
      'creative-labor-artist-rights-advocate', 'labor-movement-collective-bargaining-advocate',
      'disability-rights-accessibility-advocate', 'ghost-work-labor-advocate',
      'algorithmic-wage-discrimination-scholar', 'ubi-redistributive-response-advocate',
    ],
  },
  {
    id: 'sovereignty-marginalized-voice',
    name: 'Sovereignty/Marginalized Voice',
    profileIds: [
      'global-south-techno-sovereigntist', 'indigenous-data-sovereignty-advocate', 'ai-global-development-optimist',
      'algorithmic-colonialism-critic', 'african-language-ai-sovereignty-advocate', 'border-migration-surveillance-critic',
    ],
  },
]
