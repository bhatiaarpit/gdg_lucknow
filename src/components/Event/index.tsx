'use client';

import { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Tag, ArrowRight, Search, Filter, Play, ExternalLink } from 'lucide-react';

const EventsPage = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Events', color: 'bg-gray-100 text-gray-700' },
    { id: 'workshop', name: 'Workshops', color: 'bg-blue-100 text-blue-700' },
    { id: 'meetup', name: 'Meetups', color: 'bg-green-100 text-green-700' },
    { id: 'conference', name: 'Conferences', color: 'bg-red-100 text-red-700' },
    { id: 'hackathon', name: 'Hackathons', color: 'bg-yellow-100 text-yellow-700' },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Android Development Workshop',
      date: '2024-07-15',
      time: '10:00 AM',
      location: 'IIT Lucknow',
      category: 'workshop',
      attendees: 45,
      maxAttendees: 60,
      description: 'Learn modern Android development with Kotlin and Jetpack Compose',
      image: '/api/placeholder/400/200',
      speaker: 'Rahul Sharma',
      tags: ['Android', 'Kotlin', 'Jetpack Compose'],
      registrationLink: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Web Development Meetup',
      date: '2024-07-22',
      time: '6:00 PM',
      location: 'Tech Hub Lucknow',
      category: 'meetup',
      attendees: 32,
      maxAttendees: 40,
      description: 'Exploring modern web technologies and best practices',
      image: '/api/placeholder/400/200',
      speaker: 'Priya Gupta',
      tags: ['React', 'Next.js', 'Web'],
      registrationLink: '#'
    },
    {
      id: 3,
      title: 'DevFest 2024',
      date: '2024-08-10',
      time: '9:00 AM',
      location: 'BBAU Convention Center',
      category: 'conference',
      attendees: 234,
      maxAttendees: 500,
      description: 'Our biggest annual conference with international speakers',
      image: '/api/placeholder/400/200',
      speaker: 'Multiple Speakers',
      tags: ['AI/ML', 'Cloud', 'Mobile', 'Web'],
      registrationLink: '#',
      featured: true
    },
    {
      id: 4,
      title: 'Flutter Hackathon',
      date: '2024-07-28',
      time: '9:00 AM',
      location: 'IIIT Lucknow',
      category: 'hackathon',
      attendees: 28,
      maxAttendees: 80,
      description: '48-hour Flutter app development challenge',
      image: '/api/placeholder/400/200',
      speaker: 'GDG Team',
      tags: ['Flutter', 'Mobile', 'Competition'],
      registrationLink: '#'
    }
  ];

  const pastEvents = [
    {
      id: 5,
      title: 'Machine Learning Fundamentals',
      date: '2024-06-15',
      time: '2:00 PM',
      location: 'University of Lucknow',
      category: 'workshop',
      attendees: 55,
      maxAttendees: 60,
      description: 'Introduction to ML concepts and practical implementations',
      image: '/api/placeholder/400/200',
      speaker: 'Dr. Amit Kumar',
      tags: ['ML', 'Python', 'AI'],
      recordingLink: '#',
      slidesLink: '#'
    },
    {
      id: 6,
      title: 'Google Cloud Study Jam',
      date: '2024-06-08',
      time: '10:00 AM',
      location: 'Online',
      category: 'workshop',
      attendees: 120,
      maxAttendees: 150,
      description: 'Hands-on Google Cloud Platform learning session',
      image: '/api/placeholder/400/200',
      speaker: 'Neha Srivastava',
      tags: ['GCP', 'Cloud', 'DevOps'],
      recordingLink: '#',
      slidesLink: '#'
    },
    {
      id: 7,
      title: 'I/O Extended 2024',
      date: '2024-05-25',
      time: '11:00 AM',
      location: 'Lucknow Management Association',
      category: 'conference',
      attendees: 180,
      maxAttendees: 200,
      description: 'Celebrating Google I/O with local community',
      image: '/api/placeholder/400/200',
      speaker: 'Multiple Speakers',
      tags: ['Google I/O', 'Android', 'Web'],
      recordingLink: '#',
      slidesLink: '#'
    }
  ];

  const filteredEvents = (events) => {
    return events.filter(event => {
      const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           event.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const EventCard = ({ event, isUpcoming = true }) => (
    <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 overflow-hidden ${event.featured ? 'ring-2 ring-blue-500' : ''}`}>
      {event.featured && (
        <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white text-xs font-semibold px-3 py-1 text-center">
          Featured Event
        </div>
      )}
      
      <div className="relative">
        <div className="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
          <div className="text-gray-500 text-sm">Event Image</div>
        </div>
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            categories.find(c => c.id === event.category)?.color || 'bg-gray-100 text-gray-700'
          }`}>
            {categories.find(c => c.id === event.category)?.name || 'Event'}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900 leading-tight">{event.title}</h3>
        </div>

        <div className="space-y-3 mb-4">
          <div className="flex items-center text-gray-600">
            <Calendar className="h-4 w-4 mr-2 text-blue-600" />
            <span className="text-sm">{formatDate(event.date)}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="h-4 w-4 mr-2 text-green-600" />
            <span className="text-sm">{event.time}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin className="h-4 w-4 mr-2 text-red-600" />
            <span className="text-sm">{event.location}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Users className="h-4 w-4 mr-2 text-yellow-600" />
            <span className="text-sm">{event.attendees} / {event.maxAttendees} attendees</span>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{event.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {event.tags.map((tag, index) => (
            <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">
            by {event.speaker}
          </div>
          
          {isUpcoming ? (
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 flex items-center space-x-2">
              <span>Register</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          ) : (
            <div className="flex space-x-2">
              {event.recordingLink && (
                <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 flex items-center space-x-1">
                  <Play className="h-4 w-4" />
                  <span>Watch</span>
                </button>
              )}
              {event.slidesLink && (
                <button className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 flex items-center space-x-1">
                  <ExternalLink className="h-4 w-4" />
                  <span>Slides</span>
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-green-600 to-red-600 bg-clip-text text-transparent">
                Community Events
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join us for workshops, meetups, and conferences. Learn from industry experts and connect with fellow developers.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-sm border border-gray-200">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-200 ${
                activeTab === 'upcoming'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Upcoming Events ({upcomingEvents.length})
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-200 ${
                activeTab === 'past'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Past Events ({pastEvents.length})
            </button>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border text-black border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="pl-10 pr-8 py-3 border border-gray-200 rounded-lg text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white min-w-[200px]"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeTab === 'upcoming' 
            ? filteredEvents(upcomingEvents).map(event => (
                <EventCard key={event.id} event={event} isUpcoming={true} />
              ))
            : filteredEvents(pastEvents).map(event => (
                <EventCard key={event.id} event={event} isUpcoming={false} />
              ))
          }
        </div>

        {/* Empty State */}
        {((activeTab === 'upcoming' && filteredEvents(upcomingEvents).length === 0) || 
          (activeTab === 'past' && filteredEvents(pastEvents).length === 0)) && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No events found</h3>
            <p className="text-gray-600">
              {searchTerm || selectedCategory !== 'all' 
                ? 'Try adjusting your search or filter criteria'
                : `No ${activeTab} events at the moment`
              }
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsPage;