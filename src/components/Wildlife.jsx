import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import local images
import img1 from '../images/pangolin.png';
import img2 from '../images/wd1.jpg';
import img3 from '../images/wd2.jpg';
import img4 from '../images/p2.jpg';

const Wildlife = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const wildlifeData = [
    {
      title: 'Protecting Endangered Species',
      description: 'Learn how we can help species that are at risk of extinction.',
      image: img1,
    },
    {
      title: 'Habitat Preservation',
      description: 'Discover the importance of preserving natural habitats.',
      image: img2,
    },
    {
      title: 'Wildlife Corridors',
      description: 'The role of wildlife corridors in protecting animal migration.',
      image: img3,
    },
    {
      title: 'Impact of Climate Change',
      description: 'How changing climates affect animal behavior and habitats.',
      image: img4,
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % wildlifeData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? wildlifeData.length - 1 : prev - 1));
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-12 text-primary dark:text-green-400"
        >
          Wildlife Conservation
        </motion.h2>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {wildlifeData.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="w-full flex-shrink-0 px-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {item.description}
                      </p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-4 text-primary dark:text-green-400 font-semibold"
                      >
                        Learn More →
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-primary text-white rounded-full"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-primary text-white rounded-full"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>

          <div className="flex justify-center mt-6 space-x-2">
            {wildlifeData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index
                    ? 'bg-primary'
                    : 'bg-gray-300 dark:bg-gray-700'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wildlife;
