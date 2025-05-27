import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, User, ChevronLeft, ChevronRight } from 'lucide-react';
import { ENDPOINT } from './endpoint';
import axios from 'axios';

const NewsPosts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [articles, setArticles] = useState([]);
  const postsPerPage = 6;

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(`${ENDPOINT}/mecw/api/articles`);
        setArticles(response.data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
    const intervalId = setInterval(fetchArticles, 10000); 

    return () => clearInterval(intervalId);
  }, []);

  const totalPages = Math.ceil(articles.length / postsPerPage);
  const currentPosts = articles.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
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
                    src={`http://localhost:5000/mecw/images/${post.image}`} // Assuming images are served from this path
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
                    {post.content} {/* Displaying content directly */}
                  </p>

                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.created_at).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {/* Assuming read time is not provided, replace with static value or logic */}
                      {'5 min'}
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
  );
};

export default NewsPosts;