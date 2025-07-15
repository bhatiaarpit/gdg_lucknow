'use client';

// import { useState } from 'react';
import Image from 'next/image';
import gdgLogo from '@/assets/gdgLogo.svg'; 
import { Users, Calendar, Heart, Award, ExternalLink, Code, Lightbulb, Share2, Network, Handshake, BookOpen, Star, ChevronRight } from 'lucide-react';
const About = () => {
  // Sample data - replace with your actual data
  const stats = [
    { value: '2500+', label: 'Community Members', icon: 'Users', bg: 'bg-blue-100', color: 'text-blue-600' },
    { value: '15+', label: 'Events Hosted', icon: 'Calendar', bg: 'bg-green-100', color: 'text-green-600' },
    { value: '50+', label: 'Projects Built', icon: 'Award', bg: 'bg-purple-100', color: 'text-purple-600' }
  ];

   const values = [
    {
      icon: 'Handshake',
      title: 'Learn Together',
      description: 'We grow together by learning from each other — creating a welcoming space where curiosity sparks discovery, and everyone\'s knowledge fuels our collective journey.'
    },
    {
      icon: 'Lightbulb',
      title: 'Build Innovation',
      description: 'We turn bold ideas into real solutions — driving innovation that matters through creativity, curiosity, and a passion for positive impact.'
    },
    {
      icon: 'BookOpen',
      title: 'Share Knowledge',
      description: 'Inspired by open source, we believe knowledge multiplies when shared. By exchanging code, ideas, and experiences, we empower each other to reach new heights.'
    },
    {
      icon: 'Star',
      title: 'Connect & Grow',
      description: 'We thrive on genuine connections — building friendships, mentoring one another, and growing together as a vibrant tech family.'
    }
  ];

  const iconMap = {
    Users: Users,
    Calendar: Calendar,
    Award: Award,
    Heart: Heart,
    ChevronRight: ChevronRight,
    ExternalLink: ExternalLink,
    Code: Code,
    Lightbulb: Lightbulb,
    Share2: Share2,
    Network: Network,
    Handshake: Handshake,
    BookOpen: BookOpen,
    Star: Star
  };
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-12 sm:py-16 lg:py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-green-100/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 sm:space-y-8">
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="flex justify-center mb-6">
              <div className="w-24 h-24 flex items-center justify-center bg-white rounded-full overflow-hidden border-1 border-black shadow-lg">
                <Image
                  src={gdgLogo}
                  alt="GDG Logo"
                  width={96}
                  height={96}
                  priority
                  className="object-contain"
                />
              </div>
            </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 px-4">
              About <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">GDG Lucknow</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed px-4">
              Google Developer Group Lucknow is a vibrant, volunteer-driven tech community established in 2021 with a mission to empower developers, designers, students, and tech enthusiasts across Uttar Pradesh.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => {
              const IconComponent = iconMap[stat.icon as keyof typeof iconMap];
              return (
                <div key={index} className="text-center group">
                  <div className={`inline-flex p-3 sm:p-4 rounded-2xl ${stat.bg} mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`h-6 w-6 sm:h-8 sm:w-8 ${stat.color}`} />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-600 px-2">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Content - Simplified */}
      <section className=" bg-gray-50">
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Main Description */}
            <div className="bg-white rounded-2xl p-6 sm:p-8">
              <div className="prose prose-lg max-w-none text-center">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We believe in learning through collaboration. From beginner-friendly workshops and hackathons to advanced AI/ML bootcamps and cloud sessions — we create spaces for innovation, networking, and real-world problem-solving.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our community brings together passionate individuals who are eager to explore Google technologies, grow their skill sets, and build meaningful tech for social good. Whether you&apos;re looking to upskill, collaborate, or contribute — GDG Lucknow welcomes you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="inline-flex p-3 rounded-full bg-blue-100 mb-4">
                  <Lightbulb className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-center">
                To empower developers across Lucknow and neighboring regions by providing hands-on access to Google technologies, fostering a spirit of innovation, and nurturing a collaborative community rooted in continuous learning, inclusivity, and growth.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="inline-flex p-3 rounded-full bg-green-100 mb-4">
                  <Network className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-center">
                To become Northern India&apos;s most vibrant and impactful tech community — known for cultivating talent, driving real-world innovation, and connecting developers locally and globally through meaningful opportunities and shared purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

       <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {values.map((value, index) => {
              const IconComponent = iconMap[value.icon as keyof typeof iconMap];
              return (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border">
                  <div className="text-center mb-4">
                    <div className="inline-flex p-3 rounded-full bg-blue-100 mb-2">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-center">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6 sm:space-y-8">
            <div className="flex justify-center">
              <Heart className="h-12 w-12 sm:h-16 sm:w-16 text-white animate-pulse" />
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-white px-4">
              Become a Part of Something Bigger <br/>GDG Lucknow Awaits!
            </h2>
            
            {/* <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto px-4">
              Connect. Learn. Build. <br/>Join hands with developers, designers, and tech enthusiasts driving innovation in Lucknow. Discover tools, meet mentors, and be part of something transformative.
            </p> */}
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
               <a
              href="https://chat.whatsapp.com/L5VMIIEiUz90gh5gcOC054?mode=ac_c"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 group shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <span>Join Our Community</span>
              <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
              {/* <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-colors duration-300 flex items-center justify-center space-x-2 group w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-blue-600">
                <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>Learn More</span>
              </button> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;