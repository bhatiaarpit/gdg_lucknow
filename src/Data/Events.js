const IWD2025 = '/events/iwd.jpg';
const Devfest2024 = '/events/devfest.jpeg';
const GoogleIO2024 = '/events/googleio.jpg';
const Django2025 = '/events/djangomeetup.jpg';
const BuildwithAI = '/events/buildwithai.png';
const DevFest2025 = '/events/devfest2025.png';
const GoogleIO2025 = '/events/googleio2025.png';

export const categories = [
  { id: 'all', name: 'All Events', color: 'bg-gray-100 text-gray-700' },
  { id: 'workshop', name: 'Workshops', color: 'bg-blue-100 text-blue-700' },
  { id: 'meetup', name: 'Meetups', color: 'bg-green-100 text-green-700' },
  { id: 'conference', name: 'Conferences', color: 'bg-red-100 text-red-700' },
  { id: 'hackathon', name: 'Hackathons', color: 'bg-yellow-100 text-yellow-700' },
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
    category: 'meetup',
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
    id: 5,
    title: 'Build with AI',
    date: '2025-04-19',
    time: '12:00 PM',
    location: 'Shri Ramswaroop College Of Engineering and Management',
    category: 'workshop',
    attendees: '100',
    maxAttendees: '100',
    description: 'Go-to place for learning the latest AI tools and integrating them into your projects seamlessly.',
    image: BuildwithAI,
    speakers: [
      { name: 'Imran Roshan', linkedin: 'https://www.linkedin.com/in/imranfosec/' },
      { name: 'Uzma Mansoori', linkedin: 'https://www.linkedin.com/in/uzmamansoori/' }
    ],
    tags: ['ML', 'Python', 'AI'],
    // recordingLink: '#',
    // slidesLink: '#',
  },
  {
    id: 6,
    title: "International Women's Day Lucknow",
    date: '2025-03-08',
    time: '10:00 AM',
    location: 'Integral University',
    category: 'meetup',
    attendees: '147',
    maxAttendees: '150',
    description: 'The future of tech isn’t written yet—women are holding the pen',
    image: IWD2025,
    speakers: [
      { name: 'Arti Verma', linkedin: '#' },
      { name: 'Uzma Mansoori', linkedin: 'https://www.linkedin.com/in/uzmamansoori/' },
      { name: 'Sarita Nirjhra', linkedin: 'https://www.linkedin.com/in/sarita-nirjhra-996856167/' },
      { name: 'Vandana Sharma', linkedin: 'https://www.linkedin.com/in/vandanastartup/' }
    ],
    tags: ['WomenInTech', 'ML', 'Python', 'AI'],
  },
  {
    id: 7,
    title: 'DevFest 2024',
    date: '2024-11-24',
    time: '10:00 AM',
    location: 'The Regnant',
    category: 'meetup',
    attendees: '428',
    maxAttendees: '430',
    description:
      "Imagine a place where cutting-edge innovation meets passionate minds, where industry leaders share the stage with rising stars, and where the next big idea could be born. That's DevFest Lucknow for you!",
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
    tags: ['ML', 'Python', 'AI']
  },
  {
    id: 8,
    title: 'Google IO Extended 2024',
    date: '2024-08-31',
    time: '10:00 AM',
    location: 'Integral University',
    category: 'meetup',
    attendees: '170',
    maxAttendees: '170',
    description: 'Dive into the future of tech with Google I/O Extended Lucknow!',
    image: GoogleIO2024,
    speakers: [
      { name: 'Vanshita Singh', linkedin: 'https://www.linkedin.com/in/vanshify/' },
      { name: 'Mritunjay Sharma', linkedin: 'https://www.linkedin.com/in/mritunjay394/' },
      { name: 'Aryendra Prakash Singh', linkedin: 'https://www.linkedin.com/in/hashtagaps/' },
      { name: 'Akash Verma', linkedin: 'https://www.linkedin.com/in/therockakash/' }
    ],
    tags: ['ML', 'Python', 'AI']
  },
];

export const collaboratedEvents = [
  {
    id: 9,
    title: 'GDG Lucknow X Django India Meetup',
    date: '2025-03-29',
    time: '10:00 AM',
    location: 'IIIT Lucknow',
    category: 'Meetup',
    attendees: '80',
    maxAttendees: '100',
    description: 'Annual tech summit bringing together industry leaders and developers',
    image: Django2025,
    speakers: [
      { name: 'Multiple Industry Leaders', linkedin: '#' }
    ],
    tags: ['Technology', 'Innovation', 'Networking'],
    collaborator: 'Django India',
  },
];
