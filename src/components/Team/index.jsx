'use client';

import { useState } from 'react';
import { Users, Star, Award, Globe, Github, Linkedin, Twitter, Mail, MapPin, ChevronRight, ExternalLink, Heart, Code, Briefcase, GraduationCap } from 'lucide-react';

const Team = () => {
  const [activeTab, setActiveTab] = useState('organizers');

  const organizers = [
    {
      name: 'Priya Sharma',
      role: 'Lead Organizer',
      bio: 'Full-stack developer with 8+ years experience. Passionate about community building and Google technologies.',
      image: '/api/placeholder/150/150',
      skills: ['Android', 'Flutter', 'Firebase', 'Community Management'],
      social: {
        github: 'priyasharma',
        linkedin: 'priya-sharma-dev',
        twitter: 'priyatech',
        email: 'priya@gdglucknow.org'
      },
      experience: '8+ years',
      company: 'Tech Innovators',
      location: 'Lucknow'
    },
    {
      name: 'Rahul Gupta',
      role: 'Co-Organizer',
      bio: 'Cloud architect and DevOps enthusiast. Loves sharing knowledge about Google Cloud Platform.',
      image: '/api/placeholder/150/150',
      skills: ['Google Cloud', 'Kubernetes', 'DevOps', 'Machine Learning'],
      social: {
        github: 'rahulgupta',
        linkedin: 'rahul-gupta-cloud',
        twitter: 'rahulcloud',
        email: 'rahul@gdglucknow.org'
      },
      experience: '6+ years',
      company: 'CloudTech Solutions',
      location: 'Lucknow'
    },
    {
      name: 'Anjali Singh',
      role: 'Women Techmakers Lead',
      bio: 'Frontend developer and advocate for women in tech. Organizes workshops and mentorship programs.',
      image: '/api/placeholder/150/150',
      skills: ['React', 'Angular', 'Web Development', 'Mentorship'],
      social: {
        github: 'anjalisingh',
        linkedin: 'anjali-singh-wtm',
        twitter: 'anjaliwtm',
        email: 'anjali@gdglucknow.org'
      },
      experience: '5+ years',
      company: 'WebCraft Studio',
      location: 'Lucknow'
    }
  ];

  const coreTeam = [
    {
      name: 'Vikash Kumar',
      role: 'Technical Lead',
      bio: 'Mobile app developer specializing in Flutter and Android development.',
      image: '/api/placeholder/150/150',
      skills: ['Flutter', 'Android', 'Dart', 'Firebase'],
      social: {
        github: 'vikashkumar',
        linkedin: 'vikash-kumar-mobile',
        email: 'vikash@gdglucknow.org'
      },
      experience: '4+ years',
      company: 'MobileFirst Labs'
    },
    {
      name: 'Sneha Agarwal',
      role: 'Community Manager',
      bio: 'Expert in community engagement and event planning. Handles partnerships and outreach.',
      image: '/api/placeholder/150/150',
      skills: ['Community Building', 'Event Planning', 'Marketing', 'Partnerships'],
      social: {
        linkedin: 'sneha-agarwal-community',
        twitter: 'snehacommunity',
        email: 'sneha@gdglucknow.org'
      },
      experience: '3+ years',
      company: 'Community Connect'
    },
    {
      name: 'Amit Verma',
      role: 'Content Lead',
      bio: 'Technical writer and educator. Creates learning materials and manages online content.',
      image: '/api/placeholder/150/150',
      skills: ['Technical Writing', 'Content Strategy', 'SEO', 'Documentation'],
      social: {
        github: 'amitverma',
        linkedin: 'amit-verma-content',
        email: 'amit@gdglucknow.org'
      },
      experience: '5+ years',
      company: 'ContentCraft Media'
    },
    {
      name: 'Pooja Mishra',
      role: 'Design Lead',
      bio: 'UI/UX designer with a passion for creating beautiful and functional user experiences.',
      image: '/api/placeholder/150/150',
      skills: ['UI/UX Design', 'Figma', 'Adobe Creative Suite', 'Design Systems'],
      social: {
        linkedin: 'pooja-mishra-design',
        twitter: 'poojadesigns',
        email: 'pooja@gdglucknow.org'
      },
      experience: '4+ years',
      company: 'DesignHub Studio'
    }
  ];

  const volunteers = [
    {
      name: 'Ravi Tiwari',
      role: 'Event Coordinator',
      bio: 'Student volunteer helping with event logistics and attendee support.',
      image: '/api/placeholder/150/150',
      skills: ['Event Management', 'Logistics', 'Customer Support'],
      social: {
        linkedin: 'ravi-tiwari-volunteer',
        email: 'ravi@gdglucknow.org'
      },
      status: 'Student',
      university: 'BBAU Lucknow'
    },
    {
      name: 'Deepika Sharma',
      role: 'Social Media Manager',
      bio: 'Managing social media presence and creating engaging content for the community.',
      image: '/api/placeholder/150/150',
      skills: ['Social Media', 'Content Creation', 'Photography', 'Video Editing'],
      social: {
        twitter: 'deepikasocial',
        linkedin: 'deepika-sharma-social',
        email: 'deepika@gdglucknow.org'
      },
      status: 'Professional',
      company: 'MediaTech Agency'
    },
    {
      name: 'Arjun Pandey',
      role: 'Technical Support',
      bio: 'Computer science student passionate about web development and open source.',
      image: '/api/placeholder/150/150',
      skills: ['Web Development', 'JavaScript', 'Python', 'Open Source'],
      social: {
        github: 'arjunpandey',
        linkedin: 'arjun-pandey-dev',
        email: 'arjun@gdglucknow.org'
      },
      status: 'Student',
      university: 'IET Lucknow'
    },
    {
      name: 'Kavita Singh',
      role: 'Workshop Coordinator',
      bio: 'Experienced trainer who helps organize technical workshops and bootcamps.',
      image: '/api/placeholder/150/150',
      skills: ['Training', 'Workshop Planning', 'Public Speaking', 'Mentoring'],
      social: {
        linkedin: 'kavita-singh-trainer',
        email: 'kavita@gdglucknow.org'
      },
      status: 'Professional',
      company: 'TechTraining Institute'
    }
  ];

  const stats = [
    { icon: Users, label: 'Team Members', value: '15+', color: 'text-blue-600', bg: 'bg-blue-50' },
    { icon: Star, label: 'Years Combined Experience', value: '60+', color: 'text-green-600', bg: 'bg-green-50' },
    { icon: Award, label: 'Events Organized', value: '150+', color: 'text-red-600', bg: 'bg-red-50' },
    { icon: Heart, label: 'Volunteer Hours', value: '1000+', color: 'text-purple-600', bg: 'bg-purple-50' },
  ];

  const TeamCard = ({ member, showExperience = false }) => (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 group">
      <div className="text-center mb-4">
        <div className="relative mx-auto w-24 h-24 mb-4">
          <img 
            src={member.image} 
            alt={member.name}
            className="w-full h-full rounded-full object-cover border-4 border-gray-100 group-hover:border-blue-200 transition-colors duration-300"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
        <p className="text-blue-600 font-medium mb-2">{member.role}</p>
        <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
      </div>

      {/* Skills */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-2 justify-center">
          {member.skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gradient-to-r from-blue-50 to-green-50 text-gray-700 rounded-full text-xs font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Additional Info */}
      {showExperience && (
        <div className="mb-4 space-y-2">
          {member.experience && (
            <div className="flex items-center justify-center text-sm text-gray-600">
              <Briefcase className="h-4 w-4 mr-2" />
              {member.experience} • {member.company}
            </div>
          )}
          {member.location && (
            <div className="flex items-center justify-center text-sm text-gray-600">
              <MapPin className="h-4 w-4 mr-2" />
              {member.location}
            </div>
          )}
        </div>
      )}

      {/* Student/Professional Info */}
      {member.status && (
        <div className="mb-4 text-center">
          <div className="flex items-center justify-center text-sm text-gray-600">
            {member.status === 'Student' ? (
              <>
                <GraduationCap className="h-4 w-4 mr-2" />
                {member.university}
              </>
            ) : (
              <>
                <Briefcase className="h-4 w-4 mr-2" />
                {member.company}
              </>
            )}
          </div>
        </div>
      )}

      {/* Social Links */}
      <div className="flex justify-center space-x-3">
        {member.social.github && (
          <a href={`https://github.com/${member.social.github}`} className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
            <Github className="h-5 w-5" />
          </a>
        )}
        {member.social.linkedin && (
          <a href={`https://linkedin.com/in/${member.social.linkedin}`} className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
            <Linkedin className="h-5 w-5" />
          </a>
        )}
        {member.social.twitter && (
          <a href={`https://twitter.com/${member.social.twitter}`} className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
            <Twitter className="h-5 w-5" />
          </a>
        )}
        {member.social.email && (
          <a href={`mailto:${member.social.email}`} className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
            <Mail className="h-5 w-5" />
          </a>
        )}
      </div>
    </div>
  );

  const tabContent = {
    organizers: (
      <div className="space-y-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Meet Our Organizers</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The passionate leaders who drive our community forward and ensure every event is a success.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {organizers.map((member, index) => (
            <TeamCard key={index} member={member} showExperience={true} />
          ))}
        </div>
      </div>
    ),
    coreTeam: (
      <div className="space-y-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Core Team</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our dedicated team members who handle various aspects of community operations and growth.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreTeam.map((member, index) => (
            <TeamCard key={index} member={member} showExperience={true} />
          ))}
        </div>
      </div>
    ),
    volunteers: (
      <div className="space-y-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Amazing Volunteers</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The heart of our community - volunteers who generously contribute their time and skills.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {volunteers.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
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
                <Users className="h-10 w-10 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
              Meet Our <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Team</span>
            </h1>
            
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              The passionate individuals who make GDG Lucknow a thriving community. From organizers to volunteers, each member contributes to our mission of empowering developers.
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
                  {tab === 'organizers' && 'Organizers'}
                  {tab === 'coreTeam' && 'Core Team'}
                  {tab === 'volunteers' && 'Volunteers'}
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
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center space-x-2 group">
                <span>Become a Volunteer</span>
                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 flex items-center justify-center space-x-2">
                <ExternalLink className="h-5 w-5" />
                <span>Contact Us</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;