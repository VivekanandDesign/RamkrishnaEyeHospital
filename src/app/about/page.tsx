import { CheckCircleIcon, UserGroupIcon, TrophyIcon, HeartIcon, SparklesIcon, AcademicCapIcon, StarIcon } from '@heroicons/react/24/outline';
import { CheckCircleIcon as CheckCircleIconSolid, TrophyIcon as TrophyIconSolid } from '@heroicons/react/24/solid';
import Image from 'next/image';

const doctors = [
  {
    id: 1,
    name: 'Dr. Rajesh Kumar',
    specialization: 'Chief Cataract & Refractive Surgeon',
    experience: '15+ Years',
    education: 'MBBS, MS Ophthalmology, FRCS',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    description: 'Leading expert in premium cataract surgery and advanced IOL implantation with over 10,000 successful procedures.',
    achievements: ['International Fellowship', 'Award Winner 2023', '10K+ Surgeries'],
    specialties: ['Premium IOLs', 'Laser Surgery', 'Complex Cases'],
  },
  {
    id: 2,
    name: 'Dr. Priya Sharma',
    specialization: 'Senior Retinal Specialist',
    experience: '12+ Years',
    education: 'MBBS, MS, Fellowship in Vitreoretinal Surgery',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    description: 'Internationally trained retinal specialist focusing on diabetic retinopathy and macular degeneration treatments.',
    achievements: ['Harvard Fellowship', 'Research Excellence', 'Published Author'],
    specialties: ['Diabetic Retinopathy', 'Macular Surgery', 'Anti-VEGF Therapy'],
  },
  {
    id: 3,
    name: 'Dr. Amit Patel',
    specialization: 'Glaucoma Consultant & Surgeon',
    experience: '18+ Years',
    education: 'MBBS, MS, DNB, Fellowship in Glaucoma',
    image: 'https://randomuser.me/api/portraits/men/46.jpg',
    description: 'Renowned glaucoma specialist with expertise in minimally invasive glaucoma surgery and advanced diagnostic techniques.',
    achievements: ['MIGS Pioneer', 'Clinical Excellence', 'Innovation Award'],
    specialties: ['MIGS Surgery', 'Complex Glaucoma', 'Pediatric Glaucoma'],
  },
  {
    id: 4,
    name: 'Dr. Sunita Reddy',
    specialization: 'Pediatric Ophthalmology Director',
    experience: '10+ Years',
    education: 'MBBS, MS, Fellowship in Pediatric Ophthalmology',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    description: 'Dedicated pediatric eye specialist providing comprehensive care for children with vision disorders and developmental issues.',
    achievements: ['Child Care Excellence', 'Community Service', 'Parent Choice Award'],
    specialties: ['Squint Surgery', 'Amblyopia', 'Congenital Disorders'],
  },
];

const values = [
  {
    name: 'Clinical Excellence',
    description: 'We maintain the highest standards of medical care through continuous innovation, advanced technology, and evidence-based practices.',
    icon: TrophyIcon,
    gradient: 'from-amber-400 to-orange-500',
    bgColor: 'bg-gradient-to-br from-amber-50 to-orange-50',
  },
  {
    name: 'Compassionate Care',
    description: 'Every patient receives personalized attention with empathy, respect, and understanding throughout their journey with us.',
    icon: HeartIcon,
    gradient: 'from-rose-400 to-pink-500',
    bgColor: 'bg-gradient-to-br from-rose-50 to-pink-50',
  },
  {
    name: 'Innovation & Technology',
    description: 'We embrace cutting-edge technologies and pioneering treatments to deliver the most advanced eye care solutions available.',
    icon: SparklesIcon,
    gradient: 'from-blue-400 to-indigo-500',
    bgColor: 'bg-gradient-to-br from-blue-50 to-indigo-50',
  },
  {
    name: 'Collaborative Excellence',
    description: 'Our multidisciplinary team works in perfect harmony to provide comprehensive, coordinated care for optimal patient outcomes.',
    icon: UserGroupIcon,
    gradient: 'from-emerald-400 to-teal-500',
    bgColor: 'bg-gradient-to-br from-emerald-50 to-teal-50',
  },
];

export default function AboutPage() {
  return (
    <div className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Luxury Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-100/30 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-100/30 to-transparent rounded-full blur-3xl"></div>
      
      <div className="relative py-32 sm:py-40">
        <div className="mx-auto max-w-8xl px-6 lg:px-12">
          
          {/* Luxury Header with Premium Typography */}
          <div className="mx-auto max-w-4xl text-center mb-32">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600/10 to-indigo-600/10 border border-blue-200/50 backdrop-blur-sm mb-8">
              <SparklesIcon className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-sm font-semibold text-blue-800 tracking-wide uppercase">About Excellence</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-slate-800 via-blue-900 to-slate-800 bg-clip-text text-transparent mb-8 leading-tight tracking-tight">
              Redefining
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Vision Care Excellence
              </span>
            </h1>
            
            <p className="text-xl leading-relaxed text-slate-600 max-w-3xl mx-auto font-light mb-12">
              Where cutting-edge technology meets compassionate care, creating an unparalleled experience 
              in comprehensive eye healthcare and surgical excellence.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-500">
              <div className="flex items-center">
                <CheckCircleIconSolid className="h-5 w-5 text-emerald-500 mr-2" />
                <span>25+ Years of Excellence</span>
              </div>
              <div className="flex items-center">
                <TrophyIconSolid className="h-5 w-5 text-amber-500 mr-2" />
                <span>Award-Winning Care</span>
              </div>
              <div className="flex items-center">
                <StarIcon className="h-5 w-5 text-blue-500 mr-2" />
                <span>International Standards</span>
              </div>
            </div>
          </div>

          {/* Luxury Mission & Vision Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                  <TrophyIcon className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-slate-800 mb-6 tracking-tight">Our Mission</h2>
                <p className="text-lg text-slate-600 leading-relaxed font-light">
                  To revolutionize eye care through exceptional medical expertise, cutting-edge technology, 
                  and compassionate service, ensuring every patient receives world-class treatment in a 
                  luxurious, comfortable environment that exceeds expectations.
                </p>
                <div className="absolute top-8 right-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-100/50 to-indigo-100/50 rounded-full"></div>
                </div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                  <SparklesIcon className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-slate-800 mb-6 tracking-tight">Our Vision</h2>
                <p className="text-lg text-slate-600 leading-relaxed font-light">
                  To be the global leader in ophthalmic excellence, setting new standards in vision care 
                  through innovation, research, and unwavering commitment to patient satisfaction, while 
                  building a legacy of trust and medical excellence.
                </p>
                <div className="absolute top-8 right-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-emerald-100/50 to-teal-100/50 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Luxury Our Story Section */}
          <div className="mb-32">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 rounded-3xl"></div>
              <div className="relative bg-gradient-to-br from-slate-800/95 to-blue-900/95 backdrop-blur-xl rounded-3xl p-16 border border-white/10 shadow-2xl overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-400/20 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-amber-400/20 to-transparent rounded-full blur-2xl"></div>
                
                <div className="relative z-10 max-w-5xl mx-auto text-center">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
                    <AcademicCapIcon className="h-5 w-5 text-blue-300 mr-2" />
                    <span className="text-sm font-medium text-blue-200 tracking-wide">Our Legacy</span>
                  </div>
                  
                  <h2 className="text-5xl font-bold text-white mb-12 tracking-tight">
                    A Legacy of 
                    <span className="block bg-gradient-to-r from-blue-300 to-amber-300 bg-clip-text text-transparent">
                      Visionary Excellence
                    </span>
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white/90">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-semibold text-blue-300">1998 - Foundation</h3>
                      <p className="text-lg leading-relaxed font-light">
                        Founded with a revolutionary vision to transform eye care, starting as an intimate clinic 
                        driven by passion for excellence and patient-centered care.
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-2xl font-semibold text-amber-300">2010 - Innovation</h3>
                      <p className="text-lg leading-relaxed font-light">
                        Pioneered advanced surgical techniques and introduced cutting-edge technology, 
                        establishing ourselves as leaders in ophthalmic innovation and research.
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-2xl font-semibold text-emerald-300">2025 - Excellence</h3>
                      <p className="text-lg leading-relaxed font-light">
                        Today, we stand as a beacon of medical excellence, serving thousands with 
                        world-class facilities and internationally recognized expertise.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-300 mb-2">25+</div>
                      <div className="text-sm text-white/70 uppercase tracking-wide">Years Excellence</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-amber-300 mb-2">50K+</div>
                      <div className="text-sm text-white/70 uppercase tracking-wide">Successful Surgeries</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-emerald-300 mb-2">100K+</div>
                      <div className="text-sm text-white/70 uppercase tracking-wide">Patients Served</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-rose-300 mb-2">99.8%</div>
                      <div className="text-sm text-white/70 uppercase tracking-wide">Success Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Values Section */}
          <div className="mb-32">
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-slate-100 to-blue-100 border border-slate-200 mb-8">
                <HeartIcon className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-sm font-semibold text-slate-800 tracking-wide uppercase">Core Values</span>
              </div>
              
              <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent mb-6 tracking-tight">
                Pillars of Excellence
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
                Our unwavering commitment to these fundamental principles drives everything we do, 
                ensuring exceptional outcomes and experiences for every patient.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div 
                  key={value.name} 
                  className="group relative"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${value.gradient} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  <div className={`relative ${value.bgColor} backdrop-blur-xl rounded-3xl p-10 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-1 h-full`}>
                    <div className="flex items-start space-x-6">
                      <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${value.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                        <value.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-slate-900 transition-colors duration-300">
                          {value.name}
                        </h3>
                        <p className="text-lg text-slate-600 leading-relaxed font-light group-hover:text-slate-700 transition-colors duration-300">
                          {value.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Decorative corner element */}
                    <div className="absolute top-6 right-6">
                      <div className={`w-20 h-20 bg-gradient-to-br ${value.gradient} opacity-10 rounded-full blur-xl`}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Luxury Team Section */}
          <div className="mb-32">
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-200 mb-8">
                <UserGroupIcon className="h-5 w-5 text-amber-600 mr-2" />
                <span className="text-sm font-semibold text-amber-800 tracking-wide uppercase">Expert Team</span>
              </div>
              
              <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-800 to-amber-800 bg-clip-text text-transparent mb-6 tracking-tight">
                Meet Our Visionary Leaders
              </h2>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
                Our internationally trained ophthalmologists combine decades of expertise with cutting-edge 
                techniques to deliver unprecedented outcomes in vision care and surgical excellence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
              {doctors.map((doctor, index) => (
                <div 
                  key={doctor.id} 
                  className="group relative"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-700"></div>
                  <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-3 border border-white/50">
                    
                    {/* Premium Doctor Image */}
                    <div className="relative overflow-hidden">
                      <div className="aspect-[4/5] bg-gradient-to-br from-slate-100 to-blue-100">
                        <Image
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          src={doctor.image}
                          alt={doctor.name}
                          width={400}
                          height={500}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/40 transition-all duration-700"></div>
                        
                        {/* Floating Achievement Badge */}
                        <div className="absolute top-4 right-4">
                          <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 border border-white/50">
                            <span className="text-xs font-semibold text-slate-700">{doctor.experience}</span>
                          </div>
                        </div>
                        
                        {/* Premium Overlay Content */}
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="text-white space-y-1">
                            <h3 className="text-xl font-bold">{doctor.name}</h3>
                            <p className="text-blue-200 text-sm font-medium">{doctor.specialization}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Premium Card Content */}
                    <div className="p-8 space-y-6">
                      <div>
                        <p className="text-sm font-medium text-slate-500 mb-2">{doctor.education}</p>
                        <p className="text-slate-600 leading-relaxed font-light">
                          {doctor.description}
                        </p>
                      </div>
                      
                      {/* Achievements */}
                      <div>
                        <h4 className="text-sm font-semibold text-slate-800 mb-3">Key Achievements</h4>
                        <div className="flex flex-wrap gap-2">
                          {doctor.achievements.map((achievement, idx) => (
                            <span 
                              key={idx}
                              className="px-3 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-full text-xs font-medium text-blue-700"
                            >
                              {achievement}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Specialties */}
                      <div>
                        <h4 className="text-sm font-semibold text-slate-800 mb-3">Specializations</h4>
                        <div className="space-y-1">
                          {doctor.specialties.map((specialty, idx) => (
                            <div key={idx} className="flex items-center text-sm text-slate-600">
                              <CheckCircleIconSolid className="h-3 w-3 text-emerald-500 mr-2 flex-shrink-0" />
                              {specialty}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Premium Action Buttons */}
                      <div className="space-y-3 pt-4">
                        <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-2xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 text-sm font-semibold shadow-lg hover:shadow-xl transform hover:scale-105">
                          View Complete Profile
                        </button>
                        <a
                          href="/appointment"
                          className="w-full bg-white border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-2xl hover:bg-blue-50 transition-all duration-300 text-sm font-semibold text-center block transform hover:scale-105 shadow-md hover:shadow-lg"
                        >
                          Schedule Consultation
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Premium Awards & Recognition */}
          <div className="mb-32">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl"></div>
              <div className="relative bg-white/60 backdrop-blur-xl rounded-3xl p-16 border border-white/50 shadow-2xl">
                <div className="text-center mb-16">
                  <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-200 mb-8">
                    <TrophyIcon className="h-5 w-5 text-amber-600 mr-2" />
                    <span className="text-sm font-semibold text-amber-800 tracking-wide uppercase">Recognition</span>
                  </div>
                  
                  <h2 className="text-5xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-6 tracking-tight">
                    Awards & Accolades
                  </h2>
                  <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
                    Our unwavering commitment to excellence has earned us prestigious recognition 
                    from leading healthcare organizations worldwide.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="group text-center">
                    <div className="relative mb-8">
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                      <div className="relative bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl p-8 border border-amber-200 group-hover:border-amber-300 transition-all duration-500 group-hover:-translate-y-2">
                        <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-500">
                          <TrophyIcon className="h-10 w-10 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-amber-700 transition-colors duration-300">
                          Best Eye Hospital 2023
                        </h3>
                        <p className="text-slate-600 font-medium">Healthcare Excellence Awards</p>
                        <div className="mt-4 flex justify-center">
                          {[...Array(5)].map((_, i) => (
                            <StarIcon key={i} className="h-5 w-5 text-amber-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group text-center">
                    <div className="relative mb-8">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                      <div className="relative bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl p-8 border border-blue-200 group-hover:border-blue-300 transition-all duration-500 group-hover:-translate-y-2">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-500">
                          <CheckCircleIcon className="h-10 w-10 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                          NABH Accredited
                        </h3>
                        <p className="text-slate-600 font-medium">National Quality Standards</p>
                        <div className="mt-4 flex justify-center">
                          {[...Array(5)].map((_, i) => (
                            <StarIcon key={i} className="h-5 w-5 text-blue-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group text-center">
                    <div className="relative mb-8">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                      <div className="relative bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl p-8 border border-emerald-200 group-hover:border-emerald-300 transition-all duration-500 group-hover:-translate-y-2">
                        <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-500">
                          <HeartIcon className="h-10 w-10 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-emerald-700 transition-colors duration-300">
                          Patient Choice Award
                        </h3>
                        <p className="text-slate-600 font-medium">Highest Patient Satisfaction</p>
                        <div className="mt-4 flex justify-center">
                          {[...Array(5)].map((_, i) => (
                            <StarIcon key={i} className="h-5 w-5 text-emerald-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Premium CTA Section */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 rounded-3xl"></div>
            <div className="relative bg-gradient-to-br from-blue-800/95 to-purple-900/95 backdrop-blur-xl rounded-3xl p-16 border border-white/10 shadow-2xl overflow-hidden text-center">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-400/20 to-transparent rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-400/20 to-transparent rounded-full blur-2xl"></div>
              
              <div className="relative z-10 max-w-4xl mx-auto">
                <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
                  <SparklesIcon className="h-5 w-5 text-blue-300 mr-2" />
                  <span className="text-sm font-medium text-blue-200 tracking-wide uppercase">Begin Your Journey</span>
                </div>
                
                <h2 className="text-5xl font-bold text-white mb-6 tracking-tight">
                  Ready to Experience
                  <span className="block bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                    Visionary Excellence?
                  </span>
                </h2>
                
                <p className="text-xl text-blue-100 mb-12 font-light leading-relaxed max-w-3xl mx-auto">
                  Take the first step towards exceptional vision care. Schedule your premium consultation 
                  today and discover why thousands trust us with their most precious sense.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a
                    href="/appointment"
                    className="group relative inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:from-blue-600 hover:to-indigo-600"
                  >
                    <span className="relative z-10">Schedule Premium Consultation</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
                  </a>
                  <a
                    href="/contact"
                    className="group relative inline-flex items-center justify-center px-10 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:bg-white/20 hover:border-white/50"
                  >
                    <span className="relative z-10">Contact Our Specialists</span>
                  </a>
                </div>
                
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-blue-100">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-2">24/7 Support</div>
                    <div className="text-sm opacity-80">Emergency Care Available</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-2">Same Day</div>
                    <div className="text-sm opacity-80">Consultation Available</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-2">International</div>
                    <div className="text-sm opacity-80">Standards of Care</div>
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
