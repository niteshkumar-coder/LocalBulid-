
import React, { useEffect, useState } from 'react';
import { db } from '../services/firebaseMock';
import { BlogPost } from '../types';

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    db.getPosts().then(setPosts);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-16">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold">Insight Hub</h1>
        <p className="text-slate-500 max-w-2xl">Education is the core of our partnership. We provide deep dives into local marketing technology.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {posts.map(post => (
          <article key={post.id} className="space-y-6 group cursor-pointer">
            <div className="aspect-video rounded-3xl overflow-hidden shadow-lg">
              <img 
                src={post.thumbnail} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                alt={post.title} 
              />
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-4 text-xs font-bold text-slate-400">
                <span>{post.date}</span>
                <span className="w-1 h-1 bg-slate-300 rounded-full" />
                <span>{post.author}</span>
              </div>
              <h2 className="text-2xl font-bold group-hover:text-blue-600 transition-colors leading-tight">
                {post.title}
              </h2>
              <p className="text-slate-500 text-sm line-clamp-2">
                {post.excerpt}
              </p>
              <div className="pt-2">
                <span className="text-sm font-bold text-blue-600 flex items-center">
                  Read Article
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
