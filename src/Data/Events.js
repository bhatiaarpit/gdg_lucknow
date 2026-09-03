const IWD2025 = '/events/iwd.jpg';
const Devfest2024 = '/events/devfest.jpeg';
const GoogleIO2024 = '/events/googleio.jpg';
const Django2025 = '/events/djangomeetup.jpg';
const BuildwithAI = '/events/buildwithai.png';
const DevFest2025 = '/events/devfest2025.png';
const Nirmana2025 = '/events/nirmana2025.png';
const IWD2024 = '/events/iwd2024.png';
const StartupSuccessDays2023 = '/events/startup2023.png';
const DevFest2023 = '/events/devfest2023.png';
const DevFest2022 = '/events/devfest2022.png';
const AndroidStudyJam2022 = '/events/android2022.png';
const DevFestIndia2021 = '/events/devfest2021.png';
const AIDay2024 = '/events/aiday2024.png';
const GenAI2024 = '/events/genai2024.png';
const HackToCrack2024 = '/events/hacktocrack2024.png';
const ProductBuildersDay2026 = '/events/productbuildersday2026.png'; // TODO: Replace with actual image
const AgenticPremierLeague2026 = '/events/agenticpremierleague2026.png'; // TODO: Replace with actual image
// const ReframingPMF2026 = '/events/reframingpmf2026.png'; // TODO: Replace with actual image
const AIBeyondApps2026 = '/events/aibeyondapps2026.png'; // TODO: Replace with actual image
const IWDBuilderMode2026 = '/events/iwdbuildermode2026.png'; // TODO: Replace with actual image
// const AIDayStartups2026 = '/events/aidaystartups2026.png'; // TODO: Replace with actual image
const CodeForCommunities2026 = '/events/codeforcommunities2026.png'; // TODO: Replace with actual image

export const categories = [
  { id: 'all', name: 'All Events', color: 'bg-gray-100 text-gray-700' },
  { id: 'workshop', name: 'Workshops', color: 'bg-blue-100 text-blue-700' },
  { id: 'meetup', name: 'Meetups', color: 'bg-green-100 text-green-700' },
  { id: 'conference', name: 'Conferences', color: 'bg-red-100 text-red-700' },
  { id: 'hackathon', name: 'Hackathons', color: 'bg-yellow-100 text-yellow-700' }
];

export const upcomingEvents = [
  {
    id: 31,
    title: 'Nirmāṇa - 2026',
    date: 'TBD',
    time: 'TBD',
    location: 'Lucknow',
    category: 'meetup',
    attendees: 'TBD',
    maxAttendees: 'TBD',
    description: 'The next edition of Nirmāṇa returns to Lucknow. Details on the theme, venue, and speaker lineup will be announced soon.',
    image: Nirmana2025,
    speakers: [
      { name: 'To be announced', linkedin: '#' }
    ],
    tags: ['AI', 'Cloud', 'Community'],
    featured: true,
  },
  {
    id: 32,
    title: 'DevFest 2026',
    date: 'TBD',
    time: 'TBD',
    location: 'Lucknow',
    category: 'conference',
    attendees: 'TBD',
    maxAttendees: 'TBD',
    description: 'GDG Lucknow’s flagship annual developer festival returns for 2026. Details on the theme, venue, and speaker lineup will be announced soon.',
    image: DevFest2025,
    speakers: [
      { name: 'To be announced', linkedin: '#' }
    ],
    tags: ['AI', 'Android', 'Cloud', 'Web', 'ML'],
    featured: true,
  },
];

export const pastEvents = [
  {
    id: 26,
    title: 'Build with AI: Code for Communities – Community Run & AI Builders Meetup',
    date: '2026-07-04',
    time: '6:00 AM',
    location: 'Lucknow (Invite-Only Community Mixer)',
    category: 'meetup',
    attendees: '50+',
    maxAttendees: '60',
    description: 'An exclusive morning meetup combining physical wellness with deep-tech product strategy. Featuring a 2-3 km community run followed by networking breakfast and an AI Builders Roundtable discussion on building MVPs with AI, transitioning hackathon prototypes to production-ready applications, and leveraging AI tools for accelerated development.',
    image: CodeForCommunities2026,
    speakers: [
      { name: 'Abhishek Sahu', linkedin: 'https://www.linkedin.com/in/a-sahu16/' }
    ],
    tags: ['AI', 'Community', 'Build with AI', 'Startups', 'Product Strategy'],
  },
  /*
  {
    id: 27,
    title: 'AI Day for Startups India 2026',
    date: '2026-06-11',
    time: '10:00 AM',
    location: 'Lucknow',
    category: 'conference',
    attendees: '120+',
    maxAttendees: '150',
    description: 'Designed for Indian startups to accelerate from experimentation to execution. Focused on integrating Agentic AI workflows, Multimodal AI, Sovereign AI, and Edge Intelligence to help founders and engineering leads scale AI-native applications.',
    image: AIDayStartups2026,
    speakers: [
      { name: 'Industry AI Leaders & GDEs', linkedin: '#' }
    ],
    tags: ['Startups', 'AI', 'Agentic AI', 'Google Cloud', 'Multimodal AI'],
    featured: true,
  },
  */
  {
    id: 25,
    title: 'Build with AI: Agentic Premier League',
    date: '2026-05-22',
    time: '10:00 AM',
    location: 'GDG Lucknow Community (Online + Offline)',
    category: 'hackathon',
    attendees: '100+',
    maxAttendees: '200',
    description: 'A builder league combining the energy of cricket with AI innovation. Participants competed solo or in teams of up to 4, building autonomous AI agents and AI-driven solutions using agentic workflows and Google Gemini. The event featured phased rounds — Auction (Applications), Qualifier, Wild Card Watch Party, Semi-Finals, and Finals — spread across May 2026.',
    image: AgenticPremierLeague2026,
    speakers: [
      { name: 'Abhishek Sahu', linkedin: 'https://www.linkedin.com/in/a-sahu16/' }
    ],
    tags: ['AI', 'Agentic AI', 'Gemini', 'Hackathon', 'Build with AI', 'Google Cloud'],
    featured: true,
  },
  {
    id: 24,
    title: 'Product Builders Day',
    date: '2026-03-28',
    time: '10:00 AM',
    location: 'Central Auditorium Complex, Integral University, Kursi Road, Dashauli, Lucknow',
    category: 'workshop',
    attendees: '150+',
    maxAttendees: '200',
    description: 'A dynamic gathering designed for students, developers, startups, and product enthusiasts — bridging the gap between technical coding skills and building scalable, real-world solutions. The event centered on product thinking, AI-powered development, and hands-on learning, with workshops on transitioning from developer to founder and building AI-powered apps with Gemini Code Assist.',
    image: ProductBuildersDay2026,
    speakers: [
      { name: 'Dr. Nida Fatima', linkedin: '#' },
      { name: 'Alok Pandey', linkedin: '#' },
      { name: 'Ashish Mishra', linkedin: '#' },
      { name: 'Namrata More', linkedin: '#' },
      { name: 'Ashutosh S. Bhakare', linkedin: 'https://www.linkedin.com/in/abhakare/' }
    ],
    tags: ['Product Thinking', 'AI', 'Gemini', 'Entrepreneurship', 'Fintech', 'Community'],
  },
  {
    id: 28,
    title: "Builder Mode: HER Edition | International Women's Day Lucknow 2026",
    date: '2026-03-07',
    time: '10:00 AM',
    location: 'Lucknow',
    category: 'meetup',
    attendees: '150+',
    maxAttendees: '180',
    description: "Celebrating International Women's Day under the Women Techmakers initiative. A dedicated gathering to amplify, enable, and celebrate women builders in product, design, and AI through technical keynotes, mentoring sessions, and community networking.",
    image: IWDBuilderMode2026,
    speakers: [
      { name: 'Women Techmakers Leaders', linkedin: '#' }
    ],
    tags: ['WomenInTech', 'WTM', 'AI', 'Product', 'Diversity & Inclusion'],
  },
  {
    id: 29,
    title: "AI Beyond Apps: Exploring India's Invisible Intelligence Layer",
    date: '2026-02-27',
    time: '10:00 AM',
    location: 'Lucknow',
    category: 'conference',
    attendees: '180+',
    maxAttendees: '200',
    description: "A deep-dive conference exploring how AI is evolving into a foundational infrastructure layer across governance, public services, healthcare, and economic growth in India, bringing together policymakers, AI practitioners, and researchers.",
    image: AIBeyondApps2026,
    speakers: [
      { name: 'AI Policy & Infrastructure Experts', linkedin: '#' }
    ],
    tags: ['AI Infrastructure', 'Public Sector', 'Deep Tech', 'Policy', 'Governance'],
  },
  /*
  {
    id: 30,
    title: 'Reframing Product–Market Fit: How AI Turns Signals into Strategy',
    date: '2026-02-20',
    time: '10:00 AM',
    location: 'Lucknow',
    category: 'workshop',
    attendees: '100+',
    maxAttendees: '120',
    description: 'An interactive workshop exploring Product-Market Fit as a continuous learning loop. Learn how AI tools decode user behavior, analyze market feedback, and transform data signals into actionable product strategy.',
    image: ReframingPMF2026,
    speakers: [
      { name: 'Product Leaders & AI Strategists', linkedin: '#' }
    ],
    tags: ['Product Management', 'AI', 'Strategy', 'Startups', 'Analytics'],
  },
  */
  {
    id: 1,
    title: 'DevFest 2025',
    date: '2025-11-16',
    time: '10:00 AM',
    location: 'Hometel, Alambagh, Lucknow',
    category: 'conference',
    attendees: '399',
    maxAttendees: '400+',
    description: 'This year, DevFest Lucknow 2025 brings together the brightest minds in technology to explore the frontiers of Generative AI, Multi-Platform Development, and Sustainable Cloud Solutions. We are moving beyond the theoretical to focus on Applied Innovation—equipping developers with the tools and insights needed to build smarter, faster, and more impactful applications for the real world.',
    image: DevFest2025,
    speakers: [
      { name: 'Rishiraj Acharya', linkedin: 'https://www.linkedin.com/in/rishirajacharya/' },
      { name: 'Pawan Kumar', linkedin: 'https://www.linkedin.com/in/imthepk/' },
      { name: 'Jay Thakkar', linkedin: 'https://www.linkedin.com/in/akajammythakkar/' },
      { name: 'Sumit Kumar', linkedin: 'https://www.linkedin.com/in/sumit-kumar-ab2059132/' },
      { name: 'Shivam Joshi', linkedin: 'https://www.linkedin.com/in/the-shivamjoshi/' },
      { name: 'Saurabh Saha', linkedin: 'https://www.linkedin.com/in/saurabhsaha/' },
      { name: 'Ashutosh Bhakare', linkedin: 'https://www.linkedin.com/in/abhakare/' },
      { name: 'Vrijraj Singh', linkedin: 'https://www.linkedin.com/in/vrijrajsingh/' },
      { name: 'Rakshita Gupta', linkedin: 'https://www.linkedin.com/in/guptarakshita/' },
      { name: 'Pankaj Rai', linkedin: 'https://www.linkedin.com/in/pankajrai16/' },
      { name: 'Arpan Garg', linkedin: 'https://www.linkedin.com/in/arpansac/' }
    ],
    tags: ['AI', 'Android', 'Cloud', 'Flutter', 'Gemini', 'Web', 'ML'],
    featured: true,
  },
  {
    id: 2,
    title: 'Nirmāṇa - 2025',
    date: '2025-09-28',
    time: '10:00 AM',
    location: 'La Martinière College, Lucknow',
    category: 'meetup',
    attendees: '204',
    maxAttendees: '220',
    description: 'This year, Nirmāṇa puts the spotlight on Artificial Intelligence and Cloud Computing - exploring how these technologies are transforming industries and redefining the way we build.',
    image: Nirmana2025,
    speakers: [
      { name: 'Prateek Mishra', linkedin: 'https://www.linkedin.com/in/pr0pm/' },
      { name: 'Saurabh Saha', linkedin: 'https://www.linkedin.com/in/saurabhsaha/' },
      { name: 'Ayush Shukla', linkedin: 'https://www.linkedin.com/in/ayush-shukla-15957a196/' },
      { name: 'Venkatesh Chaturvedi', linkedin: 'https://www.linkedin.com/in/blaster4385/' }
    ],
    tags: ['AI', 'Android', 'Cloud', 'Gemini', 'Web', 'ML'],
    featured: true,
  },
  {
    id: 3,
    title: 'Build with AI',
    date: '2025-04-19',
    time: '10:00 AM',
    location: 'Shri Ramswaroop College Of Engineering and Management, Tiwariganj, Faizabad Road, Lucknow',
    category: 'workshop',
    attendees: '100+',
    maxAttendees: '150',
    description: 'Community-led, developer-focused event ideal for both students and professionals looking to build AI-integrated projects. Emphasis on practical, hands-on learning across a range of platforms and experience levels.',
    image: BuildwithAI,
    speakers: [
      { name: 'Imran Roshan', linkedin: 'https://www.linkedin.com/in/imranfosec/' },
      { name: 'Uzma Mansoori', linkedin: 'https://www.linkedin.com/in/uzmamansoori/' }
    ],
    tags: ['AI', 'Generative AI', 'Gemini', 'TensorFlow', 'Google Cloud', 'Vertex AI'],
  },
  {
    id: 4,
    title: "International Women's Day Lucknow 2025",
    date: '2025-03-08',
    time: '10:00 AM',
    location: 'Integral University, Kursi Road, Dashauli, Lucknow',
    category: 'meetup',
    attendees: '140+',
    maxAttendees: '150',
    description: 'Celebrating women\'s achievements in technology and promoting gender parity through visibility and empowerment. Connecting attendees with industry leaders, technologists, entrepreneurs, and visionaries.',
    image: IWD2025,
    speakers: [
      { name: 'Arti Verma', linkedin: '#' },
      { name: 'Uzma Mansoori', linkedin: 'https://www.linkedin.com/in/uzmamansoori/' },
      { name: 'Sarita Nirjhra', linkedin: 'https://www.linkedin.com/in/sarita-nirjhra-996856167/' },
      { name: 'Vandana Sharma', linkedin: 'https://www.linkedin.com/in/vandanastartup/' }
    ],
    tags: ['WomenInTech', 'AI', 'Cybersecurity', 'Leadership', 'Communication'],
  },
  {
    id: 5,
    title: 'DevFest 2024',
    date: '2024-11-24',
    time: '10:00 AM',
    location: 'The Regnant, Aliganj Main Road, Lucknow',
    category: 'conference',
    attendees: '428+',
    maxAttendees: '430',
    description: 'A place where cutting-edge innovation meets passionate minds, where industry leaders share the stage with rising stars, and where the next big idea could be born.',
    image: Devfest2024,
    speakers: [
      { name: 'Anurag Sinha', linkedin: 'https://www.linkedin.com/in/anuragsinha111/' },
      { name: 'Vishal Kumar', linkedin: 'https://www.linkedin.com/in/vishal-barnwal/' },
      { name: 'Snigdha Kashyap', linkedin: 'https://www.linkedin.com/in/snigdha-kashyap/' },
      { name: 'Geeta Kakrani', linkedin: 'https://www.linkedin.com/in/geetakakrani/' },
      { name: 'Navodita Srivastava', linkedin: 'https://www.linkedin.com/in/navodita-srivastava/' },
      { name: 'Nitin Tiwari', linkedin: 'https://www.linkedin.com/in/tiwari-nitin/' },
      { name: 'Saurabh Mishra', linkedin: 'https://www.linkedin.com/in/connectsaurabhmishra/' }
    ],
    tags: ['AI', 'Android', 'Cloud', 'Flutter', 'Gemini', 'Web', 'ML', 'PWA'],
  },
  {
    id: 6,
    title: 'Google IO Extended 2024',
    date: '2024-08-31',
    time: '10:00 AM',
    location: 'Integral University, Kursi Road, Dashauli, Lucknow',
    category: 'meetup',
    attendees: '160+',
    maxAttendees: '170',
    description: 'Extending the main Google I/O experience locally by showcasing the latest from Google\'s annual developer conference and enabling hands-on interaction with new tools & technologies.',
    image: GoogleIO2024,
    speakers: [
      { name: 'Vanshita Singh', linkedin: 'https://www.linkedin.com/in/vanshify/' },
      { name: 'Mritunjay Sharma', linkedin: 'https://www.linkedin.com/in/mritunjay394/' },
      { name: 'Aryendra Prakash Singh', linkedin: 'https://www.linkedin.com/in/hashtagaps/' },
      { name: 'Akash Verma', linkedin: 'https://www.linkedin.com/in/therockakash/' }
    ],
    tags: ['AI', 'Firebase', 'Gemini', 'TensorFlow', 'Jetpack Compose', 'Project IDX'],
  },
  {
    id: 7,
    title: "International Women's Day Lucknow 2024",
    date: '2024-03-17',
    time: '9:00 AM',
    location: 'Amity University Lucknow Campus, Malhaur Railway Station Road, Lucknow',
    category: 'meetup',
    attendees: '183+',
    maxAttendees: '200',
    description: 'An empowering event under the Women Techmakers "Impact the Future" campaign, celebrating women\'s achievements in tech and advocating for gender equity.',
    image: IWD2024,
    speakers: [
      { name: 'Rishiraj Acharya', linkedin: 'https://www.linkedin.com/in/rishirajacharya/' },
      { name: 'Vasundhara Shukla', linkedin: 'https://www.linkedin.com/in/vasundhara-shukla/' },
      { name: 'Pankaj Rai', linkedin: 'https://www.linkedin.com/in/pankajrai16/' },
      { name: 'Shruti Tiwari', linkedin: 'https://www.linkedin.com/in/shruti-tiwari/' },
      { name: 'Vishal Kumar', linkedin: 'https://www.linkedin.com/in/vishal-barnwal/' }
    ],
    tags: ['WomenInTech', 'AI', 'Android', 'Firebase', 'Golang', 'Personal Branding'],
  },
  {
    id: 8,
    title: 'Startup Success Days India 2023',
    date: '2024-01-21',
    time: '10:00 AM',
    location: 'Club Orchid, Faizabad Road, Lucknow',
    category: 'meetup',
    attendees: '90+',
    maxAttendees: '100',
    description: 'An invite-only gathering of founders, developers, mentors, VCs, Googlers, and Women Techmakers. Focused on helping startups build, scale, and connect with the ecosystem.',
    image: StartupSuccessDays2023,
    speakers: [
      { name: 'Multiple Industry Leaders', linkedin: '#' }
    ],
    tags: ['Startups', 'Generative AI', 'Google Cloud', 'Maps', 'Android', 'Web3'],
  },
  {
    id: 9,
    title: 'DevFest Lucknow 2023',
    date: '2023-11-19',
    time: '9:00 AM',
    location: 'Dr. Akhilesh Das Auditorium, Faizabad Road, Lucknow',
    category: 'conference',
    attendees: '500+',
    maxAttendees: '600',
    description: 'A full-day community-led tech conference covering AI, Android, Flutter, Cloud, DevOps, Firebase, ML, Women Techmakers, and more.',
    image: DevFest2023,
    speakers: [
      { name: 'Multiple Industry Experts', linkedin: '#' }
    ],
    tags: ['AI', 'Android', 'Flutter', 'Cloud', 'DevOps', 'Firebase', 'ML', 'WomenInTech'],
  },
  {
    id: 11,
    title: 'DevFest Lucknow 2022',
    date: '2022-10-29',
    time: '9:00 AM',
    location: 'Dr. Akhilesh Das Auditorium, BBD University, Faizabad Road, Lucknow',
    category: 'conference',
    attendees: '654+',
    maxAttendees: '700',
    description: 'A community-driven full-day tech conference tackling AI, Cloud, Flutter, Firebase, IoT, Machine Learning, TensorFlow, Web, DevOps, and Women Techmakers.',
    image: DevFest2022,
    speakers: [
      { name: 'Multiple Industry Experts', linkedin: '#' }
    ],
    tags: ['AI', 'Cloud', 'Flutter', 'Firebase', 'IoT', 'ML', 'TensorFlow', 'Web', 'DevOps'],
  },
  {
    id: 12,
    title: 'Android Study Jam 2022',
    date: '2022-06-27',
    time: '10:00 AM',
    location: 'Shri Ramswaroop College of Engineering & Management, Lucknow',
    category: 'workshop',
    attendees: '93+',
    maxAttendees: '100',
    description: 'A community-led study jam using Google\'s official Android curriculum to teach participants how to build native Android apps.',
    image: AndroidStudyJam2022,
    speakers: [
      { name: 'Mohd. Kaif', linkedin: '#' },
      { name: 'Prayag Dwivedi', linkedin: '#' }
    ],
    tags: ['Android', 'Mobile Development', 'Kotlin', 'Study Jam'],
  },
  {
    id: 16,
    title: 'DevFest India 2021',
    date: '2021-10-22',
    time: '3:30 PM',
    location: 'Online (virtual across India)',
    category: 'conference',
    attendees: '1500+',
    maxAttendees: '2000',
    description: 'A three-day, pan-India developer festival featuring hands-on learning tracks in Android, Web, Flutter, Cloud, and ML.',
    image: DevFestIndia2021,
    speakers: [
      { name: '50+ GDG Chapter Experts', linkedin: '#' }
    ],
    tags: ['Android', 'Web', 'Flutter', 'Cloud', 'ML', 'Virtual Event'],
  }
];

export const collaboratedEvents = [
  {
    id: 20,
    title: 'GDG Lucknow X Django India Meetup',
    date: '2025-03-29',
    time: '10:00 AM',
    location: 'IIIT Lucknow, Ahmamau, Lucknow',
    category: 'meetup',
    attendees: '80+',
    maxAttendees: '100',
    description: 'A collaborative meetup hosted by GDG Lucknow and Django India, aimed at fostering open-source contributions, Django best practices, and community networking.',
    image: Django2025,
    speakers: [
      { name: 'Django Experts', linkedin: '#' },
      { name: 'Python Community Leaders', linkedin: '#' }
    ],
    tags: ['Django', 'Python', 'Open Source', 'Web Development'],
    collaborator: 'Django India',
  },
  {
    id: 21,
    title: 'AI Day 2024',
    date: '2024-10-19',
    time: '10:00 AM',
    location: 'LPCPS, Lucknow',
    category: 'conference',
    attendees: '500+',
    maxAttendees: '600',
    description: 'A collaborative event featuring live AI demonstrations, technical sessions on LLM management, Neo4j databases, and AI deployment in production. Focused discussions on AI impact in business, research, and community building.',
    image: AIDay2024,
    speakers: [
      { name: 'Dr. Noor Alam', linkedin: 'https://in.linkedin.com/in/dr-noor-alam-khan-35592936' },
      { name: 'Prashant Shukla', linkedin: 'https://www.linkedin.com/in/prashant-shukla-67b55a68' },
      { name: 'Dr. Anuj Kumar Sharma', linkedin: 'https://in.linkedin.com/in/dr-anuj-kumar-sharma-b85b3418' },
      { name: 'Bhavesh Bhatt', linkedin: 'https://www.linkedin.com/in/bhattbhavesh91/' },
      { name: 'Ankit Pal', linkedin: 'https://www.linkedin.com/in/aadityaura/' },
      { name: 'Neeraj S.', linkedin: 'https://www.linkedin.com/in/neeraj-s-9b6b3361/' },
      { name: 'Avinash Bhaskar', linkedin: 'https://www.linkedin.com/in/avinash-bhashkar-674a561ab/' },
    ],
    tags: ['AI', 'LLMs', 'Neo4j', 'Machine Learning', 'Startups', 'Production AI', 'Community'],
    collaborator: 'TFUG Lucknow',
  },
  {
    id: 22,
    title: 'Gen AI Awadh Summit 2024',
    date: '2024-05-25',
    time: '10:00 AM',
    location: '1st Floor, SSB Hall, Dr. APJ Abdul Kalam Technical University, Lucknow, India-226031',
    category: 'conference',
    attendees: '100',
    maxAttendees: '120',
    description: 'The Gen AI Awadh Summit featured keynotes, workshops, and a hackathon focused on generative AI, large language models, and real-world applications in cybersecurity and visual design. Organized by TFUG Lucknow in collaboration with GDG Lucknow and Hunto AI.',
    image: GenAI2024,
    speakers: [
      { name: 'Ankit Pal', linkedin: 'https://www.linkedin.com/in/aadityaura/' },
      { name: 'Madhuvendra Sachan', linkedin: 'https://www.linkedin.com/in/madhurendrasachan' },
      { name: 'Prashant Shukla', linkedin: 'https://www.linkedin.com/in/prashant-shukla-67b55a68' },
      { name: 'Abhishek Sahu', linkedin: 'https://www.linkedin.com/in/a-sahu16/' }
    ],
    tags: ['AI', 'Generative AI', 'LLMs', 'Cybersecurity', 'Visual AI', 'Community'],
    collaborator: 'TFUG Lucknow, GDG Lucknow, Hunto AI'
  },
  {
    id: 23,
    title: 'Hack To Crack 1.0: An AI/ML Hackathon',
    date: '2024-05-23',
    time: '10:00 AM',
    location: 'Online + Onsite (TFUG Lucknow HQ)',
    category: 'hackathon',
    attendees: '33',
    maxAttendees: '50',
    description: 'Hack To Crack 1.0 was a 24-hour AI/ML hackathon organized by TFUG Lucknow in collaboration with GDG Lucknow and Lucknow AI Labs. It focused on solving real-world challenges across domains like computer vision, NLP, and audio processing. 9 teams participated and built impactful projects ranging from fraud detection systems to document intelligence tools.',
    image: HackToCrack2024,
    speakers: [
      { name: 'Ankit Pal', linkedin: 'https://www.linkedin.com/in/aadityaura/' },
      { name: 'Prashant Shukla', linkedin: 'https://www.linkedin.com/in/prashant-shukla-67b55a68' },
      { name: 'Abhishek Sahu', linkedin: 'https://www.linkedin.com/in/a-sahu16/' }
    ],
    tags: ['Hackathon', 'AI', 'Machine Learning', 'NLP', 'Computer Vision', 'Speech Recognition'],
    collaborator: 'TFUG Lucknow, GDG Lucknow, Lucknow AI Labs'
  }
];
