import { PhoneIcon, MapPinIcon, ClockIcon, EnvelopeIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { CalendarDaysIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid';

export default function ContactCTA() {
  return (
    <div className="relative py-32 sm:py-40 overflow-hidden">
      {/* Luxury Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.3),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(139,92,246,0.2),transparent_70%)]"></div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Premium Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-100/20 backdrop-blur-xl border border-blue-200/30 mb-8">
            <ChatBubbleLeftRightIcon className="h-5 w-5 text-blue-300 mr-2" />
            <span className="text-sm font-semibold text-blue-200 tracking-wide uppercase">Connect With Us</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent mb-8 tracking-tight">
            Get in Touch
          </h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto font-light leading-relaxed">
            Ready to take care of your vision? Contact us today for expert consultation, advanced treatments, 
            or emergency care from our world-class ophthalmology team.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="group bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-start">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <PhoneIcon className="h-7 w-7 text-white" />
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                  <p className="text-blue-100 mb-4 font-light">Call us for appointments or emergencies</p>
                  <div className="space-y-2">
                    <a href="tel:+919876543210" className="block text-blue-300 hover:text-blue-200 font-semibold text-lg transition-colors">
                      +91 98765 43210
                    </a>
                    <p className="text-sm text-blue-200/80 bg-red-500/20 px-3 py-1 rounded-full inline-block">
                      24/7 Emergency Hotline
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-start">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <MapPinIcon className="h-7 w-7 text-white" />
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-white mb-2">Location</h3>
                  <p className="text-blue-100 mb-4 font-light">Visit us at our state-of-the-art facility</p>
                  <div className="space-y-1">
                    <p className="text-blue-200">123 Medical Plaza, Health City</p>
                    <p className="text-blue-200">Mumbai, Maharashtra 400001</p>
                    <a 
                      href="https://maps.google.com/?q=123+Medical+Plaza+Health+City+Mumbai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-300 hover:text-blue-200 font-semibold mt-2 transition-colors"
                    >
                      Get Directions 
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-start">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <ClockIcon className="h-7 w-7 text-white" />
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-white mb-2">Hours</h3>
                  <p className="text-blue-100 mb-4 font-light">We&apos;re here when you need us</p>
                  <div className="space-y-2">
                    <p className="text-blue-200">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                    <p className="text-blue-200">Sunday: 10:00 AM - 5:00 PM</p>
                    <p className="text-red-300 font-semibold bg-red-500/20 px-3 py-1 rounded-full inline-block">
                      24/7 Emergency Services
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-start">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <EnvelopeIcon className="h-7 w-7 text-white" />
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                  <p className="text-blue-100 mb-4 font-light">Send us your queries</p>
                  <a href="mailto:info@ramkrishnaeye.com" className="text-blue-300 hover:text-blue-200 font-semibold text-lg transition-colors">
                    info@ramkrishnaeye.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Quick Actions */}
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
            <div className="flex items-center mb-8">
              <SparklesIcon className="h-8 w-8 text-blue-300 mr-3" />
              <h3 className="text-2xl font-bold text-white">Quick Actions</h3>
            </div>
            
            <div className="space-y-4">
              <a
                href="/appointment"
                className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white text-center py-5 px-6 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl block"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center">
                  <CalendarDaysIcon className="h-6 w-6 mr-3" />
                  Book Appointment Online
                </div>
              </a>
              
              <a
                href="tel:+919876543210"
                className="group relative overflow-hidden bg-gradient-to-r from-red-500 to-rose-500 hover:from-red-600 hover:to-rose-600 text-white text-center py-5 px-6 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl block"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center">
                  <PhoneIcon className="h-6 w-6 mr-3 animate-pulse" />
                  Emergency Call
                </div>
              </a>
              
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-center py-5 px-6 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl block"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center">
                  <ChatBubbleLeftRightIcon className="h-6 w-6 mr-3" />
                  WhatsApp Chat
                </div>
              </a>
              
              <a
                href="/contact"
                className="group relative overflow-hidden bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600 text-white text-center py-5 px-6 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl block"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center">
                  <EnvelopeIcon className="h-6 w-6 mr-3" />
                  Contact Form
                </div>
              </a>
            </div>
            
            <div className="mt-8 bg-blue-400/20 backdrop-blur-sm rounded-2xl p-6 border border-blue-300/30">
              <h4 className="font-bold text-blue-100 mb-3 text-lg">Need Help?</h4>
              <p className="text-blue-200 text-sm font-light leading-relaxed">
                Our patient care team is available to assist you with appointments, 
                insurance queries, and general information. We&apos;re here to make your eye care journey seamless.
              </p>
            </div>
          </div>
        </div>
        
        {/* Luxury Google Maps Section */}
        <div className="mt-20">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Find Us</h3>
              <p className="text-blue-100 font-light">Located in the heart of Mumbai&apos;s medical district</p>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.9073451165895!2d72.8276!3d19.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzMzLjYiTiA3MsKwNDknMzkuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ramkrishna Eye Hospital Location"
                className="w-full h-96 rounded-2xl"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
