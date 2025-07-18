import { Mail, MapPin, Linkedin, Github, Instagram } from 'lucide-react';
import Arpit from '../assets/Arpit.png';
import Akshat from '../assets/Akshat.png';
import Abhishek from '../assets/Abhishek.png';
import whatsappIcon from '@/assets/whatsapp-icon.svg';

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
    icon: <Linkedin className="h-5 w-5" />,
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/google-developer-groups-lucknow',
    color: 'bg-blue-700 hover:bg-blue-800',
    type: 'lucide'
  },
  {
    icon: <Github className="h-5 w-5" />,
    name: 'GitHub',
    url: 'https://github.com/gdglucknow',
    color: 'bg-gray-800 hover:bg-gray-900',
    type: 'lucide'
  },
  {
    icon: <Instagram className="h-5 w-5" />,
    name: 'Instagram',
    url: 'https://instagram.com/gdglucknow',
    color: 'bg-pink-500 hover:bg-pink-600',
    type: 'lucide'
  },
  {
    icon: whatsappIcon,
    name: 'WhatsApp',
    url: 'https://chat.whatsapp.com/L5VMIIEiUz90gh5gcOC054?mode=ac_c',
    color: 'bg-green-500 hover:bg-green-600',
    type: 'image'
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
      email: 'asahu.m1608@gmail.com'
    }
  },
  {
    name: 'Arpit Bhatia',
    role: 'Core Member',
    image: Arpit,
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
    social: {
      github: 'Vadera007',
      linkedin: 'akshatvadera',
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
    answer: 'Most of our events are free to attend as we aim to make technology education accessible to all. However, some special workshops or conferences may have a registration fee.'
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