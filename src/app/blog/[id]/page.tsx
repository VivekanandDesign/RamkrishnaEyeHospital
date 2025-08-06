import Link from 'next/link';
import { CalendarIcon, ClockIcon, UserIcon, ArrowLeftIcon, ShareIcon, EyeIcon, SparklesIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';

// This would typically come from a CMS or database
const blogPosts = [
  {
    id: 1,
    title: "5 Essential Eye Care Tips for Digital Screen Users",
    excerpt: "In today's digital age, protecting your eyes from screen strain is more important than ever. Learn practical tips to maintain healthy vision.",
    content: `
      <h2>The Digital Age and Your Eyes</h2>
      <p>With the increasing use of digital devices, eye strain has become a common problem affecting millions of people worldwide. Whether you're working on a computer, scrolling through your smartphone, or watching television, your eyes are constantly focusing and refocusing to process digital information.</p>
      
      <h3>1. Follow the 20-20-20 Rule</h3>
      <p>Every 20 minutes, look at something 20 feet away for at least 20 seconds. This simple practice helps relax the focusing muscles in your eyes and reduces strain.</p>
      
      <h3>2. Adjust Your Screen Settings</h3>
      <p>Optimize your screen brightness to match your surroundings. The screen should not be the brightest or darkest object in your field of view. Increase text size to reduce squinting and adjust contrast for comfortable viewing.</p>
      
      <h3>3. Maintain Proper Distance and Position</h3>
      <p>Position your screen 20-26 inches from your eyes, with the top of the screen at or below eye level. This positioning reduces neck strain and allows your eyes to look slightly downward at the screen.</p>
      
      <h3>4. Use Proper Lighting</h3>
      <p>Reduce glare by positioning your screen perpendicular to windows and using blinds or curtains to control natural light. Consider using an anti-glare screen filter if necessary.</p>
      
      <h3>5. Blink More Often and Stay Hydrated</h3>
      <p>When concentrating on screens, we tend to blink less frequently, leading to dry eyes. Make a conscious effort to blink more often and use preservative-free artificial tears if needed.</p>
      
      <h3>When to Seek Professional Help</h3>
      <p>If you experience persistent eye strain, headaches, blurred vision, or dry eyes despite following these tips, consult with an eye care professional. These symptoms could indicate underlying vision problems that need correction.</p>
    `,
    author: "Dr. Rajesh Kumar",
    date: "2025-08-05",
    readTime: "5 min read",
    category: "Eye Care Tips",
    image: "/api/placeholder/800/400",
    featured: true,
  },
  {
    id: 2,
    title: "Understanding Cataract Surgery: What to Expect",
    excerpt: "A comprehensive guide to cataract surgery, from preparation to recovery, helping patients understand the process and outcomes.",
    content: `
      <h2>What Are Cataracts?</h2>
      <p>Cataracts are a clouding of the natural lens in your eye, causing vision to become blurry, cloudy, or dim. They're a natural part of aging and affect millions of people worldwide.</p>
      
      <h3>When Is Surgery Necessary?</h3>
      <p>Cataract surgery is recommended when cataracts interfere with your daily activities such as reading, driving, or working. The surgery involves removing the clouded lens and replacing it with an artificial intraocular lens (IOL).</p>
      
      <h3>The Surgical Procedure</h3>
      <p>Modern cataract surgery uses a technique called phacoemulsification. During this outpatient procedure:</p>
      <ul>
        <li>A small incision is made in the cornea</li>
        <li>Ultrasonic energy breaks up the clouded lens</li>
        <li>The lens fragments are gently suctioned out</li>
        <li>An artificial IOL is inserted through the same small incision</li>
      </ul>
      
      <h3>Recovery and Results</h3>
      <p>Most patients experience improved vision within a few days, with full recovery typically taking 4-6 weeks. The success rate for cataract surgery is over 95%, making it one of the most successful procedures in medicine.</p>
    `,
    author: "Dr. Priya Sharma",
    date: "2025-08-03",
    readTime: "8 min read",
    category: "Surgery",
    image: "/api/placeholder/800/400",
    featured: false,
  },
  // Add more blog posts as needed
];

// Generate static paths for static export
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id.toString(),
  }));
}

const relatedPosts = [
  {
    id: 3,
    title: "Early Signs of Glaucoma: Don't Ignore These Symptoms",
    category: "Prevention",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Children's Eye Health: When to Schedule the First Eye Exam",
    category: "Pediatric Care",
    readTime: "7 min read",
  },
  {
    id: 5,
    title: "Diabetic Retinopathy: Prevention and Treatment Options",
    category: "Retina Care",
    readTime: "9 min read",
  },
];

export default async function BlogPost({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const postId = parseInt(id);
  const post = blogPosts.find(p => p.id === postId);

  if (!post) {
    return (
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you&apos;re looking for doesn&apos;t exist.</p>
          <Link
            href="/blog"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      {/* Luxury Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_70%)]"></div>
      
      <div className="relative py-32 sm:py-40">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          {/* Premium Back Button */}
          <Link
            href="/blog"
            className="group inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mb-12 transition-all duration-300 bg-white/70 backdrop-blur-sm px-6 py-3 rounded-2xl border border-white/50 shadow-lg hover:shadow-xl"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Blog
          </Link>

          {/* Premium Article Container */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-slate-50/80 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl"></div>
            <article className="relative p-12">
              {/* Article Header */}
              <header className="mb-16">
                <div className="flex items-center space-x-4 mb-8">
                  <span className="bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 text-blue-800 px-4 py-2 rounded-full text-sm font-bold">
                    {post.category}
                  </span>
                  {post.featured && (
                    <span className="bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-200 text-amber-800 px-4 py-2 rounded-full text-sm font-bold">
                      <StarIcon className="h-4 w-4 inline mr-1" />
                      Featured
                    </span>
                  )}
                </div>

                <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-8 leading-tight">
                  {post.title}
                </h1>

                <p className="text-xl leading-relaxed text-slate-600 mb-12 font-light max-w-4xl">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between border-t border-b border-slate-200 py-8">
                  <div className="flex items-center space-x-8 text-slate-500">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mr-3 shadow-lg">
                        <UserIcon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <span className="font-semibold text-slate-800 block">{post.author}</span>
                        <span className="text-sm text-slate-500">Senior Ophthalmologist</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <CalendarIcon className="h-5 w-5 mr-2" />
                      <span className="font-medium">{new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}</span>
                    </div>
                    <div className="flex items-center">
                      <ClockIcon className="h-5 w-5 mr-2" />
                      <span className="font-medium">{post.readTime}</span>
                    </div>
                  </div>

                  <button className="group flex items-center text-slate-500 hover:text-blue-600 transition-colors duration-300 bg-slate-100 hover:bg-blue-50 px-4 py-2 rounded-xl">
                    <ShareIcon className="h-5 w-5 mr-2" />
                    Share
                  </button>
                </div>
              </header>

              {/* Premium Featured Image */}
              <div className="mb-16">
                <div className="aspect-[16/9] bg-gradient-to-br from-blue-100 to-indigo-200 rounded-3xl flex items-center justify-center shadow-2xl border border-white/50 overflow-hidden">
                  <div className="text-center p-12">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                      <EyeIcon className="h-16 w-16 text-white" />
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/30">
                      <p className="text-blue-800 font-bold text-xl">{post.category}</p>
                      <p className="text-blue-600 text-sm mt-1">Expert Medical Insights</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <div 
                  dangerouslySetInnerHTML={{ __html: post.content }}
                  className="text-slate-700 leading-8 space-y-6"
                />
              </div>

              {/* Premium Tags Section */}
              <div className="mt-16 pt-12 border-t border-slate-200">
                <h3 className="text-xl font-bold text-slate-800 mb-6">Related Topics</h3>
                <div className="flex flex-wrap gap-3">
                  {['Eye Care', 'Vision Health', 'Medical Technology', 'Patient Care', 'Ophthalmology'].map((tag) => (
                    <span
                      key={tag}
                      className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 text-blue-700 px-4 py-2 rounded-xl text-sm font-medium hover:shadow-md transition-all duration-300 cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </div>

          {/* Premium Author Bio */}
          <div className="mt-20">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-slate-50/80 backdrop-blur-xl rounded-3xl border border-white/50 shadow-xl"></div>
              <div className="relative p-12">
                <div className="flex items-start">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl flex items-center justify-center mr-6 flex-shrink-0 shadow-xl">
                    <span className="text-white font-bold text-2xl">
                      {post.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <h3 className="text-2xl font-bold text-slate-800 mr-3">{post.author}</h3>
                      <span className="bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        Senior Ophthalmologist
                      </span>
                    </div>
                    <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                      Senior Ophthalmologist at Ramkrishna Eye Hospital with over 15 years of experience in 
                      cataract surgery and refractive procedures. Dedicated to providing the highest quality 
                      eye care and patient education.
                    </p>
                    <div className="flex space-x-4">
                      <Link
                        href="/about"
                        className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
                      >
                        View Profile
                      </Link>
                      <Link
                        href="/appointment"
                        className="bg-white border-2 border-blue-200 text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 hover:border-blue-300 transition-all duration-300"
                      >
                        Book Appointment
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Related Posts */}
          <div className="mt-20">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-bold text-3xl md:text-4xl mb-4">
                <SparklesIcon className="h-8 w-8 mr-3 text-blue-600" />
                Related Articles
              </div>
              <p className="text-xl text-slate-600 font-light">Discover more expert insights on eye care</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.id}`}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-slate-50/80 backdrop-blur-xl rounded-3xl border border-white/50 shadow-xl group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2"></div>
                  <div className="relative p-8">
                    {/* Premium Featured Image */}
                    <div className="aspect-[16/10] bg-gradient-to-br from-blue-100 to-indigo-200 rounded-2xl flex items-center justify-center mb-6 shadow-lg overflow-hidden">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center">
                        <EyeIcon className="h-8 w-8 text-white" />
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 text-blue-800 px-3 py-1 rounded-full text-xs font-bold">
                        {relatedPost.category}
                      </span>
                      <span className="text-slate-400 text-sm font-medium">{relatedPost.readTime}</span>
                    </div>

                    <h3 className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-300 mb-3 line-clamp-2 text-lg leading-tight">
                      {relatedPost.title}
                    </h3>

                    <div className="flex items-center text-blue-600 group-hover:text-blue-700 font-medium text-sm">
                      Read Article
                      <ArrowRightIcon className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Premium CTA Section */}
          <div className="mt-20">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl opacity-95"></div>
              <div className="absolute inset-0 opacity-20 bg-white/5"></div>
              <div className="relative p-12 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl mb-8 border border-white/30 shadow-xl">
                  <EyeIcon className="h-10 w-10 text-white" />
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Need Professional Eye Care?
                </h2>
                <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
                  Schedule a consultation with our expert ophthalmologists for personalized care and comprehensive eye health solutions.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-md mx-auto">
                  <Link
                    href="/appointment"
                    className="group bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
                  >
                    <span className="flex items-center justify-center">
                      Book Appointment
                      <ArrowRightIcon className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Link>
                  <Link
                    href="/contact"
                    className="group border-2 border-white/50 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/20 hover:border-white/70 transition-all duration-300"
                  >
                    <span className="flex items-center justify-center">
                      Contact Us
                      <ArrowRightIcon className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
