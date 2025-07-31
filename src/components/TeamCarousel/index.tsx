'use client';

import gdgLogo from '@/assets/gdgLogo.svg';
import Image from 'next/image';

// Import volunteer images
import Volunteer1 from '@/assets/volunteer/volunteer1.jpg';
import Volunteer2 from '@/assets/volunteer/volunteer2.jpg';
import Volunteer3 from '@/assets/volunteer/volunteer3.jpg';
import Volunteer4 from '@/assets/volunteer/volunteer4.jpg';
import Volunteer5 from '@/assets/volunteer/volunteer5.jpg';
import Volunteer6 from '@/assets/volunteer/volunteer6.jpg';
import Volunteer7 from '@/assets/volunteer/volunteer7.jpg';
import Volunteer8 from '@/assets/volunteer/volunteer8.jpg';
import Volunteer9 from '@/assets/volunteer/volunteer9.jpg';
import Volunteer10 from '@/assets/volunteer/volunteer10.jpg';
import Volunteer11 from '@/assets/volunteer/volunteer11.jpg';
import Volunteer12 from '@/assets/volunteer/volunteer12.jpg';
import Volunteer13 from '@/assets/volunteer/volunteer13.jpg';
import Volunteer14 from '@/assets/volunteer/volunteer14.jpg';
import Volunteer15 from '@/assets/volunteer/volunteer15.jpg';
import Volunteer16 from '@/assets/volunteer/volunteer16.jpg';
import Volunteer17 from '@/assets/volunteer/volunteer17.jpg';
import Volunteer18 from '@/assets/volunteer/volunteer18.jpg';
import Volunteer19 from '@/assets/volunteer/volunteer19.jpg';
import Volunteer20 from '@/assets/volunteer/volunteer20.jpg';

const TeamCarousel = () => {
  const imageColumns = [
    [Volunteer1, Volunteer7, Volunteer3, Volunteer12, Volunteer5],
    [Volunteer8, Volunteer2, Volunteer14, Volunteer6, Volunteer10],
    [Volunteer11, Volunteer4, Volunteer9, Volunteer15, Volunteer13],
    [Volunteer16, Volunteer20, Volunteer18, Volunteer1, Volunteer17],
    [Volunteer19, Volunteer3, Volunteer7, Volunteer5, Volunteer8],
    [Volunteer6, Volunteer12, Volunteer2, Volunteer14, Volunteer4],
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
                    alt={`Volunteer ${imageIndex}`}
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