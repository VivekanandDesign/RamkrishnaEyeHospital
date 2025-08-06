import { PhoneIcon, MapPinIcon, ClockIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

export default function ContactCTA() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Ready to take care of your vision? Contact us today for consultation or emergency care.
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                <PhoneIcon className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                <p className="text-gray-600">Call us for appointments or emergencies</p>
                <div className="mt-2 space-y-1">
                  <a href="tel:+919876543210" className="text-blue-600 hover:text-blue-800 font-medium">
                    +91 98765 43210
                  </a>
                  <p className="text-sm text-gray-500">24/7 Emergency Hotline</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                <MapPinIcon className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">Location</h3>
                <p className="text-gray-600">Visit us at our modern facility</p>
                <div className="mt-2">
                  <p className="text-gray-700">123 Medical Plaza, Health City</p>
                  <p className="text-gray-700">Mumbai, Maharashtra 400001</p>
                  <a 
                    href="https://maps.google.com/?q=123+Medical+Plaza+Health+City+Mumbai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                <ClockIcon className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">Hours</h3>
                <p className="text-gray-600">We&apos;re here when you need us</p>
                <div className="mt-2 space-y-1">
                  <p className="text-gray-700">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                  <p className="text-gray-700">Sunday: 10:00 AM - 5:00 PM</p>
                  <p className="text-red-600 font-medium">24/7 Emergency Services</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                <EnvelopeIcon className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                <p className="text-gray-600">Send us your queries</p>
                <div className="mt-2">
                  <a href="mailto:info@ramkrishnaeye.com" className="text-blue-600 hover:text-blue-800 font-medium">
                    info@ramkrishnaeye.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Quick Actions */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Quick Actions</h3>
            
            <div className="space-y-4">
              <a
                href="/appointment"
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-4 px-6 rounded-lg font-semibold transition-colors"
              >
                📅 Book Appointment Online
              </a>
              
              <a
                href="tel:+919876543210"
                className="block w-full bg-red-600 hover:bg-red-700 text-white text-center py-4 px-6 rounded-lg font-semibold transition-colors"
              >
                🚨 Emergency Call
              </a>
              
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-600 hover:bg-green-700 text-white text-center py-4 px-6 rounded-lg font-semibold transition-colors"
              >
                💬 WhatsApp Chat
              </a>
              
              <a
                href="/contact"
                className="block w-full bg-gray-600 hover:bg-gray-700 text-white text-center py-4 px-6 rounded-lg font-semibold transition-colors"
              >
                📝 Contact Form
              </a>
            </div>
            
            <div className="mt-8 p-4 bg-blue-100 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Need Help?</h4>
              <p className="text-blue-800 text-sm">
                Our patient care team is available to assist you with appointments, 
                insurance queries, and general information.
              </p>
            </div>
          </div>
        </div>
        
        {/* Google Maps Embed */}
        <div className="mt-16">
          <div className="bg-gray-200 rounded-2xl p-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.9073451165895!2d72.8276!3d19.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzMzLjYiTiA3MsKwNDknMzkuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ramkrishna Eye Hospital Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
