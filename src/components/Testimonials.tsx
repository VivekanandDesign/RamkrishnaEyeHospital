import { StarIcon } from '@heroicons/react/24/solid';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    location: 'Mumbai, Maharashtra',
    rating: 5,
    text: 'Excellent care during my cataract surgery. The doctors explained everything clearly and the recovery was smooth. My vision is better than ever!',
    procedure: 'Cataract Surgery',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    location: 'Pune, Maharashtra',
    rating: 5,
    text: 'Dr. Patel treated my diabetic retinopathy with great expertise. The laser treatment was painless and my vision has stabilized. Highly recommend!',
    procedure: 'Retina Treatment',
  },
  {
    id: 3,
    name: 'Amit Patel',
    location: 'Ahmedabad, Gujarat',
    rating: 5,
    text: 'The glaucoma detection was early thanks to their thorough screening. The treatment plan is working well and my pressure is under control.',
    procedure: 'Glaucoma Care',
  },
  {
    id: 4,
    name: 'Sunita Joshi',
    location: 'Nagpur, Maharashtra',
    rating: 5,
    text: 'My 8-year-old son had squint surgery here. The pediatric team was amazing with kids and the results are perfect. Thank you so much!',
    procedure: 'Pediatric Surgery',
  },
  {
    id: 5,
    name: 'Mohammed Ali',
    location: 'Mumbai, Maharashtra',
    rating: 5,
    text: 'Emergency care at 2 AM for eye injury was exceptional. The staff was caring and the treatment was immediate. Saved my vision!',
    procedure: 'Emergency Care',
  },
  {
    id: 6,
    name: 'Kavita Desai',
    location: 'Surat, Gujarat',
    rating: 5,
    text: 'LASIK surgery experience was wonderful. Clear instructions, professional staff, and amazing results. I can see clearly without glasses now!',
    procedure: 'LASIK Surgery',
  },
];

export default function Testimonials() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What Our Patients Say
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Read testimonials from our satisfied patients who have experienced excellent eye care at our hospital.
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5" />
                  ))}
                </div>
                <span className="ml-2 text-sm font-medium text-gray-600">
                  {testimonial.procedure}
                </span>
              </div>
              
              <blockquote className="text-gray-700 mb-6">
                &ldquo;{testimonial.text}&rdquo;
              </blockquote>
              
              <div className="border-t border-gray-200 pt-4">
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-blue-600 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Experience Excellence?
            </h3>
            <p className="text-blue-100 mb-6">
              Join thousands of satisfied patients who trust us with their vision
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/appointment"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
              >
                Book Your Appointment
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
