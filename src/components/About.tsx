import { CheckCircleIcon, AcademicCapIcon, TrophyIcon, UsersIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';

const features = [
  {
    name: 'State-of-the-Art Technology',
    description: 'Latest diagnostic and surgical equipment including OCT, Fundus Camera, and Phaco machines.',
    icon: CheckCircleIcon,
    gradient: 'from-blue-500 to-indigo-500',
  },
  {
    name: 'Experienced Team',
    description: 'Board-certified ophthalmologists with years of experience in various subspecialties.',
    icon: AcademicCapIcon,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Award-Winning Care',
    description: 'Recognized for excellence in patient care and innovative treatment approaches.',
    icon: TrophyIcon,
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    name: 'Patient-Centered Approach',
    description: 'Personalized treatment plans focusing on individual patient needs and comfort.',
    icon: UsersIcon,
    gradient: 'from-emerald-500 to-teal-500',
  },
];

const stats = [
  { name: 'Years of Excellence', value: '25+', icon: TrophyIcon },
  { name: 'Successful Surgeries', value: '50,000+', icon: CheckCircleIcon },
  { name: 'Expert Doctors', value: '15+', icon: AcademicCapIcon },
  { name: 'Patient Satisfaction', value: '98%', icon: StarIcon },
];

export default function About() {
  return (
    <div className="relative py-32 sm:py-40 overflow-hidden">
      {/* Luxury Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1),transparent_70%)]"></div>
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                {/* Premium Badge */}
                <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 mb-8">
                  <SparklesIcon className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-sm font-semibold text-blue-800 tracking-wide uppercase">Excellence in Eye Care</span>
                </div>
                
                <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-8 tracking-tight">
                  About Ramkrishna Eye Hospital
                </h2>
                <p className="text-xl text-slate-600 font-light leading-relaxed">
                  For over 25 years, Ramkrishna Eye Hospital has been at the forefront of ophthalmology, 
                  providing comprehensive eye care services with a commitment to excellence, innovation, 
                  and compassionate patient care.
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-slate-700 lg:max-w-lg">
                <p className="text-lg font-light mb-8">
                  Our hospital was founded with a simple yet powerful mission: to preserve and restore vision 
                  for people of all ages. We combine cutting-edge technology with the expertise of our 
                  board-certified ophthalmologists to deliver world-class eye care.
                </p>
                
                <ul role="list" className="space-y-6 text-slate-600">
                  <li className="flex gap-x-4">
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <CheckCircleIcon className="h-4 w-4 text-white" aria-hidden="true" />
                    </div>
                    <span className="font-light">
                      <strong className="font-semibold text-slate-900">Advanced Diagnostics.</strong> We use the 
                      latest diagnostic equipment including OCT, Fundus photography, and visual field analyzers 
                      for precise diagnosis and treatment planning.
                    </span>
                  </li>
                  <li className="flex gap-x-4">
                    <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <CheckCircleIcon className="h-4 w-4 text-white" aria-hidden="true" />
                    </div>
                    <span className="font-light">
                      <strong className="font-semibold text-slate-900">Minimally Invasive Surgery.</strong> Our 
                      surgical techniques focus on minimal invasion, faster recovery, and superior outcomes for 
                      our patients with reduced discomfort.
                    </span>
                  </li>
                  <li className="flex gap-x-4">
                    <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <CheckCircleIcon className="h-4 w-4 text-white" aria-hidden="true" />
                    </div>
                    <span className="font-light">
                      <strong className="font-semibold text-slate-900">Comprehensive Care.</strong> From routine 
                      eye exams to complex surgical procedures, we provide complete eye care services under one roof.
                    </span>
                  </li>
                </ul>
                
                <p className="mt-8 text-lg font-light">
                  Our team includes specialists in cataract surgery, retinal diseases, glaucoma, pediatric 
                  ophthalmology, and corneal disorders. We are committed to staying current with the latest 
                  advances in ophthalmology to provide our patients with the best possible care.
                </p>
              </div>
            </div>
            
            <div className="pt-8 lg:pt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <div key={feature.name} className="group relative">
                    {/* Floating background effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-all duration-500`}></div>
                    
                    <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-white/50 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-1 h-full">
                      {/* Icon */}
                      <div className="relative mb-4">
                        <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-500`}></div>
                        <div className={`relative w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                          <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                        {feature.name}
                      </h3>
                      <p className="text-sm text-slate-600 font-light leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Luxury Stats section */}
        <div className="mt-32 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 rounded-3xl"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.3),transparent_70%)] rounded-3xl"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(139,92,246,0.2),transparent_70%)] rounded-3xl"></div>
          
          <div className="relative bg-gradient-to-br from-blue-800/95 to-purple-900/95 backdrop-blur-xl rounded-3xl py-20 border border-white/10 shadow-2xl">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:max-w-none">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent mb-6 tracking-tight">
                    Trusted by thousands of patients
                  </h2>
                  <p className="text-xl text-blue-100 font-light leading-relaxed max-w-3xl mx-auto">
                    Our commitment to excellence is reflected in our achievements and the trust thousands of patients place in our care.
                  </p>
                </div>
                
                <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                  {stats.map((stat, index) => (
                    <div key={stat.name} className="group relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                      
                      <div className="relative flex flex-col items-center bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 group-hover:bg-white/15 transition-all duration-500 group-hover:-translate-y-2">
                        {/* Icon */}
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mb-4 shadow-xl group-hover:scale-110 transition-transform duration-500">
                          <stat.icon className="h-8 w-8 text-white" />
                        </div>
                        
                        <dd className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors duration-300">
                          {stat.value}
                        </dd>
                        <dt className="text-lg font-semibold text-blue-200 text-center leading-6">
                          {stat.name}
                        </dt>
                      </div>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
