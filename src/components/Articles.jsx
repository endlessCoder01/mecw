import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Articles = () => {
  const [filter, setFilter] = useState('all');

  const articles = [
    {
      title: 'Understanding Climate Change',
      description: 'A deep dive into the causes and effects of climate change.',
      category: 'climate',
    },
    {
      title: 'Protecting Biodiversity',
      description: 'Why preserving our ecosystems is crucial for our future.',
      category: 'biodiversity',
    },
    // Add more articles...
  ];

  const filteredArticles = filter === 'all' 
    ? articles 
    : articles.filter(article => article.category === filter);

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-12 text-primary dark:text-green-400"
        >
          Featured Articles
        </motion.h2>

        <div className="flex justify-center mb-8 space-x-4">
          {['all', 'climate', 'biodiversity', 'energy'].map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full ${
                filter === category
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredArticles.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  {article.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {article.description}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 text-primary dark:text-green-400 font-semibold"
                >
                  Read More →
                </motion.button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Articles;