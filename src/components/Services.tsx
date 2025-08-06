import { EyeIcon, CogIcon, HeartIcon, AcademicCapIcon, UserGroupIcon, TruckIcon } from '@heroicons/react/24/outline';

const services = [
  {
    name: 'Cataract Surgery',
    description: 'Advanced phacoemulsification and IOL implantation with latest technology for crystal clear vision.',
    icon: EyeIcon,
    features: ['Micro-incision surgery', 'Premium IOLs', 'Quick recovery'],
  },
  {
    name: 'Retina Treatment',
    description: 'Comprehensive retinal care including diabetic retinopathy, macular degeneration treatment.',
    icon: CogIcon,
    features: ['Laser therapy', 'Anti-VEGF injections', 'Vitrectomy surgery'],
  },
  {
    name: 'Glaucoma Care',
    description: 'Early detection and treatment of glaucoma to prevent vision loss with advanced techniques.',
    icon: HeartIcon,
    features: ['Regular screening', 'Medical management', 'Surgical options'],
  },
  {
    name: 'Pediatric Ophthalmology',
    description: 'Specialized eye care for children including squint correction and amblyopia treatment.',
    icon: AcademicCapIcon,
    features: ['Child-friendly approach', 'Squint surgery', 'Vision therapy'],
  },
  {
    name: 'Corneal Transplant',
    description: 'Advanced corneal surgeries including keratoplasty and cross-linking procedures.',
    icon: UserGroupIcon,
    features: ['DSEK/DMEK surgery', 'Corneal cross-linking', 'Keratoconus treatment'],
  },
  {
    name: 'Emergency Services',
    description: '24/7 emergency eye care for trauma, sudden vision loss, and urgent eye conditions.',
    icon: TruckIcon,
    features: ['24/7 availability', 'Trauma care', 'Urgent consultations'],
  },
];

export default function Services() {
  return (
    <div id="services" className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Comprehensive Eye Care Services
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Our state-of-the-art facility offers complete ophthalmology services with the latest technology and experienced specialists.
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.name} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                  <service.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="ml-4 text-xl font-semibold leading-7 text-gray-900">{service.name}</h3>
              </div>
              
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-700">
                    <div className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="mt-6">
                <a
                  href="/appointment"
                  className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Book Consultation
                  <span className="ml-1" aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
