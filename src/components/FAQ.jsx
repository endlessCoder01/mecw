import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What can I do to help combat climate change?',
      answer: 'There are many ways to help combat climate change: reduce energy consumption, use public transport or electric vehicles, minimize waste, support renewable energy initiatives, and advocate for climate-friendly policies. Every small action counts towards making a difference.',
    },
    {
      question: 'How can I get involved in local environmental initiatives?',
      answer: 'You can get involved by: joining local environmental groups, participating in community clean-up events, supporting local conservation projects, attending environmental workshops and seminars, and connecting with like-minded individuals through social media and community forums.',
    },
    {
      question: 'What are some reliable sources for climate change information?',
      answer: `Reliable sources include: The Intergovernmental Panel on Climate Change (IPCC), NASA's Climate Change website, National Oceanic and Atmospheric Administration (NOAA), World Meteorological Organization (WMO), and peer-reviewed scientific journals.`,
    },
    {
      question: 'How does climate change affect wildlife?',
      answer: 'Climate change affects wildlife through habitat loss, changes in temperature and weather patterns, disruption of migration patterns, food chain disturbances, and increased frequency of extreme weather events. Many species are struggling to adapt to these rapid changes.',
    },
    {
      question: 'What is carbon offsetting?',
      answer: 'Carbon offsetting involves compensating for your carbon emissions by funding projects that reduce greenhouse gas emissions elsewhere. This can include supporting renewable energy projects, forest conservation, or energy efficiency initiatives.',
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-12 text-primary dark:text-green-400"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="mb-4"
            >
              <motion.button
                whileHover={{ scale: 1.01 }}
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 bg-gray-50 
                  dark:bg-gray-800 rounded-lg focus:outline-none"
              >
                <span className="text-lg font-semibold text-gray-800 dark:text-white">
                  {faq.question}
                </span>
                {activeIndex === index ? (
                  <Minus className="w-5 h-5 text-primary" />
                ) : (
                  <Plus className="w-5 h-5 text-primary" />
                )}
              </motion.button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-white dark:bg-gray-900 border-l-4 border-primary">
                      <p className="text-gray-600 dark:text-gray-300">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;