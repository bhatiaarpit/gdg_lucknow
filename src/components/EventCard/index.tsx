import {
  Calendar,
  Clock,
  MapPin,
  Users,
  ArrowRight,
  Play,
  ExternalLink,
  Handshake
} from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';

interface Speaker {
  name: string;
  linkedin: string;
}

interface EventCardProps {
  event: {
    id: number;
    title: string;
    date: string;
    time: string;
    location: string;
    attendees: string;
    maxAttendees: string;
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
  isUpcoming?: boolean;
  isCollaborated?: boolean;
  categories?: Array<{
    id: string;
    name: string;
    color: string;
  }>;
}

const EventCard = ({
  event,
  isCollaborated = false,
  categories = []
}: EventCardProps) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const formatDate = (dateString: string) => {
    if (dateString === 'TBD') return 'To Be Determined';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const now = new Date();
  const eventDate =
    event.date === 'TBD' ? new Date('2099-12-31') : new Date(event.date);
  const isEventUpcoming = eventDate >= now || event.date === 'TBD';

  const renderSpeakers = () => {
    if (event.speakers && Array.isArray(event.speakers)) {
      return event.speakers.map((speaker, index) => {
        if (typeof speaker === 'string') {
          return (
            <span key={index} className="text-gray-700 mr-2">
              {speaker}
            </span>
          );
        }

        const hasValidLinkedIn = speaker.linkedin && speaker.linkedin !== '#' && speaker.linkedin.trim() !== '';

        return hasValidLinkedIn ? (
          <a
            key={index}
            href={speaker.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline mr-2"
          >
            {speaker.name}
          </a>
        ) : (
          <span key={index} className="text-gray-700 mr-2">
            {speaker.name}
          </span>
        );
      });
    }

    return <span className="text-gray-700">{event.speaker || 'TBD'}</span>;
  };

  const hasValidImage =
    event.image &&
    event.image !== 'TBD' &&
    event.image !== '/api/placeholder/400/200' &&
    !imageError;

  return (
    <div
      className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 overflow-hidden ${event.featured ? 'ring-2 ring-blue-500' : ''
        }`}
    >
      {event.featured && (
        <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white text-xs font-semibold px-3 py-1 text-center">
          Featured Event
        </div>
      )}

      {(isCollaborated || event.eventType === 'collaborated') && (
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold px-3 py-1 text-center flex items-center justify-center space-x-1">
          <Handshake className="h-3 w-3" />
          <span>Collaborated Event</span>
        </div>
      )}

      <div className="relative">
        <div className="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden relative">
          {hasValidImage && event.image ? (
            <Image
              src={event.image}
              alt={event.title}
              fill
              className={`object-cover transition-opacity duration-500 ${imageLoading ? 'opacity-0' : 'opacity-100'
                }`}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onLoad={() => setImageLoading(false)}
              onError={() => {
                setImageError(true);
                setImageLoading(false);
              }}
              priority={event.featured}
            />
          ) : null}

          <div
            className={`absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center transition-opacity duration-500 ${hasValidImage && !imageLoading ? 'opacity-0' : 'opacity-100'
              }`}
          >
            <div className="text-gray-500 text-sm font-medium">
              {imageLoading ? 'Loading...' : 'Event Image'}
            </div>
          </div>

          {imageLoading && hasValidImage && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse" />
          )}
        </div>

        <div className="absolute top-4 right-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${categories.find((c) => c.id === event.category)?.color ||
              'bg-gray-100 text-gray-700'
              }`}
          >
            {categories.find((c) => c.id === event.category)?.name || 'Event'}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900 leading-tight">
            {event.title}
          </h3>
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
            <span className="text-sm">
              {event.attendees} / {event.maxAttendees} attendees
            </span>
          </div>
        </div>

        {(isCollaborated || event.eventType === 'collaborated') &&
          event.collaborator && (
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center">
                  <Handshake className="h-4 w-4 text-purple-600" />
                </div>
                <div>
                  <p className="text-xs text-purple-600 font-medium">
                    In collaboration with
                  </p>
                  <p className="text-sm font-semibold text-purple-800">
                    {event.collaborator}
                  </p>
                </div>
              </div>
            </div>
          )}

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {event.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {event.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500 flex flex-wrap items-center">
            <span className="mr-1">by</span> {renderSpeakers()}
          </div>

          {isEventUpcoming ? (
            event.registrationLink && event.registrationLink !== '#' ? (
              <a
                href={event.registrationLink}
                target="_blank"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 flex items-center space-x-2"
              >
                <span>Register</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            ) : (
              <button
                disabled
                className="bg-gray-300 text-gray-600 px-4 py-2 rounded-lg text-sm font-semibold flex items-center space-x-2 cursor-not-allowed"
              >
                <span>Registration will open soon</span>
              </button>
            )
          ) : (
            <div className="flex space-x-2">
              {event.recordingLink && event.recordingLink !== '#' && (
                <a
                  href={event.recordingLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 flex items-center space-x-1"
                >
                  <Play className="h-4 w-4" />
                  <span>Watch</span>
                </a>
              )}
              {event.slidesLink && event.slidesLink !== '#' && (
                <a
                  href={event.slidesLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 flex items-center space-x-1"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Slides</span>
                </a>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default EventCard;