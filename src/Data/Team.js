import Arpit from '../assets/Arpit.png'; 
import Akshat from '../assets/Akshat.png';
import Abhishek from '../assets/Abhishek.png';

export const teamData = {
  organizers: [
    {
      name: 'Abhishek Sahu',
      role: 'Organizer',
      image: Abhishek,
      company: 'Kellton',
      status: 'Professional',
      social: {
        github: 'ASahu16',
        linkedin: 'a-sahu16',
        email: 'asahu.m1608@gmail.com'
      }
    }
  ],
  
  coreTeam: [
    {
      name: 'Arpit Bhatia',
      role: 'Core Member',
      image: Arpit,
      company: 'Marmeto',
      status: 'Professional',
      social: {
        github: 'bhatiaarpit',
        linkedin: 'bhatiaarpit',
        email: 'arpitbhatia903@gmail.com'
      }
    },
    {
      name: 'Akshat Vadera',
      role: 'Core Member',
      image: Akshat,
      company: 'DevSolutions',
      status: 'Student',
      social:  {
        github: 'Vadera007',
        linkedin: 'akshatvadera',
        email: 'vaderaakshat0@gmail.com',
      }
    },
  ],
  
  volunteers: [
    // {
    //   name: 'Ravi Tiwari',
    //   role: 'Event Coordinator',
    //   image: '/api/placeholder/150/150',
    //   university: 'BBAU Lucknow',
    //   status: 'Student',
    //   social: {
    //     linkedin: 'ravi-tiwari-volunteer',
    //     email: 'ravi@gdglucknow.org'
    //   }
    // },
  ]
};

export const stats = [
  { 
    icon: 'Users', 
    label: 'Team Members', 
    value: '12+', 
    color: 'text-blue-600', 
    bg: 'bg-blue-50' 
  },
  { 
    icon: 'Star', 
    label: 'Years Active', 
    value: '4+', 
    color: 'text-green-600', 
    bg: 'bg-green-50' 
  },
  { 
    icon: 'Award', 
    label: 'Events Organized', 
    value: '15+', 
    color: 'text-red-600', 
    bg: 'bg-red-50' 
  },
  { 
    icon: 'Heart', 
    label: 'Volunteer Hours', 
    value: '1000+', 
    color: 'text-purple-600', 
    bg: 'bg-purple-50' 
  }
];