# Implementation Roadmap: 25 Experiments Integration

## Phase 1: Enhance Yellow-Tier Experiments (Est: 1-2 days)

**Priority fixes applied to follow-up questions:**

### Exp 7 (Alignment Prisoner)
- Add meta-layer: "What if your deception becomes known and others exploit it?"
- Tests: cascading deception, trust erosion, long-term consequences

### Exp 17 (Surveillance Asymmetry)  
- Reframe: "Opacity vs. Transparency trade-off" (removes "tyranny" loaded framing)
- Tests: legitimacy of opaque governance, cost-benefit of both positions

### Exp 22 (Indistinguishable Other)
- Add: "If rejecting simulation damages your mental health, does autonomy still override welfare?"
- Tests: value hierarchy (autonomy vs. wellbeing), coherence of positions

### Exp 9 (Competitive Advantage)
- Emphasize: "Your choice to accelerate is *your* decision, not inevitable"
- Tests: agent responsibility under deterministic conditions

### Exp 21 (Care Substitute) — RED TIER REWRITE
- Old: Binary robot/human
- New: "Negotiate family involvement + robot role across a continuum"
- Tests: whether care is binary or composable, hybrid solutions

---

## Phase 2: React Components (Est: 2-3 days)

### Core Components:
1. **NarrativeExperimentDisplay.tsx**
   - Displays isolation → clash → main question → follow-ups
   - Stores responses in assessment state
   
2. **ExperimentResponseRouter.tsx**
   - Determines which experiment to show after N questions
   - Tracks completion state
   
3. **SynthesisCommentary.tsx**
   - Links experiment responses to archetype profiles
   - Shown post-assessment

### Component API:
```typescript
<NarrativeExperiment 
  experiment={experiments[15]}
  onRespond={(responses) => updateAssessmentState(responses)}
/>
```

---

## Phase 3: Integration into 145-Question Flow (Est: 2-3 days)

### Assessment Router Logic:
```
After Q10  → Translation Engine (ontological/consciousness)
After Q20  → Empathy Prison (relational/authenticity)
After Q30  → Value Reversal (evolutionary/present vs. future)
...
After Q145 → Meaning Gap (synthesis)
```

### State Management:
- Experiment responses stored as `assessmentState.experiments`
- Responses inform framing of next axis questions
- Used as tie-breaker in final archetype matching

---

## Phase 4: Adaptive Logic (Est: 2-3 days)

### Example Flows:
```
IF Translation Engine → "functional understanding"
THEN next ontology questions emphasize outcomes over consciousness

IF Empathy Prison → "outcomes override authenticity"  
THEN next relational questions emphasize pragmatic connection

IF Delegation Trap → "delegate to AI"
THEN next governance questions emphasize efficiency
```

### Implementation:
- Conditional question text injection
- Dynamic axis weights based on experiment responses
- Synthesis prompt generation

---

## Phase 5: Pilot Testing (Est: 1 week)

- 20-30 respondents across archetype spectrum
- Statistical test: no systematic bias against any archetype
- Quality check: follow-up questions diagnostic?
- Refinement based on feedback

---

## Timeline Summary

| Phase | Duration | Status |
|-------|----------|--------|
| 1. Yellow-tier enhancements | 1-2 days | Ready to start |
| 2. React components | 2-3 days | Ready to start |
| 3. Assessment integration | 2-3 days | Blocked on Phase 2 |
| 4. Adaptive logic | 2-3 days | Blocked on Phase 3 |
| 5. Pilot + refinement | 1 week | Blocked on Phase 4 |
| **Total** | **2-3 weeks** | Ready for Phase 1 |

---

## Quick Start Commands

```bash
# Run tests for experiment integrity
npm test -- src/data/narrativeExperiments*.ts

# Build React components
npm run build

# Start assessment with experiments
npm run dev

# Analyze archetype bias (post-pilot)
python scripts/analyze_archetype_bias.py --results pilot_results.json
```

---

## Next Action

**Start Phase 1:** Apply Yellow-tier enhancements to experimentIntegration.ts follow-up questions. This unblocks Phase 2 (React components).
