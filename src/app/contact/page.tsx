'use client';

import { useState } from 'react';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon, 
  ClockIcon,
  SparklesIcon,
  HeartIcon,
  ChatBubbleBottomCenterTextIcon
} from '@heroicons/react/24/outline';
import { 
  PhoneIcon as PhoneIconSolid,
  EnvelopeIcon as EnvelopeIconSolid,
  MapPinIcon as MapPinIconSolid,
  ClockIcon as ClockIconSolid
} from '@heroicons/react/24/solid';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSubmitted(true);
    setIsSubmitting(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="relative min-h-screen">
      {/* Luxury Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_70%)]"></div>
      
      <div className="relative py-32 sm:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Premium Header */}
          <div className="relative text-center mb-20">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-96 h-96 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 mb-8">
                <ChatBubbleBottomCenterTextIcon className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-sm font-semibold text-blue-800 tracking-wide uppercase">Connect With Us</span>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-8 tracking-tight">
                Contact Us
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
                Get in touch with our world-class team for appointments, consultations, or emergency care. 
                We&apos;re here to provide exceptional service and support.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Premium Contact Information */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-blue-50/60 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl"></div>
              <div className="relative p-12">
                <div className="mb-12">
                  <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 mb-6">
                    <HeartIcon className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-sm font-semibold text-blue-800 tracking-wide uppercase">Contact Information</span>
                  </div>
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent mb-4">
                    Connect With Excellence
                  </h2>
                  <p className="text-lg text-slate-600 font-light">
                    Multiple ways to reach our dedicated team of specialists
                  </p>
                </div>
                
                <div className="space-y-10">
                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-400/20 to-pink-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative flex items-start p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:-translate-y-1">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                          <PhoneIconSolid className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <div className="ml-6 flex-1">
                        <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-red-600 transition-colors duration-300">
                          Phone Numbers
                        </h3>
                        <div className="space-y-3">
                          <div>
                            <a href="tel:+919876543210" className="text-lg font-semibold text-red-600 hover:text-red-700 transition-colors duration-300">
                              +91 98765 43210
                            </a>
                            <p className="text-sm font-medium text-red-500 bg-red-50 inline-block px-3 py-1 rounded-full mt-1">
                              24/7 Emergency Hotline
                            </p>
                          </div>
                          <div>
                            <a href="tel:+912223456789" className="text-lg font-medium text-slate-700 hover:text-blue-600 transition-colors duration-300">
                              +91 22 2345 6789
                            </a>
                            <p className="text-sm text-slate-500">General Appointments</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative flex items-start p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:-translate-y-1">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                          <EnvelopeIconSolid className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <div className="ml-6 flex-1">
                        <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                          Email Address
                        </h3>
                        <div className="space-y-2">
                          <div>
                            <a href="mailto:info@ramkrishnaeye.com" className="text-lg font-medium text-blue-600 hover:text-blue-700 transition-colors duration-300">
                              info@ramkrishnaeye.com
                            </a>
                            <p className="text-sm text-slate-500">General Inquiries</p>
                          </div>
                          <div>
                            <a href="mailto:emergency@ramkrishnaeye.com" className="text-lg font-medium text-blue-600 hover:text-blue-700 transition-colors duration-300">
                              emergency@ramkrishnaeye.com
                            </a>
                            <p className="text-sm text-slate-500">Emergency Cases</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative flex items-start p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:-translate-y-1">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                          <MapPinIconSolid className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <div className="ml-6 flex-1">
                        <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                          Location
                        </h3>
                        <div className="space-y-2">
                          <p className="text-lg font-medium text-slate-700">Ramkrishna Eye Hospital</p>
                          <p className="text-slate-600">123 Medical Plaza, Health City</p>
                          <p className="text-slate-600">Mumbai, Maharashtra 400001</p>
                          <a 
                            href="https://maps.google.com/?q=123+Medical+Plaza+Health+City+Mumbai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium mt-3 group/link"
                          >
                            Get Directions 
                            <svg className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative flex items-start p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:-translate-y-1">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                          <ClockIconSolid className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <div className="ml-6 flex-1">
                        <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                          Working Hours
                        </h3>
                        <div className="space-y-2">
                          <p className="text-lg font-medium text-slate-700">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                          <p className="text-lg font-medium text-slate-700">Sunday: 10:00 AM - 5:00 PM</p>
                          <p className="text-red-600 font-semibold bg-red-50 inline-block px-3 py-1 rounded-full mt-2">
                            24/7 Emergency Services
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Premium Quick Action Buttons */}
                <div className="mt-12">
                  <h3 className="text-xl font-bold text-slate-800 mb-6">Quick Actions</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a
                      href="https://wa.me/919876543210"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative overflow-hidden bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white py-4 px-6 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-center"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative">💬 WhatsApp Chat</span>
                    </a>
                    <a
                      href="tel:+919876543210"
                      className="group relative overflow-hidden bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white py-4 px-6 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-center"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative">🚨 Emergency Call</span>
                    </a>
                    <a
                      href="/appointment"
                      className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white py-4 px-6 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-center"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative">📅 Book Appointment</span>
                    </a>
                    <a
                      href="https://maps.google.com/?q=123+Medical+Plaza+Health+City+Mumbai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative overflow-hidden bg-gradient-to-r from-slate-500 to-gray-600 hover:from-slate-600 hover:to-gray-700 text-white py-4 px-6 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-center"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative">🗺️ Get Directions</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Contact Form */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-slate-50/80 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl"></div>
              <div className="relative p-12">
                <div className="mb-8">
                  <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 border border-indigo-200 mb-6">
                    <SparklesIcon className="h-5 w-5 text-indigo-600 mr-2" />
                    <span className="text-sm font-semibold text-indigo-800 tracking-wide uppercase">Send Message</span>
                  </div>
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-indigo-800 bg-clip-text text-transparent mb-4">
                    Get In Touch
                  </h2>
                  <p className="text-lg text-slate-600 font-light">
                    Share your concerns and we&apos;ll respond within 24 hours
                  </p>
                </div>
                
                {submitted ? (
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-green-400/20 rounded-2xl"></div>
                    <div className="relative bg-emerald-50/80 backdrop-blur-sm border border-emerald-200 text-emerald-800 p-8 rounded-2xl">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-emerald-900 mb-3">Message Sent Successfully!</h3>
                        <p className="text-emerald-700 text-lg">Thank you for contacting us. Our team will get back to you within 24 hours.</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-3">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-white/70 backdrop-blur-sm border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 text-slate-800 placeholder-slate-400 shadow-lg hover:shadow-xl"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-3">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-6 py-4 bg-white/70 backdrop-blur-sm border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 text-slate-800 placeholder-slate-400 shadow-lg hover:shadow-xl"
                          placeholder="your@email.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-3">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-6 py-4 bg-white/70 backdrop-blur-sm border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 text-slate-800 placeholder-slate-400 shadow-lg hover:shadow-xl"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-3">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-white/70 backdrop-blur-sm border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 text-slate-800 shadow-lg hover:shadow-xl"
                      >
                        <option value="">Select a subject</option>
                        <option value="appointment">Appointment Inquiry</option>
                        <option value="emergency">Emergency Consultation</option>
                        <option value="insurance">Insurance Questions</option>
                        <option value="services">Services Information</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-3">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-white/70 backdrop-blur-sm border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 resize-none text-slate-800 placeholder-slate-400 shadow-lg hover:shadow-xl"
                        placeholder="Please describe your inquiry or concern..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative w-full overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 disabled:from-blue-300 disabled:to-indigo-300 text-white py-4 px-8 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl disabled:scale-100 disabled:shadow-lg"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative text-lg">
                        {isSubmitting ? 'Sending Message...' : 'Send Message'}
                      </span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
