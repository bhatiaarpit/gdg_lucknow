import { Mail, MapPin, Twitter, Linkedin, Github, Instagram } from 'lucide-react';
import Arpit from '../assests/Arpit.png'; 
import Akshat from '../assests/Akshat.png';
import Abhishek from '../assests/Abhishek.png';


export const inquiryTypes = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'speaker', label: 'Speaker/Volunteer' },
  { value: 'partnership', label: 'Partnership' },
  { value: 'event', label: 'Event Collaboration' },
  { value: 'technical', label: 'Technical Support' },
  { value: 'media', label: 'Media/Press' }
];

export const contactInfo = [
  {
    icon: <Mail className="h-6 w-6 text-black" />,
    title: 'Email',
    value: 'lucknow.devs@gmail.com',
    description: 'Send us an email anytime',
    link: 'mailto:lucknow.devs@gmail.com'
  },
  {
    icon: <MapPin className="h-6 w-6 text-black" />,
    title: 'Location',
    value: 'Lucknow, Uttar Pradesh',
    description: 'Visit us at our events',
    link: 'https://maps.google.com/?q=Lucknow'
  },
];

export const socialLinks = [
  {
    icon: <Twitter className="h-5 w-5" />,
    name: 'Twitter',
    url: 'https://twitter.com/gdglucknow',
    color: 'bg-blue-500 hover:bg-blue-600'
  },
  {
    icon: <Linkedin className="h-5 w-5" />,
    name: 'LinkedIn',
    url: 'https://linkedin.com/company/gdglucknow',
    color: 'bg-blue-700 hover:bg-blue-800'
  },
  {
    icon: <Github className="h-5 w-5" />,
    name: 'GitHub',
    url: 'https://github.com/gdglucknow',
    color: 'bg-gray-800 hover:bg-gray-900'
  },
  {
    icon: <Instagram className="h-5 w-5" />,
    name: 'Instagram',
    url: 'https://instagram.com/gdglucknow',
    color: 'bg-pink-500 hover:bg-pink-600'
  }
];

export const teamMembers = [
  {
    name: 'Abhishek Sahu',
    role: 'Organizer',
    image: Abhishek,
    social: {
        github: 'ASahu16',
        linkedin: 'a-sahu16',
        twitter: 'iamsahu16',
        email: 'asahu.m1608@gmail.com'
      }
  },
  {
    name: 'Arpit Bhatia',
    role: 'Core Member',
    image: Arpit,
    email: 'arpitbhatia903@gmail.com'
  },
  {
    name: 'Akshat Vadera',
    role: 'Core Member',
    image: Akshat,
    social:  {
        github: 'Vadera007',
        linkedin: 'akshatvadera',
        twitter: 'akshat_vad88585',
        email: 'vaderaakshat0@gmail.com',
      }
  },
];

export const faqs = [
  {
    question: 'How can I become a speaker at your events?',
    answer: 'We welcome speakers from all backgrounds! Fill out the contact form with "Speaker/Volunteer" as the inquiry type, and tell us about your expertise and what you\'d like to share with our community.'
  },
  {
    question: 'Are your events free to attend?',
    answer: 'Yes, all our events are free to attend! We believe in making technology education accessible to everyone in our community.'
  },
  {
    question: 'How can I volunteer or help organize events?',
    answer: 'We\'re always looking for passionate volunteers! Contact us through the form or reach out directly to any of our team members.'
  },
  {
    question: 'Do you offer mentorship programs?',
    answer: 'We occasionally run mentorship programs. Follow our social media channels or subscribe to our newsletter to stay updated on upcoming opportunities.'
  }
];