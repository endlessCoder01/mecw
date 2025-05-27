import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Check, X } from 'lucide-react';
import { ENDPOINT } from './endpoint';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, sueccess, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    if (email.includes('@') && email.includes('.') && (email !== '' || email !== null)) {
   try {
    const response = await fetch(`${ENDPOINT}/mecw/api/emails`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email: email}),
    });

    const result = await response.json();
    console.log(result);
   } catch (error) {
    console.error(error)
   }
  }
    setTimeout(() => {
      if (email.includes('@') && email.includes('.')) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    }, 1500);

    setStatus('idle')
  };

  return (
    <section className="py-16 bg-gradient-to-b from-primary/10 to-transparent dark:from-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
            Stay Informed
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Get the latest updates on climate action and environmental news.
          </p>

          <form onSubmit={handleSubmit} className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-6 py-4 rounded-full bg-white dark:bg-gray-800 
                shadow-lg focus:outline-none focus:ring-2 focus:ring-primary
                dark:text-white"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={status === 'loading'}
              className="absolute right-2 top-1/2 transform -translate-y-1/2
                bg-primary text-white rounded-full p-3"
            >
              {status === 'loading' ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Send className="w-5 h-5" />
                </motion.div>
              ) : status === 'success' ? (
                <Check className="w-5 h-5" />
              ) : status === 'error' ? (
                <X className="w-5 h-5" />
              ) : (
                <Send className="w-5 h-5" />
              )}
            </motion.button>
          </form>

          <AnimatePresence>
            {status === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-green-500 mt-4"
              >
                Thanks for subscribing! 🌱
              </motion.p>
            )}
            {status === 'error' && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-red-500 mt-4"
              >
                Please enter a valid email address.
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;