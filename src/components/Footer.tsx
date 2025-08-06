import Link from 'next/link';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hospital Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold">R</span>
              </div>
              <div>
                <h2 className="text-xl font-bold">Ramkrishna Eye Hospital</h2>
                <p className="text-gray-400 text-sm">Excellence in Eye Care</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Leading eye care facility providing comprehensive ophthalmology services with state-of-the-art technology and experienced specialists.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://wa.me/919876543210" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                WhatsApp Us
              </a>
              <a 
                href="tel:+919876543210"
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/#services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/appointment" className="text-gray-300 hover:text-white transition-colors">Book Appointment</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPinIcon className="h-5 w-5 text-blue-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">123 Medical Plaza, Health City</p>
                  <p className="text-gray-300 text-sm">Mumbai, Maharashtra 400001</p>
                </div>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="h-5 w-5 text-blue-400 mr-3" />
                <p className="text-gray-300 text-sm">+91 98765 43210</p>
              </div>
              <div className="flex items-center">
                <EnvelopeIcon className="h-5 w-5 text-blue-400 mr-3" />
                <p className="text-gray-300 text-sm">info@ramkrishnaeye.com</p>
              </div>
              <div className="flex items-start">
                <ClockIcon className="h-5 w-5 text-blue-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Mon-Sat: 9:00 AM - 7:00 PM</p>
                  <p className="text-gray-300 text-sm">Sun: 10:00 AM - 5:00 PM</p>
                  <p className="text-red-400 text-sm font-medium">24/7 Emergency</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Ramkrishna Eye Hospital. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-400 text-sm">
                Made with ❤️ for better eye care
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
