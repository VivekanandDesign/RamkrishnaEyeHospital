import Link from 'next/link';
import { CalendarIcon, ClockIcon, UserIcon, ArrowLeftIcon, ShareIcon, EyeIcon } from '@heroicons/react/24/outline';

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
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium mb-8 transition-colors"
        >
          <ArrowLeftIcon className="h-4 w-4 mr-2" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center space-x-4 mb-4">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              {post.category}
            </span>
            {post.featured && (
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                Featured
              </span>
            )}
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
            {post.title}
          </h1>

          <p className="text-xl leading-8 text-gray-600 mb-8">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between border-t border-b border-gray-200 py-6">
            <div className="flex items-center space-x-6 text-gray-500">
              <div className="flex items-center">
                <UserIcon className="h-5 w-5 mr-2" />
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center">
                <CalendarIcon className="h-5 w-5 mr-2" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>
              <div className="flex items-center">
                <ClockIcon className="h-5 w-5 mr-2" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <button className="flex items-center text-gray-500 hover:text-blue-600 transition-colors">
              <ShareIcon className="h-5 w-5 mr-2" />
              Share
            </button>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-12">
          <div className="aspect-[16/9] bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <EyeIcon className="h-12 w-12 text-white" />
              </div>
              <p className="text-blue-800 font-medium">{post.category}</p>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <div 
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="text-gray-700 leading-8"
          />
        </article>

        {/* Author Bio */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <div className="flex items-start">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <span className="text-white font-bold text-lg">
                {post.author.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{post.author}</h3>
              <p className="text-gray-600 mb-4">
                Senior Ophthalmologist at Ramkrishna Eye Hospital with over 15 years of experience in 
                cataract surgery and refractive procedures. Dedicated to providing the highest quality 
                eye care and patient education.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="/about"
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                >
                  View Profile
                </Link>
                <Link
                  href="/appointment"
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.id}
                href={`/blog/${relatedPost.id}`}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[16/10] bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center mb-4">
                  <EyeIcon className="h-8 w-8 text-blue-600" />
                </div>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                  {relatedPost.category}
                </span>
                <h3 className="font-semibold text-gray-900 mt-3 mb-2 line-clamp-2">
                  {relatedPost.title}
                </h3>
                <p className="text-sm text-gray-500">{relatedPost.readTime}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Need Professional Eye Care?</h2>
          <p className="text-blue-100 mb-6">
            Schedule a consultation with our expert ophthalmologists for personalized care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/appointment"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Book Appointment
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
