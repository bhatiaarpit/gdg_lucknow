'use client';

import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';

import { Calendar, Clock, MapPin, ArrowRight, Bell, Play, ExternalLink, Handshake } from 'lucide-react';

interface UpcomingEventCardProps {
  event: {
    id: number;
    title: string;
    date: string;
    time: string;
    location: string;
    description: string;
    category: string;
    tags: string[];
    featured?: boolean;
    registrationLink?: string;
    recordingLink?: string;
    slidesLink?: string;
    collaborator?: string;
    eventType?: string;
    image?: string | StaticImageData;
  };
  isPast?: boolean;
  isCollaborated?: boolean;
  categories?: Array<{
    id: string;
    name: string;
    color: string;
  }>;
}

const accents: Record<
  string,
  { chip: string; day: string; icon: string; outline: string; solid: string }
> = {
  workshop: {
    chip: 'bg-blue-50 text-blue-700',
    day: 'text-blue-600',
    icon: 'text-blue-500',
    outline: 'border-blue-200 text-blue-700',
    solid: 'bg-blue-600 hover:bg-blue-700 shadow-blue-600/20',
  },
  meetup: {
    chip: 'bg-green-50 text-green-700',
    day: 'text-green-600',
    icon: 'text-green-500',
    outline: 'border-green-200 text-green-700',
    solid: 'bg-green-600 hover:bg-green-700 shadow-green-600/20',
  },
  conference: {
    chip: 'bg-red-50 text-red-700',
    day: 'text-red-600',
    icon: 'text-red-500',
    outline: 'border-red-200 text-red-700',
    solid: 'bg-red-600 hover:bg-red-700 shadow-red-600/20',
  },
  hackathon: {
    chip: 'bg-yellow-50 text-yellow-800',
    day: 'text-yellow-600',
    icon: 'text-yellow-600',
    outline: 'border-yellow-300 text-yellow-800',
    solid: 'bg-yellow-500 hover:bg-yellow-600 shadow-yellow-500/20',
  },
};

const isFilled = (value?: string) =>
  Boolean(value && value !== 'TBA' && value !== '#' && value.trim() !== '');

const UpcomingEventCard = ({
  event,
  isPast = false,
  isCollaborated = false,
  categories = [],
}: UpcomingEventCardProps) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const accent = accents[event.category] ?? accents.workshop;
  const categoryName =
    categories.find((c) => c.id === event.category)?.name ?? 'Event';

  // Registration unlocks on its own once both the date and the venue are filled
  // in inside src/Data/Events.js and a registrationLink is added.
  const hasDate = isFilled(event.date);
  const hasVenue = isFilled(event.location);
  const hasLink = isFilled(event.registrationLink);
  const registrationOpen = hasDate && hasVenue && hasLink;

  const eventDate = hasDate ? new Date(event.date) : null;
  const dateBadge = eventDate
    ? {
        day: eventDate.toLocaleDateString('en-US', { day: '2-digit' }),
        month: eventDate.toLocaleDateString('en-US', { month: 'short' }),
      }
    : { day: 'TBA', month: 'date' };

  const dateLabel = eventDate
    ? eventDate.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      })
    : 'Date to be announced';

  const hasImage = Boolean(event.image) && !imageError;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg shadow-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-900/10">
      <div className="relative h-44 w-full overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100">
        {hasImage && event.image ? (
          <Image
            src={event.image}
            alt={event.title}
            fill
            sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 33vw"
            className={`object-cover transition-all duration-500 group-hover:scale-105 ${
              imageLoading ? 'opacity-0' : 'opacity-100'
            }`}
            onLoad={() => setImageLoading(false)}
            onError={() => {
              setImageError(true);
              setImageLoading(false);
            }}
          />
        ) : null}

        {(!hasImage || imageLoading) && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
            <Calendar className="h-8 w-8 text-blue-300" />
          </div>
        )}

        <div
          className={`absolute left-4 top-4 flex flex-col items-center bg-white/95 shadow-md backdrop-blur-sm ${
            hasDate
              ? 'min-w-[58px] rounded-xl px-3 py-2'
              : 'min-w-[46px] rounded-lg px-2 py-1.5'
          }`}
        >
          <span
            className={`font-bold leading-none ${accent.day} ${
              hasDate ? 'text-xl' : 'text-sm'
            }`}
          >
            {dateBadge.day}
          </span>

          <span
            className={`font-semibold uppercase tracking-wider text-gray-500 ${
              hasDate ? 'mt-1 text-[10px]' : 'mt-0.5 text-[8px]'
            }`}
          >
            {dateBadge.month}
          </span>
        </div>

        {(isCollaborated || event.eventType === 'collaborated') ? (
          <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-purple-700/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
            <Handshake className="h-3 w-3" />
            Collaborated
          </div>
        ) : event.featured && (
          <div className="absolute right-4 top-4 rounded-full bg-gray-950/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
            Featured
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <span
          className={`self-start rounded-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${accent.chip}`}
        >
          {categoryName}
        </span>

        <h3 className="mt-3 text-lg font-bold leading-snug text-gray-950">
          {event.title}
        </h3>

        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-gray-500">
          {event.description}
        </p>

        <div className="mt-4 space-y-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Calendar className={`h-4 w-4 shrink-0 ${accent.icon}`} />
            <span>{dateLabel}</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock className={`h-4 w-4 shrink-0 ${accent.icon}`} />
            <span>{isFilled(event.time) ? event.time : 'Time to be announced'}</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className={`h-4 w-4 shrink-0 ${accent.icon}`} />
            <span className="line-clamp-1">
              {hasVenue ? event.location : 'Venue to be announced'}
            </span>
          </div>
        </div>

        <div className="mt-5 pt-1">
          {isPast ? (
            <div className="flex gap-2">
              {isFilled(event.recordingLink) && (
                <a
                  href={event.recordingLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-white shadow-lg transition-colors duration-200 ${accent.solid}`}
                >
                  <Play className="h-4 w-4" />
                  <span>Watch</span>
                </a>
              )}

              {isFilled(event.slidesLink) && (
                <a
                  href={event.slidesLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex flex-1 items-center justify-center gap-2 rounded-xl border bg-white px-4 py-3 text-sm font-semibold ${accent.outline}`}
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Slides</span>
                </a>
              )}

              {!isFilled(event.recordingLink) && !isFilled(event.slidesLink) && (
                <div className="flex w-full items-center justify-center rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-semibold text-gray-500">
                  Event completed
                </div>
              )}
            </div>
          ) : registrationOpen ? (
            <a
              href={event.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-white shadow-lg transition-colors duration-200 ${accent.solid}`}
            >
              <span>Register Now</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          ) : (
            <button
              type="button"
              disabled
              title="Registration opens once the date and venue are confirmed"
              className={`flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-xl border bg-white px-4 py-3 text-sm font-semibold ${accent.outline}`}
            >
              <span>Registration Coming Soon</span>
              <Bell className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </article>
  );
};

export default UpcomingEventCard;
