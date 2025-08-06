import { 
  EyeIcon, 
  CogIcon, 
  HeartIcon, 
  AcademicCapIcon, 
  UserGroupIcon, 
  TruckIcon,
  SparklesIcon,
  CheckIcon
} from '@heroicons/react/24/outline';
import {
  EyeIcon as EyeIconSolid,
  CogIcon as CogIconSolid,
  HeartIcon as HeartIconSolid,
  AcademicCapIcon as AcademicCapIconSolid,
  UserGroupIcon as UserGroupIconSolid,
  TruckIcon as TruckIconSolid
} from '@heroicons/react/24/solid';

const services = [
  {
    name: 'Cataract Surgery',
    description: 'Revolutionary phacoemulsification and premium IOL implantation with cutting-edge technology for crystal-clear vision restoration.',
    icon: EyeIconSolid,
    gradient: 'from-blue-500 to-indigo-500',
    bgGradient: 'from-blue-50 to-indigo-50',
    features: ['Micro-incision surgery', 'Premium IOLs', 'Same-day recovery'],
  },
  {
    name: 'Retina Treatment',
    description: 'Advanced retinal care including diabetic retinopathy, macular degeneration with world-class precision treatment.',
    icon: CogIconSolid,
    gradient: 'from-emerald-500 to-teal-500',
    bgGradient: 'from-emerald-50 to-teal-50',
    features: ['Laser therapy', 'Anti-VEGF injections', 'Vitrectomy surgery'],
  },
  {
    name: 'Glaucoma Care',
    description: 'Comprehensive glaucoma management and prevention with state-of-the-art monitoring and treatment protocols.',
    icon: HeartIconSolid,
    gradient: 'from-red-500 to-pink-500',
    bgGradient: 'from-red-50 to-pink-50',
    features: ['Advanced screening', 'Medical management', 'Minimally invasive surgery'],
  },
  {
    name: 'Pediatric Ophthalmology',
    description: 'Specialized pediatric eye care with child-friendly approach, squint correction, and comprehensive vision therapy.',
    icon: AcademicCapIconSolid,
    gradient: 'from-purple-500 to-indigo-500',
    bgGradient: 'from-purple-50 to-indigo-50',
    features: ['Child-friendly care', 'Squint surgery', 'Vision therapy'],
  },
  {
    name: 'Corneal Transplant',
    description: 'Advanced corneal surgeries including DSEK/DMEK procedures and innovative keratoconus treatment options.',
    icon: UserGroupIconSolid,
    gradient: 'from-orange-500 to-amber-500',
    bgGradient: 'from-orange-50 to-amber-50',
    features: ['DSEK/DMEK surgery', 'Corneal cross-linking', 'Keratoconus treatment'],
  },
  {
    name: 'Emergency Services',
    description: 'Round-the-clock emergency eye care for trauma, sudden vision loss, and critical eye conditions with immediate response.',
    icon: TruckIconSolid,
    gradient: 'from-red-600 to-orange-500',
    bgGradient: 'from-red-50 to-orange-50',
    features: ['24/7 availability', 'Trauma care', 'Immediate response'],
  },
];

export default function Services() {
  return (
    <div id="services" className="relative py-32 sm:py-40 overflow-hidden">
      {/* Luxury Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_70%)]"></div>
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Premium Header */}
        <div className="relative text-center mb-20">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-96 h-96 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 mb-8">
              <SparklesIcon className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-sm font-semibold text-blue-800 tracking-wide uppercase">Our Specialties</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-8 tracking-tight">
              Comprehensive Eye Care Services
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
              Experience world-class ophthalmology with cutting-edge technology, internationally acclaimed specialists, 
              and personalized treatment plans designed to restore and enhance your vision.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={service.name} className="group relative">
              {/* Floating background effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-30 rounded-3xl blur-xl transition-all duration-500`}></div>
              
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:-translate-y-2 h-full">
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500`}></div>
                  <div className={`relative w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                  {service.name}
                </h3>
                
                <p className="text-slate-600 mb-6 leading-relaxed font-light">
                  {service.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-700">
                      <div className={`w-5 h-5 bg-gradient-to-br ${service.gradient} rounded-full flex items-center justify-center mr-3 shadow-md`}>
                        <CheckIcon className="h-3 w-3 text-white" />
                      </div>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* CTA Button */}
                <div className="mt-auto">
                  <a
                    href="/appointment"
                    className={`group/btn relative overflow-hidden bg-gradient-to-r ${service.gradient} hover:shadow-2xl text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative">Book Consultation</span>
                    <svg className="relative w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Premium CTA Section */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 rounded-3xl"></div>
          <div className="relative bg-gradient-to-br from-blue-800/95 to-purple-900/95 backdrop-blur-xl rounded-3xl p-12 border border-white/10 shadow-2xl text-center">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-6">
                Need Expert Eye Care Consultation?
              </h3>
              <p className="text-blue-100 text-lg mb-8 font-light">
                Our specialists are ready to provide personalized treatment plans tailored to your unique vision needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/appointment"
                  className="group relative overflow-hidden bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative">Schedule Consultation</span>
                </a>
                <a
                  href="tel:+919876543210"
                  className="group relative overflow-hidden bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-white/20"
                >
                  <span className="relative">Call: +91 98765 43210</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
