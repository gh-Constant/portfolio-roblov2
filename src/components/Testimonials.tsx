import { motion } from 'framer-motion';
import { Star, User } from 'lucide-react';
import { testimonials } from '../data/testimonials';

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
              className="bg-dark-300 p-6 rounded-xl border border-dark-700 flex flex-col"
            >
              <p className="text-gray-300 italic flex-grow">"{testimonial.text}"</p>
              <div className="flex items-center gap-4 mt-6 pt-6 border-t border-dark-700">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <User className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-purple-400">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}