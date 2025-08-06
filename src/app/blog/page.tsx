import Link from 'next/link';
import { 
  CalendarIcon, 
  ClockIcon, 
  UserIcon, 
  EyeIcon, 
  ArrowRightIcon,
  SparklesIcon,
  StarIcon,
  BookOpenIcon
} from '@heroicons/react/24/outline';
import {
  StarIcon as StarIconSolid
} from '@heroicons/react/24/solid';

const blogPosts = [
  {
    id: 1,
    title: "5 Essential Eye Care Tips for Digital Screen Users",
    excerpt: "In today's digital age, protecting your eyes from screen strain is more important than ever. Learn practical tips to maintain healthy vision.",
    content: "With the increasing use of digital devices, eye strain has become a common problem. Here are essential tips to protect your eyes...",
    author: "Dr. Rajesh Kumar",
    date: "2025-08-05",
    readTime: "5 min read",
    category: "Eye Care Tips",
    image: "/api/placeholder/600/400",
    featured: true,
  },
  {
    id: 2,
    title: "Understanding Cataract Surgery: What to Expect",
    excerpt: "A comprehensive guide to cataract surgery, from preparation to recovery, helping patients understand the process and outcomes.",
    content: "Cataract surgery is one of the most common and successful procedures in medicine. Here's what you need to know...",
    author: "Dr. Priya Sharma",
    date: "2025-08-03",
    readTime: "8 min read",
    category: "Surgery",
    image: "/api/placeholder/600/400",
    featured: false,
  },
  {
    id: 3,
    title: "Early Signs of Glaucoma: Don't Ignore These Symptoms",
    excerpt: "Glaucoma is often called the 'silent thief of sight.' Learn to recognize early warning signs and protect your vision.",
    content: "Glaucoma can cause irreversible vision loss if not detected early. Watch for these warning signs...",
    author: "Dr. Amit Patel",
    date: "2025-08-01",
    readTime: "6 min read",
    category: "Prevention",
    image: "/api/placeholder/600/400",
    featured: false,
  },
  {
    id: 4,
    title: "Children's Eye Health: When to Schedule the First Eye Exam",
    excerpt: "Protecting your child's vision starts early. Discover when and why regular eye exams are crucial for developing eyes.",
    content: "Children's eye health is critical for their overall development and learning. Here's when to schedule eye exams...",
    author: "Dr. Sunita Joshi",
    date: "2025-07-30",
    readTime: "7 min read",
    category: "Pediatric Care",
    image: "/api/placeholder/600/400",
    featured: false,
  },
  {
    id: 5,
    title: "Diabetic Retinopathy: Prevention and Treatment Options",
    excerpt: "Diabetes can affect your eyes in serious ways. Learn about diabetic retinopathy and how to protect your vision.",
    content: "Diabetic retinopathy is a serious complication of diabetes that affects the eyes. Early detection and treatment are key...",
    author: "Dr. Priya Sharma",
    date: "2025-07-28",
    readTime: "9 min read",
    category: "Retina Care",
    image: "/api/placeholder/600/400",
    featured: false,
  },
  {
    id: 6,
    title: "Latest Advances in LASIK Eye Surgery Technology",
    excerpt: "Discover the cutting-edge technologies making LASIK surgery safer, more precise, and more effective than ever before.",
    content: "LASIK technology continues to evolve, offering better outcomes and faster recovery times...",
    author: "Dr. Rajesh Kumar",
    date: "2025-07-25",
    readTime: "6 min read",
    category: "Technology",
    image: "/api/placeholder/600/400",
    featured: false,
  },
];

const categories = [
  "All",
  "Eye Care Tips",
  "Surgery", 
  "Prevention",
  "Pediatric Care",
  "Retina Care",
  "Technology"
];

export default function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="relative min-h-screen">
      {/* Luxury Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_70%)]"></div>
      
      <div className="relative py-32 sm:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Premium Header */}
          <div className="relative text-center mb-20">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-96 h-96 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 mb-8">
                <BookOpenIcon className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-sm font-semibold text-blue-800 tracking-wide uppercase">Expert Insights</span>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-8 tracking-tight">
                Eye Care Blog
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
                Discover expert insights, cutting-edge treatments, and essential tips for maintaining optimal vision health 
                from our world-renowned ophthalmology specialists.
              </p>
            </div>
          </div>

        {/* Premium Featured Article */}
        {featuredPost && (
          <div className="mb-20">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 rounded-3xl"></div>
              <div className="relative bg-gradient-to-br from-blue-800/95 to-purple-900/95 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-12 text-white relative">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-400/20 to-transparent rounded-full blur-2xl"></div>
                    
                    <div className="relative">
                      <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 text-amber-900 text-xs font-bold mb-6">
                        <SparklesIcon className="h-4 w-4 mr-2" />
                        Featured Article
                      </div>
                      
                      <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent leading-tight">
                        {featuredPost.title}
                      </h2>
                      <p className="text-blue-100 mb-8 text-lg font-light leading-relaxed">
                        {featuredPost.excerpt}
                      </p>
                      
                      <div className="flex items-center space-x-6 mb-8 text-blue-200">
                        <div className="flex items-center">
                          <UserIcon className="h-4 w-4 mr-2" />
                          <span className="text-sm font-medium">{featuredPost.author}</span>
                        </div>
                        <div className="flex items-center">
                          <CalendarIcon className="h-4 w-4 mr-2" />
                          <span className="text-sm">{new Date(featuredPost.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center">
                          <ClockIcon className="h-4 w-4 mr-2" />
                          <span className="text-sm">{featuredPost.readTime}</span>
                        </div>
                      </div>
                      
                      <Link
                        href={`/blog/${featuredPost.id}`}
                        className="group relative inline-flex items-center bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
                        <span className="relative">Read Full Article</span>
                        <ArrowRightIcon className="h-5 w-5 ml-2 relative" />
                      </Link>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-100/20 to-purple-100/20 flex items-center justify-center p-12">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                        <EyeIcon className="h-16 w-16 text-white" />
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/30">
                        <p className="text-blue-200 font-bold text-lg">{featuredPost.category}</p>
                        <p className="text-blue-300 text-sm mt-1">Expert Insights</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Premium Category Filter */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="group relative overflow-hidden px-6 py-3 rounded-2xl border-2 border-slate-200 bg-white/70 backdrop-blur-sm text-slate-700 hover:border-blue-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-700 transition-all duration-300 text-sm font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                <span className="relative">{category}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Premium Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {regularPosts.map((post, index) => (
            <article key={post.id} className="group relative">
              {/* Floating background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 rounded-3xl blur-xl transition-all duration-500"></div>
              
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 border border-white/50">
                {/* Premium Image Section */}
                <div className="aspect-[16/10] bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20"></div>
                  <div className="relative text-center p-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-transform duration-500">
                      <EyeIcon className="h-10 w-10 text-white" />
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
                      <span className="text-blue-800 font-bold text-sm">{post.category}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 px-3 py-1 rounded-full text-xs font-bold border border-blue-200">
                      {post.category}
                    </span>
                    <span className="text-slate-500 text-sm font-medium">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                    <Link href={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-slate-600 mb-6 line-clamp-3 font-light leading-relaxed">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-sm text-slate-500">
                      <span className="font-medium">{post.author}</span>
                      <span>•</span>
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    
                    <Link
                      href={`/blog/${post.id}`}
                      className="group/link inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors duration-300"
                    >
                      Read More
                      <ArrowRightIcon className="h-4 w-4 ml-1 transform group-hover/link:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Premium Newsletter Subscription */}
        <div className="relative mb-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 rounded-3xl"></div>
          <div className="relative bg-gradient-to-br from-blue-800/95 to-purple-900/95 backdrop-blur-xl rounded-3xl p-16 border border-white/10 shadow-2xl text-center">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-400/20 to-transparent rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-purple-400/20 to-transparent rounded-full blur-xl"></div>
            
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                <BookOpenIcon className="h-8 w-8 text-white" />
              </div>
              
              <h2 className="text-4xl font-bold text-white mb-6 tracking-tight">
                Stay Updated with 
                <span className="block bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                  Eye Care Tips
                </span>
              </h2>
              <p className="text-xl text-blue-100 mb-10 font-light leading-relaxed max-w-3xl mx-auto">
                Subscribe to our newsletter and receive the latest eye care insights, health tips, and updates about 
                new treatments directly in your inbox.
              </p>
              
              <div className="max-w-md mx-auto">
                <div className="flex gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all duration-300 text-white placeholder-blue-200"
                  />
                  <button className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
                    Subscribe
                  </button>
                </div>
                <p className="text-sm text-blue-200 mt-4">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Popular Topics */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent mb-4">
              Popular Topics
            </h2>
            <p className="text-lg text-slate-600 font-light">Discover trending eye care topics and expert insights</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-white/50">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <span className="text-2xl">👁️</span>
                </div>
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">Eye Strain</h3>
                <p className="text-xs text-slate-600 font-medium">12 articles</p>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-white/50">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <span className="text-2xl">⚕️</span>
                </div>
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors duration-300">Surgery Guide</h3>
                <p className="text-xs text-slate-600 font-medium">8 articles</p>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-white/50">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <span className="text-2xl">👶</span>
                </div>
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">Children&apos;s Eyes</h3>
                <p className="text-xs text-slate-600 font-medium">6 articles</p>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-white/50">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <span className="text-2xl">🔬</span>
                </div>
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">New Technology</h3>
                <p className="text-xs text-slate-600 font-medium">5 articles</p>
              </div>
            </div>
          </div>
        </div>

        </div>
      </div>
    </div>
  );
}
