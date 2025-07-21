'use client';

import gdgLogo from '@/assets/gdgLogo.svg';
import Image from 'next/image';

const TeamCarousel = () => {
  // Dummy image data for 6 columns using Unsplash
  const imageColumns = [
    [
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=150&h=200&fit=crop',
      'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=150&h=180&fit=crop',
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=150&h=220&fit=crop',
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=190&fit=crop',
      'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=150&h=210&fit=crop',
    ],
    [
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=150&h=210&fit=crop',
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=195&fit=crop',
      'https://images.unsplash.com/photo-1573496774426-fe3db3dd1731?w=150&h=185&fit=crop',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=205&fit=crop',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=150&h=200&fit=crop',
    ],
    [
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=190&fit=crop',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=220&fit=crop',
      'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?w=150&h=180&fit=crop',
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=200&fit=crop',
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=195&fit=crop',
    ],
    [
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=200&fit=crop',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=185&fit=crop',
      'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=215&fit=crop',
      'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=150&h=190&fit=crop',
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=205&fit=crop',
    ],
    [
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=150&h=205&fit=crop',
      'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=150&h=200&fit=crop',
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=180&fit=crop',
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=195&fit=crop',
      'https://images.unsplash.com/photo-1573497161161-c3e73707e25c?w=150&h=210&fit=crop',
    ],
    [
      'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=195&fit=crop',
      'https://images.unsplash.com/photo-1590086782792-42dd2350140d?w=150&h=220&fit=crop',
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=185&fit=crop',
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=200&fit=crop',
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=190&fit=crop',
    ],
  ];

  return (
    <div className="bg-white relative overflow-hidden">
      <div className="absolute inset-0 flex gap-2 md:gap-4">
        {imageColumns.map((column, columnIndex) => (
          <div 
            key={columnIndex} 
            className={`flex-1 relative overflow-hidden ${columnIndex >= 3 ? 'hidden md:block' : ''}`}
          >
            <div 
              className={`flex flex-col gap-4 ${columnIndex % 2 === 0 ? 'animate-scroll-down' : 'animate-scroll-up'}`}
              style={{
                animationDuration: '20s',
              }}
            >
              {/* Duplicate arrays for seamless infinite scroll */}
              {[...column, ...column, ...column, ...column].map((image, imageIndex) => (
                <div 
                  key={imageIndex}
                  className="relative rounded-lg overflow-hidden shadow-md"
                  style={{ 
                    height: `${180 + (imageIndex % 4) * 15}px`,
                  }}
                >
                  <Image
                    src={image}
                    alt={`Team member ${imageIndex}`}
                    width={150}
                    height={180 + (imageIndex % 4) * 15}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Foreground Content */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 flex items-center justify-center bg-white rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <Image
                  src={gdgLogo}
                  alt="GDG Logo"
                  width={112}
                  height={112}
                  priority
                  className="object-contain"
                />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl">
              Meet Our Team
            </h1>
          </div>
        </div>
      </section>
      
      <style jsx>{`
        @keyframes scroll-down {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0);
          }
        }
        @keyframes scroll-up {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        .animate-scroll-down {
          animation: scroll-down linear infinite;
        }
        .animate-scroll-up {
          animation: scroll-up linear infinite;
        }
      `}</style>
    </div>
  );
};

export default TeamCarousel;