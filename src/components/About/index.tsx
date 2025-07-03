'use client';

import { useState } from 'react';
import { Users, Calendar, MapPin, Code, Heart, Award, Globe, ChevronRight, ExternalLink } from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState('story');

  const stats = [
    { icon: Users, label: 'Active Members', value: '2,500+', color: 'text-blue-600', bg: 'bg-blue-50' },
    { icon: Calendar, label: 'Events Organized', value: '150+', color: 'text-green-600', bg: 'bg-green-50' },
    { icon: Code, label: 'Projects Built', value: '80+', color: 'text-red-600', bg: 'bg-red-50' },
    { icon: Award, label: 'Years Active', value: '8+', color: 'text-yellow-600', bg: 'bg-yellow-50' },
  ];

  const values = [
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

  const timeline = [
    {
      year: '2016',
      title: 'GDG Lucknow Founded',
      description: 'Started as a small group of passionate developers wanting to learn Google technologies.',
      milestone: true
    },
    {
      year: '2017',
      title: 'First DevFest',
      description: 'Organized our first DevFest with 200+ attendees and 15 speakers.',
      milestone: false
    },
    {
      year: '2018',
      title: 'Women Techmakers Launch',
      description: 'Launched Women Techmakers Lucknow to support women in technology.',
      milestone: true
    },
    {
      year: '2019',
      title: 'Community Growth',
      description: 'Crossed 1000 members and started regular monthly meetups.',
      milestone: false
    },
    {
      year: '2020',
      title: 'Virtual Pivot',
      description: 'Successfully transitioned to virtual events during pandemic, reaching global audience.',
      milestone: true
    },
    {
      year: '2021',
      title: 'Hybrid Events',
      description: 'Introduced hybrid events combining in-person and virtual experiences.',
      milestone: false
    },
    {
      year: '2022',
      title: 'Open Source Focus',
      description: 'Launched multiple open source initiatives and hacktober fest celebrations.',
      milestone: true
    },
    {
      year: '2023',
      title: 'Industry Partnerships',
      description: 'Established partnerships with local startups and tech companies.',
      milestone: false
    },
    {
      year: '2024',
      title: 'Present Day',
      description: 'Thriving community of 2500+ members with weekly events and workshops.',
      milestone: true
    }
  ];

  const tabContent = {
    story: (
      <div className="space-y-8">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed">
            GDG Lucknow began in 2016 with a simple vision: to create a space where developers in Lucknow could come together, learn, and grow using Google technologies. What started as a small group of passionate individuals has now evolved into one of the most active tech communities in Uttar Pradesh.
          </p>
          
          <p className="text-gray-600 leading-relaxed">
            Our journey has been marked by continuous learning, innovation, and community building. We've organized numerous DevFests, study jams, workshops, and meetups that have helped thousands of developers enhance their skills and build meaningful connections.
          </p>
          
          <p className="text-gray-600 leading-relaxed">
            Today, we're proud to be a diverse community that welcomes developers of all skill levels - from students taking their first steps in programming to experienced professionals sharing their expertise. Our mission remains the same: to foster a culture of learning, sharing, and building together.
          </p>
        </div>
      </div>
    ),
    mission: (
      <div className="space-y-8">
        <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            To empower developers in Lucknow and surrounding regions by providing access to cutting-edge Google technologies, fostering innovation, and building a supportive community that encourages learning, sharing, and collaboration.
          </p>
        </div>
        
        <div className="bg-gradient-to-r from-red-50 to-yellow-50 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            To be the leading technology community in Northern India, known for nurturing talent, driving innovation, and creating opportunities that connect local developers with global technologies and opportunities.
          </p>
        </div>
      </div>
    ),
    values: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {values.map((value, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="text-4xl mb-4">{value.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
            <p className="text-gray-600 leading-relaxed">{value.description}</p>
          </div>
        ))}
      </div>
    )
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-green-100/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 via-red-500 via-yellow-500 to-green-500 rounded-full flex items-center justify-center shadow-xl">
                <span className="text-white font-bold text-3xl">G</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
              About <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">GDG Lucknow</span>
            </h1>
            
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Empowering developers, fostering innovation, and building the future of technology in the heart of Uttar Pradesh since 2016.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`inline-flex p-4 rounded-2xl ${stat.bg} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-2xl p-2 shadow-lg">
              {Object.keys(tabContent).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            {tabContent[activeTab]}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">From humble beginnings to a thriving community</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-green-600"></div>

            {timeline.map((item, index) => (
              <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className={`bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                    item.milestone ? 'ring-2 ring-blue-600/20' : ''
                  }`}>
                    <div className={`text-sm font-semibold mb-2 ${
                      item.milestone ? 'text-blue-600' : 'text-gray-500'
                    }`}>
                      {item.year}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full ${
                  item.milestone ? 'bg-blue-600' : 'bg-gray-400'
                } border-4 border-white shadow-lg`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="flex justify-center">
              <Heart className="h-16 w-16 text-white animate-pulse" />
            </div>
            
            <h2 className="text-4xl font-bold text-white">
              Ready to Join Our Community?
            </h2>
            
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Be part of something bigger. Connect with fellow developers, learn new technologies, and contribute to the growing tech ecosystem in Lucknow.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center space-x-2 group">
                <span>Join GDG Lucknow</span>
                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 flex items-center justify-center space-x-2">
                <ExternalLink className="h-5 w-5" />
                <span>Visit Our Events</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;