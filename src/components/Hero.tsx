import Link from 'next/link';
import { EyeIcon, ClockIcon, ShieldCheckIcon, HeartIcon } from '@heroicons/react/24/outline';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-blue-950 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Your Vision is Our <span className="text-blue-200">Mission</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Leading eye care hospital providing comprehensive ophthalmology services with state-of-the-art technology, experienced specialists, and compassionate care for all your vision needs.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href="/appointment"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
              >
                Book Appointment
              </Link>
              <a
                href="tel:+919876543210"
                className="text-sm font-semibold leading-6 text-white hover:text-blue-200 transition-colors"
              >
                Emergency Call <span aria-hidden="true">→</span>
              </a>
            </div>
            
            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold">50K+</div>
                <div className="text-sm text-blue-200">Patients Treated</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">25+</div>
                <div className="text-sm text-blue-200">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm text-blue-200">Expert Doctors</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-blue-200">Emergency Care</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-6">Why Choose Us?</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <EyeIcon className="h-6 w-6 text-blue-200 mr-3" />
                  <span>Advanced Eye Care Technology</span>
                </div>
                <div className="flex items-center">
                  <ShieldCheckIcon className="h-6 w-6 text-blue-200 mr-3" />
                  <span>Experienced Specialists</span>
                </div>
                <div className="flex items-center">
                  <ClockIcon className="h-6 w-6 text-blue-200 mr-3" />
                  <span>24/7 Emergency Services</span>
                </div>
                <div className="flex items-center">
                  <HeartIcon className="h-6 w-6 text-blue-200 mr-3" />
                  <span>Compassionate Care</span>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-green-600 rounded-lg">
                <h4 className="font-semibold mb-2">Quick Contact</h4>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-700 hover:bg-green-800 px-4 py-2 rounded text-center text-sm font-medium transition-colors"
                  >
                    WhatsApp
                  </a>
                  <a
                    href="tel:+919876543210"
                    className="flex-1 bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded text-center text-sm font-medium transition-colors"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
