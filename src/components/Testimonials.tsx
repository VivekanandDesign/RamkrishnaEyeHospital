import { StarIcon } from '@heroicons/react/24/solid';
import { ChatBubbleLeftIcon, SparklesIcon } from '@heroicons/react/24/outline';

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
    <div className="relative py-32 sm:py-40 overflow-hidden">
      {/* Luxury Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_70%)]"></div>
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Premium Header */}
        <div className="relative text-center mb-20">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-96 h-96 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 mb-8">
              <ChatBubbleLeftIcon className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-sm font-semibold text-blue-800 tracking-wide uppercase">Patient Stories</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-8 tracking-tight">
              What Our Patients Say
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
              Read inspiring stories from our satisfied patients who have experienced life-changing eye care 
              and regained their vision with our expert treatment and compassionate care.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="group relative">
              {/* Floating background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 rounded-3xl blur-xl transition-all duration-500"></div>
              
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:-translate-y-2 h-full">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center opacity-20">
                  <ChatBubbleLeftIcon className="h-6 w-6 text-white" />
                </div>
                
                {/* Rating & Procedure */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex text-amber-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="h-5 w-5 drop-shadow-sm" />
                    ))}
                  </div>
                  <span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 rounded-full border border-blue-200">
                    {testimonial.procedure}
                  </span>
                </div>
                
                {/* Testimonial Text */}
                <blockquote className="text-slate-700 mb-8 text-lg font-light leading-relaxed">
                  <span className="text-4xl text-blue-400 font-serif leading-none">&ldquo;</span>
                  {testimonial.text}
                  <span className="text-4xl text-blue-400 font-serif leading-none">&rdquo;</span>
                </blockquote>
                
                {/* Patient Info */}
                <div className="border-t border-slate-200 pt-6 mt-auto">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mr-4 shadow-lg">
                      <span className="text-white font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-lg">{testimonial.name}</div>
                      <div className="text-sm text-slate-600 font-medium">{testimonial.location}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Premium CTA Section */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 rounded-3xl"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.3),transparent_70%)] rounded-3xl"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(139,92,246,0.2),transparent_70%)] rounded-3xl"></div>
          
          <div className="relative bg-gradient-to-br from-blue-800/95 to-purple-900/95 backdrop-blur-xl rounded-3xl p-12 border border-white/10 shadow-2xl text-center">
            <div className="max-w-3xl mx-auto">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                <SparklesIcon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent mb-6 tracking-tight">
                Ready to Experience Excellence?
              </h3>
              <p className="text-xl text-blue-100 mb-8 font-light leading-relaxed">
                Join thousands of satisfied patients who trust us with their vision and have experienced 
                life-changing results with our world-class eye care services.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="/appointment"
                  className="group relative overflow-hidden bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-10 py-5 rounded-2xl text-lg font-bold shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-emerald-500/25"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative">Book Your Appointment</span>
                </a>
                
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-10 py-5 rounded-2xl text-lg font-bold shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-green-500/25"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative">Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
