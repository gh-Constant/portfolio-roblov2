import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useContent } from '../hooks/useContent';

export default function Systems() {
  const { content, loading, error } = useContent();

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

  if (loading) return <div className="py-20 text-center">Loading...</div>;
  if (error) return <div className="py-20 text-center">Error loading systems</div>;
  if (!content) return null;

  return (
    <section className="py-20 bg-black">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <motion.div variants={itemVariants} className="space-y-4 mb-10">
          <h1 className="text-3xl min-[430px]:text-4xl md:text-5xl font-bold text-stone-200">
            Systems
          </h1>
          <p className="text-stone-200/70 text-sm min-[430px]:text-base max-w-lg md:max-w-3xl">
            Explore the systems I've developed, each designed to enhance functionality and user experience.
          </p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {content.systems.map((system, index) => (
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
                  {system.features.map((feature: string, featureIndex: number) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <ChevronRight className="w-4 h-4 text-purple-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}