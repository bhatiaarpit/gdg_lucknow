'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import {
  ArrowRight,
  Braces,
  Calendar,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Code2,
  ExternalLink,
  Lightbulb,
  Rocket,
  Users,
} from 'lucide-react';

import rumiGate from '@/assets/rumi-gate.png';
import { categories, upcomingEvents } from '@/Data/Events.js';
import UpcomingEventCard from '@/components/UpcomingEventCard';

const Hero = () => {
  const features = [
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Learn, connect and grow with like-minded people',
      bg: 'bg-blue-50',
      color: 'text-[#4285F4]',
    },
    {
      icon: CalendarDays,
      title: 'Events & Workshops',
      description: 'Hands-on sessions and real-world learning',
      bg: 'bg-green-50',
      color: 'text-[#34A853]',
    },
    {
      icon: Rocket,
      title: 'Build & Contribute',
      description: 'Work on exciting projects and open source',
      bg: 'bg-yellow-50',
      color: 'text-[#F9AB00]',
    },
  ];

  const scrollerRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [hasOverflow, setHasOverflow] = useState(false);

  const getStep = (scroller: HTMLDivElement) => {
    const slides = Array.from(scroller.children) as HTMLElement[];

    if (slides.length > 1) {
      return slides[1].offsetLeft - slides[0].offsetLeft;
    }

    return slides[0]?.offsetWidth ?? scroller.clientWidth;
  };

  const syncScrollState = useCallback(() => {
    const scroller = scrollerRef.current;

    if (!scroller) return;

    const { scrollLeft, scrollWidth, clientWidth } = scroller;
    const maxScroll = scrollWidth - clientWidth;
    const step = getStep(scroller);

    setHasOverflow(maxScroll > 8);
    setCanScrollPrev(scrollLeft > 8);
    setCanScrollNext(scrollLeft < maxScroll - 8);
    setActiveIndex(step > 0 ? Math.round(scrollLeft / step) : 0);
  }, []);

  useEffect(() => {
    syncScrollState();

    window.addEventListener('resize', syncScrollState);

    return () => {
      window.removeEventListener('resize', syncScrollState);
    };
  }, [syncScrollState]);

  const scrollToIndex = (index: number) => {
    const scroller = scrollerRef.current;

    if (!scroller) return;

    scroller.scrollTo({
      left: index * getStep(scroller),
      behavior: 'smooth',
    });
  };

  const scrollByOne = (direction: -1 | 1) => {
    scrollToIndex(Math.max(0, activeIndex + direction));
  };

  return (
    <section className="relative overflow-hidden bg-white">
      {/* ====================================================== */}
      {/* HERO */}
      {/* ====================================================== */}

      <div className="relative overflow-hidden lg:min-h-[780px]">
        {/* BACKGROUND */}

        <div className="pointer-events-none absolute inset-0">
          {/* very subtle grid */}

          <div
            className="absolute inset-0 opacity-[0.018]"
            style={{
              backgroundImage:
                'linear-gradient(#4285F4 1px, transparent 1px), linear-gradient(90deg, #4285F4 1px, transparent 1px)',
              backgroundSize: '62px 62px',
            }}
          />

          {/* right blue ambience */}

          <div className="absolute -right-[220px] top-0 h-[720px] w-[900px] rounded-full bg-blue-50/70 blur-[90px]" />

          <div className="absolute left-[35%] top-[80px] h-[560px] w-[900px] rounded-full bg-sky-50/40 blur-[110px]" />
        </div>

        {/* ==================================================== */}
        {/* MAIN HERO CONTENT */}
        {/* ==================================================== */}

        <div
          className="
            relative
            z-10
            mx-auto
            grid
            min-h-0
            w-full
            max-w-[1660px]
            grid-cols-1
            items-center
            px-4
            pb-8
            pt-14

            sm:px-10
            sm:pt-20

            lg:grid-cols-[42%_58%]
            lg:min-h-[690px]
            lg:px-[5.5vw]
            lg:pb-[130px]
            lg:pt-[70px]

            xl:px-[6.7vw]
          "
        >
          {/* ================================================== */}
          {/* LEFT SIDE */}
          {/* ================================================== */}

          <div className="relative z-30 lg:-translate-y-3">
            {/* BADGE */}


            {/* HEADING */}

            <h1
              className="
                max-w-[650px]
                text-[42px]
                font-bold
                leading-[1.01]
                tracking-[-0.052em]
                text-[#182033]

                sm:text-[58px]

                lg:text-[64px]

                xl:text-[70px]

                2xl:text-[76px]
              "
            >
              Build. Learn.
              <br />
              Grow.{' '}
              <span className="text-[#246BFD]">
                Together.
              </span>
            </h1>

            {/* DESCRIPTION */}

            <p
              className="
                mt-5
                max-w-[590px]
                text-base
                leading-relaxed
                text-[#536079]

                xl:text-[18px]
              "
            >
              GDG Lucknow is a community of developers, innovators,
              <br className="hidden 2xl:block" />
              and dreamers building the future with Google technologies.
            </p>

            {/* CTAS */}

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://gdg.community.dev/gdg-lucknow/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  inline-flex
                  h-[58px]
                  items-center
                  justify-center
                  gap-5
                  rounded-[10px]
                  bg-[#1769ff]
                  px-[30px]
                  text-[16px]
                  font-semibold
                  text-white
                  shadow-[0_10px_24px_rgba(23,105,255,.18)]
                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:bg-[#075ee9]
                  hover:shadow-[0_14px_30px_rgba(23,105,255,.25)]
                "
              >
                Join Community

                <ExternalLink className="h-[17px] w-[17px]" />
              </a>

              <a
                href="https://forms.gle/oLp2sUWyYPUnnd2T7"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  inline-flex
                  h-[58px]
                  items-center
                  justify-center
                  gap-6
                  rounded-[10px]
                  border
                  border-[#d9e0ea]
                  bg-white
                  px-[30px]
                  text-[16px]
                  font-semibold
                  text-[#1769ff]
                  shadow-[0_2px_5px_rgba(15,23,42,.04)]
                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-blue-200
                  hover:shadow-lg
                "
              >
                Join the Winter Arc

                <ExternalLink className="h-[17px] w-[17px] text-[#4f5b6f]" />
              </a>
            </div>

            {/* PEOPLE */}

            <div className="mt-9 flex items-center gap-4">
              <div className="flex -space-x-[7px]">
              </div>
            </div>
          </div>

          {/* ================================================== */}
          {/* RIGHT VISUAL */}
          {/* ================================================== */}

          <div
            className="
              relative
              mt-8
              min-h-[430px]
              w-full

              lg:mt-0
              lg:h-[610px]
              lg:min-h-0
            "
          >
            {/* BIG PALE BLUE CIRCLE */}

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-[2%]
                h-[360px]
                w-[360px]
                -translate-x-1/2
                rounded-full
                bg-[#eef6ff]

                sm:h-[500px]
                sm:w-[500px]

                lg:h-[555px]
                lg:w-[555px]

                xl:h-[610px]
                xl:w-[610px]
              "
            />

            {/* RUMI GATE */}

            <div
              className="
                absolute
                bottom-2
                left-1/2
                z-10
                w-[155%]
                max-w-[1010px]
                -translate-x-1/2

                sm:bottom-[4px]
                sm:w-[108%]

                lg:w-[108%]

                xl:w-[111%]

                2xl:w-[115%]
              "
            >
              <Image
                src={rumiGate}
                alt="Rumi Gate, landmark of Lucknow"
                priority
                placeholder="blur"
                sizes="(max-width: 1024px) 100vw, 1000px"
                className="h-auto w-full mix-blend-multiply"
                style={{
                  maskImage: `
                    radial-gradient(
                      ellipse 64% 62% at 52% 53%,
                      black 28%,
                      rgba(0,0,0,.92) 40%,
                      rgba(0,0,0,.58) 52%,
                      rgba(0,0,0,.2) 64%,
                      transparent 78%
                    )
                  `,
                  WebkitMaskImage: `
                    radial-gradient(
                      ellipse 64% 62% at 52% 53%,
                      black 28%,
                      rgba(0,0,0,.92) 40%,
                      rgba(0,0,0,.58) 52%,
                      rgba(0,0,0,.2) 64%,
                      transparent 78%
                    )
                  `,
                }}
              />
            </div>

            {/* second very subtle ring */}

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-[7%]
                h-[330px]
                w-[330px]
                -translate-x-1/2
                rounded-full
                border
                border-blue-100/40

                sm:left-[57%]
                sm:h-[460px]
                sm:w-[460px]

                lg:h-[510px]
                lg:w-[510px]

                xl:h-[560px]
                xl:w-[560px]
              "
            />

            {/* CLOUDS */}

            <svg
              viewBox="0 0 90 50"
              className="pointer-events-none absolute right-[9%] top-[18%] hidden h-14 w-24 text-[#cbd8ea] xl:block"
            >
              <path
                d="M11 39h57c7 0 12-4 12-10s-5-10-12-10h-3C62 12 56 8 48 8c-10 0-17 6-19 15-2-2-5-3-9-3-7 0-13 5-13 11 0 5 4 8 10 8Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.3"
              />
            </svg>

            <svg
              viewBox="0 0 90 50"
              className="pointer-events-none absolute left-[4%] top-[25%] hidden h-12 w-20 text-[#cbd8ea] lg:block"
            >
              <path
                d="M11 39h57c7 0 12-4 12-10s-5-10-12-10h-3C62 12 56 8 48 8c-10 0-17 6-19 15-2-2-5-3-9-3-7 0-13 5-13 11 0 5 4 8 10 8Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.3"
              />
            </svg>

            <svg
              viewBox="0 0 90 50"
              className="pointer-events-none absolute right-[23%] top-[37%] hidden h-12 w-20 text-blue-200 lg:block"
            >
              <path
                d="M11 39h57c7 0 12-4 12-10s-5-10-12-10h-3C62 12 56 8 48 8c-10 0-17 6-19 15-2-2-5-3-9-3-7 0-13 5-13 11 0 5 4 8 10 8Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.3"
              />
            </svg>

            {/* DOTS */}

            <div
              className="pointer-events-none absolute left-[14%] top-[29%] hidden h-[75px] w-[115px] opacity-[0.25] lg:block"
              style={{
                backgroundImage:
                  'radial-gradient(circle, #4285F4 1.5px, transparent 1.6px)',
                backgroundSize: '13px 13px',
              }}
            />

            {/* BLUE CODE */}

            <div
              className="
                absolute
                left-[15%]
                top-[37%]
                z-20
                hidden
                h-[62px]
                w-[62px]
                -rotate-[3deg]
                items-center
                justify-center
                rounded-2xl
                bg-[#4285F4]
                text-white
                shadow-[0_15px_30px_rgba(66,133,244,.28)]
                lg:flex
              "
            >
              <Code2 className="h-7 w-7" />
            </div>

            {/* YELLOW LIGHT BULB */}

            <div
              className="
                absolute
                bottom-[15%]
                left-[14%]
                z-20
                hidden
                h-[62px]
                w-[62px]
                rotate-[-2deg]
                items-center
                justify-center
                rounded-2xl
                bg-[#FBBC04]
                text-white
                shadow-[0_14px_28px_rgba(251,188,4,.25)]
                lg:flex
              "
            >
              <Lightbulb className="h-7 w-7" />
            </div>

            {/* GREEN BRACES */}

            <div
              className="
                absolute
                right-[5%]
                top-[51%]
                z-20
                hidden
                h-[62px]
                w-[62px]
                rotate-[4deg]
                items-center
                justify-center
                rounded-2xl
                bg-[#34A853]
                text-white
                shadow-[0_15px_30px_rgba(52,168,83,.25)]
                lg:flex
              "
            >
              <Braces className="h-7 w-7" />
            </div>
          </div>
        </div>

        {/* ==================================================== */}
        {/* FLOWING WAVE */}
        {/* ==================================================== */}

        <svg
          aria-hidden="true"
          viewBox="0 0 1800 260"
          preserveAspectRatio="none"
          className="
            pointer-events-none
            absolute
            bottom-[47px]
            left-1/2
            z-20
            hidden
            h-[245px]
            w-[115%]
            -translate-x-1/2
            lg:block
          "
        >
          {Array.from({ length: 12 }).map((_, index) => {
            const offset = index * 9;

            return (
              <path
                key={index}
                d={`
                  M -80 ${200 + offset * 0.2}
                  C 260 ${270 + offset * 0.12},
                    500 ${190 + offset * 0.16},
                    735 ${164 + offset * 0.12}

                  C 970 ${138 + offset * 0.1},
                    1130 ${206 + offset * 0.12},
                    1370 ${191 + offset * 0.12}

                  C 1580 ${178 + offset * 0.1},
                    1700 ${104 + offset * 0.09},
                    1880 ${66 + offset * 0.08}
                `}
                fill="none"
                stroke="#4285F4"
                strokeWidth="1"
                strokeOpacity={0.14 + index * 0.008}
              />
            );
          })}
        </svg>

        {/* ==================================================== */}
        {/* FEATURE PANEL */}
        {/* ==================================================== */}

        <div
          className="
            relative
            z-40
            mx-auto
            mb-7
            w-[calc(100%-32px)]
            max-w-[1300px]

            lg:absolute
            lg:bottom-[28px]
            lg:left-1/2
            lg:mb-0
            lg:-translate-x-1/2
            lg:w-[73%]

            xl:w-[74%]

            2xl:max-w-[1340px]
          "
        >
          <div
            className="
              grid
              overflow-hidden
              rounded-[22px]
              border
              border-slate-100
              bg-white/95
              shadow-[0_15px_40px_rgba(15,23,42,.07)]
              backdrop-blur-xl

              sm:grid-cols-2

              lg:grid-cols-3
            "
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className={`
                    flex
                    min-h-[112px]
                    items-center
                    justify-center
                    gap-4
                    px-5
                    py-4

                    sm:min-h-[128px]
                    sm:px-7
                    sm:py-5

                    ${
                      index > 0
                        ? 'border-t border-slate-100 sm:border-t-0'
                        : ''
                    }

                    ${
                      index === 1
                        ? 'sm:border-l sm:border-slate-100'
                        : ''
                    }

                    ${
                      index >= 2
                        ? 'sm:border-t sm:border-slate-100 lg:border-t-0'
                        : ''
                    }

                    ${
                      index === 2 || index === 3
                        ? 'lg:border-l lg:border-slate-100'
                        : ''
                    }
                  `}
                >
                  <div
                    className={`
                      flex
                      h-[50px]
                      w-[50px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      ${feature.bg}
                    `}
                  >
                    <Icon className={`h-6 w-6 ${feature.color}`} />
                  </div>

                  <div>
                    <h3 className="text-[15px] font-bold text-[#172033]">
                      {feature.title}
                    </h3>

                    <p className="mt-1.5 max-w-[190px] text-[13px] leading-[1.65] text-[#657187]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ====================================================== */}
      {/* UPCOMING EVENTS */}
      {/* ====================================================== */}

      {upcomingEvents.length > 0 && (
        <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-20 sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute -top-16 left-1/2 h-[560px] w-[1100px] -translate-x-1/2 rounded-[80px] bg-slate-50/70 blur-2xl" />

          <div className="relative text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-blue-700">
              <Calendar className="h-3.5 w-3.5" />
              Upcoming Events
            </div>

            <h2 className="mt-5 text-4xl font-bold tracking-[-0.035em] text-gray-950 sm:text-5xl lg:text-[56px]">
              What&rsquo;s{' '}
              <span className="text-blue-600">
                Next?
              </span>
            </h2>

            <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
              Exciting events, workshops, and meetups coming your way.
              <br className="hidden sm:block" />
              Save the date and be part of the journey.
            </p>

            <svg
              aria-hidden="true"
              viewBox="0 0 90 80"
              className="pointer-events-none absolute right-4 top-4 hidden h-20 w-24 text-blue-200 xl:block"
            >
              <path
                d="M6 6c34 2 60 20 64 56"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              <path
                d="M58 52l12 12 9-13"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="relative mt-12">
            {hasOverflow && (
              <>
                <button
                  type="button"
                  onClick={() => scrollByOne(-1)}
                  disabled={!canScrollPrev}
                  aria-label="Previous events"
                  className="absolute -left-3 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gray-100 bg-white text-gray-700 shadow-lg transition-all duration-200 hover:text-blue-600 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:text-gray-700 sm:flex lg:-left-5"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <button
                  type="button"
                  onClick={() => scrollByOne(1)}
                  disabled={!canScrollNext}
                  aria-label="Next events"
                  className="absolute -right-3 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gray-100 bg-white text-gray-700 shadow-lg transition-all duration-200 hover:text-blue-600 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:text-gray-700 sm:flex lg:-right-5"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}

            <div
              ref={scrollerRef}
              onScroll={syncScrollState}
              className={`flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
                hasOverflow ? '' : 'justify-center-safe'
              }`}
            >
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="w-[85%] shrink-0 snap-start sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]"
                >
                  <UpcomingEventCard
                    event={event}
                    categories={categories}
                  />
                </div>
              ))}
            </div>

            {hasOverflow && (
              <div className="mt-6 flex items-center justify-center gap-2">
                {upcomingEvents.map((event, index) => (
                  <button
                    key={event.id}
                    type="button"
                    onClick={() => scrollToIndex(index)}
                    aria-label={`Go to ${event.title}`}
                    aria-current={index === activeIndex}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? 'w-6 bg-blue-600'
                        : 'w-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="relative mt-10 flex justify-center">
            <Link
              href="/events"
              className="group inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-700"
            >
              <span>See all events</span>

              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
