// SDR Playbook Visuals — on-site companion posts for the infographics.
// Each entry renders both a gallery card on /resources and a full page at /resources/<slug>.
// Voice + rules per CLAUDE.md: confident operator plus supportive coach, 8+ years (never "10+"),
// no em dashes, positive and practical. Infographics live in /assets/resources/<slug>.webp.
// `substackUrl` stays empty until the matching post is published on Substack; when set, the page
// and card surface an "Also on Substack" link.

export const visuals = [
  {
    slug: 'multi-channel-outreach',
    title: 'The Email-and-LinkedIn Rhythm That Earns Replies',
    dek: 'One channel rarely books a meeting on its own. Here is how I layer email and LinkedIn across two days so you show up as a person, not a pitch.',
    tag: 'Outreach',
    readMins: 3,
    img: '/assets/resources/multi-channel-outreach.webp',
    alt: 'Infographic of a two-day multi-channel outreach flow combining email on day one and LinkedIn on day two, with tips by seniority.',
    substackUrl: '',
    intro: 'Most reps treat email and LinkedIn as two separate jobs. The reps who book meetings treat them as one motion, spread across a couple of days, so the prospect sees the same human on both channels instead of two cold strangers.',
    sections: [
      {
        h: 'Day one is email',
        body: ['Lead with a clear, structured note. A real subject line, one line on why you are reaching out, one sentence on the pain you solve, and one proof point. Then leave the door open instead of hard closing. The job of the first email is to earn permission to continue, not a yes.'],
        list: [
          'Establish contact with a structured message.',
          'Keep it professional: subject line, intro, soft CTA.',
          'Address one real pain point, made relevant to them.',
          'Include one line of credibility: a win or a result.',
          'Leave room to connect rather than pitching.',
        ],
      },
      {
        h: 'Day two is LinkedIn',
        body: ['Now make yourself familiar. Look them up, react to something they posted, then send a short, human note that references the email lightly. No pitch. You are building recognition so your name is not cold the next time it lands in their inbox.'],
        list: [
          'Look them up and view the profile.',
          'Interact: like or comment meaningfully.',
          'Nudge gently with a non-salesy DM, human first.',
          'Keep it light and follow up on the email without selling.',
          'Show up on their feed so familiarity builds.',
        ],
      },
      {
        h: 'Match the channel to the seniority',
        body: ['Senior buyers tend to reply better to a well-written email. Mid-level contacts often move faster in the DMs. When you are not sure, run both and let the prospect pick the channel they are comfortable in. The best results come from mixing the two and showing up intentionally.'],
      },
    ],
    takeaways: [
      'Treat email and LinkedIn as one sequence, not two.',
      'Email first to establish contact, LinkedIn next to build familiarity.',
      'Senior roles lean email, mid-level roles lean DMs.',
      'Never open LinkedIn with a pitch. Earn the reply first.',
    ],
  },

  {
    slug: 'cold-calling-breakdown',
    title: 'The Cold Call in Six Moves, and How to Handle the No',
    dek: 'A cold call is not a script you rush through. It is six small moves that earn you the next thirty seconds, every time.',
    tag: 'Cold Calling',
    readMins: 4,
    img: '/assets/resources/cold-calling-breakdown.webp',
    alt: 'Infographic of a six-step cold call structure and a three-step method for handling a no, with an example script.',
    substackUrl: '',
    intro: 'The fear in cold calling usually comes from not knowing what comes next. Break the call into six moves and you always know your next step, even when the prospect pushes back.',
    sections: [
      {
        h: 'The six moves',
        body: ['Each move is small and each one buys the next. You are not trying to close on the call, you are trying to earn fifteen minutes.'],
        list: [
          'Quick context: state why you are reaching out in one line.',
          'Problem priority: name a challenge teams like theirs face.',
          'Insight hook: drop one short, relevant insight from their world.',
          'Bridge question: ask a low-pressure, curious question.',
          'Optional insight trap: go a little deeper, only if they are engaged.',
          'Clear close: offer a simple yes or no on a time.',
        ],
      },
      {
        h: 'When they say no or not relevant',
        body: ['A no early in the call is rarely a real no. It is a reflex. Acknowledge it, reframe with one insight, then offer a soft escape hatch so the door stays open.'],
        list: [
          'Acknowledge and empathise: "Totally hear you, sounds like this is not a priority right now."',
          'Reframe with insight: "We are seeing this more as teams scale, sharing in case it helps later."',
          'Offer a soft escape hatch: "Happy to send something quick if it is useful down the line."',
        ],
      },
      {
        h: 'Why this works',
        body: ['Lower the stakes and the conversation opens up. You are not asking them to buy, you are asking for a short, specific next step. The six moves give you somewhere to go when the call wobbles, which is exactly when most reps freeze.'],
      },
    ],
    takeaways: [
      'Run the call as six moves, not one monologue.',
      'Lead with a problem and an insight before any ask.',
      'Treat an early no as a reflex, not a verdict.',
      'Always leave a soft escape hatch so the door stays open.',
    ],
  },

  {
    slug: 'regional-nuances-selling',
    title: 'Selling as an SDR: NAMER and EMEA vs APAC',
    dek: 'The same outbound playbook can win in Chicago and stall in Jakarta. Here is how buyers think differently across regions, and how to sell to each.',
    tag: 'Global Selling',
    readMins: 4,
    img: '/assets/resources/regional-nuances-selling.webp',
    alt: 'Infographic comparing how SDRs sell in NAMER and EMEA versus APAC, with buyer mindsets and tactics for each region.',
    substackUrl: '',
    intro: 'A lot of reps run one playbook everywhere and wonder why response rates fall off a cliff in some markets. The motion is not broken. It is being applied to a buyer who decides differently.',
    sections: [
      {
        h: 'NAMER and EMEA: speed and proof',
        body: ['Western buyers tend to reward speed and clarity. A tight email, a fast call after they open it, numbers over emotion, and a recognised framework early.'],
        list: [
          'Speed over story, and a clear yes or clear no.',
          'Email converts, so lead with a three line structure.',
          'Call within a few hours of an open.',
          'Lead with ROI and numbers, not emotion.',
          'Use frameworks early: BANT, SPICED, MEDDIC.',
          'Follow up every three to four days, not every day.',
        ],
      },
      {
        h: 'APAC: relationship and patience',
        body: ['APAC buyers tend to reward trust and familiarity first. Build context before you pitch, use more than one channel, and read an indirect reply for what it is.'],
        list: [
          'Relationship before pitch, and credibility first.',
          'Build context before you ever pitch.',
          'Multi-channel nurturing wins, since APAC responds to familiarity.',
          'WhatsApp follow-ups often beat email.',
          'Avoid direct closing questions.',
          'Assume "maybe later" means no, and nurture the longer cycle.',
        ],
      },
      {
        h: 'The real lesson',
        body: ['Region is not an excuse for a slower number. It is information. Match your pace and your channel to how the buyer in front of you actually decides, and the same effort converts far better.'],
      },
    ],
    takeaways: [
      'One playbook does not travel. Match it to the buyer.',
      'NAMER and EMEA reward speed, proof, and frameworks.',
      'APAC rewards trust, patience, and multi-channel familiarity.',
      'Read indirect replies honestly. "Maybe later" is usually a no.',
    ],
  },

  {
    slug: 'ae-sdr-alignment',
    title: 'AE and SDR Alignment: Pass Signal, Not Noise',
    dek: 'A booked meeting is not a good handoff. The handoff works only when the AE does not have to rediscover the problem.',
    tag: 'Handoff',
    readMins: 3,
    img: '/assets/resources/ae-sdr-alignment.webp',
    alt: 'Infographic contrasting the noise SDRs usually pass to AEs with the signal AEs actually need for a clean handoff.',
    substackUrl: '',
    intro: 'The fastest way to lose a meeting you worked hard to book is a thin handoff. If the AE walks in and has to start discovery from zero, the prospect feels it, and your show-to-opportunity rate pays for it.',
    sections: [
      {
        h: 'What is noise',
        body: ['This is what reps usually pass, and it tells the AE almost nothing they could not have found on their own.'],
        list: [
          'Company name and job title.',
          'The fact that a meeting was booked.',
          'A guessed deal size.',
          '"Interested in a demo."',
          'Generic pain like "wants to scale."',
        ],
      },
      {
        h: 'What is signal',
        body: ['This is what the AE actually needs to walk in warm. If the AE has to rediscover the problem, the handoff failed.'],
        list: [
          'Why this conversation is happening now.',
          'The exact problem in the prospect\'s own words.',
          'What they have already tried, and why it failed.',
          'The internal urgency or deadline.',
          'Who else is involved in the decision.',
          'What they expect from the call.',
        ],
      },
      {
        h: 'Why it pays off',
        body: ['When the AE opens with the prospect\'s own context, trust forms faster, the call stays on the real problem, and both show rates and conversion climb. A good handoff is the cheapest pipeline you will ever create.'],
      },
    ],
    takeaways: [
      'A booked meeting is the start of the handoff, not the end.',
      'If the AE has to rediscover the problem, the handoff failed.',
      'Pass why-now, the problem in their words, and the buying group.',
      'Better handoffs lift show rates, trust, and conversion.',
    ],
  },

  {
    slug: 'sdr-feedback-loop',
    title: 'The Weekly Feedback Loop That Compounds SDR Performance',
    dek: 'Most 1:1s review opinions. The ones that move numbers review the actual work, change one thing, and check if it stuck.',
    tag: 'Coaching',
    readMins: 3,
    img: '/assets/resources/sdr-feedback-loop.webp',
    alt: 'Infographic of a weekly SDR feedback loop: come prepared, review real work, pick one thing, apply it, check the numbers, and repeat.',
    substackUrl: '',
    intro: 'Improvement does not come from a quarterly reset. It comes from a small, honest loop you run every week, where you look at real calls and real emails, pick one thing to change, and watch whether the metric moves.',
    sections: [
      {
        h: 'Come prepared',
        body: ['Bring the calls you want reviewed and the emails you are unsure about. Look at your own numbers before the 1:1. The loop works when you arrive with the raw material, not a summary of how you felt it went.'],
      },
      {
        h: 'Review the work, not opinions',
        body: ['Listen to real calls. Read real emails. Talk about what actually happened, then follow the funnel so you know exactly where it breaks.'],
        list: [
          'Call to connect.',
          'Connect to conversation.',
          'Conversation to meeting booked.',
          'Meeting booked to meeting completed.',
          'Meeting completed to opportunity created.',
        ],
      },
      {
        h: 'Pick one thing, apply it this week',
        body: ['Choose one behaviour to change, one thing to try, one metric to watch. Use it on live calls this week, not next month. Then check: did the metric move, did the behaviour stick. Keep it or change it, and repeat. The gains compound.'],
      },
    ],
    takeaways: [
      'Review the work, not opinions or feelings.',
      'Follow the funnel to find exactly where it leaks.',
      'Change one thing at a time so you can read the result.',
      'Apply it the same week. Small weekly gains compound.',
    ],
  },

  {
    slug: 'sdr-metrics-funnel',
    title: 'The Inbound SDR Funnel: Where Meetings Are Won or Lost',
    dek: 'Inbound is not "ready to buy". Every inbound result traces back to how well you qualified at the top.',
    tag: 'Metrics',
    readMins: 4,
    img: '/assets/resources/sdr-metrics-funnel.webp',
    alt: 'Infographic of the inbound SDR funnel from lead qualification through discovery to meetings and handover, with pro tips.',
    substackUrl: '',
    intro: 'Inbound leads feel easy, and that is exactly the trap. A hand raise is not a buying decision. Everything downstream, the meetings held and the handoffs that stick, traces back to how well you qualified the lead in the first place.',
    sections: [
      {
        h: 'Start with qualification',
        body: ['Read the intent signal, check the buyer-persona match, and score the lead against your fit criteria before anything else. Respond fast, ideally within two hours, but never let speed replace qualification.'],
        list: [
          'Lead intent signal and urgency score.',
          'Buyer-persona match and lead-fit criteria.',
          'First-touch response time.',
          'Identify the buying triggers.',
        ],
      },
      {
        h: 'Run real discovery',
        body: ['Inbound does not mean ready. Ask discovery questions, position value, handle objections, and personalise the message. A qualification framework keeps you honest.'],
        list: [
          'Ask discovery questions and position value.',
          'Handle objections in the moment.',
          'Personalise the message and the confirmation.',
          'Use a framework: BANT, MEDDIC, or SPICED.',
        ],
      },
      {
        h: 'Protect the funnel',
        body: ['Confirm the meeting, keep your CRM clean, and recap pain, priority, and timeline at handover. And do not be afraid to disqualify. An inbound lead with no fit, readiness, or intent belongs out of the funnel, so the pipeline you do carry is real.'],
      },
    ],
    takeaways: [
      'Inbound is not ready to buy. Qualify before you celebrate.',
      'Respond within two hours, but never skip discovery.',
      'Use a framework and keep the CRM clean to avoid leaks.',
      'Disqualify freely. Clean pipeline beats big pipeline.',
    ],
  },

  {
    slug: 'sdr-top-kpis',
    title: 'The KPIs That Actually Tell You an SDR Is Winning',
    dek: 'Activity counts are easy to hit and easy to fake. These are the numbers that tell you pipeline is really being built.',
    tag: 'Metrics',
    readMins: 3,
    img: '/assets/resources/sdr-top-kpis.webp',
    alt: 'Infographic listing the top KPIs of an SDR, including opportunities sourced, meetings completed, and meeting-to-opportunity ratio.',
    substackUrl: '',
    intro: 'It is easy to look busy as an SDR. The metrics that matter are the ones that tie effort to pipeline, not the ones that just prove you were online. Here are the few I watch.',
    sections: [
      {
        h: 'The KPIs that matter',
        body: ['Manage to these and the activity numbers tend to take care of themselves.'],
        list: [
          'Opportunities sourced: the truest output of the role.',
          'Meetings completed, not just meetings booked.',
          'Meeting-to-opportunity ratio: the quality of what you set.',
          'Calls-to-meeting ratio: the efficiency of your dials.',
          'Valid conversations per day: real talk time, not dials.',
          'Actively worked leads as a percentage of your list.',
        ],
      },
      {
        h: 'Why these and not activity',
        body: ['Dials and emails sent tell you someone is working. Opportunities sourced and meeting-to-opportunity ratio tell you the work is landing. Lead with the second list in your 1:1s and the first one stops being the conversation.'],
      },
    ],
    takeaways: [
      'Measure output, not just activity.',
      'Meetings completed and opportunities sourced are the real scoreboard.',
      'Ratios expose quality: meeting-to-opp and calls-to-meeting.',
      'Valid conversations per day beats raw dial counts.',
    ],
  },

  {
    slug: 'sdr-winning-habits',
    title: 'Five Habits of SDRs Who Keep Hitting Quota',
    dek: 'Tools and scripts change. The habits behind a consistent SDR do not. These five show up in almost every rep I have seen go the distance.',
    tag: 'Mindset',
    readMins: 3,
    img: '/assets/resources/sdr-winning-habits.webp',
    alt: 'Infographic of five winning habits of an SDR: relentless curiosity, resilience, obsession with metrics, passion for the role, and always improving.',
    substackUrl: '',
    intro: 'After building and coaching BDR teams for 8+ years, I can tell you the reps who last are rarely the ones with the slickest script. They share a handful of habits that keep them steady when the month gets hard.',
    sections: [
      {
        h: 'The five habits',
        body: ['None of these need talent you were born with. Every one of them is a choice you can make on a Monday.'],
        list: [
          'Relentless curiosity: they keep asking why a buyer behaves the way they do.',
          'Resilience: a no does not set the tone for the next call.',
          'Obsessed with metrics: they know their numbers before anyone asks.',
          'Passion for the role: they treat SDR as a craft, not a waiting room.',
          'Always improving: they change one thing every week.',
        ],
      },
      {
        h: 'Why habits beat tactics',
        body: ['Tactics get you a good week. Habits get you a good year. When the tooling shifts, and in an AI-shaped sales world it will, the rep with these habits adapts. The one leaning on a single script does not.'],
      },
    ],
    takeaways: [
      'Curiosity, resilience, metrics, passion, and constant improvement.',
      'Habits carry you through the months that tactics cannot.',
      'Know your numbers before anyone asks for them.',
      'A no is information for the next call, not a mood.',
    ],
  },
];

export function getVisual(slug) {
  return visuals.find((v) => v.slug === slug);
}
