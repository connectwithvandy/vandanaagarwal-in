// Content for the portfolio pages: home, /experience and /built. Coaching lives on /coaching.
// Every fact comes from Vandy's resume, project notes or live sites. Never round up.

export const EMAIL = 'connectwithvandanaa@gmail.com';
export const CV = '/Vandana-Agarwal-Nik-CV.pdf';

export const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/meet-vandana/' },
  { label: 'X', href: 'https://x.com/vandism_ag' },
  { label: 'Substack', href: 'https://coachingbyvandy.substack.com' },
  { label: 'Topmate', href: 'https://topmate.io/vandana_agarwal' },
  { label: 'GitHub', href: 'https://github.com/connectwithvandy' },
  { label: 'Ted on Instagram', href: 'https://www.instagram.com/heyted.in/' },
  { label: 'SDR Leaders of APAC', href: 'https://www.linkedin.com/company/sdr-leaders-of-apac/' },
];

export const proof = [
  { big: '143%', small: 'peak quarter, Rubrik SDR team' },
  { big: '$5.6M', small: 'pipeline in one quarter' },
  { big: '17% to 49%', small: 'meeting to opportunity, JumpCloud' },
];

export const whatIDo = [
  {
    head: 'I build SDR teams',
    body: 'From the first hire to a team that beats target. I have done it from nothing three times, across APAC, EMEA and the US.',
    proof: 'Rubrik: 143%, 120% and 105% of target, three quarters in a row.',
  },
  {
    head: 'I fix the funnel',
    body: 'Where meetings leak, why good leads go cold, what the handoff to AEs is missing. I find it, then change how the team works.',
    proof: 'JumpCloud: meeting to opportunity from 17% to 49% in one quarter.',
  },
  {
    head: 'I build the tools',
    body: 'AI agents that research leads, write the first email and score conversations. Built with Claude, used by my own team.',
    proof: '7 projects, 3 of them used at work.',
  },
];

export const highlights = ['Inbound Intel', 'Debrief', 'Ted'];

export const about = {
  paras: [
    'I am Vandy, based in Bengaluru. Commerce degree, an MBA in sales and marketing, then straight into an SDR seat in 2019.',
    'I love meeting people, which is why I co-founded SDR Leaders of APAC. I travel every few months, never skip the gym, and I am a proper Bollywood fanatic.',
  ],
  chips: [
    { big: '100 Powerful Women in Sales', small: 'Demandbase and Women in Sales, 2025' },
    { big: 'GrowthX Fellow', small: 'GTM and product growth' },
    { big: 'SDR Leaders of APAC', small: 'Co-founded, Aug 2025' },
  ],
};

export const services = [
  {
    head: 'Founding or Full Cycle AE',
    body: 'I have spent 8 years deciding which deals deserve an AE\u2019s time. Now I want to close them.',
    proof: [
      'Ran the full sales cycle at Udaan, on a \u20b912 Cr credit book.',
      'Promoted from SDR to Enterprise AE at Xoxoday in 6 months.',
      'Got 100 people to try Ted with zero ad spend.',
    ],
    subject: 'An AE role',
  },
  {
    head: 'First GTM Hire at an AI Startup',
    body: 'Build the pipeline, build the tools that run it, and sell. I have done the first two from nothing, more than once.',
    proof: [
      'Built SDR teams from scratch at ClickPost, Branch and Rubrik.',
      'Built AI research and outreach tools my own team used.',
    ],
    subject: 'Our first GTM hire',
  },
  {
    head: 'Head of Sales Development',
    body: 'Hire, coach and run a multi region SDR team that beats target and hands AEs meetings they want.',
    proof: [
      'Rubrik: 143%, 120% and 105% of target, three quarters in a row.',
      'JumpCloud: meeting to opportunity from 17% to 49%.',
    ],
    subject: 'Leading our SDR team',
  },
  {
    head: 'GTM Engineer',
    body: 'I know what a sales team needs because I ran one. I build it with Claude, Clay and Exa.',
    proof: [
      'Debrief, built solo in a day at the GrowthX GTM Buildathon.',
      'Clay GTM Engineers cohort.',
    ],
    subject: 'A GTM engineering role',
  },
];

export const ted = {
  line: 'a health buddy that lives in WhatsApp',
  story: [
    'You tell Ted what you ate and how you moved. It remembers, and gives you one useful thing you can still do today. No diet culture, no guilt.',
  ],
  facts: [
    { big: '100', small: 'people have used Ted' },
    { big: '3 Sep 2026', small: 'went live' },
    { big: '₹0', small: 'spent on ads' },
    { big: '400+', small: 'automated tests on its safety rules' },
  ],
  safety: 'The safety rules sit outside the AI, so the AI cannot talk its way past them. No calorie numbers for anyone under 18. No crash diets.',
  links: [
    { label: 'Meet Ted', href: 'https://heyted.in', primary: true },
    { label: 'Ted on Instagram', href: 'https://www.instagram.com/heyted.in/' },
  ],
};

export const groups = [
  {
    id: 'team',
    title: 'Built for my team',
    note: 'Tools I built at JumpCloud for my own SDRs. Each one has a page with a sample.',
    projects: [
      {
        name: 'Inbound Intel',
        slug: 'inbound-intel',
        line: 'every new lead, researched before the call',
        tags: ['For SDR teams', 'JumpCloud', '2026'],
        body: 'Researches every new inbound lead, sorts partners from direct buyers, finds the hook and drafts the first email. My team uses it daily. It saves about 10 minutes per lead.',
      },
      {
        name: 'POV Generator',
        slug: 'pov-generator',
        line: 'why this account should care, right now',
        tags: ['For SDRs and AEs', 'JumpCloud', '2026'],
        body: 'Type an account name. It writes why identity and device security matters to them now, plus a first email in the rep’s name.',
      },
      {
        name: 'Prospect Research Agent',
        slug: 'prospect-research-agent',
        line: 'one researcher per company',
        tags: ['For outbound', '2026'],
        body: 'Give it a list of companies. It sends a separate research agent to each one and saves a short brief for every company.',
      },
    ],
  },
  {
    id: 'gtm',
    title: 'GTM projects',
    note: 'Built at a buildathon and a cohort.',
    projects: [
      {
        name: 'Debrief',
        line: 'score the conversation, not the person',
        tags: ['GrowthX GTM Buildathon', 'Solo, in one day', 'Live'],
        body: 'Every event tool scores the person. Debrief scores the conversation: scan a badge, leave a voice note, and it drafts the follow up.',
        link: { href: 'https://debrief-hazel.vercel.app', label: 'Try Debrief' },
      },
      {
        name: 'LinkedIn Post Coach',
        slug: 'linkedin-post-coach',
        line: 'your calls in, your posts out',
        tags: ['Clay GTM Engineers cohort', 'Shared with the cohort'],
        body: 'Learns how you write, turns your call recordings into post drafts, and strips out the lines that sound like AI.',
      },
    ],
  },
  {
    id: 'after',
    title: 'After hours',
    note: 'Problems I had myself, built at night after a full day leading SDRs.',
    projects: [
      {
        name: 'Morning brief',
        slug: 'morning-brief',
        line: 'my day, ready at 11 am',
        tags: ['For me', 'Sep 2026'],
        body: 'Reads my four inboxes and calendars, builds my to do list, drafts the replies I owe, and emails it all to me each morning.',
      },
    ],
  },
];

export const jumpcloud = {
  company: 'JumpCloud', title: 'Manager, Sales Development', when: 'Nov 2025 to Oct 2026',
  what: 'Led 10 SDRs in three pods: APAC outbound, APAC inbound and EMEA inbound.',
  wins: [
    'Outbound meeting to opportunity from 17% to 49% in one quarter.',
    'APAC outbound pipeline from $66K to $624K in one quarter.',
    'About $2.9M qualified pipeline in Q1 across the three pods.',
  ],
  link: { href: '/built#team', label: 'See the tools I built for the team' },
};

export const roles = [
  {
    company: 'Rubrik', title: 'Manager, Sales Development', when: 'Sep 2024 to Oct 2025',
    what: 'Built the US mid market SDR team from scratch. 8 reps.',
    wins: [
      '143%, 120% and 105% of pipeline target, three quarters in a row.',
      '$5.6M pipeline in the best quarter.',
      'New SDRs ramped to quota in 90 days.',
    ],
  },
  {
    company: 'Branch', title: 'Manager, NA Sales Development', when: 'Jan 2024 to Aug 2024',
    what: 'Set up a team in India selling for North America.',
    wins: [
      'New team from 0% to 105% of outbound target in 4 months.',
      'Inbound lead acceptance from 57% to 91% in 5 months.',
      'Wrote the team’s compensation plans.',
    ],
  },
  {
    company: 'ClickPost', title: 'Manager, Global Sales Development', when: 'Sep 2020 to Dec 2023',
    what: 'One of the first hires. Built outbound and inbound from nothing.',
    wins: [
      '2x SQLs and 80% more new accounts across APAC and EMEA.',
      'About 170% of target, quarter after quarter.',
      'Outbound conversion from 3% to 9%.',
    ],
  },
  {
    company: 'Udaan', title: 'Business Development Manager', when: 'Apr 2020 to Aug 2020',
    what: 'Sold supply chain finance to small businesses, on an INR 12 Cr credit book.',
    wins: [],
  },
  {
    company: 'Xoxoday', title: 'Sales Development Representative', when: 'Apr 2019 to Mar 2020',
    what: 'Where it started.',
    wins: ['Best SDR Performer.', 'Promoted to enterprise AE in 6 months.'],
  },
];

export const extras = [
  'Named one of the 100 Powerful Women in Sales, 2025 (Demandbase and Women in Sales)',
  'GrowthX Fellow',
  'Co-founded SDR Leaders of APAC in Aug 2025, a community for people who lead SDR teams',
  '13,000+ followers on LinkedIn, where I write about sales development',
  'PGDM in Sales and Marketing, NMIMS. B.Com (Hons), Calcutta University',
];

// From LinkedIn recommendations, quoted word for word. All 15 are public on her profile.
export const RECS_URL = 'https://www.linkedin.com/in/meet-vandana/details/recommendations/';
export const recs = [
  // The first three show on the home page: a manager, a peer and a direct report.
  { quote: 'She has a rare ability to convey a strategic vision clearly, ensuring that every team member feels aligned and empowered.', who: 'Morgan Walker', role: 'Regional Director, Rubrik' },
  { quote: 'She brings a combination of operational rigor, coaching strength, and genuine care for her team.', who: 'Ryan Cunningham', role: 'Peer, Rubrik' },
  { quote: 'Vandana is the kind of manager who actually gets in the weeds with you.', who: 'Joel Thomas', role: 'Former direct report, Rubrik' },
  { quote: 'After I moved back into the field, our relationship came full circle when her SDR team supported mine.', who: 'Claire Roberts', role: 'Account Executive, Rubrik' },
  { quote: 'Her understanding of sales is exceptional, and she has a rare ability to train and guide people to become the best version of themselves.', who: 'Anurag Banerjee', role: 'Former direct report, Rubrik' },
  { quote: 'Scaling a team can be a tough job, but Vandana made it look natural.', who: 'Calvin Leong', role: 'APJ HR Leader' },
];

// The four Topmate offers. Names and durations must match topmate.io/vandana_agarwal.
export const TOPMATE = 'https://topmate.io/vandana_agarwal';
export const coaching = [
  { title: 'Mentorship Discovery Call', dur: '15 min', who: 'Start here. We figure out what you need.', id: '69117' },
  { title: '1:1 Mentorship Program', dur: '6 to 8 weeks', who: 'For SDRs breaking in or levelling up.', id: '69117' },
  { title: 'Build Your First AI-Powered SDR Workflow', dur: '60 min', who: 'Turn one repetitive sales task into an AI workflow.', id: '69118' },
  { title: 'Build Your SDR Function & GTM Blueprint', dur: '60 min', who: 'For founders and leaders setting up SDR.', id: '2131945' },
];

// A few posts from the SDR Field Guide, APAC Edition, on Substack.
export const SUBSTACK = 'https://coachingbyvandy.substack.com';
export const posts = [
  { title: 'APAC Is Not One Market: Rethinking ICP and Territory Mapping', slug: 'apac-is-not-one-market-rethinking' },
  { title: 'Why Your APAC Cadence Should Be Longer, Not Louder', slug: 'why-your-apac-cadence-should-be-longer' },
  { title: 'Silence and Pushback Are Invitations (If You Know How to Read Them)', slug: 'silence-and-pushback-are-invitations' },
];

// Detail pages for projects that cannot be opened publicly (company data or private inboxes).
// Samples use made-up data, except the POV (a public company, public facts, names removed)
// and the research brief (public facts only). Results lines are facts Vandy confirmed or dated files show.
export const details = {
  'inbound-intel': {
    name: 'Inbound Intel',
    problem: 'Every new inbound lead needed a pile of research before an SDR could make a good first call. Some were partners who belonged to another team. Some were junk. Reps found out on the call.',
    steps: [
      'Reads each new lead: the company, its size and region, the person, recent news.',
      'Decides what kind of lead it is: a direct buyer, a partner (MSP) for the channel team, or junk.',
      'Writes the one hook worth opening with, and a first email in the rep’s voice.',
      'Hands back one clean sheet the team imports into Salesforce.',
    ],
    sample: {
      kind: 'table',
      caption: 'A sample batch, with made-up leads. Same columns and same judgement calls as the real output.',
      cols: ['Lead', 'Company', 'Size', 'Region', 'Lead type', 'Decision', 'Hook'],
      rows: [
        ['Priya N.', 'Northwind Labs', '40', 'India, Bengaluru', 'Direct', 'Accepted', 'Mixed Mac and Linux fleet, hiring fast, no device management in sight.'],
        ['Omar K.', 'Kestrel IT Services', '15', 'UAE, Dubai', 'Partner (MSP)', 'Send to channel team', 'Manages IT for its own clients. Wants to resell, not buy.'],
        ['Test User', 'Test Company', 'n/a', 'n/a', 'Junk', 'Rejected', 'Placeholder sign up on a student email. No outreach.'],
      ],
      email: {
        subject: 'One console for Northwind’s mixed fleet',
        body: 'Hi Priya, thanks for trying JumpCloud. For a 40 person team running Macs and Linux boxes, the usual snag is identity, logins and laptops ending up in three different tools as you hire. JumpCloud keeps them in one place, and it is free for your first 10 users and devices. Worth a quick look to see if it fits how Northwind works?',
      },
    },
    mattered: 'Ran on real inbound batches for APAC and EMEA from June to August 2026. Partner and junk leads got caught before anyone dialled.',
  },
  'pov-generator': {
    name: 'POV Generator',
    problem: 'A good first call needs a point of view: why this company should care about this problem now. Writing one well takes time most reps do not have.',
    steps: [
      'Type an account name.',
      'It researches the company, its tech and security leaders, recent news and its industry’s risks.',
      'It writes the point of view, maps the people worth reaching, and drafts the first email.',
    ],
    sample: {
      kind: 'pov',
      caption: 'A real POV it wrote in April 2026 for Acko, an Indian insurtech, built only from public information. Shortened, with names removed.',
      sections: ['Company overview', 'Key executives', 'Industry context and risk', 'Point of view', 'Target prospects (10)', 'First outreach email'],
      pov: 'Acko is heading toward an IPO while expanding into life insurance and healthcare, with a fast growing team on a cloud native stack. Insurance regulators in India now want board level proof of who can access what, and a major Indian insurer lost 31 million customer records to stolen logins in 2024. The question worth 15 minutes: if an IPO auditor asks tomorrow for a real time map of who can access every device and tool, can Acko produce it?',
      subject: 'Identity audit trail before the IPO opens',
    },
    mattered: 'Built in April 2026 for JumpCloud APAC sales, so reps walked into first calls with a real point of view.',
  },
  'prospect-research-agent': {
    name: 'Prospect Research Agent',
    problem: 'Researching accounts by hand is slow, and the last brief is always worse than the first.',
    steps: [
      'Give it one company or a long list.',
      'It sends a separate research agent to each company, so nothing gets mixed up.',
      'Each agent saves a short brief: what the company does, recent signals, who to reach, and the angle.',
    ],
    sample: {
      kind: 'brief',
      caption: 'Part of a real brief it wrote on Zapier in May 2026, from public sources.',
      company: 'Zapier',
      overview: 'Remote first, about 800 people, repositioning from no code automation to an AI orchestration platform across 9,000+ apps.',
      signals: [
        'Apr 2026: Zapier Agents generally available, with enterprise governance.',
        'Mar 2026: launched AI Guardrails, safety checks for AI workflows.',
        'May 2025: publicly detailed its move upmarket, building an enterprise sales team on top of self serve.',
      ],
      contact: 'SVP of Sales and Success',
      angle: 'Zapier is mid move from self serve to an enterprise sales motion. Open on that shift, not on the product.',
    },
    mattered: 'Wrote 11 briefs in its first run, in May 2026.',
  },
  'linkedin-post-coach': {
    name: 'LinkedIn Post Coach',
    problem: 'Everyone in the cohort had to post on LinkedIn. Nobody had time, and AI drafts all sounded the same.',
    steps: [
      'It asks a few questions to learn how you write.',
      'You give it a call recording or a few notes.',
      'It drafts the post, strips out lines that sound like AI, and leaves the last 20% to you.',
    ],
    sample: {
      kind: 'post',
      caption: 'The opening of a real draft it wrote for my own first post, May 2026.',
      lines: [
        'I’ve been using AI tools the whole time. But never built something I could really call mine.',
        'That changes this week.',
      ],
    },
    mattered: 'Shared with everyone in the Clay GTM Engineers cohort, May 2026.',
  },
  'morning-brief': {
    name: 'Morning brief',
    problem: 'Four inboxes, four calendars, and a to do list in my head. A chunk of every morning went into just working out the day.',
    steps: [
      'At 11 am it reads my inboxes and calendars.',
      'It builds the to do list, drafts the replies I owe, and picks a few things worth reading.',
      'It emails the whole brief to me.',
    ],
    sample: {
      kind: 'brief-card',
      caption: 'What a brief looks like, filled with a made-up day.',
      load: 'Busy day: 4 meetings',
      todo: ['Send the QBR deck to Rahul before 3 pm', 'Reply to the Topmate booking for Friday', 'Confirm Saturday’s community meetup venue'],
      replies: ['Ananya: yes to Thursday, 4 pm works', 'Recruiter at Acme: thanks, sharing my portfolio link'],
      reading: ['A Substack post on SDR to AE handoffs', 'A newsletter on GTM engineering roles'],
    },
    mattered: 'Runs every morning since late September 2026.',
  },
};

// Podcast and video appearances, the same three as on /coaching.
export const videos = [
  { id: 'wDsukLjubus', caption: 'Inside the SDR career in SaaS: growth and salary' },
  { id: '35mHdwO_PsI', caption: 'SDR leadership gaps in India, on the Saaspire Podcast' },
  { id: 'b5bccZRw7YU', caption: 'The SDR Leaders Playbook' },
];
