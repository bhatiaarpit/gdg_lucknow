// aboutData.js - Data configuration for GDG Lucknow About page

export const stats = [
  { 
    icon: 'Users', 
    label: 'Active Members', 
    value: '2,500+', 
    color: 'text-blue-600', 
    bg: 'bg-blue-50' 
  },
  { 
    icon: 'Calendar', 
    label: 'Events Organized', 
    value: '15+', 
    color: 'text-green-600', 
    bg: 'bg-green-50' 
  },
  { 
    icon: 'Award', 
    label: 'Years Active', 
    value: '4+', 
    color: 'text-yellow-600', 
    bg: 'bg-yellow-50' 
  },
];

export const values = [
  {
    title: 'Learn Together',
    description: 'We believe in collaborative learning where everyone teaches and everyone learns.',
    icon: '🎓',
    color: 'blue'
  },
  {
    title: 'Build Innovation',
    description: 'Creating solutions that matter and making a positive impact on our community.',
    icon: '🚀',
    color: 'green'
  },
  {
    title: 'Share Knowledge',
    description: 'Open source mindset - sharing knowledge, code, and experiences with everyone.',
    icon: '💡',
    color: 'yellow'
  },
  {
    title: 'Connect & Grow',
    description: 'Building lasting relationships and growing together as a tech community.',
    icon: '🤝',
    color: 'red'
  }
];

export const tabContent = {
  story: {
    title: 'Our Story',
    content: [
      {
        type: 'paragraph',
        text: 'GDG Lucknow began in 2016 with a simple vision: to create a space where developers in Lucknow could come together, learn, and grow using Google technologies. What started as a small group of passionate individuals has now evolved into one of the most active tech communities in Uttar Pradesh.',
        className: 'text-lg sm:text-xl text-gray-700 leading-relaxed'
      },
      {
        type: 'paragraph',
        text: 'Our journey has been marked by continuous learning, innovation, and community building. We\'ve organized numerous DevFests, study jams, workshops, and meetups that have helped thousands of developers enhance their skills and build meaningful connections.',
        className: 'text-gray-600 leading-relaxed'
      },
      {
        type: 'paragraph',
        text: 'Today, we\'re proud to be a diverse community that welcomes developers of all skill levels - from students taking their first steps in programming to experienced professionals sharing their expertise. Our mission remains the same: to foster a culture of learning, sharing, and building together.',
        className: 'text-gray-600 leading-relaxed'
      }
    ]
  },
  mission: {
    title: 'Mission & Vision',
    content: [
      {
        type: 'card',
        title: 'Our Mission',
        text: 'To empower developers in Lucknow and surrounding regions by providing access to cutting-edge Google technologies, fostering innovation, and building a supportive community that encourages learning, sharing, and collaboration.',
        className: 'bg-gradient-to-r from-blue-50 to-green-50'
      },
      {
        type: 'card',
        title: 'Our Vision',
        text: 'To be the leading technology community in Northern India, known for nurturing talent, driving innovation, and creating opportunities that connect local developers with global technologies and opportunities.',
        className: 'bg-gradient-to-r from-red-50 to-yellow-50'
      }
    ]
  },
  values: {
    title: 'Our Values',
    content: values
  }
};

export const heroContent = {
  title: 'About GDG Lucknow',
  subtitle: 'Empowering developers, fostering innovation, and building the future of technology in the heart of Uttar Pradesh since 2021.',
  logo: {
    src: '/assets/gdgLogo.svg',
    alt: 'GDG Logo',
    width: 96,
    height: 96
  }
};

export const ctaContent = {
  title: 'Ready to Join Our Community?',
  subtitle: 'Be part of something bigger. Connect with fellow developers, learn new technologies, and contribute to the growing tech ecosystem in Lucknow.',
  buttons: [
    {
      text: 'Join GDG Lucknow',
      type: 'primary',
      icon: 'ChevronRight'
    },
    {
      text: 'Visit Our Events',
      type: 'secondary',
      icon: 'ExternalLink'
    }
  ]
};