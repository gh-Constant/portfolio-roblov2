import React from 'react';
import { motion } from 'framer-motion';
import { systems } from '../data/systems';
import { ChevronRight } from 'lucide-react';

export default function Systems() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black to-dark-300">
      <motion.div
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Systems</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Custom-built game systems that power exceptional player experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {systems.map((system, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-dark-300 rounded-xl overflow-hidden border border-dark-700 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="relative h-48">
                <img
                  src={system.image}
                  alt={system.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-300 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{system.title}</h3>
                <p className="text-gray-400 mb-4">{system.description}</p>
                
                <ul className="space-y-2">
                  {system.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <ChevronRight className="w-4 h-4 text-purple-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {system.demoLink && (
                  <a
                    href={system.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-purple-400 hover:text-purple-300"
                  >
                    View Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}