'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Instagram,
  ExternalLink,
  ArrowRight,
  ArrowUpRight,
  Users,
  Calendar,
  CalendarDays,
} from 'lucide-react';

import gdgLogo from '@/assets/gdgLogo.svg';
import whatsappIcon from '@/assets/whatsapp-icon2.svg';
import { upcomingEvents } from '@/Data/Events.js';
import { GateOutline } from './CityArt';

const WHATSAPP_COMMUNITY =
  'https://chat.whatsapp.com/L5VMIIEiUz90gh5gcOC054?mode=ac_c';
const CHAPTER_PAGE = 'https://gdg.community.dev/gdg-lucknow/';
const CONTACT_EMAIL = 'lucknow.devs@gmail.com';

type FooterLink = {
  href: string;
  label: string;
  external?: boolean;
};

const exploreLinks: FooterLink[] = [
  { href: '/', label: 'Home' },
  { href: '/events', label: 'Events' },
  { href: '/team', label: 'Team' },
  { href: '/resources', label: 'Resources' },
  { href: '/contact', label: 'Contact Us' },
];

const communityLinks: FooterLink[] = [
  { href: WHATSAPP_COMMUNITY, label: 'Join Community', external: true },
  { href: '/contact', label: 'Become a Volunteer' },
  { href: '/contact', label: 'Speak at an Event' },
  { href: '/contact', label: 'Sponsor Us' },
  { href: CHAPTER_PAGE, label: 'Our Chapter', external: true },
  {
    href: 'https://developers.google.com/community-guidelines',
    label: 'Code of Conduct',
    external: true,
  },
];

const resourceLinks: FooterLink[] = [
  {
    href: 'https://developers.google.com/community/gdg',
    label: 'GDG Guide',
    external: true,
  },
  { href: 'https://developers.google.com', label: 'Google Developers', external: true },
  { href: 'https://cloud.google.com', label: 'Google Cloud', external: true },
  { href: 'https://firebase.google.com', label: 'Firebase', external: true },
  { href: 'https://developer.android.com', label: 'Android Developers', external: true },
  {
    href: 'https://developers.google.com/womentechmakers',
    label: 'Women Techmakers',
    external: true,
  },
];

const socialLinks = [
  {
    href: 'https://github.com/gdglucknow',
    label: 'GitHub',
    icon: Github,
    type: 'lucide' as const,
  },
  {
    href: 'https://www.linkedin.com/company/google-developer-groups-lucknow',
    label: 'LinkedIn',
    icon: Linkedin,
    type: 'lucide' as const,
  },
  {
    href: 'https://instagram.com/gdglucknow',
    label: 'Instagram',
    icon: Instagram,
    type: 'lucide' as const,
  },
  {
    href: WHATSAPP_COMMUNITY,
    label: 'WhatsApp',
    icon: whatsappIcon,
    type: 'image' as const,
  },
];

const legalLinks: FooterLink[] = [
  {
    href: 'https://developers.google.com/community-guidelines',
    label: 'Code of Conduct',
    external: true,
  },
  {
    href: 'https://policies.google.com/privacy',
    label: 'Privacy Policy',
    external: true,
  },
  { href: CHAPTER_PAGE, label: 'GDG Community', external: true },
];

const FooterHeading = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-base font-bold text-white">
    {children}
    <span className="mt-2 block h-0.5 w-6 rounded-full bg-blue-500" />
  </h3>
);

const FooterLinkList = ({ links }: { links: FooterLink[] }) => (
  <ul className="mt-5 space-y-3">
    {links.map((link) => (
      <li key={`${link.href}-${link.label}`}>
        {link.external ? (
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-white"
          >
            <span>{link.label}</span>
            <ExternalLink className="h-3 w-3 opacity-60 transition-opacity group-hover:opacity-100" />
          </a>
        ) : (
          <Link
            href={link.href}
            className="text-sm text-slate-400 transition-colors hover:text-white"
          >
            {link.label}
          </Link>
        )}
      </li>
    ))}
  </ul>
);

const Footer = () => {
  const [email, setEmail] = useState('');

  const nextEvent = upcomingEvents[0];
  const nextEventDate =
    nextEvent && nextEvent.date !== 'TBD'
      ? new Date(nextEvent.date).toLocaleDateString('en-GB', {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        })
      : 'Date to be announced';

  // There is no newsletter backend yet, so a subscription hands the address to
  // the organisers' inbox. Swap this for an API call once one exists.
  const handleSubscribe = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) return;

    const subject = encodeURIComponent('Newsletter subscription');
    const body = encodeURIComponent(
      `Please add ${email.trim()} to the GDG Lucknow newsletter.`
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setEmail('');
  };

  return (
    <footer>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-gradient-to-r from-slate-50 via-white to-slate-50 p-6 shadow-lg shadow-gray-900/5 sm:p-8">
            <GateOutline className="pointer-events-none absolute bottom-0 right-4 hidden h-[94%] w-auto text-blue-300/60 lg:block" />

            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <Users className="h-6 w-6" />
                </div>

                <div className="max-w-xl">
                  <h2 className="text-2xl font-bold tracking-[-0.02em] text-gray-950 sm:text-3xl">
                    Ready to be part of something{' '}
                    <span className="text-blue-600">great?</span>
                  </h2>

                  <p className="mt-2 text-sm leading-relaxed text-gray-600 sm:text-base">
                    Join GDG Lucknow and start your journey with a community
                    that learns, builds, and grows together.
                  </p>
                </div>
              </div>

              <a
                href={WHATSAPP_COMMUNITY}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-4 text-base font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/25 lg:mr-56"
              >
                <span>Join Community</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0d1b31]">
        <div className="relative overflow-hidden">
          <Image
            src="/lucknow_skyline_high_res_transparent.svg"
            alt=""
            width={1465}
            height={145}
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-auto w-full opacity-30"
          />

          <div className="relative mx-auto max-w-7xl px-4 pt-14 pb-44 sm:px-6 lg:px-8">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_1fr_1fr_1.3fr] lg:gap-8">
              <div>
                <div className="flex items-center gap-3">
                  <Image
                    src={gdgLogo}
                    alt="Google Developer Groups Lucknow"
                    width={86}
                    height={80}
                    className="h-11 w-auto"
                  />

                  <div className="leading-tight">
                    <p className="whitespace-nowrap text-base font-semibold text-white">
                      Google Developer Groups
                    </p>

                    <p className="text-base font-semibold text-blue-400">
                      Lucknow
                    </p>
                  </div>
                </div>

                <p className="mt-6 max-w-xs text-sm leading-relaxed text-slate-400">
                  A community of developers, innovators, and dreamers building the
                  future with Google technologies.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-200 hover:border-blue-500 hover:bg-blue-600 hover:text-white"
                    >
                      {social.type === 'image' ? (
                        <Image
                          src={social.icon}
                          alt=""
                          width={18}
                          height={18}
                          className="h-[18px] w-[18px]"
                        />
                      ) : (
                        <social.icon className="h-[18px] w-[18px]" />
                      )}
                    </a>
                  ))}
                </div>

                <div className="mt-7 space-y-3 border-t border-white/10 pt-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />

                    <div>
                      <p className="text-sm text-slate-300">
                        Lucknow, Uttar Pradesh, India
                      </p>

                      <p className="text-xs text-slate-500">
                        Building locally, impacting globally.
                      </p>
                    </div>
                  </div>

                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="flex items-center gap-3 text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-blue-400" />
                    <span>{CONTACT_EMAIL}</span>
                  </a>
                </div>
              </div>

              <div>
                <FooterHeading>Explore</FooterHeading>
                <FooterLinkList links={exploreLinks} />
              </div>

              <div>
                <FooterHeading>Community</FooterHeading>
                <FooterLinkList links={communityLinks} />
              </div>

              <div>
                <FooterHeading>Resources</FooterHeading>
                <FooterLinkList links={resourceLinks} />
              </div>

              <div>
                <FooterHeading>Stay Updated</FooterHeading>

                <p className="mt-5 text-sm leading-relaxed text-slate-400">
                  Subscribe to our newsletter and never miss an update.
                </p>

                <form onSubmit={handleSubscribe} className="mt-4">
                  <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-1.5 transition-colors focus-within:border-blue-500">
                    <label htmlFor="footer-newsletter" className="sr-only">
                      Email address
                    </label>

                    <input
                      id="footer-newsletter"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none"
                    />

                    <button
                      type="submit"
                      aria-label="Subscribe to the newsletter"
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white transition-colors hover:bg-blue-700"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </form>

                {nextEvent && (
                  <Link
                    href="/events"
                    className="mt-5 flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-blue-500/50 hover:bg-white/10"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600/15 text-blue-400">
                      <Calendar className="h-5 w-5" />
                    </span>

                    <span className="min-w-0">
                      <span className="block text-sm font-semibold text-blue-400">
                        Next Event
                      </span>

                      <span className="mt-0.5 block text-sm font-bold text-white">
                        {nextEvent.title}
                      </span>

                      <span className="mt-1 flex items-center gap-1.5 text-xs text-slate-400">
                        <CalendarDays className="h-3.5 w-3.5" />
                        {nextEventDate}
                      </span>
                    </span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
            <p>
              © {new Date().getFullYear()} Google Developer Groups Lucknow. All
              rights reserved.
            </p>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              {legalLinks.map((link, index) => (
                <span key={link.label} className="flex items-center gap-3">
                  {index !== 0 && (
                    <span className="text-blue-500" aria-hidden="true">
                      •
                    </span>
                  )}

                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
