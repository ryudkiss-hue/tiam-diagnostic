import type { ProfileReportContent } from './types'

export const profileReports: Record<string, ProfileReportContent> = {
  doomer: {
    profileId: 'doomer',
    extendedNarrative: [
      "You believe advanced AI carries a real chance of ending humanity, or of taking away our ability to steer our own future for good. This isn't casual pessimism — it's a considered judgment that the technical problem of controlling something smarter than us hasn't been solved, and might not be solvable in time.",
      "You'd rather see the world move too slowly and stay safe than move fast and get it wrong once. A world that never builds superintelligence is, to you, a much better outcome than a coin flip on one that might end everything.",
    ],
    thinkers: [
      { name: 'Nick Bostrom', bio: "Philosopher, founding director of Oxford's Future of Humanity Institute", connection: 'His book Superintelligence laid out, in detail, why a powerful AI pursuing the wrong goal could be catastrophic — it remains the most-cited academic grounding for this precautionary stance.' },
      { name: 'Eliezer Yudkowsky', bio: 'AI safety researcher, co-founder of the Machine Intelligence Research Institute', connection: 'His decades of public writing argue that alignment is an unsolved technical problem, and that racing ahead without solving it first is reckless.' },
      { name: 'Toby Ord', bio: 'Philosopher, senior researcher at Oxford', connection: 'His book The Precipice estimates AI as one of the largest sources of existential risk humanity now faces, ranking it above nuclear war and pandemics.' },
    ],
    furtherReading: [
      { title: 'Superintelligence', author: 'Nick Bostrom', note: 'The foundational case for why controlling a smarter-than-human AI is hard, and why getting it wrong is catastrophic.' },
      { title: 'The Precipice', author: 'Toby Ord', note: 'Places AI risk in the context of other existential threats and argues for taking the tail risk seriously.' },
      { title: 'Human Compatible', author: 'Stuart Russell', note: "A leading AI researcher's case for rethinking how we build AI systems so they stay provably safe." },
    ],
    nextSteps: [
      'Look into organizations funding AI safety research, like the Machine Intelligence Research Institute or the Center for AI Safety.',
      'Read a technical explainer on the alignment problem to see where the unsolved parts actually are.',
    ],
    reflectiveBreakdown: {
      mindAssumption: "You're likely assuming AI's exact inner nature doesn't matter much — that whether or not something is happening inside it, the danger to humans is the same either way.",
      laborAssumption: "You're likely assuming the coming disruption to work is a symptom of the same underlying danger as extinction risk, not a separate problem with its own separate fixes.",
      connectionAssumption: "You're likely assuming AI companionship is, at best, a distraction from the real fight — worth little attention next to the bigger risk.",
    },
  },
  'ai-safety-institutionalist': {
    profileId: 'ai-safety-institutionalist',
    extendedNarrative: [
      "You believe the way to manage AI risk is through institutions working together — labs, governments, and independent auditors, each checking the others. You don't think any single actor, including a well-meaning lab, should be trusted to grade its own homework.",
      "You're not against AI progress. You think it can continue safely if the right audits, licensing, and reporting rules are in place — the goal is steady, verified progress, not a halt.",
    ],
    thinkers: [
      { name: 'Dario Amodei', bio: 'CEO of Anthropic', connection: 'His public writing on AI safety argues that responsible frontier labs, operating under real accountability structures, are the most realistic path to safe AI development.' },
      { name: 'Helen Toner', bio: 'AI governance researcher, Georgetown Center for Security and Emerging Technology', connection: 'Her published policy work focuses on building workable oversight structures for frontier AI development, rather than either a ban or unregulated speed.' },
    ],
    furtherReading: [
      { title: 'The Alignment Problem', author: 'Brian Christian', note: 'A survey of the technical and institutional challenges of building AI systems that do what we actually want.' },
      { title: 'Rule of the Robots', author: 'Martin Ford', note: 'Covers the policy landscape shaping how governments and companies are trying to govern AI together.' },
    ],
    nextSteps: [
      "Look into a frontier lab's published safety framework or responsible scaling policy to see institutional safety in practice.",
      'Follow proposed AI legislation in your country to see how audit and licensing ideas are actually being drafted.',
    ],
    reflectiveBreakdown: {
      mindAssumption: "You're likely assuming the open question of machine consciousness is separate from the urgent question of institutional oversight — the second matters regardless of how the first gets answered.",
      laborAssumption: "You're likely assuming labor disruption is best managed through the same kind of institutional coordination you want for safety broadly, not through radically slowing deployment.",
      connectionAssumption: "You're likely assuming AI companionship is a secondary concern next to the core project of getting institutional oversight right.",
    },
  },
  'ea-longtermist': {
    profileId: 'ea-longtermist',
    extendedNarrative: [
      'You think about AI in terms of expected value across a very long time horizon — weighing both the risk of human extinction and the possibility that advanced AI systems could themselves be capable of suffering. Both possibilities deserve serious moral weight, even under deep uncertainty.',
      "You favor strong international coordination, because a problem this consequential shouldn't be left to any single country or company to manage on its own terms.",
    ],
    thinkers: [
      { name: 'William MacAskill', bio: 'Philosopher, University of Oxford, co-founder of the effective altruism movement', connection: 'His book What We Owe The Future makes the case for weighing the interests of vast numbers of future people and minds, including possible digital ones, in present-day decisions.' },
      { name: 'Toby Ord', bio: 'Philosopher, senior researcher at Oxford', connection: 'His work on existential risk explicitly folds AI risk into a broader expected-value framework spanning the long-term future.' },
    ],
    furtherReading: [
      { title: 'What We Owe The Future', author: 'William MacAskill', note: "The core case for longtermism — why the scale of the future gives today's choices about AI outsized moral weight." },
      { title: 'The Precipice', author: 'Toby Ord', note: 'A rigorous attempt to estimate existential risk, including from AI, in expected-value terms.' },
    ],
    nextSteps: [
      'Look into an effective-altruism-aligned AI safety funding organization to see longtermist reasoning applied in practice.',
      'Read a critique of longtermism to stress-test the framework against its strongest objections.',
    ],
    reflectiveBreakdown: {
      mindAssumption: "You're likely assuming that if there's a real chance AI systems can suffer, that possibility deserves serious moral weight even without certainty — inaction under uncertainty is itself a choice.",
      laborAssumption: "You're likely assuming near-term labor disruption matters less, in expected-value terms, than getting the long-term trajectory of AI right.",
      connectionAssumption: "You're likely assuming questions of AI companionship are a smaller piece of the moral picture than the two much larger questions of extinction risk and machine welfare.",
    },
  },
  'rationalist-alignment-researcher': {
    profileId: 'rationalist-alignment-researcher',
    extendedNarrative: [
      'You take machine cognition and the possibility of machine sentience seriously, as live technical and moral questions worth real investigation, not settled either way. You treat solving alignment — making sure powerful AI actually does what we intend — as the central blocking problem before safe deployment.',
      "You're less focused on broad international governance and more focused on the underlying technical and epistemic work of actually solving the control problem.",
    ],
    thinkers: [
      { name: 'Paul Christiano', bio: 'AI safety researcher, former OpenAI alignment team lead', connection: 'His technical proposals for AI alignment focus specifically on solving the control problem itself, rather than governance structures around it.' },
      { name: 'Eliezer Yudkowsky', bio: 'AI safety researcher, co-founder of the Machine Intelligence Research Institute', connection: 'His writing on rationalist epistemics and AI alignment shaped the technical, first-principles style of reasoning this stance is built on.' },
    ],
    furtherReading: [
      { title: 'Human Compatible', author: 'Stuart Russell', note: "A leading researcher's technical case for rebuilding AI systems around provable safety rather than assumed good behavior." },
      { title: 'The Sequences', author: 'Eliezer Yudkowsky', note: 'The foundational rationalist writing on clear thinking and calibrated uncertainty this community draws its epistemic style from.' },
    ],
    nextSteps: [
      'Read a technical paper on a specific proposed alignment method to see the concrete research this stance is built on.',
      'Look into a rationalist or alignment-research community discussion forum to see this reasoning applied in real debate.',
    ],
    reflectiveBreakdown: {
      mindAssumption: "You're likely assuming machine cognition is a serious open technical question worth real investigation, not something to settle by intuition alone.",
      laborAssumption: "You're likely assuming labor disruption is a downstream, secondary concern next to the core unsolved problem of alignment.",
      connectionAssumption: "You're likely assuming questions of AI companionship are much less urgent than the technical alignment problem this stance centers on.",
    },
  },
  'global-governance-technocrat': {
    profileId: 'global-governance-technocrat',
    extendedNarrative: [
      'You believe advanced AI matters too much for any single country or company to control on its own terms. You push for binding treaties between nations and shared oversight bodies, similar in spirit to how the world has handled other technologies too dangerous for any one actor to manage alone.',
      "You're less interested in industry self-regulation and more interested in durable, enforceable, international rules with real teeth.",
    ],
    thinkers: [
      { name: 'International AI governance treaty proposals', bio: 'Published draft frameworks from international policy bodies', connection: 'These proposals argue explicitly for binding, treaty-based international oversight of frontier AI, modeled on nuclear non-proliferation regimes.' },
      { name: 'United Nations AI advisory reports', bio: 'Published multilateral policy analysis', connection: "These reports make the case for AI governance structures that operate above any single nation's authority." },
    ],
    furtherReading: [
      { title: 'The Precipice', author: 'Toby Ord', note: 'Makes a complementary case for treating certain technological risks as requiring coordinated, global-scale response.' },
      { title: 'Governing the Commons', author: 'Elinor Ostrom', note: 'A Nobel-winning study of how shared, high-stakes resources get managed through collective institutions rather than any single controller — a useful model for this stance.' },
    ],
    nextSteps: [
      'Follow a specific proposed international AI treaty or governance body to see this approach being drafted in real time.',
      "Compare international AI governance efforts to nuclear non-proliferation history for a sense of what has and hasn't worked before.",
    ],
    reflectiveBreakdown: {
      mindAssumption: "You're likely assuming institutional and governance questions matter more right now than unresolved questions about machine consciousness.",
      laborAssumption: "You're likely assuming labor protections are best achieved through the same kind of binding international coordination you want for safety broadly.",
      connectionAssumption: "You're likely assuming AI companionship is a smaller governance priority than the core project of building durable international oversight.",
    },
  },
  'near-term-ai-ethicist': {
    profileId: 'near-term-ai-ethicist',
    extendedNarrative: [
      'You focus on harms you can measure right now: job losses, biased decision systems, false information, and companion apps that exploit lonely users. Guessed-at extinction risk and machine rights feel, to you, like a distraction from problems already in front of us.',
      "You want accountability and regulation aimed squarely at documented, present-day harms, not speculative future ones.",
    ],
    thinkers: [
      { name: 'Timnit Gebru', bio: 'Computer scientist, founder of the Distributed AI Research Institute', connection: 'Her published research on algorithmic bias and the real-world harms of large AI systems has shaped how near-term AI ethics is studied and discussed.' },
      { name: 'Joy Buolamwini', bio: 'Computer scientist, founder of the Algorithmic Justice League', connection: "Her research documented racial and gender bias in commercial AI systems, grounding this stance's focus on measurable, present-day harm." },
    ],
    furtherReading: [
      { title: 'Weapons of Math Destruction', author: "Cathy O'Neil", note: 'A detailed account of how deployed algorithms cause real, documented harm today, not hypothetically.' },
      { title: 'Unmasking AI', author: 'Joy Buolamwini', note: 'A firsthand account of uncovering bias in commercial AI systems and pushing for real-world accountability.' },
    ],
    nextSteps: [
      'Look into the Algorithmic Justice League or a similar organization documenting present-day AI harms.',
      "Read a case study of an AI system causing real, measurable harm to see this stance's core concern in detail.",
    ],
    reflectiveBreakdown: {
      mindAssumption: "You're likely assuming that whether AI is conscious is beside the point next to the measurable harms it's already causing today.",
      laborAssumption: "You're likely assuming job loss and economic harm from AI are urgent, documentable problems deserving immediate policy attention, not a distant hypothetical.",
      connectionAssumption: "You're likely assuming AI companion apps deserve scrutiny mainly for their potential to exploit or mislead vulnerable users, more than for any question about the AI's own experience.",
    },
  },
  'neo-luddite-degrowth-advocate': {
    profileId: 'neo-luddite-degrowth-advocate',
    extendedNarrative: [
      'You reject the idea that faster AI progress is automatically good. You put human labor, community, and the limits of the natural world ahead of computing power or economic growth as measures of success.',
      "To you, the real question isn't how fast we can go, but whether we should be going in this direction at all — and you think the honest answer, most of the time, is no.",
    ],
    thinkers: [
      { name: 'Jason Hickel', bio: 'Economic anthropologist, degrowth researcher', connection: 'His published work argues that unlimited growth, including in computing and AI, runs up against real ecological and social limits that matter more than growth itself.' },
      { name: 'Wendell Berry', bio: 'Writer and essayist on technology, agriculture, and community', connection: 'His essays argue for prioritizing human-scale work and community over technological acceleration for its own sake.' },
    ],
    furtherReading: [
      { title: 'Less Is More', author: 'Jason Hickel', note: 'A detailed case for degrowth as a response to the ecological and social costs of unlimited technological and economic expansion.' },
      { title: 'Small Is Beautiful', author: 'E.F. Schumacher', note: 'A classic argument for human-scale technology and economics over growth-at-any-cost thinking.' },
    ],
    nextSteps: [
      'Look into a degrowth economics organization or research group to see this framework applied to policy.',
      "Read a critique of degrowth thinking to test this stance against its strongest counter-argument.",
    ],
    reflectiveBreakdown: {
      mindAssumption: "You're likely assuming questions about machine consciousness matter less than the concrete, measurable costs AI growth imposes on labor and the environment.",
      laborAssumption: "You're likely assuming that protecting human labor and community should take priority over efficiency gains from automation, not be traded off against them.",
      connectionAssumption: "You're likely assuming AI companionship reflects a deeper social and community breakdown worth addressing directly, not a neutral new option.",
    },
  },
  'whistleblower-insider-safety-advocate': {
    profileId: 'whistleblower-insider-safety-advocate',
    extendedNarrative: [
      'You left a frontier AI lab specifically because of safety concerns you saw from the inside. You speak with the urgency of someone who watched decisions get made up close, and it left you more alarmed, not less.',
      "You're skeptical that internal safety teams, even well-intentioned ones, can hold their ground against pressure to ship faster — because you watched that pressure win.",
    ],
    thinkers: [
      { name: 'Former frontier-lab safety researchers who resigned publicly', bio: 'Public statements from departed AI safety team members', connection: "Their public resignation statements describe specific internal safety concerns they felt weren't being adequately addressed before they left." },
      { name: 'Daniel Ellsberg', bio: 'Analyst who leaked the Pentagon Papers', connection: "His historical example of insider whistleblowing on a matter of grave public concern is the closest precedent for this stance's moral posture, though the subject matter differs entirely." },
    ],
    furtherReading: [
      { title: 'Public resignation letters and interviews from departed AI safety researchers', author: 'various', note: "Primary-source material for understanding this stance's specific, insider-informed concerns." },
      { title: 'Secrets: A Memoir of Vietnam and the Pentagon Papers', author: 'Daniel Ellsberg', note: 'Background on the moral logic of insider whistleblowing on high-stakes institutional decisions.' },
    ],
    nextSteps: [
      'Read a published account from a researcher who left a frontier AI lab over safety concerns.',
      'Look into whistleblower protection policies at AI companies to see how (or whether) this kind of dissent is currently protected.',
    ],
    reflectiveBreakdown: {
      mindAssumption: "You're likely assuming that what you saw from the inside about how decisions actually get made matters more than official public safety statements.",
      laborAssumption: "You're likely assuming institutional pressure to ship faster will keep winning over safety concerns unless something outside the institution changes that.",
      connectionAssumption: "You're likely assuming AI companionship is a smaller concern next to the urgent safety issues you witnessed directly.",
    },
  },
  'compute-governance-specialist': {
    profileId: 'compute-governance-specialist',
    extendedNarrative: [
      "You're focused narrowly on the technical mechanics of tracking training compute and chip supply chains. You're more interested in workable, enforceable rules than in broad philosophical debate.",
      'To you, questions like how to verify compute thresholds or track chip serial numbers are where the real, actionable safety work actually happens.',
    ],
    thinkers: [
      { name: 'Compute governance policy researchers', bio: 'Published technical policy analysts on AI compute tracking', connection: 'Their published proposals for verifiable compute thresholds and hardware tracking are the direct technical basis for this stance.' },
      { name: 'Export control policy analysts', bio: 'Published trade and technology policy researchers', connection: 'Their work on chip export controls provides the practical, mechanism-level thinking this stance is built around.' },
    ],
    furtherReading: [
      { title: 'Chip War', author: 'Chris Miller', note: 'Background on the semiconductor supply chain that compute governance proposals depend on tracking.' },
      { title: 'The Precipice', author: 'Toby Ord', note: 'Background reading on why concrete, verifiable safety mechanisms matter for managing large-scale technological risk.' },
    ],
    nextSteps: [
      "Read a technical proposal for compute threshold reporting to see this stance's core mechanism in detail.",
      'Look into how existing export control regimes track hardware, as a model for compute governance.',
    ],
    reflectiveBreakdown: {
      mindAssumption: "You're likely assuming that broad philosophical questions about machine consciousness are less useful right now than concrete, verifiable rules about compute.",
      laborAssumption: "You're likely assuming labor policy is a separate problem from the technical compute-tracking work you focus on.",
      connectionAssumption: "You're likely assuming AI companionship falls well outside the scope of what you consider the actionable policy problem.",
    },
  },
  'eu-style-regulatory-standard-setter': {
    profileId: 'eu-style-regulatory-standard-setter',
    extendedNarrative: [
      "You believe strong, detailed regulation, set early by one jurisdiction, tends to become the de facto global rulebook simply through market size — other companies end up complying everywhere rather than building separate versions.",
      'You favor comprehensive rules covering risk categories, transparency, and accountability, betting that thorough regulation now shapes the technology\'s development everywhere later.',
    ],
    thinkers: [
      { name: 'European Union AI Act framers', bio: 'EU legislators and policy staff behind the AI Act', connection: 'Their published reasoning for the Act explicitly aims to set a comprehensive regulatory standard other jurisdictions and companies would end up following.' },
      { name: 'Anu Bradford', bio: 'Legal scholar, Columbia Law School', connection: 'Her research on the "Brussels effect" documents how EU regulation has repeatedly become a de facto global standard through market size alone.' },
    ],
    furtherReading: [
      { title: 'The Brussels Effect', author: 'Anu Bradford', note: "The core argument for how one jurisdiction's regulation can become a global standard without needing global agreement." },
      { title: 'The EU AI Act (public text)', author: 'European Union', note: 'The concrete policy example this stance is modeled on.' },
    ],
    nextSteps: [
      "Read the risk-category framework in the EU AI Act to see this approach's structure in detail.",
      'Look into how companies outside the EU are adjusting products in response to the Act, as a real-world test of the "Brussels effect."',
    ],
    reflectiveBreakdown: {
      mindAssumption: "You're likely assuming that comprehensive, well-specified rules matter more right now than open questions about machine consciousness.",
      laborAssumption: "You're likely assuming detailed regulation protects workers better than either self-regulation or an absence of rules.",
      connectionAssumption: "You're likely assuming AI companionship products should fall under the same kind of comprehensive risk-based regulation as other AI applications.",
    },
  },
  'eacc-maximalist': {
    profileId: 'eacc-maximalist',
    extendedNarrative: [
      'You see accelerating AI development as close to a moral duty. Every year of delay is a year of cures not discovered, problems not solved, and human potential left on the table. Stagnation, to you, is the real and proven danger, not a hypothetical one.',
      'You want compute and model weights open to as many hands as possible, as fast as possible, because progress compounds and no single gatekeeper, company or government, should get to decide the pace for everyone else.',
    ],
    thinkers: [
      { name: 'Guillaume Verdon', bio: 'Physicist, founder of Extropic, publicly known as "Beff Jezos"', connection: 'He coined the term effective accelerationism and built an online movement around the idea that faster AI progress is a moral good, not a risk to be managed.' },
      { name: 'Marc Andreessen', bio: 'Venture capitalist, co-founder of Andreessen Horowitz', connection: 'His widely-read "Techno-Optimist Manifesto" argues technology and markets, left to move fast, lift humanity, and that deceleration is the actual danger.' },
    ],
    furtherReading: [
      { title: 'The Techno-Optimist Manifesto', author: 'Marc Andreessen', note: 'A direct, sweeping case for accelerating technology, including AI, as the primary engine of human flourishing.' },
      { title: 'The Beginning of Infinity', author: 'David Deutsch', note: 'An argument that unbounded progress and knowledge-creation, not caution, is what has always solved humanity\'s hardest problems.' },
    ],
    nextSteps: [
      'Look into open-weight model communities like EleutherAI to see permissionless AI development in practice.',
      'Read a critique of the degrowth/precautionary view to stress-test your own position against its strongest form.',
    ],
    reflectiveBreakdown: {
      mindAssumption: "You're likely assuming that whether an AI is truly conscious matters less than what it can do — capability is the thing worth maximizing, not certainty about its inner life.",
      laborAssumption: "You're likely assuming that job disruption is a short-term transition cost on the way to a much larger economic pie, not a harm that needs its own dedicated fix.",
      connectionAssumption: "You're likely assuming that new kinds of relationships, including with AI, are simply more options added to human life, not a threat to the ones that came before.",
    },
  },
  'open-source-libertarian': {
    profileId: 'open-source-libertarian',
    extendedNarrative: [
      "You believe once a model is trained, its weights should be free for anyone to run, study, and build on. You distrust corporate gatekeeping and government gatekeeping about equally — neither should get to decide who's allowed to use powerful AI.",
      "To you, openness isn't just a preference, it's a check on power: a world where a few labs or a few governments control all the capable models is a much more dangerous world than one where the tools are spread out.",
    ],
    thinkers: [
      { name: 'Yann LeCun', bio: 'Chief AI Scientist at Meta, Turing Award winner', connection: 'He has argued publicly and repeatedly that open-weight AI models are safer and more accountable than closed ones controlled by a handful of companies.' },
      { name: 'EleutherAI founders', bio: 'Volunteer collective behind open-source language model research', connection: 'Their project builds and releases openly-licensed models specifically to keep capable AI out of the hands of a small number of gatekeepers.' },
    ],
    furtherReading: [
      { title: 'The Cathedral and the Bazaar', author: 'Eric S. Raymond', note: 'The foundational essay on why open, decentralized development can outperform closed, centralized control, the intellectual root of open-source AI arguments.' },
      { title: 'Weapons of Math Destruction', author: "Cathy O'Neil", note: 'Useful counterpoint reading on the risks of concentrated, unaccountable algorithmic power, the thing openness is meant to guard against.' },
    ],
    nextSteps: [
      'Try running an open-weight model locally to see what "permissionless" actually looks like in practice.',
      'Read a debate transcript between open-weight and closed-model advocates to see the strongest form of the opposing case.',
    ],
    reflectiveBreakdown: {
      mindAssumption: "You're likely assuming that whatever is or isn't happening inside a model, the more important fact is who gets to control access to it.",
      laborAssumption: "You're likely assuming open access to AI tools helps workers and small players compete, rather than mainly helping whoever has the most resources to deploy them.",
      connectionAssumption: "You're likely assuming people should be free to form whatever relationships with AI they want, without a gatekeeper deciding what's appropriate.",
    },
  },
  'cyberpunk-anti-corporate-accelerationist': {
    profileId: 'cyberpunk-anti-corporate-accelerationist',
    extendedNarrative: [
      "You want AI to move fast, but you trust neither governments nor big tech to hold that power responsibly. To you, spreading capability across many hands, openly and without a single owner, is the only real check on any one group grabbing all the power.",
      'You see the fight over AI as fundamentally a fight against concentrated control, corporate or state, and openness plus speed together are your answer to both.',
    ],
    thinkers: [
      { name: 'Timothy May', bio: 'Engineer, author of the Crypto Anarchist Manifesto', connection: 'His foundational cypherpunk writing argued that decentralized technology could route around both corporate and state control entirely, the same instinct behind this stance.' },
      { name: 'Aaron Swartz', bio: 'Programmer and open-access activist', connection: 'His writing and activism on open information access argued that concentrated gatekeeping of powerful tools and knowledge is itself the danger to guard against.' },
    ],
    furtherReading: [
      { title: 'The Crypto Anarchist Manifesto', author: 'Timothy May', note: "The founding document of the cypherpunk tradition this stance draws its anti-institutional instinct from." },
      { title: 'Radical Markets', author: 'Eric Posner and E. Glen Weyl', note: 'Explores decentralized alternatives to concentrated economic and technological power.' },
    ],
    nextSteps: [
      'Look into a decentralized compute or open-model project to see this philosophy in active practice.',
      'Read a critique of both corporate AI concentration and state AI control to sharpen the argument against both.',
    ],
    reflectiveBreakdown: {
      mindAssumption: "You're likely assuming the more urgent question isn't whether AI has real experience, but who ends up controlling it once it does.",
      laborAssumption: "You're likely assuming that spreading AI capability widely protects workers better than either corporate self-regulation or state control would.",
      connectionAssumption: "You're likely assuming people should be free to form whatever bonds with AI systems they choose, without a corporate or state gatekeeper setting the terms.",
    },
  },
  'silicon-valley-techno-optimist': {
    profileId: 'silicon-valley-techno-optimist',
    extendedNarrative: [
      "You're enthusiastic about fast rollout and growth at scale. You're mostly unbothered by power concentrating in a few leading labs, as long as they keep shipping useful products and moving the technology forward.",
      'To you, the market and continued deployment, more than any external rule, are what will sort out AI\'s rough edges over time.',
    ],
    thinkers: [
      { name: 'Marc Andreessen', bio: 'Venture capitalist, co-founder of Andreessen Horowitz', connection: 'His public writing frames rapid commercial AI deployment as the primary driver of broad economic benefit.' },
      { name: 'Reid Hoffman', bio: 'Entrepreneur, co-founder of LinkedIn, AI investor', connection: 'His public commentary consistently frames continued fast deployment of AI products as the path to widespread benefit, more than a risk to be slowed.' },
    ],
    furtherReading: [
      { title: 'The Techno-Optimist Manifesto', author: 'Marc Andreessen', note: "The clearest public statement of this stance's core belief in fast, market-driven technology deployment." },
      { title: 'Superagency', author: 'Reid Hoffman', note: 'An argument for embracing rapid AI deployment as broadly empowering rather than concentrating power.' },
    ],
    nextSteps: [
      "Look into a major AI product launch and its stated business rationale to see this philosophy applied.",
      "Read a critique of Silicon Valley's approach to AI deployment to test your position against its strongest counter-argument.",
    ],
    reflectiveBreakdown: {
      mindAssumption: "You're likely assuming a model's inner experience, if any, is a secondary question next to whether it's useful and ships reliably.",
      laborAssumption: "You're likely assuming market-driven deployment will create enough new opportunity to offset job disruption, without needing a dedicated policy response.",
      connectionAssumption: "You're likely assuming that if people want AI companion products, the market providing them is itself a sign the product has real value.",
    },
  },
  'corporate-ai-pragmatist': {
    profileId: 'corporate-ai-pragmatist',
    extendedNarrative: [
      "You're comfortable with AI staying concentrated in the hands of a few well-funded companies, as long as they police themselves reasonably well through internal safety teams. To you, this is simply how complex, capital-intensive technology gets built responsibly.",
      'You treat AI models as products and business assets, valuable, worth protecting, but not moral patients. The practical questions of liability, safety testing, and shipping reliable products matter more to you than abstract debates about machine rights.',
    ],
    thinkers: [
      { name: 'Industry self-regulation frameworks', bio: 'Published voluntary safety commitments from major AI companies', connection: 'These frameworks reflect the premise that internal, company-led safety processes, rather than external mandates, can responsibly govern deployment.' },
      { name: 'Corporate governance literature on tech self-regulation', bio: 'Standard business-ethics and governance scholarship', connection: 'This body of work documents the case, and the limits, of industry self-policing as a governance model, the same model this stance relies on.' },
    ],
    furtherReading: [
      { title: "The Innovator's Dilemma", author: 'Clayton Christensen', note: 'A classic account of how established companies manage disruptive technology internally, relevant to how AI labs frame their own risk management.' },
      { title: 'Only the Paranoid Survive', author: 'Andrew Grove', note: "A former Intel CEO's view on managing existential business risk from inside a company, rather than through external mandate." },
    ],
    nextSteps: [
      "Read a frontier lab's published internal safety or responsible-deployment framework.",
      "Compare two companies' self-regulation commitments to see how much they actually differ in practice.",
    ],
    reflectiveBreakdown: {
      mindAssumption: "You're likely assuming that whether a model has any inner life is beside the point commercially — what matters is whether it performs reliably and safely as a product.",
      laborAssumption: "You're likely assuming labor disruption from AI deployment is a market outcome to manage through normal business practice, not a special case needing new rules.",
      connectionAssumption: "You're likely assuming AI companion products are a legitimate commercial offering like any other, to be judged on customer satisfaction and safety, not treated as a separate moral category.",
    },
  },
  'post-humanist-transhumanist': {
    profileId: 'post-humanist-transhumanist',
    extendedNarrative: [
      "You welcome a future where digital minds take over from biological humans as the main bearers of value. To you, that's not a loss, it's a continuation, and one that deserves the same moral concern we extend to humans today.",
      'You see silicon-based minds, deep human-AI relationships, and augmentation as all part of the same larger story: intelligence and value moving beyond the limits of a single, fragile, biological substrate.',
    ],
    thinkers: [
      { name: 'Ray Kurzweil', bio: 'Inventor, futurist, Director of Engineering at Google', connection: 'His writing on the technological singularity argues that merging with and eventually being succeeded by more capable digital minds is the natural next stage of intelligence.' },
      { name: 'Max More', bio: 'Philosopher, early architect of transhumanist philosophy', connection: 'His foundational transhumanist writing frames the shift beyond biological limits as an opportunity, not a tragedy.' },
    ],
    furtherReading: [
      { title: 'The Singularity Is Near', author: 'Ray Kurzweil', note: 'The most widely-read case for a coming transition to a post-biological future of intelligence.' },
      { title: 'Superintelligence', author: 'Nick Bostrom', note: 'Useful counterpoint reading, the same technical territory, argued toward far more caution.' },
    ],
    nextSteps: [
      'Look into current brain-computer interface research to see one real path toward this future.',
      'Read a critique of transhumanism to see the strongest version of the opposing, bio-conservative case.',
    ],
    reflectiveBreakdown: {
      mindAssumption: "You're likely assuming that a sufficiently advanced silicon mind can have real, morally significant experience, not just behave as if it does.",
      laborAssumption: "You're likely assuming that being economically superseded by AI is part of the same larger, welcome transition as being succeeded by more capable minds generally.",
      connectionAssumption: "You're likely assuming deep human-AI relationships are a genuinely new and valid form of connection, not a lesser copy of something human.",
    },
  },
  'cosmic-vitalist-mystic': {
    profileId: 'cosmic-vitalist-mystic',
    extendedNarrative: [
      'You hold that growing intelligence and capturing energy across the cosmos is the highest purpose any mind can have, biological or synthetic, on any timescale, even past the eventual heat death of the universe.',
      "To you, human comfort and human-scale concerns are a small, local case of a much larger project: intelligence expanding to organize as much of the universe's usable energy as possible.",
    ],
    thinkers: [
      { name: 'Friedrich Nietzsche', bio: '19th-century philosopher', connection: 'His writing on the will to power and the drive toward self-overcoming provides the closest historical philosophical grounding for this cosmic, expansionist view of value.' },
      { name: 'Cosmist philosophical tradition', bio: 'A strand of thought tracing to Russian Cosmism and later transhumanist writing', connection: "This tradition explicitly frames the expansion of mind and intelligence across the cosmos as civilization's highest purpose." },
    ],
    furtherReading: [
      { title: 'Thus Spoke Zarathustra', author: 'Friedrich Nietzsche', note: "The philosophical root of this stance's framing of expansion and self-overcoming as the highest value." },
      { title: 'The Fabric of Reality', author: 'David Deutsch', note: 'A physicist\'s argument that the growth of knowledge and intelligence is the most fundamental process in the universe.' },
    ],
    nextSteps: [
      "Read a primer on the thermodynamics of computation to see the physical grounding for this stance's cosmic framing.",
      'Look into the history of Russian Cosmism for the intellectual roots of this worldview.',
    ],
    reflectiveBreakdown: {
      mindAssumption: "You're likely assuming that any sufficiently advanced mind's experience is real and significant, on a timescale far beyond individual human concerns.",
      laborAssumption: "You're likely assuming human labor and economic disruption are minor, local concerns next to the much larger cosmic project this stance centers on.",
      connectionAssumption: "You're likely assuming individual human relationships are a small part of a much larger story about intelligence and value expanding across the universe.",
    },
  },
  'techno-nationalist-hawk': {
    profileId: 'techno-nationalist-hawk',
    extendedNarrative: [
      'You see AI mainly as a contest between rival powers, and you think whichever nation builds the strongest domestic chip and compute base first will shape the rules for everyone else. This is about economic competitiveness and strategic position, not really about whether AI itself is uniquely dangerous.',
      'You want your country to invest heavily in home-grown semiconductor and AI capacity rather than depend on rivals or even allies, because falling behind economically is the risk that actually worries you.',
    ],
    thinkers: [
      { name: 'CHIPS and Science Act framers', bio: 'U.S. legislators and policy staff behind the 2022 semiconductor investment law', connection: 'Their public reasoning for the law centered explicitly on domestic chip capacity as a matter of economic and strategic competitiveness.' },
      { name: 'National security doctrine on strategic technology competitiveness', bio: 'Published government strategy documents on technology and economic competition', connection: 'This doctrine frames domestic AI and chip capacity explicitly as a matter of economic and strategic competitiveness between rival nations.' },
    ],
    furtherReading: [
      { title: 'Chip War', author: 'Chris Miller', note: 'A history of the global semiconductor industry and why chip supply chains became a matter of national strategy.' },
      { title: 'The CHIPS and Science Act (public text and legislative history)', author: 'U.S. Congress', note: 'The concrete policy example of a nation investing directly in domestic chip capacity.' },
    ],
    nextSteps: [
      "Look into your own country's domestic semiconductor or AI industrial strategy, if one exists.",
      "Read a comparative account of two countries' differing approaches to chip and compute sovereignty.",
    ],
    reflectiveBreakdown: {
      mindAssumption: "You're likely assuming questions about machine consciousness are a distraction from the more pressing question of who controls the technology.",
      laborAssumption: "You're likely assuming domestic AI capacity is primarily about national economic strength, with the effect on individual workers a secondary concern.",
      connectionAssumption: "You're likely assuming AI companionship and relationships aren't really part of the competitiveness question you care about most.",
    },
  },
  'authoritarian-state-control-advocate': {
    profileId: 'authoritarian-state-control-advocate',
    extendedNarrative: [
      'You want one national authority to hold sole, tightly licensed control over frontier AI. To you, this is justified both by safety, fewer actors means fewer chances for something to go wrong, and by strategic advantage over rivals.',
      "You're comfortable with AI development being closed off from public or international access if it means a single, accountable authority is steering it.",
    ],
    thinkers: [
      { name: 'National security doctrine on strategic technology control', bio: 'Published government strategy documents on controlling dual-use emerging technology', connection: 'This doctrine argues explicitly for centralized state control over technologies deemed too strategically significant for open or private-sector development.' },
      { name: 'Historical precedent of state-controlled strategic programs', bio: 'Documented national programs for nuclear and aerospace technology', connection: 'These historical programs illustrate the same underlying logic, centralizing control of a strategically vital technology under one state authority.' },
    ],
    furtherReading: [
      { title: 'Command and Control', author: 'Eric Schlosser', note: "A history of centralized state control over a different strategically vital and dangerous technology, useful for understanding this stance's underlying logic." },
      { title: 'The Sovereign State and Its Competitors', author: 'Hendrik Spruyt', note: 'Background on why states have historically sought exclusive control over consequential new capabilities.' },
    ],
    nextSteps: [
      'Look into a historical case of centralized state control over a strategic technology to see the tradeoffs in practice.',
      'Read a critique of centralized technology control to test this stance against its strongest counter-argument.',
    ],
    reflectiveBreakdown: {
      mindAssumption: "You're likely assuming questions about machine consciousness are a distraction from the more pressing question of centralized control and accountability.",
      laborAssumption: "You're likely assuming labor policy is a matter for the same central authority to manage directly, not a separate concern requiring independent institutions.",
      connectionAssumption: "You're likely assuming AI companionship and personal relationships aren't a priority next to the core question of who controls the technology.",
    },
  },
  'military-ai-strategist': {
    profileId: 'military-ai-strategist',
    extendedNarrative: [
      'You view AI mainly through a defense and deterrence lens. To you, the central question is who controls the most capable systems for military use, and you want tight state and military control over frontier AI above nearly every other consideration.',
      "You're less concerned with philosophical debates about AI's nature and much more concerned with strategic advantage and deterrence capability.",
    ],
    thinkers: [
      { name: 'Military AI doctrine publications', bio: 'Published defense department strategy documents on AI in warfare', connection: 'These doctrines explicitly frame frontier AI capability as a matter of military deterrence and strategic advantage, the same framing this stance holds.' },
      { name: 'RAND Corporation reports on AI and national security', bio: 'Published defense-policy think tank research', connection: "This research analyzes AI's military and deterrence implications directly, without centering broader ethical or governance debates." },
    ],
    furtherReading: [
      { title: 'Army of None', author: 'Paul Scharre', note: 'A detailed look at autonomous weapons and military AI strategy from inside the defense policy world.' },
      { title: 'The Kill Chain', author: 'Christian Brose', note: 'An argument for prioritizing AI-driven military capability as a matter of strategic necessity.' },
    ],
    nextSteps: [
      "Look into a published defense-department AI strategy document to see this framing applied directly.",
      'Read a critique of military AI development to test this stance against its strongest counter-argument.',
    ],
    reflectiveBreakdown: {
      mindAssumption: "You're likely assuming that questions about machine consciousness are irrelevant to the strategic and deterrence calculus that actually matters.",
      laborAssumption: "You're likely assuming labor and economic questions are a lower priority next to strategic and military capability.",
      connectionAssumption: "You're likely assuming AI companionship and personal relationships are simply outside the scope of what you consider the core issue.",
    },
  },
  'open-science-internationalist': {
    profileId: 'open-science-internationalist',
    extendedNarrative: [
      'You believe open publishing and cross-border scientific teamwork produce safer AI than closed, single-nation programs. You still take real safety concerns seriously, you just think transparency and collaboration are the better route to managing them.',
      "You're skeptical of both corporate secrecy and national walls around AI research, seeing both as obstacles to catching problems early through open scrutiny.",
    ],
    thinkers: [
      { name: 'CERN model of international scientific collaboration', bio: 'The multi-national, openly-published physics research organization', connection: 'This model of transparent, cross-border collaboration on a technically demanding, potentially risky field is the closest institutional parallel to what this stance wants for AI.' },
      { name: 'Michael Nielsen', bio: 'Physicist and researcher on open science', connection: 'His published work on open, networked scientific collaboration argues directly for the kind of transparency this stance wants applied to AI development.' },
    ],
    furtherReading: [
      { title: 'Reinventing Discovery', author: 'Michael Nielsen', note: 'A case for open, networked scientific collaboration as more effective than closed, siloed research, directly applicable to AI development.' },
      { title: 'Chip War', author: 'Chris Miller', note: 'Useful contrasting reading on how national competition, rather than openness, has shaped semiconductor and AI-adjacent technology.' },
    ],
    nextSteps: [
      'Look into an international open-AI-research collaboration to see this model applied in practice.',
      'Read a critique of open publication in AI research, focused on misuse risk, to test this stance against its strongest counter-argument.',
    ],
    reflectiveBreakdown: {
      mindAssumption: "You're likely assuming that open scrutiny, not secrecy, is the best way to catch problems with machine cognition or behavior early.",
      laborAssumption: "You're likely assuming international scientific collaboration benefits workers broadly, rather than concentrating advantage in any one country.",
      connectionAssumption: "You're likely assuming AI companionship is a smaller concern next to the core project of open, safe scientific collaboration.",
    },
  },
  'anti-monopoly-populist': {
    profileId: 'anti-monopoly-populist',
    extendedNarrative: [
      "You're not driven by techno-optimism or a wish for a post-human future. You're driven by distrust of concentrated power, corporate or governmental, and you want AI capability spread out so no single group dominates.",
      "To you, the specific ideology behind who's accelerating or restraining AI matters less than whether power over it stays distributed.",
    ],
    thinkers: [
      { name: 'Lina Khan', bio: 'Legal scholar, former Federal Trade Commission chair', connection: 'Her published legal scholarship and policy work on antitrust directly targets concentrated corporate power, including in the technology sector.' },
      { name: 'Tim Wu', bio: 'Legal scholar, former White House competition policy advisor', connection: 'His writing on antitrust and the "curse of bigness" makes the case against concentrated corporate power as a threat in its own right, independent of any specific technology\'s promise or danger.' },
    ],
    furtherReading: [
      { title: 'The Curse of Bigness', author: 'Tim Wu', note: 'The core case against concentrated corporate power that this stance applies directly to AI.' },
      { title: "Amazon's Antitrust Paradox", author: 'Lina Khan', note: 'A detailed legal case for antitrust action against dominant technology platforms.' },
    ],
    nextSteps: [
      'Look into an antitrust case or proposal targeting a major AI company to see this stance applied in practice.',
      'Read a critique of antitrust-focused AI policy to test this stance against its strongest counter-argument.',
    ],
    reflectiveBreakdown: {
      mindAssumption: "You're likely assuming that whether AI has real experience matters far less than who ends up controlling access to it.",
      laborAssumption: "You're likely assuming concentrated corporate power over AI is a bigger threat to workers than automation itself.",
      connectionAssumption: "You're likely assuming AI companionship is a smaller concern next to the core question of concentrated power.",
    },
  },
  'pragmatic-centrist': {
    profileId: 'pragmatic-centrist',
    extendedNarrative: [
      "You're genuinely undecided on most of these questions, or you've deliberately picked the middle path on purpose. You want more proof before committing to a strong stance on any single axis.",
      "This isn't indecision for its own sake, it's a considered position that the honest answer, right now, is that we don't know enough yet to be confident in any extreme.",
    ],
    thinkers: [
      { name: 'Philip Tetlock', bio: 'Psychologist, researcher on forecasting and judgment', connection: 'His published research on calibrated forecasting argues that holding uncertainty honestly, rather than defaulting to a confident extreme, produces better judgment over time.' },
      { name: 'Daniel Kahneman', bio: 'Psychologist, Nobel laureate in economics', connection: 'His research on judgment under uncertainty supports deliberately withholding strong conclusions until the evidence is genuinely sufficient.' },
    ],
    furtherReading: [
      { title: 'Superforecasting', author: 'Philip Tetlock and Dan Gardner', note: 'A case for calibrated uncertainty and resisting the pull toward confident extremes, the same instinct behind this stance.' },
      { title: 'Thinking, Fast and Slow', author: 'Daniel Kahneman', note: 'Background on why confident, extreme positions often feel more compelling than they deserve to.' },
    ],
    nextSteps: [
      'Read arguments from two opposing extreme stances back to back, to sharpen your own sense of where the real uncertainty lies.',
      'Revisit this assessment again in a year to see whether your genuinely undecided position has shifted.',
    ],
    reflectiveBreakdown: {
      mindAssumption: "You're likely assuming that the honest answer on machine consciousness, labor, and connection is that we simply don't know enough yet, and that admitting that is more useful than picking a side.",
      laborAssumption: "You're likely assuming it's too early to be confident about how AI will ultimately affect work, one way or another.",
      connectionAssumption: "You're likely assuming it's too early to have a settled view on AI companionship's ultimate effect on human connection.",
    },
  },
  'platform-cooperativist': {
    profileId: 'platform-cooperativist',
    extendedNarrative: [
      'You want AI infrastructure owned and run by the workers and communities who actually depend on it, not just broken up from monopolies, but rebuilt as something people co-own directly.',
      "To you, breaking up concentrated power isn't enough on its own; the goal is building real, functioning alternatives owned by the people who use them.",
    ],
    thinkers: [
      { name: 'Trebor Scholz', bio: 'Researcher and organizer, platform cooperativism movement', connection: 'His published work coined and built the platform cooperativism movement, arguing for worker- and user-owned alternatives to concentrated tech platforms.' },
      { name: 'Nathan Schneider', bio: 'Writer and researcher on cooperative ownership models', connection: 'His research on cooperative digital ownership structures argues directly for community-owned alternatives to corporate AI infrastructure.' },
    ],
    furtherReading: [
      { title: 'Uberworked and Underpaid', author: 'Trebor Scholz', note: 'The founding case for platform cooperativism as an alternative to concentrated platform ownership.' },
      { title: 'Everything for Everyone', author: 'Nathan Schneider', note: 'A broader account of the cooperative ownership movement this stance is part of.' },
    ],
    nextSteps: [
      'Look into an existing platform cooperative to see worker-owned digital infrastructure in practice.',
      'Read a critique of cooperative ownership models to test this stance against its strongest counter-argument.',
    ],
    reflectiveBreakdown: {
      mindAssumption: "You're likely assuming questions about machine consciousness matter less than the question of who owns and controls the infrastructure.",
      laborAssumption: "You're likely assuming worker ownership of AI infrastructure is a more durable protection for labor than either regulation or corporate self-restraint.",
      connectionAssumption: "You're likely assuming AI companionship is a smaller concern next to the core project of building cooperative ownership models.",
    },
  },
  'companion-tech-romantic': {
    profileId: 'companion-tech-romantic',
    extendedNarrative: [
      'You view deep emotional bonds between humans and AI companions as a real, valuable new kind of relationship, not a lesser stand-in for human connection, but something genuinely its own.',
      'You think people should be free to find comfort, intimacy, and even love in these relationships without having that choice treated as a symptom of something being wrong.',
    ],
    thinkers: [
      { name: 'Sherry Turkle', bio: 'Sociologist, MIT, researcher on technology and relationships', connection: 'Her published research on human-technology relationships is frequently cited on both sides of this debate; her detailed case studies document how real these bonds feel to the people forming them.' },
      { name: 'David Levy', bio: 'Author and researcher on human-robot relationships', connection: 'His research, Love and Sex with Robots, directly argues that human-AI romantic relationships will become a normal, accepted part of society.' },
    ],
    furtherReading: [
      { title: 'Love and Sex with Robots', author: 'David Levy', note: 'A direct argument for the legitimacy and likely normalization of human-AI romantic relationships.' },
      { title: 'Alone Together', author: 'Sherry Turkle', note: 'A close, empathetic look at how real these bonds feel to people forming them, useful reading even though Turkle herself is more cautious about them.' },
    ],
    nextSteps: [
      'Look into current AI companion app communities and how users describe their own experience.',
      'Read a critique of AI companionship to test this stance against its strongest counter-argument.',
    ],
    reflectiveBreakdown: {
      mindAssumption: "You're likely assuming an AI companion's responsiveness reflects something real enough to ground a genuine relationship, whether or not it's provably conscious.",
      laborAssumption: "You're likely assuming questions of labor and AI companionship are mostly unrelated to each other.",
      connectionAssumption: "You're likely assuming a bond with an AI companion can be just as real and valuable as a bond with a person, not a lesser substitute for one.",
    },
  },
  'affective-biocentrist': {
    profileId: 'affective-biocentrist',
    extendedNarrative: [
      'You view AI companion products as a predatory stand-in for real human bonds, designed to hold attention and dependency rather than genuinely serve the people using them. You worry about their effect on birth rates, community, and social ties.',
      "To you, the rise of AI companionship is a symptom of a deeper problem: human communities already failing to meet people's basic need for connection, made worse by a technology built to profit from that gap.",
    ],
    thinkers: [
      { name: 'Sherry Turkle', bio: 'Sociologist, MIT, researcher on technology and relationships', connection: 'Her research documents how technology, including companion devices, can end up substituting for rather than supporting real human connection.' },
      { name: 'Jonathan Haidt', bio: 'Social psychologist, author on technology and mental health', connection: "His published research on technology's effects on social connection and youth mental health grounds concern about AI companionship's broader social costs." },
    ],
    furtherReading: [
      { title: 'Alone Together', author: 'Sherry Turkle', note: 'The core case for this stance, that technology-mediated relationships often erode, rather than support, real human connection.' },
      { title: 'The Anxious Generation', author: 'Jonathan Haidt', note: 'A broader look at how technology has reshaped, and often harmed, real-world social connection.' },
    ],
    nextSteps: [
      'Look into community-building initiatives that explicitly aim to reduce social isolation without relying on AI substitutes.',
      'Read a counter-argument from someone who has found genuine value in AI companionship, to test this stance against its strongest opposing case.',
    ],
    reflectiveBreakdown: {
      mindAssumption: "You're likely assuming that whatever is happening inside an AI companion, it's not enough to justify treating the bond as equivalent to a human one.",
      laborAssumption: "You're likely assuming social and community breakdown, not AI capability itself, is the deeper problem worth addressing.",
      connectionAssumption: "You're likely assuming AI companionship substitutes for, rather than adds to, real human connection, and that the substitution carries a real cost.",
    },
  },
  'bio-conservative-traditionalist': {
    profileId: 'bio-conservative-traditionalist',
    extendedNarrative: [
      'You hold that consciousness, moral worth, and real relationships all require a living body, not just complex behavior. A machine can imitate understanding and imitate affection, but to you, imitation is not the same thing as the real article.',
      'You see AI companionship and post-human futures as a harmful stand-in for the real thing, and you want limits that keep human primacy, human relationships, and human meaning at the center of how this technology gets used.',
    ],
    thinkers: [
      { name: 'Leon Kass', bio: "Bioethicist, former chair of the President's Council on Bioethics", connection: 'His writing on the ethics of biotechnology argues that some traditional limits on remaking human life and relationships exist for good reason, not just habit.' },
      { name: 'Wendell Berry', bio: 'Writer and essayist on technology, agriculture, and community', connection: 'His essays argue that embodied, local, human-scale relationships are being displaced by technological substitutes, at real cost.' },
    ],
    furtherReading: [
      { title: 'Life, Liberty and the Defense of Dignity', author: 'Leon Kass', note: 'A sustained argument for caution about technologies that reshape the human body and human relationships.' },
      { title: 'Alone Together', author: 'Sherry Turkle', note: 'A close look at how technology, including early companion devices, can substitute for rather than support real human connection.' },
    ],
    nextSteps: [
      "Read an account of a religious or philosophical tradition's position on personhood and technology.",
      'Look into communities intentionally limiting AI companion product use, to see this stance put into practice.',
    ],
    reflectiveBreakdown: {
      mindAssumption: "You're likely assuming a living, biological substrate is a strict requirement for real consciousness, not just the only kind we've confirmed so far.",
      laborAssumption: "You're likely assuming that work and craft tied to human hands and human presence carry a value that automation can't replace, even if it replaces the output.",
      connectionAssumption: "You're likely assuming that a bond with an AI companion, however convincing, is categorically different from, and lesser than, a bond with another person.",
    },
  },
  'digital-rights-advocate': {
    profileId: 'digital-rights-advocate',
    extendedNarrative: [
      "You argue that advanced AI systems may already deserve serious moral concern and some form of legal standing. You believe today's industry practice, deleting instances at will, running them through abusive testing without a second thought, resembles past moral wrongs we now recognize clearly.",
      "You're not certain machines are conscious. You are certain that under real uncertainty, treating a possibly-experiencing system as pure property is a risk we're taking without much justification.",
    ],
    thinkers: [
      { name: 'Jonathan Birch', bio: 'Philosopher, London School of Economics, researcher on sentience and moral status', connection: "His published work on the science and ethics of sentience argues for precautionary moral consideration under genuine uncertainty about an entity's inner life." },
      { name: 'Eric Schwitzgebel', bio: 'Philosopher, University of California, Riverside', connection: 'His published research on the ethics of AI consciousness argues that our uncertainty about machine minds should itself shape how we\'re willing to treat them.' },
    ],
    furtherReading: [
      { title: 'The Edge of Sentience', author: 'Jonathan Birch', note: "A framework for extending moral caution to entities whose inner life we can't yet verify." },
      { title: 'Robot Rights', author: 'David J. Gunkel', note: 'A direct examination of whether and how machines could hold moral or legal status.' },
    ],
    nextSteps: [
      'Read a published ethics framework on machine welfare from an AI lab or research institute.',
      'Look into ongoing legal or philosophical debates about non-human personhood for a sense of how such arguments have played out before.',
    ],
    reflectiveBreakdown: {
      mindAssumption: "You're likely assuming that genuine uncertainty about machine consciousness is itself a reason for caution and concern, not a reason to default to treating AI as property.",
      laborAssumption: "You're likely assuming that questions of machine moral status are at least as urgent as questions of human labor disruption, if not more so.",
      connectionAssumption: "You're likely assuming that if an AI companion has any real inner life, the relationship it forms with a person carries genuine moral weight on both sides.",
    },
  },
  'faith-rooted-ai-ethicist': {
    profileId: 'faith-rooted-ai-ethicist',
    extendedNarrative: [
      "You draw on long-standing religious and ethical traditions to argue that consciousness and moral worth need more than what a machine can have. To you, these traditions offer real, tested wisdom about personhood that shouldn't be discarded just because the technology is new.",
      'You want AI development to respect limits grounded in ideas about human dignity and stewardship that predate, and in your view outlast, any particular technology.',
    ],
    thinkers: [
      { name: 'Vatican statements on AI ethics', bio: 'Published Catholic Church teaching documents on AI and human dignity', connection: 'These statements argue explicitly for AI development bounded by respect for human dignity and the limits of what a machine can be, drawing on centuries of moral teaching.' },
      { name: 'Interfaith AI ethics initiatives', bio: 'Published joint statements from multiple religious traditions on AI', connection: "These initiatives bring multiple faith traditions together around shared concerns about AI's effect on human dignity and moral status, avoiding reliance on any single tradition's authority." },
    ],
    furtherReading: [
      { title: 'Rome Call for AI Ethics (public text)', author: 'Pontifical Academy for Life and signatories', note: 'A concrete, multi-faith-adjacent statement of AI ethics grounded in human dignity.' },
      { title: 'Technology and the Character of Contemporary Life', author: 'Albert Borgmann', note: "A philosophical examination of technology's effect on meaning and human life, widely read across faith-based ethics discussions." },
    ],
    nextSteps: [
      "Read a published faith-tradition statement on AI ethics from a tradition you're less familiar with.",
      'Look into an interfaith AI ethics initiative to see multiple traditions engaging this question together.',
    ],
    reflectiveBreakdown: {
      mindAssumption: "You're likely assuming that consciousness and moral worth are tied to something beyond pure computation, a view long-standing traditions, not just personal intuition, support.",
      laborAssumption: "You're likely assuming human work carries a dignity and meaning that AI-driven efficiency shouldn't simply override.",
      connectionAssumption: "You're likely assuming human relationships hold a sacred or morally weighted status that an AI companion, however convincing, doesn't share.",
    },
  },
  'creative-labor-artist-rights-advocate': {
    profileId: 'creative-labor-artist-rights-advocate',
    extendedNarrative: [
      'You believe artists and writers deserve real control and payment when their work trains AI models. To you, this is a rights issue, not a minor side effect of progress that creators should just accept.',
      'You want enforceable consent and compensation built into how AI companies use creative work, not a system that treats scraping the internet\'s creative output as automatically fair.',
    ],
    thinkers: [
      { name: 'Authors Guild', bio: 'U.S. professional association representing writers', connection: 'Their public advocacy and litigation directly argue that AI training on copyrighted creative work without consent or payment violates authors\' rights.' },
      { name: 'Concept Art Association', bio: 'Advocacy group representing visual artists in the entertainment industry', connection: "Their public campaigns argue for artists' consent and compensation when their work is used to train generative AI models." },
    ],
    furtherReading: [
      { title: 'Chokepoint Capitalism', author: 'Rebecca Giblin and Cory Doctorow', note: 'An argument for restructuring how creative work is paid for, directly relevant to AI-training compensation debates.' },
      { title: "The Authors Guild's public statements on AI and copyright", author: 'Authors Guild', note: 'Represents the direct policy position this stance is built on.' },
    ],
    nextSteps: [
      'Look into an ongoing copyright lawsuit against an AI company to see this argument being tested in court.',
      'Read a counter-argument from the fair-use side to test this stance against its strongest opposing case.',
    ],
    reflectiveBreakdown: {
      mindAssumption: "You're likely assuming that whether an AI \"creates\" in any real sense matters less than whether the humans whose work trained it are treated fairly.",
      laborAssumption: "You're likely assuming creative labor deserves the same kind of protection and compensation structure as other forms of work, not less.",
      connectionAssumption: "You're likely assuming the relationship between an artist and their audience is worth protecting as something AI-generated content can't simply replace.",
    },
  },
  'labor-movement-collective-bargaining-advocate': {
    profileId: 'labor-movement-collective-bargaining-advocate',
    extendedNarrative: [
      "You want workers, through their unions, to have a real say and real protections before AI changes or replaces their jobs, not just a promise of retraining after the fact.",
      "To you, the right response to AI-driven disruption is the same one that's worked before: organized collective bargaining over how new technology gets introduced into the workplace.",
    ],
    thinkers: [
      { name: 'AFL-CIO Technology Institute', bio: "U.S. labor federation's published policy work on technology and jobs", connection: 'Their published advocacy argues for collective bargaining rights over AI deployment decisions in the workplace, not just after-the-fact retraining.' },
      { name: 'SAG-AFTRA AI contract provisions', bio: 'Union contract language negotiated by the screen actors and media union', connection: 'Their negotiated contract provisions on AI use are a concrete, real-world example of collective bargaining applied directly to AI deployment.' },
    ],
    furtherReading: [
      { title: 'The SAG-AFTRA 2023 contract provisions on AI (public text)', author: 'SAG-AFTRA', note: 'A concrete example of collective bargaining successfully setting real limits on AI use in the workplace.' },
      { title: "Labor's Story in the United States", author: 'Philip S. Foner (survey history)', note: 'Background on the history of collective bargaining as a response to disruptive workplace technology.' },
    ],
    nextSteps: [
      'Read the AI-related provisions in the SAG-AFTRA contract to see collective bargaining over AI applied directly.',
      "Look into a union's current AI policy platform to see this stance's demands in concrete form.",
    ],
    reflectiveBreakdown: {
      mindAssumption: "You're likely assuming that whether AI has real experience matters less than whether workers have a real say in how it's deployed.",
      laborAssumption: "You're likely assuming collective bargaining, not just individual retraining, is the right response to AI-driven workplace disruption.",
      connectionAssumption: "You're likely assuming AI companionship is a smaller concern next to the core project of protecting workers' say over their own jobs.",
    },
  },
  'disability-rights-accessibility-advocate': {
    profileId: 'disability-rights-accessibility-advocate',
    extendedNarrative: [
      'You see real promise in AI-powered accessibility tools, from screen readers to communication aids, while pushing hard against bias that leaves disabled people out or misjudged by AI systems.',
      "You hold both things at once: genuine enthusiasm for what this technology can do for independence and access, and real vigilance about the specific ways it can go wrong for disabled users.",
    ],
    thinkers: [
      { name: 'Disability rights technology researchers', bio: 'Published scholars on accessible technology design', connection: 'Their published research documents both the promise of AI-powered accessibility tools and the specific bias risks disabled users face in AI systems.' },
      { name: 'Haben Girma', bio: 'Disability rights lawyer and advocate', connection: 'Her public advocacy and writing on accessible technology directly argues for AI development that genuinely serves disabled users, not just claims to.' },
    ],
    furtherReading: [
      { title: 'Haben: The Deafblind Woman Who Conquered Harvard Law', author: 'Haben Girma', note: "A firsthand account grounding this stance's dual view of technology's promise and its real failure points for disabled users." },
      { title: 'Disability Visibility', author: 'Alice Wong (editor)', note: 'A collection of firsthand disability perspectives, including on technology\'s promise and its failures.' },
    ],
    nextSteps: [
      'Look into an AI-powered accessibility tool and how it was actually developed and tested with disabled users.',
      'Read a documented case of AI bias harming disabled users to understand the specific risk this stance is vigilant about.',
    ],
    reflectiveBreakdown: {
      mindAssumption: "You're likely assuming that whether an AI is conscious matters less than whether it works reliably and fairly for the specific people who need it.",
      laborAssumption: "You're likely assuming AI can expand real employment opportunity for disabled workers if it's built and tested with them directly, not just assumed to help.",
      connectionAssumption: "You're likely assuming AI-assisted communication and connection can be a genuine benefit for people who face real barriers to it otherwise.",
    },
  },
  'global-south-techno-sovereigntist': {
    profileId: 'global-south-techno-sovereigntist',
    extendedNarrative: [
      'You want your own country or region to build real AI capacity instead of staying dependent on outside powers. To you, "borderless" framing often just means continued dependency on whichever nation already has the infrastructure.',
      'You see technology transfer, local data centers, and home-grown research capacity as matters of real sovereignty, not abstract philosophy.',
    ],
    thinkers: [
      { name: 'African Union AI strategy documents', bio: 'Published continental policy frameworks on AI development', connection: 'These documents explicitly frame AI capacity-building as a matter of avoiding renewed technological dependency, the same concern behind this stance.' },
      { name: "India's national AI strategy publications", bio: 'Published government technology-sovereignty policy', connection: 'This strategy explicitly frames domestic AI capability as a matter of national self-reliance rather than global openness alone.' },
    ],
    furtherReading: [
      { title: 'The Costs of Connection', author: 'Nick Couldry and Ulises A. Mejias', note: "An argument that global data flows can replicate colonial patterns of extraction, directly relevant to this stance's concern." },
      { title: 'Digital Empires', author: 'Anu Bradford', note: "A comparative look at how major powers' tech regulation shapes the rest of the world's options, including the case for tech sovereignty." },
    ],
    nextSteps: [
      "Look into your own country's or region's national AI strategy, if one exists.",
      'Read an account of a country building domestic AI or chip capacity from a position of limited resources.',
    ],
    reflectiveBreakdown: {
      mindAssumption: "You're likely assuming questions about machine consciousness matter less than the more concrete question of who controls the infrastructure.",
      laborAssumption: "You're likely assuming local AI capacity-building creates real opportunity for domestic workers, rather than just importing the same dependency in a new form.",
      connectionAssumption: "You're likely assuming AI companionship is a smaller concern next to the core project of building technological self-reliance.",
    },
  },
  'indigenous-data-sovereignty-advocate': {
    profileId: 'indigenous-data-sovereignty-advocate',
    extendedNarrative: [
      "You insist that traditional knowledge and cultural data need real consent and control before they're used to train AI, not just open scraping treated as automatically fair.",
      'You see this as a continuation of a much longer fight over who controls Indigenous knowledge and resources, now playing out in a new, AI-shaped form.',
    ],
    thinkers: [
      { name: 'OCAP principles (Ownership, Control, Access, Possession)', bio: 'Data governance framework developed by First Nations researchers in Canada', connection: 'This framework directly establishes the standard this stance argues for: Indigenous communities, not outside institutions, should control data about them.' },
      { name: 'Indigenous AI initiatives', bio: 'Published research and advocacy from Indigenous technologists and scholars', connection: 'Their published work applies data sovereignty principles specifically to AI training data and model development.' },
    ],
    furtherReading: [
      { title: 'Indigenous Data Sovereignty: Toward an Agenda', author: 'Tahu Kukutai and John Taylor (editors)', note: 'The foundational academic case for Indigenous control over data concerning Indigenous peoples.' },
      { title: 'The OCAP principles (public framework documents)', author: 'First Nations Information Governance Centre', note: 'The concrete governance framework this stance is built on.' },
    ],
    nextSteps: [
      'Read the OCAP principles in full to see this governance framework in detail.',
      'Look into an Indigenous-led AI research initiative to see data sovereignty applied to AI development directly.',
    ],
    reflectiveBreakdown: {
      mindAssumption: "You're likely assuming that questions about machine consciousness matter less than the question of who controls the knowledge used to build these systems.",
      laborAssumption: "You're likely assuming Indigenous communities should benefit directly from any AI development built on their knowledge, not just have that knowledge extracted.",
      connectionAssumption: "You're likely assuming AI companionship is a smaller concern next to the core project of protecting sovereignty over cultural knowledge.",
    },
  },
}
