import { CheckCircleIcon, UserGroupIcon, TrophyIcon, HeartIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const doctors = [
  {
    id: 1,
    name: 'Dr. Rajesh Kumar',
    specialization: 'Cataract & Refractive Surgery',
    experience: '15+ Years',
    education: 'MBBS, MS Ophthalmology',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    description: 'Expert in advanced cataract surgery and premium IOL implantation.',
  },
  {
    id: 2,
    name: 'Dr. Priya Sharma',
    specialization: 'Retina Specialist',
    experience: '12+ Years',
    education: 'MBBS, MS, Fellowship in Retina',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    description: 'Specialized in diabetic retinopathy and macular degeneration treatment.',
  },
  {
    id: 3,
    name: 'Dr. Amit Patel',
    specialization: 'Glaucoma Specialist',
    experience: '18+ Years',
    education: 'MBBS, MS, Fellowship in Glaucoma',
    image: 'https://randomuser.me/api/portraits/men/46.jpg',
    description: 'Leading expert in glaucoma diagnosis and advanced surgical management.',
  },
  {
    id: 4,
    name: 'Dr. Sunita Reddy',
    specialization: 'Pediatric Ophthalmology',
    experience: '10+ Years',
    education: 'MBBS, MS, Fellowship in Pediatric Ophthalmology',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    description: 'Specialized in children&apos;s eye care and squint correction.',
  },
];

const values = [
  {
    name: 'Excellence',
    description: 'We strive for the highest standards in medical care and patient service.',
    icon: TrophyIcon,
  },
  {
    name: 'Compassion',
    description: 'We treat every patient with empathy, respect, and understanding.',
    icon: HeartIcon,
  },
  {
    name: 'Innovation',
    description: 'We embrace new technologies and treatments to improve patient outcomes.',
    icon: CheckCircleIcon,
  },
  {
    name: 'Teamwork',
    description: 'We work together as a unified team to provide comprehensive care.',
    icon: UserGroupIcon,
  },
];

export default function AboutPage() {
  return (
    <div className="py-24 sm:py-32 scroll-smooth">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center animate-fade-in">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl transition-all duration-700 hover:text-blue-600">
            About Us
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 transition-opacity duration-500">
            Learn more about Ramkrishna Eye Hospital, our mission, our team, and our commitment to excellence in eye care.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-blue-50 rounded-md p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-lg hover:bg-blue-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 transition-colors duration-300">Our Mission</h2>
            <p className="text-gray-700 leading-7 transition-opacity duration-300">
              To provide comprehensive, compassionate, and cutting-edge eye care services 
              to our community. We are committed to preserving and restoring vision through 
              innovative treatments, advanced technology, and personalized patient care.
            </p>
          </div>
          
          <div className="bg-green-50 rounded-md p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-lg hover:bg-green-100 lg:animate-slide-in-right">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 transition-colors duration-300">Our Vision</h2>
            <p className="text-gray-700 leading-7 transition-opacity duration-300">
              To be the leading eye care center in the region, recognized for clinical 
              excellence, technological advancement, and exceptional patient outcomes. 
              We envision a future where preventable blindness is eliminated.
            </p>
          </div>
        </div>

        {/* Our Story */}
        <div className="mt-20">
          <div className="bg-white rounded-md shadow-lg p-12 transform transition-all duration-700 hover:shadow-xl hover:-translate-y-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center transition-colors duration-300 hover:text-blue-600">Our Story</h2>
            <div className="prose max-w-none text-gray-700">
              <p className="text-lg leading-8 mb-6 transition-all duration-500 hover:text-gray-900">
                Ramkrishna Eye Hospital was founded in 1998 with a simple yet powerful vision: 
                to bring world-class eye care to our community. What started as a small clinic 
                with a passionate ophthalmologist has grown into a comprehensive eye care center 
                serving thousands of patients annually.
              </p>
              
              <p className="text-lg leading-8 mb-6 transition-all duration-500 hover:text-gray-900">
                Over the past 25 years, we have continuously evolved, embracing new technologies 
                and expanding our services to meet the growing needs of our patients. Our commitment 
                to excellence has earned us recognition as one of the leading eye hospitals in the region.
              </p>
              
              <p className="text-lg leading-8 transition-all duration-500 hover:text-gray-900">
                Today, we are proud to offer a full spectrum of eye care services, from routine 
                eye exams to complex surgical procedures, all delivered with the same compassion 
                and dedication that has defined us from the beginning.
              </p>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mt-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl transition-colors duration-300 hover:text-blue-600">
              Our Values
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600 transition-opacity duration-500">
              The principles that guide everything we do at Ramkrishna Eye Hospital.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {values.map((value, index) => (
              <div 
                key={value.name} 
                className="bg-white rounded-md shadow-lg p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-blue-600 transition-all duration-300 hover:bg-blue-700 hover:scale-110">
                    <value.icon className="h-6 w-6 text-white transition-transform duration-300" aria-hidden="true" />
                  </div>
                  <h3 className="ml-4 text-xl font-semibold text-gray-900 transition-colors duration-300 hover:text-blue-600">{value.name}</h3>
                </div>
                <p className="text-gray-600 transition-colors duration-300 hover:text-gray-800">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Team */}
        <div className="mt-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl transition-colors duration-300 hover:text-blue-600">
              Meet Our Expert Team
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600 transition-opacity duration-500">
              Our board-certified ophthalmologists bring years of experience and specialized expertise.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4">
            {doctors.map((doctor, index) => (
              <div 
                key={doctor.id} 
                className="bg-white rounded-md shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 flex flex-col transform hover:scale-105 hover:-translate-y-2"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Doctor Image */}
                <div className="relative bg-gray-200 overflow-hidden">
                  <Image
                    className="h-64 w-full object-cover transition-transform duration-700 hover:scale-110"
                    src={doctor.image}
                    alt={doctor.name}
                    width={300}
                    height={300}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent transition-opacity duration-300 hover:from-black/20"></div>
                </div>
                
                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 transition-colors duration-300 hover:text-blue-600">{doctor.name}</h3>
                    <p className="text-blue-600 font-medium mb-2 transition-colors duration-300 hover:text-blue-700">{doctor.specialization}</p>
                    <p className="text-sm text-gray-600 mb-1 transition-colors duration-300">{doctor.education}</p>
                    <p className="text-sm text-gray-600 mb-3 transition-colors duration-300">{doctor.experience} Experience</p>
                    <p className="text-sm text-gray-700 mb-6 transition-colors duration-300 hover:text-gray-900">{doctor.description}</p>
                  </div>
                  
                  {/* Buttons at the bottom */}
                  <div className="flex flex-col gap-3 mt-auto">
                    <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-md hover:bg-blue-700 transition-all duration-300 text-sm font-medium transform hover:scale-105 hover:shadow-md">
                      View Details
                    </button>
                    <a
                      href="/appointment"
                      className="w-full bg-white text-blue-600 px-4 py-3 rounded-md border border-blue-600 hover:bg-blue-50 transition-all duration-300 text-sm font-medium text-center transform hover:scale-105 hover:shadow-md"
                    >
                      Book Appointment
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards & Recognition */}
        <div className="mt-20 bg-gray-50 rounded-md p-12 transition-all duration-500 hover:bg-gray-100">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl transition-colors duration-300 hover:text-blue-600">
              Awards & Recognition
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600 transition-opacity duration-500">
              Our commitment to excellence has been recognized by various healthcare organizations.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center transform transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              <div className="bg-yellow-100 rounded-md p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center transition-all duration-300 hover:bg-yellow-200 hover:scale-110">
                <TrophyIcon className="h-8 w-8 text-yellow-600 transition-transform duration-300" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 transition-colors duration-300 hover:text-yellow-600">Best Eye Hospital 2023</h3>
              <p className="text-gray-600 transition-colors duration-300">Healthcare Excellence Awards</p>
            </div>
            
            <div className="text-center transform transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              <div className="bg-blue-100 rounded-md p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center transition-all duration-300 hover:bg-blue-200 hover:scale-110">
                <CheckCircleIcon className="h-8 w-8 text-blue-600 transition-transform duration-300" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 transition-colors duration-300 hover:text-blue-600">NABH Accredited</h3>
              <p className="text-gray-600 transition-colors duration-300">National Quality Standards</p>
            </div>
            
            <div className="text-center transform transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              <div className="bg-green-100 rounded-md p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center transition-all duration-300 hover:bg-green-200 hover:scale-110">
                <HeartIcon className="h-8 w-8 text-green-600 transition-transform duration-300" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 transition-colors duration-300 hover:text-green-600">Patient Choice Award</h3>
              <p className="text-gray-600 transition-colors duration-300">Highest Patient Satisfaction</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 transition-colors duration-300 hover:text-blue-600">
            Ready to Experience Excellence?
          </h2>
          <p className="text-gray-600 mb-8 transition-opacity duration-500">
            Schedule your appointment today and discover why thousands trust us with their vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/appointment"
              className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Book Appointment
            </a>
            <a
              href="/contact"
              className="rounded-md bg-gray-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
