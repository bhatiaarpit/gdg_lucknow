'use client';

import React, { useState } from 'react';
import { Send, MessageCircle, Calendar, MapPin } from 'lucide-react';
import { inquiryTypes, contactInfo, socialLinks, faqs } from '@/Data/Contact';
import Image from 'next/image';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  inquiryType: string;
}

type SubmitStatus = '' | 'success' | 'error';

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
  link?: string;
}

// Removed unused SocialLink interface

interface ImportedSocialLink {
  icon: React.ReactNode | string; // Changed from 'any' to more specific type
  name: string;
  url: string;
  color: string;
  type: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface InquiryType {
  value: string;
  label: string;
}

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await fetch('https://formspree.io/f/xvgqpopo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          inquiryType: formData.inquiryType,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          inquiryType: 'general'
        });

        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus(''), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Status message JSX
  const StatusMessage = () => {
    if (submitStatus === 'success') {
      return (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-green-800 font-medium">Message sent successfully! We&apos;ll get back to you soon.</p>
          </div>
        </div>
      );
    }

    if (submitStatus === 'error') {
      return (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-red-800 font-medium">There was an error sending your message. Please try again.</p>
          </div>
        </div>
      );
    }

    return null;
  };

  const renderSocialIcon = (social: ImportedSocialLink) => {
    if (social.type === 'image') {
      // Handle both string URLs and imported SVG assets
      return (
        <Image
          src={social.icon as string}
          alt={social.name}
          width={20}
          height={20}
          className="h-5 w-5 filter brightness-0 invert"
        />
      );
    }
    
    // Check if social.icon is already a valid React element
    if (React.isValidElement(social.icon)) {
      return social.icon;
    }
    
    // Fallback: return null if icon is not valid
    return null;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="text-center">
            <h1 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Get in Touch
              </span>
            </h1>
            <p className="mx-auto max-w-3xl text-base text-gray-600 sm:text-xl">
              Have questions, ideas, or want to collaborate? We&apos;d love to hear from you. Reach out to our team and join our growing community.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Contact Form */}
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-lg sm:p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a message</h2>
              <p className="text-gray-600">Fill out the form below and we&apos;ll get back to you as soon as possible.</p>
            </div>

            <StatusMessage />

            <form onSubmit={handleSubmit} className="space-y-6 text-black">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                  Inquiry Type
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {Array.isArray(inquiryTypes) && inquiryTypes.map((type: InquiryType) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Brief subject line"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {Array.isArray(contactInfo) && contactInfo.map((info: ContactInfo, index: number) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-[15px] border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-blue-600 hover:text-blue-800 font-medium block mb-1"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-700 font-medium mb-1">{info.value}</p>
                      )}
                      <p className="text-sm text-gray-600">{info.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow us on social media</h3>
              <div className="flex space-x-4">
                {Array.isArray(socialLinks) && socialLinks.map((social: ImportedSocialLink, index: number) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-lg text-white transition-colors duration-200 ${social.color}`}
                    title={social.name}
                  >
                    {renderSocialIcon(social)}
                  </a>
                ))}
              </div>
            </div>

            {/* Location Map */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Find us in Lucknow</h3>
              <div className="rounded-lg overflow-hidden border border-gray-200">
                <iframe
                  title="Map of Lucknow showing Rumi Darwaza"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=80.8822%2C26.8512%2C80.9422%2C26.8912&layer=mapnik&marker=26.8712%2C80.9122"
                  className="w-full h-72 border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href="https://www.openstreetmap.org/?mlat=26.8712&mlon=80.9122#map=15/26.8712/80.9122"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center space-x-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors duration-200"
              >
                <MapPin className="h-4 w-4" />
                <span> Lucknow</span>
              </a>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Quick answers to common questions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Array.isArray(faqs) && faqs.map((faq: FAQ, index: number) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-600 to-green-600 p-5 text-center sm:mt-16 sm:p-8">
          <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl">Ready to join our community?</h2>
          <p className="mb-6 text-base text-white sm:text-xl">Don&apos;t miss out on our upcoming events and resources</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="/events"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Calendar className="h-5 w-5" />
              <span>View Events</span>
            </a>
            <a
              href="https://chat.whatsapp.com/L5VMIIEiUz90gh5gcOC054?mode=ac_c"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Join Our Community</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
