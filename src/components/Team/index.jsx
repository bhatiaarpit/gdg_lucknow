'use client';

import { useState } from 'react';
import { Users, Star, Award, Heart, ChevronRight, ExternalLink } from 'lucide-react';
import { teamData, stats } from '@/Data/Team.js';
import TeamCard from '@/components/TeamCard';
import Link from 'next/link';
import TeamCarousel from '@/components/TeamCarousel';

const Team = () => {
  const [activeTab, setActiveTab] = useState('organizers');

  const iconMap = {
    Users,
    Star,
    Award,
    Heart
  };

  const getGridClasses = (itemCount) => {
    if (itemCount === 1) {
      return "grid grid-cols-1 justify-items-center max-w-sm mx-auto justify-items-center";
    } else if (itemCount === 2) {
      return "grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto justify-items-center";
    } else if (itemCount === 3) {
      return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto justify-items-center";
    } else if (itemCount === 4) {
      return "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center";
    } else {
      return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center";
    }
  };

  const tabContent = {
    organizers: (
      <div className="space-y-8">
        <div className="text-center mb-8">
        </div>
        <div className={getGridClasses(teamData.organizers.length)}>
          {teamData.organizers.map((member, index) => (
            <TeamCard key={member.id || `${member.name}-${index}`} member={member} />
          ))}
        </div>
      </div>
    ),
    coreTeam: (
      <div className="space-y-8">
        <div className="text-center mb-8">
        </div>
        <div className={getGridClasses(teamData.coreTeam.length)}>
          {teamData.coreTeam.map((member, index) => (
            <TeamCard key={member.id || `${member.name}-${index}`} member={member} />
          ))}
        </div>
      </div>
    ),
    // volunteers: (
    //   <div className="space-y-8">
    //     <div className="text-center mb-8">
    //       <h3 className="text-2xl font-bold text-gray-900 mb-4">Volunteers</h3>
    //       <p className="text-gray-600 max-w-2xl mx-auto">
    //         Amazing students and professionals who dedicate their time to help our community thrive.
    //       </p>
    //     </div>
    //     <div className={getGridClasses(teamData.volunteers.length)}>
    //       {teamData.volunteers.map((member, index) => (
    //         <TeamCard key={member.id || `${member.name}-${index}`} member={member} />
    //       ))}
    //     </div>
    //   </div>
    // )
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <TeamCarousel/>
      <p className="text-2xl text-gray-700 md:max-w-5xl mx-auto text-center md:my-8 p-[2rem]">
        The passionate individuals who make GDG Lucknow a thriving community. From organizers to volunteers, each member contributes to our mission of empowering developers.
      </p>
      {/* Stats Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = iconMap[stat.icon];
              return (
                <div key={stat.label || index} className="text-center group">
                  <div className={`inline-flex p-4 rounded-2xl ${stat.bg} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`h-8 w-8 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-6">
            <div className="bg-white rounded-lg p-1 shadow-sm border border-gray-200">
              <div className="flex flex-nowrap gap-2">
                {Object.keys(tabContent).map((tab) => (
                  <button
                    key={`tab-${tab}`}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                      activeTab === tab
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    {tab === 'organizers' && 'Organizers'}
                    {tab === 'coreTeam' && 'Core Team'}
                    {tab === 'volunteers' && 'Volunteers'}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-2">
            {tabContent[activeTab]}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="flex justify-center">
              <Heart className="h-16 w-16 text-white animate-pulse" />
            </div>

            <h2 className="text-4xl font-bold text-white">
              Want to Join Our Team?
            </h2>

            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              We're always looking for passionate individuals who want to contribute to the tech community. Whether you're a developer, designer, or just someone who loves organizing events, there's a place for you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 flex items-center justify-center space-x-2">
                <Link
                  href='/contact'
                  className="text-white bg-white text-blue-600 text-sm flex items-center space-x-2 group"
                >
                  <span>Become a volunteer</span>
                  <ExternalLink className="h-5 w-5" />
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
