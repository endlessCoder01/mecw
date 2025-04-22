import React from 'react';
import { motion } from 'framer-motion';
import { useKeenSlider } from 'keen-slider/react';

const Wildlife = () => {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      '(min-width: 768px)': {
        slides: { perView: 2, spacing: 16 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 3, spacing: 16 },
      },
    },
  });

  const wildlifeData = [
    {
      title: 'Protecting Endangered Species',
      description: 'Learn how we can help species that are at risk of extinction.',
      image: 'https://picsum.photos/400/300?random=1',
    },
    {
      title: 'Habitat Preservation',
      description: 'Discover the importance of preserving natural habitats.',
      image: 'https://picsum.photos/400/300?random=2',
    },
    {
      title: 'Wildlife Corridors',
      description: 'The role of wildlife corridors in protecting animal migration.',
      image: 'https://picsum.photos/400/300?random=3',
    },
    {
      title: 'Impact of Climate Change',
      description: 'How changing climates affect animal behavior and habitats.',
      image: 'https://picsum.photos/400/300?random=4',
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
          Wildlife Conservation
        </motion.h2>

        <div ref={sliderRef} className="keen-slider">
          {wildlifeData.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="keen-slider__slide"
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
        </div>
      </div>
    </section>
  );
};

export default Wildlife;