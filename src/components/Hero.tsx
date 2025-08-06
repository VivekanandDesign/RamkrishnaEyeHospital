import Link from 'next/link';
import { 
  EyeIcon, 
  ClockIcon, 
  ShieldCheckIcon, 
  HeartIcon,
  SparklesIcon,
  StarIcon
} from '@heroicons/react/24/outline';
import {
  EyeIcon as EyeIconSolid,
  ShieldCheckIcon as ShieldCheckIconSolid,
  ClockIcon as ClockIconSolid,
  HeartIcon as HeartIconSolid,
  StarIcon as StarIconSolid
} from '@heroicons/react/24/solid';

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Luxury Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.3),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(139,92,246,0.3),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_80%)]"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-br from-emerald-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-100/20 to-purple-100/20 backdrop-blur-sm border border-white/20 mb-8">
              <SparklesIcon className="h-5 w-5 text-blue-300 mr-2" />
              <span className="text-sm font-semibold text-blue-200 tracking-wide uppercase">Premier Eye Care</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-tight">
              <span className="block bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                Your Vision is Our
              </span>
              <span className="block bg-gradient-to-r from-blue-300 via-purple-300 to-emerald-300 bg-clip-text text-transparent mt-2">
                Sacred Mission
              </span>
            </h1>
            
            <p className="mt-8 text-xl leading-8 text-blue-100 font-light max-w-2xl">
              Experience world-class ophthalmology with cutting-edge technology, internationally trained specialists, 
              and personalized care that transforms lives through the gift of perfect vision.
            </p>
            
            <div className="mt-12 flex flex-col sm:flex-row items-start gap-6">
              <Link
                href="/appointment"
                className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-10 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center">
                  <EyeIconSolid className="h-5 w-5 mr-2" />
                  Book Premium Consultation
                </span>
              </Link>
              
              <a
                href="tel:+919876543210"
                className="group relative overflow-hidden bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-white/20"
              >
                <span className="relative flex items-center">
                  <ClockIconSolid className="h-5 w-5 mr-2 text-red-400" />
                  24/7 Emergency Care
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </a>
            </div>
            
            {/* Premium Stats */}
            <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 group-hover:border-white/40 transition-all duration-300">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">50K+</div>
                    <div className="text-sm text-blue-200 font-medium mt-1">Patients Healed</div>
                  </div>
                </div>
              </div>
              
              <div className="text-center group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-transparent rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 group-hover:border-white/40 transition-all duration-300">
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-emerald-300 bg-clip-text text-transparent">25+</div>
                    <div className="text-sm text-blue-200 font-medium mt-1">Years Excellence</div>
                  </div>
                </div>
              </div>
              
              <div className="text-center group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-transparent rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 group-hover:border-white/40 transition-all duration-300">
                    <div className="text-3xl font-bold bg-gradient-to-r from-emerald-300 to-blue-300 bg-clip-text text-transparent">15+</div>
                    <div className="text-sm text-blue-200 font-medium mt-1">Master Specialists</div>
                  </div>
                </div>
              </div>
              
              <div className="text-center group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-400/20 to-transparent rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 group-hover:border-white/40 transition-all duration-300">
                    <div className="text-3xl font-bold bg-gradient-to-r from-red-300 to-orange-300 bg-clip-text text-transparent">24/7</div>
                    <div className="text-sm text-blue-200 font-medium mt-1">Emergency Care</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative z-10">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-blue-500/20 backdrop-blur-xl rounded-3xl border border-white/30 shadow-2xl"></div>
              <div className="relative p-10">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-2xl flex items-center justify-center mr-4 shadow-xl">
                    <StarIconSolid className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Why Choose Excellence?</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="group flex items-center p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <EyeIconSolid className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-white font-medium">Revolutionary Eye Technology</span>
                  </div>
                  
                  <div className="group flex items-center p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <ShieldCheckIconSolid className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-white font-medium">World-Class Specialists</span>
                  </div>
                  
                  <div className="group flex items-center p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <ClockIconSolid className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-white font-medium">Round-the-Clock Emergency</span>
                  </div>
                  
                  <div className="group flex items-center p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <HeartIconSolid className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-white font-medium">Personalized Patient Care</span>
                  </div>
                </div>
                
                <div className="mt-10 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-2xl blur-lg"></div>
                  <div className="relative bg-gradient-to-r from-emerald-500/80 to-blue-500/80 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                    <h4 className="font-bold text-white mb-4 flex items-center">
                      <SparklesIcon className="h-5 w-5 mr-2" />
                      Instant Connect
                    </h4>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href="https://wa.me/919876543210"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex-1 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl text-center font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                      >
                        <span className="flex items-center justify-center">
                          💬 WhatsApp
                        </span>
                      </a>
                      <a
                        href="tel:+919876543210"
                        className="group flex-1 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl text-center font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                      >
                        <span className="flex items-center justify-center">
                          📞 Call Now
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
