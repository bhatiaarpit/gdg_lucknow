'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Users, Calendar, ExternalLink, Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        inquiryType: 'general'
      });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(''), 5000);
    }, 2000);
  };

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'speaker', label: 'Speaker/Volunteer' },
    { value: 'partnership', label: 'Partnership' },
    { value: 'event', label: 'Event Collaboration' },
    { value: 'technical', label: 'Technical Support' },
    { value: 'media', label: 'Media/Press' }
  ];

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      value: 'hello@gdglucknow.dev',
      description: 'Send us an email anytime',
      link: 'mailto:hello@gdglucknow.dev'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      value: '+91 98765 43210',
      description: 'Call us during office hours',
      link: 'tel:+919876543210'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Location',
      value: 'Lucknow, Uttar Pradesh',
      description: 'Visit us at our events',
      link: 'https://maps.google.com/?q=Lucknow'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Office Hours',
      value: 'Mon - Fri: 9 AM - 6 PM',
      description: 'We typically respond within 24 hours',
      link: null
    }
  ];

  const socialLinks = [
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

  const teamMembers = [
    {
      name: 'Rahul Sharma',
      role: 'Organizer',
      image: '/api/placeholder/100/100',
      email: 'rahul@gdglucknow.dev'
    },
    {
      name: 'Priya Gupta',
      role: 'Co-Organizer',
      image: '/api/placeholder/100/100',
      email: 'priya@gdglucknow.dev'
    },
    {
      name: 'Amit Kumar',
      role: 'Tech Lead',
      image: '/api/placeholder/100/100',
      email: 'amit@gdglucknow.dev'
    },
    {
      name: 'Neha Srivastava',
      role: 'Community Manager',
      image: '/api/placeholder/100/100',
      email: 'neha@gdglucknow.dev'
    }
  ];

  const faqs = [
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-green-600 to-red-600 bg-clip-text text-transparent">
                Get in Touch
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions, ideas, or want to collaborate? We'd love to hear from you. Reach out to our team and join our growing community.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a message</h2>
              <p className="text-gray-600">Fill out the form below and we'll get back to you as soon as possible.</p>
            </div>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-green-800 font-medium">Message sent successfully! We'll get back to you soon.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                  Inquiry Type
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {inquiryTypes.map(type => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Brief subject line"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-blue-600 hover:text-blue-800 font-medium block mb-1"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-700 font-medium mb-1">{info.value}</p>
                      )}
                      <p className="text-sm text-gray-600">{info.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow us on social media</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-lg text-white transition-colors duration-200 ${social.color}`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Team Members */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Meet our team</h3>
              <div className="grid grid-cols-2 gap-4">
                {teamMembers.map((member, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <Users className="h-8 w-8 text-gray-400" />
                    </div>
                    <h4 className="font-semibold text-gray-900 text-sm">{member.name}</h4>
                    <p className="text-xs text-gray-600 mb-1">{member.role}</p>
                    <a
                      href={`mailto:${member.email}`}
                      className="text-blue-600 hover:text-blue-800 text-xs"
                    >
                      {member.email}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Quick answers to common questions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 via-green-600 to-red-600 rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to join our community?</h2>
          <p className="text-xl text-white mb-6">Don't miss out on our upcoming events and resources</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>View Events</span>
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2">
              <MessageCircle className="h-5 w-5" />
              <span>Join Community</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;