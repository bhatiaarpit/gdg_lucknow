'use client';

import Link from 'next/link';
import { 
  Mail, 
  MapPin, 
  Calendar, 
  Github, 
  Twitter, 
  Linkedin, 
  Instagram,
  Youtube,
  ExternalLink,
  Heart,
  ArrowRight
} from 'lucide-react';
import Image from 'next/image';
import gdgLogo from '@/assests/gdgLogo.svg'; 

const Footer = () => {
  const quickLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/events', label: 'Events' },
    { href: '/team', label: 'Team' },
    { href: '/blog', label: 'Blog' },
    { href: '/resources', label: 'Resources' },
    { href: '/contact', label: 'Contact' },
  ];

  const communityLinks = [
    { href: '/join', label: 'Join Community' },
    { href: '/volunteer', label: 'Become Volunteer' },
    { href: '/speaker', label: 'Speak at Event' },
    { href: '/sponsor', label: 'Sponsor Us' },
    { href: '/code-of-conduct', label: 'Code of Conduct' },
    { href: '/privacy', label: 'Privacy Policy' },
  ];

  const socialLinks = [
    { 
      href: 'https://twitter.com/gdglucknow', 
      icon: Twitter, 
      label: 'Twitter',
      color: 'hover:text-blue-500'
    },
    { 
      href: 'https://linkedin.com/company/gdglucknow', 
      icon: Linkedin, 
      label: 'LinkedIn',
      color: 'hover:text-blue-600'
    },
    { 
      href: 'https://github.com/gdglucknow', 
      icon: Github, 
      label: 'GitHub',
      color: 'hover:text-gray-900'
    },
    { 
      href: 'https://instagram.com/gdglucknow', 
      icon: Instagram, 
      label: 'Instagram',
      color: 'hover:text-pink-500'
    },
    { 
      href: 'https://youtube.com/gdglucknow', 
      icon: Youtube, 
      label: 'YouTube',
      color: 'hover:text-red-500'
    },
  ];

  const upcomingEvents = [
    {
      title: 'Android Development Workshop',
      date: 'July 15, 2024',
      type: 'Workshop'
    },
    {
      title: 'Cloud Study Jam',
      date: 'July 22, 2024',
      type: 'Study Jam'
    },
    {
      title: 'DevFest Lucknow 2024',
      date: 'November 16, 2024',
      type: 'Conference'
    }
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-15 h-15 flex items-center justify-center bg-white rounded-full overflow-hidden border-1 border-black shadow-lg">
                <Image
                  src={gdgLogo}
                  alt="GDG Logo"
                  width={96}
                  height={96}
                  priority
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">GDG Lucknow</h3>
                <p className="text-sm text-gray-600">Developer Community</p>
              </div>
            </div>
            
            <p className="text-gray-600 text-sm leading-relaxed">
              We&apos;re a community of developers, designers, and tech enthusiasts in Lucknow, 
              passionate about Google technologies and building innovative solutions together.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <MapPin className="h-4 w-4 text-red-500" />
                <span>Lucknow, Uttar Pradesh, India</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <Mail className="h-4 w-4 text-blue-500" />
                <a href="mailto:hello@gdglucknow.com" className="hover:text-blue-600 transition-colors">
                  hello@gdglucknow.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <Calendar className="h-4 w-4 text-green-500" />
                <span>Events every weekend</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-gray-900">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm flex items-center space-x-2 group"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-gray-900">Community</h4>
            <ul className="space-y-3">
              {communityLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-green-600 transition-colors duration-200 text-sm flex items-center space-x-2 group"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Upcoming Events */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-gray-900">Upcoming Events</h4>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                  <h5 className="font-medium text-gray-900 text-sm mb-1">{event.title}</h5>
                  <p className="text-xs text-gray-600 mb-2">{event.date}</p>
                  <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                    event.type === 'Workshop' ? 'bg-blue-100 text-blue-700' :
                    event.type === 'Study Jam' ? 'bg-green-100 text-green-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {event.type}
                  </span>
                </div>
              ))}
            </div>
            <Link
              href="/events"
              className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center space-x-2 group"
            >
              <span>View all events</span>
              <ExternalLink className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Social media and newsletter */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            
            {/* Social Links */}
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
              <span className="text-gray-700 font-medium">Connect with us:</span>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 ${social.color} transition-colors duration-200 p-2 rounded-full hover:bg-white`}
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <span className="text-gray-700 font-medium">Stay updated:</span>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col space-y-4 md:flex-row md:justify-between md:items-center md:space-y-0">
            <div className="flex flex-col items-center space-y-2 text-sm text-gray-600 md:flex-row md:items-center md:space-y-0 md:space-x-4">
              <span className="text-center">© 2024 GDG Lucknow. All rights reserved.</span>
              <span className="hidden md:block">•</span>
              <span className="flex items-center justify-center space-x-1">
                <span>Made with</span>
                <Heart className="h-4 w-4 text-red-500 animate-pulse" />
                <span>in Lucknow</span>
              </span>
            </div>
            
            <div className="flex flex-col items-center space-y-2 text-sm sm:flex-row sm:items-center sm:space-y-0 sm:space-x-6">
              <a href="https://developers.google.com/community/gdg" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center space-x-1">
                <span>Google Developers</span>
                <ExternalLink className="h-3 w-3" />
              </a>
              <a href="https://gdg.community.dev/gdg-lucknow" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600 transition-colors flex items-center space-x-1">
                <span>GDG Community</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;