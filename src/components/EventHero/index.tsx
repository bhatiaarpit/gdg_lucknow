'use client';

import EventBanner from '@/assets/eventbg.png';
import EventBannerMobile from '@/assets/eventbgmobile.png';
import Image from 'next/image';

const EventHero = () => {
  return (
    <div className="relative bg-white border-b border-gray-200 overflow-hidden">
      {/* Desktop Image */}
      <div className="absolute inset-0 hidden md:block">
        <Image
          src={EventBanner}
          alt="Events background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0"></div>
      </div>

      {/* Mobile Image */}
      <div className="absolute inset-0 block md:hidden">
        <Image
          src={EventBannerMobile}
          alt="Events background mobile"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
              Community Events
            </span>
          </h1>
          <p className="text-xl text-[#4a5565] max-w-3xl mx-auto">
            Join us for workshops, meetups, and conferences. Learn from industry experts and connect with fellow developers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventHero;
