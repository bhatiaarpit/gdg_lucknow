'use client';

import { useEffect, useRef } from 'react';
import { Users, Star, Award, Heart, ExternalLink } from 'lucide-react';
import { teamMembers, stats } from '@/Data/Team.js';
import TeamCard from '@/components/TeamCard';
import TeamCarousel from '@/components/TeamCarousel';

const Team = () => {
  const carouselTrackRef = useRef(null);
  const firstCarouselCopyRef = useRef(null);
  const carouselStateRef = useRef({
    position: 0,
    velocity: 0,
    baseVelocity: 0,
    lastFrameTime: 0,
    pointerId: null,
    pointerX: 0,
    pointerTime: 0,
    dragging: false,
    dragged: false,
    cycleWidth: 0
  });

  useEffect(() => {
    const track = carouselTrackRef.current;
    const firstCopy = firstCarouselCopyRef.current;
    const state = carouselStateRef.current;

    if (!track || !firstCopy) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const setBaseVelocity = () => {
      state.baseVelocity = reducedMotion.matches ? 0 : -state.cycleWidth / 38000;
      if (!state.dragging && state.velocity === 0) state.velocity = state.baseVelocity;
    };
    const measure = () => {
      const gap = parseFloat(window.getComputedStyle(track).columnGap) || 0;
      state.cycleWidth = firstCopy.offsetWidth + gap;
      setBaseVelocity();
    };

    measure();
    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(firstCopy);
    reducedMotion.addEventListener('change', setBaseVelocity);

    let animationFrame;
    const animate = (time) => {
      if (!state.lastFrameTime) state.lastFrameTime = time;
      const elapsed = Math.min(time - state.lastFrameTime, 40);
      state.lastFrameTime = time;

      if (!state.dragging && state.cycleWidth > 0) {
        // Keep the swipe momentum briefly, then smoothly regain the normal RTL pace.
        const recovery = 1 - Math.exp(-elapsed / 900);
        state.velocity += (state.baseVelocity - state.velocity) * recovery;
        state.position += state.velocity * elapsed;
      }

      if (state.cycleWidth > 0) {
        state.position = ((state.position % state.cycleWidth) - state.cycleWidth) % state.cycleWidth;
      }
      track.style.transform = `translate3d(${state.position}px, 0, 0)`;
      animationFrame = requestAnimationFrame(animate);
    };
    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      reducedMotion.removeEventListener('change', setBaseVelocity);
    };
  }, []);

  const handlePointerDown = (event) => {
    if (!event.isPrimary || (event.pointerType === 'mouse' && event.button !== 0)) return;
    const state = carouselStateRef.current;
    state.pointerId = event.pointerId;
    state.pointerX = event.clientX;
    state.pointerTime = performance.now();
    state.dragging = true;
    state.dragged = false;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event) => {
    const state = carouselStateRef.current;
    if (!state.dragging || state.pointerId !== event.pointerId) return;

    const now = performance.now();
    const distance = event.clientX - state.pointerX;
    const elapsed = Math.max(now - state.pointerTime, 1);
    state.position += distance;
    state.velocity = Math.max(-2.5, Math.min(2.5, distance / elapsed));
    state.pointerX = event.clientX;
    state.pointerTime = now;
    if (Math.abs(distance) > 1) state.dragged = true;
  };

  const handlePointerEnd = (event) => {
    const state = carouselStateRef.current;
    if (state.pointerId !== event.pointerId) return;
    state.dragging = false;
    state.pointerId = null;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const preventClickAfterDrag = (event) => {
    if (carouselStateRef.current.dragged) {
      event.preventDefault();
      event.stopPropagation();
      carouselStateRef.current.dragged = false;
    }
  };

  const handleWheel = (event) => {
    if (Math.abs(event.deltaX) <= Math.abs(event.deltaY)) return;
    const state = carouselStateRef.current;
    const movement = -event.deltaX;
    state.position += movement;
    state.velocity = Math.max(-2.5, Math.min(2.5, movement / 16));
  };

  const iconMap = {
    Users,
    Star,
    Award,
    Heart
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
      <section
        className="cursor-grab overflow-hidden py-8 active:cursor-grabbing"
        style={{ touchAction: 'pan-y' }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerEnd}
        onPointerCancel={handlePointerEnd}
        onWheel={handleWheel}
        onClickCapture={preventClickAfterDrag}
      >
        <div ref={carouselTrackRef} className="team-carousel-track flex w-max gap-8 select-none">
          {[0, 1].map((copyIndex) => (
            <div
              key={copyIndex}
              ref={copyIndex === 0 ? firstCarouselCopyRef : undefined}
              className="flex shrink-0 gap-8"
              aria-hidden={copyIndex === 1 ? 'true' : undefined}
            >
              {teamMembers.map((member, index) => (
                <div key={`${copyIndex}-${member.name}-${index}`} className="w-64 shrink-0">
                  <TeamCard member={member} />
                </div>
              ))}
            </div>
          ))}
        </div>

        <style jsx>{`
          .team-carousel-track {
            will-change: transform;
          }
        `}</style>
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
