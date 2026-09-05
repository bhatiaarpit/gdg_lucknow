"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
} from "lucide-react";

import rumiGate from "@/assets/rumi-gate.png";
import { categories, upcomingEvents } from "@/Data/Events.js";
import UpcomingEventCard from "@/components/UpcomingEventCard";

const Hero = () => {
  const features = [
    {
      icon: Users,
      title: "Community Driven",
      description: "Learn, connect and grow with like-minded people",
      bg: "bg-blue-50",
      color: "text-[#4285F4]",
    },
    {
      icon: CalendarDays,
      title: "Events & Workshops",
      description: "Hands-on sessions and real-world learning",
      bg: "bg-green-50",
      color: "text-[#34A853]",
    },
    {
      icon: Rocket,
      title: "Build & Contribute",
      description: "Work on exciting projects and open source",
      bg: "bg-yellow-50",
      color: "text-[#F9AB00]",
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

    window.addEventListener("resize", syncScrollState);

    return () => {
      window.removeEventListener("resize", syncScrollState);
    };
  }, [syncScrollState]);

  const scrollToIndex = (index: number) => {
    const scroller = scrollerRef.current;

    if (!scroller) return;

    scroller.scrollTo({
      left: index * getStep(scroller),
      behavior: "smooth",
    });
  };

  const scrollByOne = (direction: -1 | 1) => {
    scrollToIndex(Math.max(0, activeIndex + direction));
  };

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative overflow-hidden lg:min-h-[700px]">
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.018]"
            style={{
              backgroundImage:
                "linear-gradient(#4285F4 1px, transparent 1px), linear-gradient(90deg, #4285F4 1px, transparent 1px)",
              backgroundSize: "62px 62px",
            }}
          />

          <div className="absolute -right-[220px] top-0 h-[720px] w-[900px] rounded-full bg-blue-50/70 blur-[90px]" />

          <div className="absolute left-[35%] top-[80px] h-[560px] w-[900px] rounded-full bg-sky-50/40 blur-[110px]" />
        </div>

        <div className="relative z-10 mx-auto grid min-h-0 w-full max-w-[1280px] grid-cols-1 items-center gap-2 px-5 pb-8 pt-12 sm:px-8 sm:pt-16 lg:grid-cols-[42%_58%] lg:min-h-[600px] lg:gap-6 lg:px-10 lg:pb-[90px] lg:pt-14 xl:px-14">
          <div className="relative z-30 top-[64px] sm:top-0 flex flex-col items-center text-center lg:items-start lg:text-left lg:-translate-y-2">
            <h1 className="mx-auto max-w-[560px] text-[40px] font-bold leading-[1.05] tracking-[-0.045em] text-[#182033] sm:text-[46px] lg:mx-0 lg:max-w-[560px] lg:text-[54px] xl:text-[60px] 2xl:text-[66px]">
              Build. Learn.
              <br />
              Grow. <span className="text-[#246BFD]">Together.</span>
            </h1>

            <p className="mx-auto mt-4 max-w-[480px] text-[15px] leading-relaxed text-[#536079] sm:mt-5 sm:max-w-[540px] sm:text-base lg:mx-0 lg:max-w-[520px] xl:text-[17px]">
              GDG Lucknow is a community of developers, innovators,
              <br className="hidden 2xl:block" />
              and dreamers building the future with Google technologies.
            </p>

            <div className="mt-7 flex w-full max-w-[420px] flex-row justify-center gap-3 sm:mt-8 sm:max-w-none sm:gap-4 lg:w-auto lg:justify-start">
              <a
                href="https://gdg.community.dev/gdg-lucknow/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-12 flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-[10px] bg-[#1769ff] px-4 text-[13px] font-semibold text-white shadow-[0_10px_24px_rgba(23,105,255,.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#075ee9] hover:shadow-[0_14px_30px_rgba(23,105,255,.25)] sm:h-14 sm:flex-none sm:gap-3 sm:px-7 sm:text-[15px] lg:h-[54px] lg:gap-5 lg:px-[26px] lg:text-[16px]"
              >
                Join Community
                <ExternalLink className="h-4 w-4 sm:h-[17px] sm:w-[17px]" />
              </a>

              <a
                href="https://forms.gle/oLp2sUWyYPUnnd2T7"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-12 flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-[10px] border border-[#d9e0ea] bg-white px-4 text-[13px] font-semibold text-[#1769ff] shadow-[0_2px_5px_rgba(15,23,42,.04)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg sm:h-14 sm:flex-none sm:gap-3 sm:px-7 sm:text-[15px] lg:h-[54px] lg:gap-6 lg:px-[26px] lg:text-[16px]"
              >
                Join the Winter Arc
                <ExternalLink className="h-4 w-4 text-[#4f5b6f] sm:h-[17px] sm:w-[17px]" />
              </a>
            </div>

            <div className="mt-9 flex items-center gap-4">
              <div className="flex -space-x-[7px]"></div>
            </div>
          </div>

          <div className="relative min-h-[380px] w-full sm:mt-8 sm:min-h-[460px] lg:mt-0 lg:h-[540px] lg:min-h-0 xl:h-[560px]">
            <div className="pointer-events-none absolute left-1/2 top-[2%] h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-[#eef6ff] sm:h-[430px] sm:w-[430px] lg:h-[500px] lg:w-[500px] xl:h-[540px] xl:w-[540px]" />

            <div className="absolute bottom-2 left-1/2 z-10 w-[150%] max-w-[880px] -translate-x-1/2 sm:bottom-[4px] sm:w-[106%] lg:w-[106%] xl:w-[109%] 2xl:w-[112%]">
              <Image
                src={rumiGate}
                alt="Rumi Gate, landmark of Lucknow"
                priority
                placeholder="blur"
                sizes="(max-width: 1024px) 100vw, 900px"
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

            <div className="pointer-events-none absolute left-1/2 top-[7%] h-[280px] w-[280px] -translate-x-1/2 rounded-full border border-blue-100/40 sm:left-[57%] sm:h-[400px] sm:w-[400px] lg:h-[460px] lg:w-[460px] xl:h-[500px] xl:w-[500px]" />

            <svg
              viewBox="0 0 90 50"
              className="pointer-events-none absolute right-[4%] top-[8%] block h-9 w-16 text-[#cbd8ea] sm:right-[8%] sm:top-[12%] sm:h-11 sm:w-20 lg:right-[9%] lg:top-[18%] lg:h-14 lg:w-24"
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
              className="pointer-events-none absolute left-[2%] top-[14%] block h-8 w-14 text-[#cbd8ea] sm:left-[3%] sm:top-[18%] sm:h-10 sm:w-16 lg:left-[4%] lg:top-[25%] lg:h-12 lg:w-20"
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
              className="pointer-events-none absolute right-[14%] top-[30%] hidden h-9 w-16 text-blue-200 sm:block sm:right-[18%] sm:top-[33%] lg:right-[23%] lg:top-[37%] lg:h-12 lg:w-20"
            >
              <path
                d="M11 39h57c7 0 12-4 12-10s-5-10-12-10h-3C62 12 56 8 48 8c-10 0-17 6-19 15-2-2-5-3-9-3-7 0-13 5-13 11 0 5 4 8 10 8Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.3"
              />
            </svg>

            <div
              className="pointer-events-none absolute left-[8%] top-[24%] hidden h-[50px] w-[80px] opacity-[0.25] sm:block lg:left-[14%] lg:top-[29%] lg:h-[75px] lg:w-[115px]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #4285F4 1.5px, transparent 1.6px)",
                backgroundSize: "13px 13px",
              }}
            />

            <div className="absolute left-[8%] top-[32%] z-20 flex h-9 w-9 -rotate-[3deg] items-center justify-center rounded-xl bg-[#4285F4] text-white shadow-[0_10px_20px_rgba(66,133,244,.28)] sm:left-[12%] sm:top-[35%] sm:h-12 sm:w-12 sm:rounded-2xl lg:left-[15%] lg:top-[37%] lg:h-[58px] lg:w-[58px]">
              <Code2 className="h-4 w-4 sm:h-5 sm:w-5 lg:h-7 lg:w-7" />
            </div>

            <div className="absolute bottom-[16%] left-[7%] z-20 flex h-9 w-9 rotate-[-2deg] items-center justify-center rounded-xl bg-[#FBBC04] text-white shadow-[0_10px_18px_rgba(251,188,4,.25)] sm:bottom-[15%] sm:left-[11%] sm:h-12 sm:w-12 sm:rounded-2xl lg:left-[14%] lg:h-[58px] lg:w-[58px]">
              <Lightbulb className="h-4 w-4 sm:h-5 sm:w-5 lg:h-7 lg:w-7" />
            </div>

            <div className="absolute right-[3%] top-[48%] z-20 flex h-9 w-9 rotate-[4deg] items-center justify-center rounded-xl bg-[#34A853] text-white shadow-[0_10px_20px_rgba(52,168,83,.25)] sm:right-[6%] sm:top-[50%] sm:h-12 sm:w-12 sm:rounded-2xl lg:right-[5%] lg:top-[51%] lg:h-[58px] lg:w-[58px]">
              <Braces className="h-4 w-4 sm:h-5 sm:w-5 lg:h-7 lg:w-7" />
            </div>
          </div>
        </div>

        <svg
          aria-hidden="true"
          viewBox="0 0 1800 260"
          preserveAspectRatio="none"
          className="pointer-events-none absolute bottom-[40px] left-1/2 z-20 hidden h-[220px] w-[115%] -translate-x-1/2 lg:block"
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

        <div className="relative z-40 mx-auto mb-7 w-[calc(100%-32px)] max-w-[1200px] lg:absolute lg:bottom-[20px] lg:left-1/2 lg:mb-0 lg:-translate-x-1/2 lg:w-[76%] xl:w-[74%] 2xl:max-w-[1220px]">
          <div className="grid overflow-hidden rounded-[22px] border border-slate-100 bg-white shadow-lg shadow-gray-900/5 transition-all duration-300 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className={`flex min-h-[104px] items-center justify-center gap-4 px-5 py-4 sm:min-h-[118px] sm:px-7 sm:py-5 ${index > 0 ? "border-t border-slate-100 sm:border-t-0" : ""} ${index === 1 ? "sm:border-l sm:border-slate-100" : ""} ${index >= 2 ? "sm:border-t sm:border-slate-100 lg:border-t-0" : ""} ${index === 2 || index === 3 ? "lg:border-l lg:border-slate-100" : ""}`}
                >
                  <div
                    className={`flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full ${feature.bg}`}
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

      {upcomingEvents.length > 0 && (
        <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-20 sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute -top-16 left-1/2 h-[560px] w-[1100px] -translate-x-1/2 rounded-[80px] bg-slate-50/70 blur-2xl" />

          <div className="relative text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-blue-700">
              <Calendar className="h-3.5 w-3.5" />
              Upcoming Events
            </div>

            <h2 className="mt-5 text-4xl font-bold tracking-[-0.035em] text-gray-950 sm:text-5xl lg:text-[56px]">
              What&rsquo;s <span className="text-blue-600">Next?</span>
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
                hasOverflow ? "" : "justify-center-safe"
              }`}
            >
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="w-[85%] shrink-0 snap-start sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]"
                >
                  <UpcomingEventCard event={event} categories={categories} />
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
                        ? "w-6 bg-blue-600"
                        : "w-2 bg-gray-300 hover:bg-gray-400"
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
