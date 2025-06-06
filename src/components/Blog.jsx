import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, User, ChevronLeft, ChevronRight } from 'lucide-react';
import Header from './Header';

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const blogPosts = [
    {
      id: 1,
      title: 'How to Reduce Your Carbon Footprint',
      excerpt: 'Simple steps everyone can take to live more sustainably and reduce emissions.',
      author: 'Emma Green',
      date: '2024-02-15',
      readTime: '5 min',
      category: 'Sustainability',
      image: 'https://picsum.photos/400/250?random=1',
    },
    {
      id: 2,
      title: 'The Impact of Plastic on Our Environment',
      excerpt: 'Understanding the effects of plastic pollution and solutions to mitigate it.',
      author: 'Michael Rivers',
      date: '2024-02-14',
      readTime: '7 min',
      category: 'Pollution',
      image: 'https://picsum.photos/400/250?random=2',
    },
    // Add more blog posts...
  ];

  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  const currentPosts = blogPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <div >
    <Header />
    
    <section className="py-16 bg-gray-50 dark:bg-gray-800" style={{paddingTop: 100}}>
    
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-12 text-primary dark:text-green-400"
        >
          Latest Articles
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {currentPosts.map((post) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 text-primary dark:text-green-400 font-semibold inline-flex items-center"
                  >
                    Read More
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </motion.button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        <div className="flex justify-center items-center mt-12 space-x-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`p-2 rounded-full ${
              currentPage === 1
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-primary text-white'
            }`}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          {[...Array(totalPages)].map((_, index) => (
            <motion.button
              key={index + 1}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setCurrentPage(index + 1)}
              className={`w-10 h-10 rounded-full ${
                currentPage === index + 1
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white'
              }`}
            >
              {index + 1}
            </motion.button>
          ))}

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`p-2 rounded-full ${
              currentPage === totalPages
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-primary text-white'
            }`}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Blog;