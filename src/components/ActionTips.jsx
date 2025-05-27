import React from 'react';
import { motion } from 'framer-motion';

const ActionTips = () => {
  const tips = [
    {
      title: 'Reduce, Reuse, Recycle',
      description: 'Minimize waste and use resources wisely. Start by carrying reusable bags and containers.',
      icon: '♻️',
    },
    {
      title: 'Conserve Water',
      description: 'Simple actions like fixing leaks and taking shorter showers can save gallons of water daily.',
      icon: '💧',
    },
    {
      title: 'Use Public Transport',
      description: 'Reduce your carbon footprint by choosing eco-friendly transport options.',
      icon: '🚌',
    },
    {
      title: 'Support Local',
      description: 'Buy products from local businesses to reduce transportation emissions.',
      icon: '🏪',
    },
    {
      title: 'Plant Trees',
      description: 'Participate in tree-planting initiatives or start your own garden.',
      icon: '🌳',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-12 text-primary dark:text-green-400"
        >
          Climate Action Tips
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {tips.map((tip) => (
            <motion.div
              key={tip.title}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <div className="text-4xl mb-4">{tip.icon}</div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                {tip.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300"  id='start'>
                {tip.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ActionTips;