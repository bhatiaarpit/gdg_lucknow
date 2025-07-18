const IWD2025 = '/events/iwd.jpg';
const Devfest2024 = '/events/devfest.jpeg';
const GoogleIO2024 = '/events/googleio.jpg';
const Django2025 = '/events/djangomeetup.jpg';
const BuildwithAI = '/events/buildwithai.png';
const DevFest2025 = '/events/devfest2025.png';
const GoogleIO2025 = '/events/googleio2025.png';
const IWD2024 = '/events/iwd2024.jpg';
const StartupSuccessDays2023 = '/events/startup2023.jpg';
const DevFest2023 = '/events/devfest2023.jpg';
const IWD2023 = '/events/iwd2023.jpg';
const DevFest2022 = '/events/devfest2022.jpg';
const AndroidStudyJam2022 = '/events/android2022.jpg';
const DevFestIndia2021 = '/events/devfest2021.png';
const FlutterFestival2022 = '/events/flutter2022.jpg';
const IWDPreEvent2022 = '/events/iwdpre2022.jpg';
const IWDIndia2022 = '/events/iwdindia2022.jpg';
const PlayAcademy2021 = '/events/playacademy2021.jpg';
const CloudCertification2021 = '/events/cloud2021.jpg';
const PlayAcademyGrowth2022 = '/events/playgrowth2022.jpg';

export const categories = [
  { id: 'all', name: 'All Events', color: 'bg-gray-100 text-gray-700' },
  { id: 'workshop', name: 'Workshops', color: 'bg-blue-100 text-blue-700' },
  { id: 'meetup', name: 'Meetups', color: 'bg-green-100 text-green-700' },
  { id: 'conference', name: 'Conferences', color: 'bg-red-100 text-red-700' },
  { id: 'hackathon', name: 'Hackathons', color: 'bg-yellow-100 text-yellow-700' },
  { id: 'studyjam', name: 'Study Jams', color: 'bg-purple-100 text-purple-700' },
  { id: 'celebration', name: 'Celebrations', color: 'bg-pink-100 text-pink-700' },
];

export const upcomingEvents = [
  {
    id: 1,
    title: 'Google IO Extended 2025',
    date: 'TBD',
    time: '10:00 AM',
    location: 'TBD',
    category: 'meetup',
    attendees: 'TBD',
    maxAttendees: 'TBD',
    description: 'TBD',
    image: GoogleIO2025,
    speaker: 'TBD',
    tags: ['TBD'],
    registrationLink: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'DevFest 2025',
    date: 'TBD',
    time: '10:00 AM',
    location: 'TBD',
    category: 'conference',
    attendees: 'TBD',
    maxAttendees: 'TBD',
    description: 'TBD',
    image: DevFest2025,
    speaker: 'TBD',
    tags: ['TBD'],
    registrationLink: '#',
    featured: true,
  },
];

export const pastEvents = [
  {
    id: 3,
    title: 'Build with AI',
    date: '2025-04-19',
    time: '10:00 AM',
    location: 'Shri Ramswaroop College Of Engineering and Management, Tiwariganj, Faizabad Road, Lucknow',
    category: 'workshop',
    attendees: '100',
    maxAttendees: '100',
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
    category: 'celebration',
    attendees: '147',
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
    attendees: '428',
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
    attendees: '170',
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
    category: 'celebration',
    attendees: '183',
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
    attendees: '94',
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
    attendees: '893',
    maxAttendees: '900',
    description: 'A full-day community-led tech conference covering AI, Android, Flutter, Cloud, DevOps, Firebase, ML, Women Techmakers, and more.',
    image: DevFest2023,
    speakers: [
      { name: 'Multiple Industry Experts', linkedin: '#' }
    ],
    tags: ['AI', 'Android', 'Flutter', 'Cloud', 'DevOps', 'Firebase', 'ML', 'WomenInTech'],
  },
  {
    id: 10,
    title: "International Women's Day Lucknow 2023",
    date: '2023-03-08',
    time: '9:00 AM',
    location: 'Institution of Engineers (Lucknow chapter)',
    category: 'celebration',
    attendees: '150',
    maxAttendees: '150',
    description: 'A festive gathering under the "DigitAll" theme—focused on digital literacy for marginalised women. Featured cultural programs and practical sessions on digital rights and financial independence.',
    image: IWD2023,
    speakers: [
      { name: 'Women Empowerment Leaders', linkedin: '#' }
    ],
    tags: ['WomenInTech', 'Digital Literacy', 'Financial Independence', 'Cultural Programs'],
  },
  {
    id: 11,
    title: 'DevFest Lucknow 2022',
    date: '2022-10-29',
    time: '9:00 AM',
    location: 'Dr. Akhilesh Das Auditorium, BBD University, Faizabad Road, Lucknow',
    category: 'conference',
    attendees: '654',
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
    category: 'studyjam',
    attendees: '93',
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
    id: 13,
    title: 'Flutter Festival Lucknow 2022',
    date: '2022-02-26',
    time: '3:00 PM',
    location: 'GDG Lucknow Community Venue',
    category: 'workshop',
    attendees: '42',
    maxAttendees: '50',
    description: 'A community-led learning event featuring an introduction to Flutter and Dart fundamentals, with hands‑on workshops covering Dart basics, variables, functions, JSON handling, and classes.',
    image: FlutterFestival2022,
    speakers: [
      { name: 'Local Flutter Experts', linkedin: '#' }
    ],
    tags: ['Flutter', 'Dart', 'Mobile Development', 'Cross-platform'],
  },
  {
    id: 14,
    title: 'IWD Pre-event GDG Lucknow 2022',
    date: '2022-03-12',
    time: '4:00 PM',
    location: 'GDG Lucknow Community Venue',
    category: 'meetup',
    attendees: '67',
    maxAttendees: '70',
    description: 'A pre-International Women\'s Day gathering to foster career growth, inclusion, and community among women and allies.',
    image: IWDPreEvent2022,
    speakers: [
      { name: 'Industry Professionals', linkedin: '#' }
    ],
    tags: ['WomenInTech', 'Career Development', 'Networking', 'Inclusion'],
  },
  {
    id: 15,
    title: 'International Women\'s Day India Summit 2022',
    date: '2022-04-02',
    time: '3:00 PM',
    location: 'Online / Virtual across India',
    category: 'celebration',
    attendees: '500',
    maxAttendees: '1000',
    description: 'A two-day virtual summit uniting Women Techmakers ambassadors, developers, and allies from across India under the theme "Progress Not Perfection".',
    image: IWDIndia2022,
    speakers: [
      { name: 'WTM Ambassadors', linkedin: '#' }
    ],
    tags: ['WomenInTech', 'Virtual Summit', 'Progress', 'Empowerment'],
  },
  {
    id: 16,
    title: 'DevFest India 2021',
    date: '2021-10-22',
    time: '3:30 PM',
    location: 'Online (virtual across India)',
    category: 'conference',
    attendees: '1000',
    maxAttendees: '2000',
    description: 'A three-day, pan-India developer festival featuring hands-on learning tracks in Android, Web, Flutter, Cloud, and ML.',
    image: DevFestIndia2021,
    speakers: [
      { name: '50+ GDG Chapter Experts', linkedin: '#' }
    ],
    tags: ['Android', 'Web', 'Flutter', 'Cloud', 'ML', 'Virtual Event'],
  },
  {
    id: 17,
    title: 'Google Play Academy Study Jam – Store Listing Workshop',
    date: '2021-11-27',
    time: '4:00 PM',
    location: 'GDG Lucknow Community Venue',
    category: 'studyjam',
    attendees: '100',
    maxAttendees: '100',
    description: 'A hands-on workshop focused on optimizing Google Play Store listings, crafting effective app descriptions, and using Play Console experiments.',
    image: PlayAcademy2021,
    speakers: [
      { name: 'Google Play Experts', linkedin: '#' }
    ],
    tags: ['Google Play', 'App Store Optimization', 'Mobile Publishing'],
  },
  {
    id: 18,
    title: 'Road to Google Cloud Certification India',
    date: '2021-11-13',
    time: '6:00 PM',
    location: 'GDG Lucknow Community Venue',
    category: 'studyjam',
    attendees: '75',
    maxAttendees: '100',
    description: 'A 6‑week guided certification prep series for Google Cloud certifications including Associate Cloud Engineer, Professional Cloud Architect, and more.',
    image: CloudCertification2021,
    speakers: [
      { name: 'Google Cloud Experts', linkedin: '#' }
    ],
    tags: ['Google Cloud', 'Certification', 'Cloud Architecture', 'Professional Development'],
  },
  {
    id: 19,
    title: 'Play Academy Study Jam – Sustainable Business Growth',
    date: '2022-02-12',
    time: '4:00 PM',
    location: 'GDG Lucknow Community Venue',
    category: 'studyjam',
    attendees: '50',
    maxAttendees: '60',
    description: 'A workshop helping Android developers move beyond user acquisition toward sustainable engagement and long-term growth strategies.',
    image: PlayAcademyGrowth2022,
    speakers: [
      { name: 'Business Growth Experts', linkedin: '#' }
    ],
    tags: ['Google Play', 'Business Growth', 'User Engagement', 'App Development'],
  },
];

export const collaboratedEvents = [
  {
    id: 20,
    title: 'GDG Lucknow X Django India Meetup',
    date: '2025-03-29',
    time: '10:00 AM',
    location: 'IIIT Lucknow, Ahmamau, Lucknow',
    category: 'meetup',
    attendees: '80',
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
];