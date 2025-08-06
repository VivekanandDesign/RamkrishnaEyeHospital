import Link from 'next/link';
import { ExclamationTriangleIcon, PhoneIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function Emergency() {
  return (
    <div className="relative bg-gradient-to-r from-blue-100 to-blue-200 text-gray-800 py-12">
      <div className="absolute inset-0 bg-black/5"></div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-600/20 rounded-full">
              <ExclamationTriangleIcon className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-gray-900">
            Emergency Eye Care Available 24/7
          </h2>
          
          <p className="text-xl leading-8 text-gray-700 mb-6 max-w-3xl mx-auto">
            Need emergency eye care? Our specialists are available 24/7 to provide immediate medical attention for urgent eye conditions and injuries.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <div className="flex items-center text-gray-700">
              <ClockIcon className="h-5 w-5 mr-2 text-blue-600" />
              <span className="text-lg font-medium">Available 24 Hours</span>
            </div>
            <div className="flex items-center text-gray-700">
              <PhoneIcon className="h-5 w-5 mr-2 text-blue-600" />
              <span className="text-lg font-medium">Immediate Response</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919876543210"
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
            >
              <PhoneIcon className="h-5 w-5 mr-2" />
              Call Emergency: +91 98765 43210
            </a>
            
            <Link
              href="/appointment"
              className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-base font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors border border-blue-300"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
