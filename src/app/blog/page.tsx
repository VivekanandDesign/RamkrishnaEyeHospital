import Link from 'next/link';
import { CalendarIcon, ClockIcon, UserIcon, EyeIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

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
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Eye Care Blog
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Expert insights, latest treatments, and essential tips for maintaining healthy vision from our ophthalmology specialists.
          </p>
        </div>

        {/* Featured Article */}
        {featuredPost && (
          <div className="mt-20">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl overflow-hidden shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12 text-white">
                  <div className="flex items-center mb-4">
                    <span className="bg-yellow-500 text-yellow-900 px-3 py-1 rounded-full text-xs font-semibold">
                      Featured Article
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{featuredPost.title}</h2>
                  <p className="text-blue-100 mb-6 text-lg">{featuredPost.excerpt}</p>
                  
                  <div className="flex items-center space-x-6 mb-6 text-blue-200">
                    <div className="flex items-center">
                      <UserIcon className="h-4 w-4 mr-2" />
                      <span className="text-sm">{featuredPost.author}</span>
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
                    className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                  >
                    Read Full Article
                    <ArrowRightIcon className="h-4 w-4 ml-2" />
                  </Link>
                </div>
                
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <EyeIcon className="h-12 w-12 text-white" />
                    </div>
                    <p className="text-blue-800 font-medium">Featured Article</p>
                    <p className="text-blue-600 text-sm mt-2">{featuredPost.category}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Category Filter */}
        <div className="mt-20">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-colors text-sm font-medium"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-[16/10] bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <EyeIcon className="h-8 w-8 text-white" />
                  </div>
                  <span className="text-blue-800 font-medium text-sm">{post.category}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-3 text-sm text-gray-500">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                    {post.category}
                  </span>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                  <Link href={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 text-sm text-gray-500">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center"
                  >
                    Read More
                    <ArrowRightIcon className="h-3 w-3 ml-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-20 bg-blue-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stay Updated with Eye Care Tips
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and receive the latest eye care insights, health tips, and updates about new treatments directly in your inbox.
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>

        {/* Popular Topics */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Popular Topics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">👁️</span>
              </div>
              <h3 className="font-semibold text-gray-900 text-sm">Eye Strain</h3>
              <p className="text-xs text-gray-600 mt-1">12 articles</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">⚕️</span>
              </div>
              <h3 className="font-semibold text-gray-900 text-sm">Surgery Guide</h3>
              <p className="text-xs text-gray-600 mt-1">8 articles</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">👶</span>
              </div>
              <h3 className="font-semibold text-gray-900 text-sm">Children&apos;s Eyes</h3>
              <p className="text-xs text-gray-600 mt-1">6 articles</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">🔬</span>
              </div>
              <h3 className="font-semibold text-gray-900 text-sm">New Technology</h3>
              <p className="text-xs text-gray-600 mt-1">5 articles</p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Have Questions About Your Eye Health?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Our expert ophthalmologists are here to help. Schedule a consultation or contact us for personalized advice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/appointment"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Book Consultation
            </Link>
            <Link
              href="/contact"
              className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
