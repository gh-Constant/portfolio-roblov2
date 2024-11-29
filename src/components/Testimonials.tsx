import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    text: "Exceptional work on our game project. The code was clean and well-documented.",
    author: "John D.",
    role: "Game Developer"
  },
  {
    text: "Delivered exactly what we needed, on time and with great communication.",
    author: "Sarah M.",
    role: "Project Manager"
  },
  {
    text: "Outstanding technical skills and attention to detail.",
    author: "Mike R.",
    role: "Studio Owner"
  }
];

export default function Testimonials() {
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
    <section className="py-20 bg-black">
      <motion.div
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-purple-500 fill-purple-500" />
            ))}
          </div>
          <h2 className="text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here's what clients say about working with me.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-dark-300 p-6 rounded-xl border border-dark-700"
            >
              <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-purple-400">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}