import { CheckCircleIcon, AcademicCapIcon, TrophyIcon, UsersIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'State-of-the-Art Technology',
    description: 'Latest diagnostic and surgical equipment including OCT, Fundus Camera, and Phaco machines.',
    icon: CheckCircleIcon,
  },
  {
    name: 'Experienced Team',
    description: 'Board-certified ophthalmologists with years of experience in various subspecialties.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Award-Winning Care',
    description: 'Recognized for excellence in patient care and innovative treatment approaches.',
    icon: TrophyIcon,
  },
  {
    name: 'Patient-Centered Approach',
    description: 'Personalized treatment plans focusing on individual patient needs and comfort.',
    icon: UsersIcon,
  },
];

const stats = [
  { name: 'Years of Excellence', value: '25+' },
  { name: 'Successful Surgeries', value: '50,000+' },
  { name: 'Expert Doctors', value: '15+' },
  { name: 'Patient Satisfaction', value: '98%' },
];

export default function About() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-blue-600">Excellence in Eye Care</p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  About Ramkrishna Eye Hospital
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-700">
                  For over 25 years, Ramkrishna Eye Hospital has been at the forefront of ophthalmology, 
                  providing comprehensive eye care services with a commitment to excellence, innovation, 
                  and compassionate patient care.
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <p>
                  Our hospital was founded with a simple yet powerful mission: to preserve and restore vision 
                  for people of all ages. We combine cutting-edge technology with the expertise of our 
                  board-certified ophthalmologists to deliver world-class eye care.
                </p>
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  <li className="flex gap-x-3">
                    <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                    <span>
                      <strong className="font-semibold text-gray-900">Advanced Diagnostics.</strong> We use the 
                      latest diagnostic equipment including OCT, Fundus photography, and visual field analyzers 
                      for precise diagnosis.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                    <span>
                      <strong className="font-semibold text-gray-900">Minimally Invasive Surgery.</strong> Our 
                      surgical techniques focus on minimal invasion, faster recovery, and better outcomes for 
                      our patients.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                    <span>
                      <strong className="font-semibold text-gray-900">Comprehensive Care.</strong> From routine 
                      eye exams to complex surgical procedures, we provide complete eye care under one roof.
                    </span>
                  </li>
                </ul>
                <p className="mt-8">
                  Our team includes specialists in cataract surgery, retinal diseases, glaucoma, pediatric 
                  ophthalmology, and corneal disorders. We are committed to staying current with the latest 
                  advances in ophthalmology to provide our patients with the best possible care.
                </p>
              </div>
            </div>
            
            <div className="pt-8 lg:pt-0">
              <div className="grid grid-cols-2 gap-8">
                {features.map((feature) => (
                  <div key={feature.name} className="relative">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold leading-7 text-gray-900">{feature.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats section */}
        <div className="mt-24 bg-blue-600 rounded-2xl py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Trusted by thousands of patients
                </h2>
                <p className="mt-4 text-lg leading-8 text-blue-200">
                  Our commitment to excellence is reflected in our achievements and patient satisfaction.
                </p>
              </div>
              <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.name} className="flex flex-col bg-white/5 p-8">
                    <dt className="text-sm font-semibold leading-6 text-blue-200">{stat.name}</dt>
                    <dd className="order-first text-3xl font-bold tracking-tight text-white">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
