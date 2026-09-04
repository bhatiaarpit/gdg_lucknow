'use client';

import { Users, Star, Award, Heart, ExternalLink } from 'lucide-react';
import { teamMembers, stats } from '@/Data/Team.js';
import TeamCard from '@/components/TeamCard';
import TeamCarousel from '@/components/TeamCarousel';

const Team = () => {
  const iconMap = {
    Users,
    Star,
    Award,
    Heart
  };

  const getGridClasses = (itemCount) => {
    if (itemCount === 1) {
      return "grid grid-cols-1 justify-items-center max-w-sm mx-auto";
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

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <TeamCarousel/>
      <p className="mx-auto p-5 text-center text-base leading-relaxed text-gray-700 sm:p-8 sm:text-xl md:my-8 md:max-w-5xl md:text-2xl">
        The passionate individuals who make GDG Lucknow a thriving community. From organizers to volunteers, each member contributes to our mission of empowering developers.
      </p>
      {/* Stats Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            {stats.map((stat, index) => {
              const IconComponent = iconMap[stat.icon];
              return (
                <div key={stat.label || index} className="text-center group">
                  <div className={`mb-3 inline-flex rounded-2xl p-3 transition-transform duration-300 group-hover:scale-110 sm:mb-4 sm:p-4 ${stat.bg}`}>
                    <IconComponent className={`h-6 w-6 sm:h-8 sm:w-8 ${stat.color}`} />
                  </div>
                  <div className="mb-2 text-2xl font-bold text-gray-900 sm:text-3xl">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className={getGridClasses(teamMembers.length)}>
              {teamMembers.map((member, index) => (
                <TeamCard key={`${member.name}-${index}`} member={member} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="flex justify-center">
              <Heart className="h-16 w-16 text-white animate-pulse" />
            </div>

            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Want to Join Our Team?
            </h2>

            <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 sm:text-xl">
              We&apos;re always looking for passionate individuals who want to contribute to the tech community. Whether you&apos;re a developer, designer, or just someone who loves organizing events, there&apos;s a place for you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://forms.gle/oLp2sUWyYPUnnd2T7"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-sm flex items-center justify-center space-x-2 group"
              >
                <span>Become a volunteer</span>
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
