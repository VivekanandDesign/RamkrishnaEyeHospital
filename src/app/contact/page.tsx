'use client';

import { useState } from 'react';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';

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
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Contact Us
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Get in touch with us for appointments, inquiries, or emergency care. We&apos;re here to help!
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                  <PhoneIcon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Phone Numbers</h3>
                  <div className="mt-2 space-y-2">
                    <div>
                      <a href="tel:+919876543210" className="text-blue-600 hover:text-blue-800 font-medium text-lg">
                        +91 98765 43210
                      </a>
                      <p className="text-sm text-red-600 font-medium">24/7 Emergency Hotline</p>
                    </div>
                    <div>
                      <a href="tel:+912223456789" className="text-blue-600 hover:text-blue-800 font-medium">
                        +91 22 2345 6789
                      </a>
                      <p className="text-sm text-gray-500">General Appointments</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                  <EnvelopeIcon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                  <div className="mt-2 space-y-1">
                    <a href="mailto:info@ramkrishnaeye.com" className="text-blue-600 hover:text-blue-800 font-medium">
                      info@ramkrishnaeye.com
                    </a>
                    <p className="text-sm text-gray-500">General Inquiries</p>
                    <a href="mailto:emergency@ramkrishnaeye.com" className="text-blue-600 hover:text-blue-800 font-medium">
                      emergency@ramkrishnaeye.com
                    </a>
                    <p className="text-sm text-gray-500">Emergency Cases</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                  <MapPinIcon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Address</h3>
                  <div className="mt-2">
                    <p className="text-gray-700">Ramkrishna Eye Hospital</p>
                    <p className="text-gray-700">123 Medical Plaza, Health City</p>
                    <p className="text-gray-700">Mumbai, Maharashtra 400001</p>
                    <a 
                      href="https://maps.google.com/?q=123+Medical+Plaza+Health+City+Mumbai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center mt-2"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                  <ClockIcon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Working Hours</h3>
                  <div className="mt-2 space-y-1">
                    <p className="text-gray-700">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                    <p className="text-gray-700">Sunday: 10:00 AM - 5:00 PM</p>
                    <p className="text-red-600 font-medium">24/7 Emergency Services Available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="mt-12 space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                >
                  💬 WhatsApp Chat
                </a>
                <a
                  href="tel:+919876543210"
                  className="flex items-center justify-center bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                >
                  🚨 Emergency Call
                </a>
                <a
                  href="/appointment"
                  className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                >
                  📅 Book Appointment
                </a>
                <a
                  href="https://maps.google.com/?q=123+Medical+Plaza+Health+City+Mumbai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-gray-600 hover:bg-gray-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                >
                  🗺️ Get Directions
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            
            {submitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                <h3 className="font-semibold">Message Sent Successfully!</h3>
                <p>Thank you for contacting us. We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors"
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
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors resize-none"
                    placeholder="Please describe your inquiry or concern..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Photo & Video Gallery */}
        <div className="mt-20">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Hospital Gallery
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Take a virtual tour of our modern facilities and advanced medical equipment
            </p>
          </div>

          {/* Photo Gallery */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Our Facilities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Reception Area */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🏥</span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">Reception Area</h4>
                    <p className="text-sm text-gray-600 mt-2">Comfortable waiting area with modern amenities</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
              </div>

              {/* Operating Theater */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-[4/3] bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">⚕️</span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">Operating Theater</h4>
                    <p className="text-sm text-gray-600 mt-2">State-of-the-art surgical facilities</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
              </div>

              {/* Diagnostic Equipment */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-[4/3] bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🔬</span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">Diagnostic Lab</h4>
                    <p className="text-sm text-gray-600 mt-2">Advanced diagnostic equipment and testing</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
              </div>

              {/* Consultation Room */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-[4/3] bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">👨‍⚕️</span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">Consultation Room</h4>
                    <p className="text-sm text-gray-600 mt-2">Private consultation with our specialists</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
              </div>

              {/* Recovery Room */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-[4/3] bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🛏️</span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">Recovery Room</h4>
                    <p className="text-sm text-gray-600 mt-2">Comfortable post-surgery recovery area</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
              </div>

              {/* Pharmacy */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-[4/3] bg-gradient-to-br from-indigo-100 to-indigo-200 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">💊</span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">In-House Pharmacy</h4>
                    <p className="text-sm text-gray-600 mt-2">Complete range of eye medications</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
              </div>
            </div>
          </div>

          {/* Video Gallery */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Video Tours & Procedures</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Hospital Tour Video */}
              <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
                <div className="aspect-video bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center relative">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-white/30 transition-colors cursor-pointer">
                      <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold">Hospital Virtual Tour</h4>
                    <p className="text-blue-100 text-sm mt-2">Complete walkthrough of our facilities</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">
                    5:30
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="font-semibold text-gray-900 mb-2">Complete Hospital Tour</h5>
                  <p className="text-gray-600 text-sm">Take a comprehensive virtual tour of our modern eye care facility, from reception to operating theaters.</p>
                </div>
              </div>

              {/* Cataract Surgery Video */}
              <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
                <div className="aspect-video bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center relative">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-white/30 transition-colors cursor-pointer">
                      <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold">Cataract Surgery</h4>
                    <p className="text-green-100 text-sm mt-2">Modern phacoemulsification procedure</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">
                    3:45
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="font-semibold text-gray-900 mb-2">Cataract Surgery Procedure</h5>
                  <p className="text-gray-600 text-sm">Learn about our advanced cataract surgery techniques and what to expect during the procedure.</p>
                </div>
              </div>

              {/* Patient Testimonial Video */}
              <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
                <div className="aspect-video bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center relative">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-white/30 transition-colors cursor-pointer">
                      <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold">Patient Stories</h4>
                    <p className="text-purple-100 text-sm mt-2">Real experiences from our patients</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">
                    4:15
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="font-semibold text-gray-900 mb-2">Patient Success Stories</h5>
                  <p className="text-gray-600 text-sm">Hear from our patients about their journey to better vision and their experience at our hospital.</p>
                </div>
              </div>

              {/* Eye Care Tips Video */}
              <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
                <div className="aspect-video bg-gradient-to-br from-orange-600 to-orange-800 flex items-center justify-center relative">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-white/30 transition-colors cursor-pointer">
                      <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold">Eye Care Tips</h4>
                    <p className="text-orange-100 text-sm mt-2">Expert advice for healthy eyes</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">
                    6:20
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="font-semibold text-gray-900 mb-2">Daily Eye Care Tips</h5>
                  <p className="text-gray-600 text-sm">Expert advice from our doctors on maintaining healthy eyes and preventing common eye problems.</p>
                </div>
              </div>
            </div>

            {/* View More Button */}
            <div className="text-center mt-8">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                View More Videos
              </button>
            </div>
          </div>

          {/* Awards & Certifications Gallery */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Awards & Certifications</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <h4 className="font-semibold text-gray-900 text-sm">Best Eye Hospital 2023</h4>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✅</span>
                </div>
                <h4 className="font-semibold text-gray-900 text-sm">NABH Accredited</h4>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⭐</span>
                </div>
                <h4 className="font-semibold text-gray-900 text-sm">Patient Choice Award</h4>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎓</span>
                </div>
                <h4 className="font-semibold text-gray-900 text-sm">ISO 9001:2015</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Find Us</h2>
          <div className="bg-gray-200 rounded-2xl p-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.9073451165895!2d72.8276!3d19.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzMzLjYiTiA3MsKwNDknMzkuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ramkrishna Eye Hospital Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
