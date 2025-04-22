import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Book, Video, Tool, Podcast } from 'lucide-react';

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const resources = [
    {
      title: 'Climate Change Reports',
      description: 'Access the latest research and reports on climate change.',
      category: 'reports',
      icon: Book,
    },
    {
      title: 'Educational Videos',
      description: 'Watch informative videos on environmental topics.',
      category: 'videos',
      icon: Video,
    },
    {
      title: 'Interactive Tools',
      description: 'Explore tools to visualize climate data and trends.',
      category: 'tools',
      icon: Tool,
    },
    {
      title: 'Environmental Podcasts',
      description: 'Listen to experts discussing current environmental issues.',
      category: 'podcasts',
      icon: Podcast,
    },
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || resource.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-12 text-primary dark:text-green-400"
        >
          Resources
        </motion.h2>

        <div className="max-w-3xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search resources..."
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800
                focus:outline-none focus:ring-2 focus:ring-primary dark:text-white"
            />
          </div>

          <div className="flex justify-center space-x-4 mt-6">
            {['all', 'reports', 'videos', 'tools', 'podcasts'].map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full ${
                  activeCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredResources.map((resource) => (
              <motion.div
                key={resource.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <resource.icon className="w-8 h-8 text-primary dark:text-green-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  {resource.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {resource.description}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 text-primary dark:text-green-400 font-semibold"
                >
                  Access Resource →
                </motion.button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Resources;