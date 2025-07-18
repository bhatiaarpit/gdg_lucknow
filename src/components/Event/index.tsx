'use client';

import { useState } from 'react';
import { Calendar, Search, Filter, Handshake } from 'lucide-react';
import { StaticImageData } from 'next/image';
import { categories, upcomingEvents, pastEvents, collaboratedEvents } from '@/Data/Events.js';
import EventCard from '@/components/EventCard';

interface Speaker {
  name: string;
  linkedin: string;
}

type EventType = {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  attendees: string; // Changed back to string to match EventCard expectations
  maxAttendees: string; // Changed back to string to match EventCard expectations
  description: string;
  tags: string[];
  speaker?: string;
  speakers?: Array<Speaker | string>;
  category: string;
  featured?: boolean;
  eventType?: string;
  collaborator?: string;
  recordingLink?: string;
  slidesLink?: string;
  registrationLink?: string;
  collaboratorLogo?: string;
  image?: string | StaticImageData;
};

type CategoryType = {
  id: string;
  name: string;
};

type BaseEventType = {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  attendees: number | string;
  maxAttendees: number | string;
  description: string;
  tags: string[];
  speaker?: string;
  speakers?: Array<Speaker | string>;
  category: string;
  featured?: boolean;
  collaborator?: string;
  recordingLink?: string;
  slidesLink?: string;
  registrationLink?: string;
  collaboratorLogo?: string;
  image?: string | StaticImageData;
};

const EventsPage = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'upcoming' | 'past' | 'collaborated'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const normalizeEvent = (event: BaseEventType, eventType: string): EventType => ({
    ...event,
    eventType,
    // Convert to string to match EventCard expectations
    attendees: typeof event.attendees === 'number' ? event.attendees.toString() : event.attendees,
    maxAttendees: typeof event.maxAttendees === 'number' ? event.maxAttendees.toString() : event.maxAttendees,
    speakers: event.speakers,
    speaker: event.speaker
  });

  const getAllEvents = (): EventType[] => {
    const allEvents: EventType[] = [
      ...upcomingEvents.map((event): EventType => normalizeEvent(event, 'upcoming')),
      ...pastEvents.map((event): EventType => normalizeEvent(event, 'past')),
      ...collaboratedEvents.map((event): EventType => normalizeEvent(event, 'collaborated'))
    ];
    return allEvents.sort((a, b) => {
      const dateA = a.date === 'TBD' ? new Date('2099-12-31') : new Date(a.date);
      const dateB = b.date === 'TBD' ? new Date('2099-12-31') : new Date(b.date);
      const now = new Date();

      const isUpcomingA = dateA >= now || a.date === 'TBD';
      const isUpcomingB = dateB >= now || b.date === 'TBD';

      if (isUpcomingA && !isUpcomingB) return -1;
      if (!isUpcomingA && isUpcomingB) return 1;

      if (isUpcomingA && isUpcomingB) {
        return dateA.getTime() - dateB.getTime();
      } else {
        return dateB.getTime() - dateA.getTime();
      }
    });
  };

  const filteredEvents = (events: EventType[]): EventType[] => {
    return events.filter(event => {
      const matchesSearch =
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-green-600  bg-clip-text text-transparent">
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
          <div className="bg-white rounded-lg p-1 shadow-sm border border-gray-200 w-full max-w-4xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3 py-3 rounded-md font-semibold transition-all duration-200 text-sm ${
                  activeTab === 'all'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <span className="hidden sm:inline">All Events</span>
                <span className="sm:hidden">All</span>
                <span className="ml-1">({upcomingEvents.length + pastEvents.length + collaboratedEvents.length})</span>
              </button>
              <button
                onClick={() => setActiveTab('upcoming')}
                className={`px-3 py-3 rounded-md font-semibold transition-all duration-200 text-sm ${
                  activeTab === 'upcoming'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <span className="hidden sm:inline">Upcoming</span>
                <span className="sm:hidden">Upcoming</span>
                <span className="ml-1">({upcomingEvents.length})</span>
              </button>
              <button
                onClick={() => setActiveTab('past')}
                className={`px-3 py-3 rounded-md font-semibold transition-all duration-200 text-sm ${
                  activeTab === 'past'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <span className="hidden sm:inline">Past Events</span>
                <span className="sm:hidden">Past</span>
                <span className="ml-1">({pastEvents.length})</span>
              </button>
              <button
                onClick={() => setActiveTab('collaborated')}
                className={`px-3 py-3 rounded-md font-semibold transition-all duration-200 text-sm flex items-center justify-center space-x-1 ${
                  activeTab === 'collaborated'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Handshake className="h-4 w-4" />
                <span className="hidden sm:inline">Collaborated</span>
                <span className="sm:hidden">Collab</span>
                <span className="ml-1">({collaboratedEvents.length})</span>
              </button>
            </div>
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
              <option value="all">All Categories</option>
              {categories.map((category: CategoryType) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeTab === 'all' 
            ? filteredEvents(getAllEvents()).map(event => (
                <EventCard 
                  key={event.id} 
                  event={event} 
                  isUpcoming={event.eventType === 'upcoming'} 
                  isCollaborated={event.eventType === 'collaborated'}
                  categories={categories}
                />
              ))
            : activeTab === 'upcoming' 
            ? filteredEvents(upcomingEvents.map(event => normalizeEvent(event, 'upcoming'))).map(event => (
                <EventCard 
                  key={event.id} 
                  event={event} 
                  isUpcoming={true} 
                  isCollaborated={false}
                  categories={categories}
                />
              ))
            : activeTab === 'past'
            ? filteredEvents(pastEvents.map(event => normalizeEvent(event, 'past'))).map(event => (
                <EventCard 
                  key={event.id} 
                  event={event} 
                  isUpcoming={false} 
                  isCollaborated={false}
                  categories={categories}
                />
              ))
            : filteredEvents(collaboratedEvents.map(event => normalizeEvent(event, 'collaborated'))).map(event => (
                <EventCard 
                  key={event.id} 
                  event={event} 
                  isUpcoming={false} 
                  isCollaborated={true}
                  categories={categories}
                />
              ))
          }
        </div>

        {/* Empty State */}
        {((activeTab === 'all' && filteredEvents(getAllEvents()).length === 0) ||
          (activeTab === 'upcoming' && filteredEvents(upcomingEvents.map(event => normalizeEvent(event, 'upcoming'))).length === 0) || 
          (activeTab === 'past' && filteredEvents(pastEvents.map(event => normalizeEvent(event, 'past'))).length === 0) ||
          (activeTab === 'collaborated' && filteredEvents(collaboratedEvents.map(event => normalizeEvent(event, 'collaborated'))).length === 0)) && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              {activeTab === 'collaborated' ? (
                <Handshake className="h-12 w-12 text-gray-400" />
              ) : (
                <Calendar className="h-12 w-12 text-gray-400" />
              )}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No events found</h3>
            <p className="text-gray-600">
              {searchTerm || selectedCategory !== 'all' 
                ? 'Try adjusting your search or filter criteria'
                : `No ${activeTab === 'all' ? '' : activeTab} events at the moment`
              }
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsPage;