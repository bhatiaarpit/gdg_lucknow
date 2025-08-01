'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Calendar, Users, MapPin, ExternalLink, Play, Code, Lightbulb } from 'lucide-react';
import Image from 'next/image';
import gdgLogo from '@/assets/gdg.png';

const Hero = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const heroStats = [
    { icon: Users, label: 'Community Members', value: '2,500+', color: 'text-blue-600' },
    { icon: Calendar, label: 'Events Hosted', value: '15+', color: 'text-green-600' },
    { icon: MapPin, label: 'Years Active', value: '4+', color: 'text-red-600' },
  ];

  const features = [
    {
      icon: Code,
      title: 'Learn & Build',
      description: 'Hands-on workshops and coding sessions with latest Google technologies',
      color: 'blue',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      borderColor: 'border-blue-200'
    },
    {
      icon: Users,
      title: 'Connect & Network',
      description: 'Meet like-minded developers and build lasting professional relationships',
      color: 'green',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
      borderColor: 'border-green-200'
    },
    {
      icon: Lightbulb,
      title: 'Innovate & Share',
      description: 'Share your ideas, contribute to open source, and shape the future',
      color: 'yellow',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-600',
      borderColor: 'border-yellow-200'
    }
  ];

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className={`text-center space-y-8 mb-16 transition-all duration-1000 `}>
          <div className="flex justify-center m-0">
            <div className="relative group">
              <div className="flex items-center justify-center bg-white border-gray-100 transition-all">
                <Image
                  src={gdgLogo}
                  alt="GDG Lucknow Logo"
                  width={100}
                  height={100}
                  priority
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Improved title hierarchy */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Welcome to</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 tracking-tight">
                <span className="text-blue-600">Google Developer Groups</span>
                <br />
                <span className="text-gray-800">Lucknow</span>
              </h1>
            </div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Join Lucknow&apos;s most active developer community. Learn, build, and grow with Google technologies.
            </p>
          </div>

          {/* Clearer call-to-action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://gdg.community.dev/gdg-lucknow/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 min-w-[200px] justify-center"
            >
              <span>Join Community</span>
              <ExternalLink className="h-5 w-5 group-hover:scale-110 transition-transform" />
            </a>
            <Link
              href="/events"
              className="group border-2 border-gray-300 text-gray-700 bg-white hover:border-blue-600 hover:text-blue-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 min-w-[200px] justify-center"
            >
              <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span>View Events</span>
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {heroStats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex justify-center mb-4">
                <div className={`p-3 rounded-full ${index === 0 ? 'bg-blue-100' : index === 1 ? 'bg-green-100' : 'bg-red-100'}`}>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer border-2 ${hoveredCard === index
                  ? `${feature.bgColor} ${feature.borderColor} shadow-2xl`
                  : 'bg-white border-gray-200 hover:shadow-xl'
                }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`inline-flex p-3 rounded-full mb-6 transition-all duration-300 ${hoveredCard === index ? 'bg-white shadow-lg' : feature.bgColor
                }`}>
                <feature.icon className={`h-8 w-8 ${feature.textColor}`} />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
