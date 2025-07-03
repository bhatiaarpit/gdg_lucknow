'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Calendar, Users, MapPin, ArrowRight, Play, Code, Lightbulb } from 'lucide-react';
import Image from 'next/image';
import gdgLogo from '@/assests/gdgLogo.svg'; // Adjust path if needed

const Hero = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const heroStats = [
    { icon: Users, label: 'Community Members', value: '2,500+', color: 'text-blue-600' },
    { icon: Calendar, label: 'Events Hosted', value: '150+', color: 'text-green-600' },
    { icon: MapPin, label: 'Years Active', value: '8+', color: 'text-red-600' },
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
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100 rounded-full blur-3xl animate-pulse opacity-40"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-100 rounded-full blur-3xl animate-pulse opacity-30 animation-delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-red-100 rounded-full blur-3xl animate-pulse opacity-35 animation-delay-500"></div>
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-yellow-100 rounded-full blur-3xl animate-pulse opacity-25 animation-delay-1500"></div>
      </div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        {/* Hero Header */}
        <div className="text-center space-y-8 mb-16">
          <div className="flex justify-center mb-6">
            <div className="relative">
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
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-slate-900 tracking-tight">
              <span className="block text-blue-600 mb-2">Google Developers Group</span>
              <span className="block text-slate-800">Lucknow</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 font-semibold max-w-4xl mx-auto leading-relaxed">
              Empowering developers and fostering innovation in the vibrant tech community of Lucknow
            </p>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Join our passionate community of developers, designers, and technology enthusiasts. Learn cutting-edge Google technologies, participate in engaging workshops, network with industry experts, and contribute to meaningful projects that shape the future of technology.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/join"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 group shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <span>Join Our Community</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              href="/events"
              className="border-2 border-green-600 text-green-600 bg-white hover:bg-green-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Play className="h-5 w-5" />
              <span>Explore Events</span>
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

              {/* Hover effect indicator */}
              <div className={`absolute bottom-0 left-0 w-full h-1 ${hoveredCard === index
                  ? `${feature.color === 'blue' ? 'bg-blue-500' :
                    feature.color === 'green' ? 'bg-green-500' :
                      'bg-yellow-500'
                  } rounded-b-2xl`
                  : 'bg-transparent'
                } transition-all duration-300`}></div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-1500 {
          animation-delay: 1.5s;
        }
      `}</style>
    </section>
  );
};

export default Hero;