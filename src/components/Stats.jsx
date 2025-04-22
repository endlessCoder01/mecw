import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Stats = () => {
  const data = [
    { year: 2015, temp: 0.8 },
    { year: 2016, temp: 0.9 },
    { year: 2017, temp: 1.0 },
    { year: 2018, temp: 1.1 },
    { year: 2019, temp: 1.2 },
    { year: 2020, temp: 1.2 },
    { year: 2021, temp: 1.3 },
  ];

  const stats = [
    { title: 'Global Temperature', value: '1.2°C Increase' },
    { title: 'CO2 Levels', value: '415 ppm' },
    { title: 'Sea Level Rise', value: '3.3 mm/year' },
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-12 text-primary dark:text-green-400"
        >
          Climate Statistics
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-2 dark:text-white">{stat.title}</h3>
              <p className="text-2xl font-bold text-primary dark:text-green-400">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        <div className="h-80 w-full">
          <ResponsiveContainer>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="temp" 
                stroke="#4CAF50" 
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default Stats;