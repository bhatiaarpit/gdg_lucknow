'use client';

import Link from 'next/link';
import { Calendar, Users, MapPin, ExternalLink, Snowflake, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import gdgLogo from '@/assets/gdg.png';
import { categories, upcomingEvents } from '@/Data/Events.js';
import EventCard from '@/components/EventCard';

const Hero = () => {

  const heroStats = [
    { icon: Users, label: 'Community Members', value: '2,500+', color: 'text-blue-600' },
    { icon: Calendar, label: 'Events Hosted', value: '15+', color: 'text-green-600' },
    { icon: MapPin, label: 'Years Active', value: '4+', color: 'text-red-600' },
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
                <span className="text-blue-600">Google Developer Group</span>
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
            <a
              href="https://forms.gle/oLp2sUWyYPUnnd2T7"
              target="_blank"
              rel="noopener noreferrer"
              className="group border-2 border-gray-300 text-gray-700 bg-white hover:border-blue-600 hover:text-blue-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 min-w-[200px] justify-center"
            >
              <Snowflake className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span>Winter Arc Volunteer</span>
            </a>
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

        {/* Upcoming Events Section */}
        {upcomingEvents.length > 0 && (
          <div>
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Upcoming Events</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                What we are building next. Save the date &mdash; full details drop soon.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map(event => (
                <EventCard
                  key={event.id}
                  event={event}
                  isUpcoming={true}
                  isCollaborated={false}
                  categories={categories}
                />
              ))}
            </div>

            <div className="flex justify-center mt-10">
              <Link
                href="/events"
                className="group inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold"
              >
                <span>See all events</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
