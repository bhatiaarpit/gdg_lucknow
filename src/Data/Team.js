import Arpit from '../assets/Arpit.png';
import Abhishek from '../assets/Abhishek.png';
import Ishika from '../assets/Ishika.png';
import Chetan from '../assets/Chetan.png';
import Akshay from '../assets/Akshay.png';
import Arima from '../assets/Arima.png';
import Ishaan from '../assets/Ishaan.png';
import Ishita from '../assets/Ishita.png';
import Rakhshan from '../assets/Rakhshan.png';
import Suryansh from '../assets/Suryansh.png';

// Add team members here. Each member needs:
//   name     - Full name (required)
//   role     - Role/title in the team (required)
//   image    - Imported image or path string (required)
//   company  - Company or university name (required)
//   status   - 'Professional' or 'Student' (required)
//   about    - Short bio/description (optional, leave '' to hide)
//   social   - Object with:
//       linkedin - LinkedIn username (required)
//       github   - GitHub username (optional)
//       email    - Email address (optional)

export const teamMembers = [
  {
    name: 'Abhishek Sahu',
    role: 'Organizer',
    image: Abhishek,
    company: 'Kellton',
    status: 'Professional',
    about: '',
    social: {
      github: 'ASahu16',
      linkedin: 'a-sahu16',
      email: 'asahu.m1608@gmail.com'
    }
  },
  {
    name: 'Arpit Bhatia',
    role: 'Core Member',
    image: Arpit,
    company: 'Marmeto',
    status: 'Professional',
    about: '',
    social: {
      github: 'bhatiaarpit',
      linkedin: 'bhatiaarpit',
      email: 'arpitbhatia903@gmail.com',
    }
  },
  {
    name: 'Ishika Bhatnagar',
    role: 'Core MemberVolunt',
    image: Ishika,
    company: 'GETI',
    status: 'Professional',
    about: '',
    social: {
      github: 'ishika1323',
      linkedin: 'ishika-bhatnagar-67020a17b',
      email: 'ishikabhatnagar23@gmail.com',
    }
  },
  {
    name: 'Suryansh Rai',
    role: 'Volunteer',
    image: Suryansh,
    company: 'GETI',
    status: 'Professional',
    about: '',
    social: {
      github: 'SURYANSH-RAI',
      linkedin: 'suryansh-rai',
      email: 'suryanshrai1042003@gmail.com',
    }
  },
  {
    name: 'Ishita Singh',
    role: 'Content Lead',
    image: Ishita,
    company: 'GDG Basic Funde Clear',
    status: 'Professional',
    about: '',
    social: {
      linkedin: 'ishita-singh-81a0aa19b',
    }
  },
  {
    name: 'Rakhshan Hussain',
    role: 'Volunteer',
    image: Rakhshan,
    company: 'Integral University',
    status: 'Student',
    about: '',
    social: {
      linkedin: 'rakhshanhussain',
    }
  },
  {
    name: 'Ishan Parashar',
    role: 'Volunteer',
    image: Ishaan,
    company: 'BBD Lucknow',
    status: 'Student',
    about: '',
    social: {
      github: 'ishanparashar24',
      linkedin: 'ishanparashar24',
    }
  },
  {
    name: 'Arima Nimang',
    role: 'Volunteer',
    image: Arima,
    company: 'IET Lucknow',
    status: 'Student',
    about: '',
    social: {
      linkedin: 'arima-nimang-b55719348',
    }
  },
  {
    name: 'Chetan Kimothi',
    role: 'Volunteer',
    image: Chetan,
    company: 'Absolute',
    status: 'Professional',
    about: '',
    social: {
      linkedin: 'chetan-kimothi',
    }
  },
  {
    name: 'Akshay Kimothi',
    role: 'Volunteer',
    image: Akshay,
    company: 'Roundglass Living',
    status: 'Professional',
    about: '',
    social: {
      linkedin: 'akshay-kimothi-a27353179',
    }
  },
];

export const stats = [
  {
    icon: 'Users',
    label: 'Team Members',
    value: '30+',
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
