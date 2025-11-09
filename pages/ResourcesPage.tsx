
import React from 'react';
import { BlogPost } from '../types';
import BlogPostCard from '../components/BlogPostCard';

const blogPosts: BlogPost[] = [
  {
    title: "5 Tips for Effective Stock Management in SMEs",
    excerpt: "Learn how to optimize your inventory, reduce costs, and improve cash flow with these five essential stock management tips.",
    imageUrl: "https://picsum.photos/400/300?image=10",
    readTime: 5,
    category: "Stock Management"
  },
  {
    title: "Navigating VAT Filing: A Guide for Growing Businesses",
    excerpt: "VAT can be complex. This guide breaks down the essentials for SMEs to ensure timely and accurate VAT filing every time.",
    imageUrl: "https://picsum.photos/400/300?image=20",
    readTime: 7,
    category: "Tax"
  },
  {
    title: "Building Internal Controls to Protect Your SME",
    excerpt: "Discover the key internal controls that can safeguard your business assets, prevent fraud, and ensure financial accuracy.",
    imageUrl: "https://picsum.photos/400/300?image=30",
    readTime: 6,
    category: "Internal Controls"
  },
  {
    title: "The Power of Real-Time Financial Reporting",
    excerpt: "Move beyond outdated spreadsheets. See how real-time reporting can revolutionize your business decision-making process.",
    imageUrl: "https://picsum.photos/400/300?image=40",
    readTime: 5,
    category: "Reporting"
  },
  {
    title: "Top 3 Bookkeeping Mistakes SMEs Make (And How to Avoid Them)",
    excerpt: "Avoid these common pitfalls in bookkeeping to maintain healthy financials and stay compliant.",
    imageUrl: "https://picsum.photos/400/300?image=50",
    readTime: 4,
    category: "Bookkeeping"
  },
  {
    title: "Maximizing Tax Deductions for Your SME in Nepal",
    excerpt: "A look at legal strategies and tips for ensuring your business is claiming all the deductions it's entitled to.",
    imageUrl: "https://picsum.photos/400/300?image=60",
    readTime: 8,
    category: "Tax"
  }
];

const categories = ["All", "Tax", "Reporting", "Stock Management", "Internal Controls", "Bookkeeping"];

const ResourcesPage: React.FC = () => {
  return (
    <>
      <div className="bg-white py-16 text-center border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-[#003366]">SME Finance Insights</h1>
            <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-600">Expert advice and practical tips to help you manage and grow your business.</p>
        </div>
      </div>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="relative w-full md:w-1/2 lg:w-1/3 mb-4 md:mb-0">
              <input type="search" placeholder="Search articles..." className="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#00A651]" />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map(cat => (
                <button key={cat} className="px-4 py-1 text-sm font-medium rounded-full border bg-white hover:bg-[#00A651] hover:text-white transition-colors focus:outline-none">
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogPostCard key={index} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ResourcesPage;
