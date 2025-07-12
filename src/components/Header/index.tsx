'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import gdgLogo from '@/assests/gdglko-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (
        isMenuOpen &&
        !(e.target as HTMLElement).closest('.mobile-menu') &&
        !(e.target as HTMLElement).closest('.menu-button')
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/events', label: 'Events' },
    { href: '/team', label: 'Team' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActiveLink = (href: string) => {
    return href === '/' ? pathname === '/' : pathname.startsWith(href);
  };

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-[1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <Image
                src={gdgLogo}
                alt="GDG Lucknow Logo"
                width={200}
                height={80}
                priority
                style={{ height: 'auto', width: 'auto', maxHeight: 48 }}
              />
            </Link>

            <nav className="hidden md:flex space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                    isActiveLink(link.href)
                      ? 'text-blue-600 bg-blue-50 font-semibold'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                  {isActiveLink(link.href) && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></span>
                  )}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <a
                href="https://chat.whatsapp.com/L5VMIIEiUz90gh5gcOC054?mode=ac_c"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Join Community
              </a>
            </div>

            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200 menu-button"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Background overlay */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={closeMenu}
        ></div>

        {/* Sidebar panel */}
        <div
          className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white transform transition-transform duration-300 ease-in-out mobile-menu ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <Image
                src={gdgLogo}
                alt="GDG Lucknow Logo"
                width={120}
                height={48}
                style={{ height: 'auto', width: 'auto', maxHeight: 32 }}
              />
              <button
                onClick={closeMenu}
                className="p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors duration-200"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 px-6 py-6 space-y-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 transform ${
                    isActiveLink(link.href)
                      ? 'text-blue-600 bg-blue-50 font-semibold border-l-4 border-blue-600'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                  style={{
                    transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms',
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="px-6 py-6 border-t border-gray-200">
              <a
                href="https://chat.whatsapp.com/L5VMIIEiUz90gh5gcOC054?mode=ac_c"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className={`w-full bg-blue-600 text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-blue-700 transition-all duration-200 flex items-center justify-center`}
                style={{
                  transitionDelay: isMenuOpen ? `${navLinks.length * 50}ms` : '0ms',
                }}
              >
                Join Community
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
