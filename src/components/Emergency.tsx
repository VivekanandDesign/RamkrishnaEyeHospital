import Link from 'next/link';
import { ExclamationTriangleIcon, PhoneIcon, ClockIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { ShieldCheckIcon, HeartIcon } from '@heroicons/react/24/solid';

export default function Emergency() {
  return (
    <div className="relative py-20 overflow-hidden">
      {/* Luxury Emergency Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-950 via-rose-900 to-red-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(239,68,68,0.2),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(220,38,38,0.15),transparent_70%)]"></div>
      
      {/* Animated pulse effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          {/* Premium Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-red-100/20 backdrop-blur-xl border border-red-200/30 mb-8">
            <ExclamationTriangleIcon className="h-5 w-5 text-red-300 mr-2 animate-pulse" />
            <span className="text-sm font-semibold text-red-200 tracking-wide uppercase">Emergency Services</span>
          </div>
          
          {/* Emergency Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-rose-500 rounded-full blur-2xl opacity-60 animate-pulse"></div>
              <div className="relative flex items-center justify-center w-24 h-24 bg-gradient-to-br from-red-500 to-rose-600 rounded-full shadow-2xl">
                <ExclamationTriangleIcon className="h-12 w-12 text-white animate-bounce" />
              </div>
            </div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-red-100 to-rose-200 bg-clip-text text-transparent mb-8 tracking-tight">
            Emergency Eye Care
          </h2>
          
          <p className="text-xl text-red-100 mb-8 max-w-4xl mx-auto font-light leading-relaxed">
            Critical eye injuries and sudden vision loss require immediate expert attention. Our 24/7 emergency team 
            is equipped with advanced diagnostic tools and surgical capabilities to handle any eye emergency.
          </p>
          
          {/* Premium Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <ClockIcon className="h-8 w-8 text-red-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">24/7 Availability</h3>
              <p className="text-red-100 text-sm">Round-the-clock emergency care</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <ShieldCheckIcon className="h-8 w-8 text-red-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Expert Specialists</h3>
              <p className="text-red-100 text-sm">Board-certified emergency ophthalmologists</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <HeartIcon className="h-8 w-8 text-red-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Immediate Care</h3>
              <p className="text-red-100 text-sm">Rapid response and treatment</p>
            </div>
          </div>
          
          {/* Premium CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:+919876543210"
              className="group relative overflow-hidden bg-gradient-to-r from-red-500 to-rose-500 hover:from-red-600 hover:to-rose-600 text-white px-10 py-5 rounded-2xl text-lg font-bold shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-red-500/25"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center justify-center">
                <PhoneIcon className="h-6 w-6 mr-3 animate-pulse" />
                <div className="text-center">
                  <div className="text-sm opacity-90">Emergency Hotline</div>
                  <div className="text-xl font-bold">+91 98765 43210</div>
                </div>
              </div>
            </a>
            
            <Link
              href="/appointment"
              className="group relative overflow-hidden bg-white/15 backdrop-blur-xl border-2 border-white/30 text-white px-10 py-5 rounded-2xl text-lg font-semibold shadow-2xl transition-all duration-300 transform hover:scale-105 hover:bg-white/25 hover:shadow-white/10"
            >
              <div className="relative flex items-center justify-center">
                <SparklesIcon className="h-6 w-6 mr-3" />
                <span>Schedule Consultation</span>
              </div>
            </Link>
          </div>
          
          {/* Emergency Conditions */}
          <div className="mt-16 bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">When to Seek Emergency Eye Care</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              {[
                "Sudden vision loss or severe vision changes",
                "Eye injuries from accidents or trauma", 
                "Chemical burns or foreign objects in eye",
                "Severe eye pain with nausea or vomiting",
                "Flashing lights or curtain-like vision loss",
                "New onset of double vision"
              ].map((condition, index) => (
                <div key={index} className="flex items-center text-red-100">
                  <div className="w-2 h-2 bg-gradient-to-r from-red-400 to-rose-400 rounded-full mr-3 flex-shrink-0"></div>
                  <span className="font-medium">{condition}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
