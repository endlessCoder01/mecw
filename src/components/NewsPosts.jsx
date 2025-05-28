import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Clock, User, ChevronLeft, ChevronRight } from 'lucide-react'
import { ENDPOINT } from './endpoint'
import { useNavigate } from 'react-router-dom'

const NewsPosts = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [articles, setArticles] = useState([])
  const [selectedPost, setSelectedPost] = useState(null)
  const postsPerPage = 6
  const navigate = useNavigate()

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(`${ENDPOINT}/mecw/api/articles`)
        const data = await response.json()
        setArticles(data)
      } catch (error) {
        console.error('Error fetching articles:', error)
      }
    }

    fetchArticles()
    const intervalId = setInterval(fetchArticles, 10000)

    return () => clearInterval(intervalId)
  }, [])

  const totalPages = Math.ceil(articles.length / postsPerPage)
  const currentPosts = articles.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  )

  return (
    <section className='py-16 bg-gray-50 dark:bg-gray-800 relative'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className='flex items-center justify-center mb-12 relative'
        >
          {/* Back arrow button aligned left */}
          <button
            onClick={() => navigate('/')}
            aria-label='Back to home'
            className='absolute left-0 text-primary dark:text-green-400 hover:text-green-600 flex items-center'
          >
            <ChevronLeft className='w-6 h-6' />
          </button>

          {/* Centered heading */}
          <h2 className='text-3xl font-bold text-primary dark:text-green-400'>
            Latest Articles
          </h2>

          {/* Login button aligned right */}
          <button
            onClick={() => (window.location.href = 'http://localhost:3000/')}
            className='absolute right-0 text-primary dark:text-green-400 hover:text-green-600 font-semibold'
          >
            Upload
          </button>
        </motion.div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <AnimatePresence mode='wait'>
            {currentPosts.map(post => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                whileHover={{ y: -10 }}
                className='bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg'
              >
                <div className='relative'>
                  <img
                    src={`http://localhost:5000/uploads/${post.image.replace(
                      /\\/g,
                      '/'
                    )}`}
                    alt={post.title}
                    className='w-full h-48 object-cover'
                  />
                  <div className='absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm'>
                    {post.category}
                  </div>
                </div>

                <div className='p-6'>
                  <h3 className='text-xl font-semibold mb-2 dark:text-white'>
                    {post.title}
                  </h3>
                  {/* Render content as HTML */}
                  <div
                    className='text-gray-600 dark:text-gray-300 mb-4 line-clamp-3'
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />

                  <div className='flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4'>
                    <div className='flex items-center'>
                      <User className='w-4 h-4 mr-1' />
                      {post.author}
                    </div>
                    <div className='flex items-center'>
                      <Calendar className='w-4 h-4 mr-1' />
                      {new Date(post.created_at).toLocaleDateString()}
                    </div>
                    <div className='flex items-center'>
                      <Clock className='w-4 h-4 mr-1' />5 min
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedPost(post)}
                    className='mt-4 text-primary dark:text-green-400 font-semibold inline-flex items-center'
                  >
                    Read More
                    <ChevronRight className='w-4 h-4 ml-1' />
                  </motion.button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination */}
        <div className='flex justify-center items-center mt-12 space-x-4'>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`p-2 rounded-full ${
              currentPage === 1
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-primary text-white'
            }`}
          >
            <ChevronLeft className='w-6 h-6' />
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
            onClick={() =>
              setCurrentPage(prev => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className={`p-2 rounded-full ${
              currentPage === totalPages
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-primary text-white'
            }`}
          >
            <ChevronRight className='w-6 h-6' />
          </motion.button>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            className='fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className='bg-white dark:bg-gray-900 rounded-xl p-6 max-w-3xl w-full relative overflow-y-auto max-h-[90vh]'
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
            >
              {/* Back button */}
              <button
                onClick={() => setSelectedPost(null)}
                className='absolute top-4 left-4 text-green-500 hover:text-green-600'
              >
                <ChevronLeft className='w-6 h-6' />
              </button>

              <img
                src={`http://localhost:5000/uploads/${selectedPost.image.replace(
                  /\\/g,
                  '/'
                )}`}
                alt={selectedPost.title}
                className='w-full h-64 object-cover rounded-md mb-4'
              />
              <h2 className='text-2xl font-bold mb-2 dark:text-white'>
                {selectedPost.title}
              </h2>

              {/* Render content as HTML */}
              <div
                className='text-gray-700 dark:text-gray-300 mb-4'
                dangerouslySetInnerHTML={{ __html: selectedPost.content }}
              />

              <div className='flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4'>
                <div className='flex items-center'>
                  <User className='w-4 h-4 mr-1' />
                  {selectedPost.author}
                </div>
                <div className='flex items-center'>
                  <Calendar className='w-4 h-4 mr-1' />
                  {new Date(selectedPost.created_at).toLocaleDateString()}
                </div>
                {/* <div className='flex items-center'>
                  <Clock className='w-4 h-4 mr-1' />
                  5 min
                </div> */}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default NewsPosts
