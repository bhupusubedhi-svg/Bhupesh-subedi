
import React from 'react';
import { BlogPost } from '../types';

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
      <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <p className="text-sm text-gray-500 mb-2">{post.category} &bull; {post.readTime} min read</p>
        <h3 className="text-lg font-bold text-[#003366] mb-2 group-hover:text-[#00A651] transition">{post.title}</h3>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <a href="#" className="text-[#00A651] font-semibold hover:text-green-700 transition">
          Read More &rarr;
        </a>
      </div>
    </div>
  );
};

export default BlogPostCard;
