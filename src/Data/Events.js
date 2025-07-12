// eventsData.js
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
    title: 'DevFest 2025',
    date: 'TBD',
    time: '10:00 AM',
    location: 'TBD',
    category: 'conference',
    attendees: 'TBD',
    maxAttendees: 'TBD',
    description: 'Learn modern Android development with Kotlin and Jetpack Compose',
    image: '/api/placeholder/400/200',
    speaker: 'Rahul Sharma',
    tags: ['Android', 'Kotlin', 'Jetpack Compose'],
    registrationLink: '#',
    featured: true
  },
];

export const pastEvents = [
  {
    id: 5,
    title: 'Machine Learning Fundamentals',
    date: '2024-06-15',
    time: '2:00 PM',
    location: 'University of Lucknow',
    category: 'workshop',
    attendees: 55,
    maxAttendees: 60,
    description: 'Introduction to ML concepts and practical implementations',
    image: '/api/placeholder/400/200',
    speaker: 'Dr. Amit Kumar',
    tags: ['ML', 'Python', 'AI'],
    recordingLink: '#',
    slidesLink: '#'
  }
];

export const collaboratedEvents = [
  {
    id: 8,
    title: 'Tech Summit 2024',
    date: '2024-07-20',
    time: '9:00 AM',
    location: 'India Expo Mart, Greater Noida',
    category: 'conference',
    attendees: 350,
    maxAttendees: 400,
    description: 'Annual tech summit bringing together industry leaders and developers',
    image: '/api/placeholder/400/200',
    speaker: 'Multiple Industry Leaders',
    tags: ['Technology', 'Innovation', 'Networking'],
    recordingLink: '#',
    slidesLink: '#',
    collaborator: 'TechCorp India & Delhi Tech Community',
    collaboratorLogo: '/api/placeholder/40/40'
  }
];