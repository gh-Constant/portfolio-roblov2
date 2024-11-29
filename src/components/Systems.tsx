import { motion } from 'framer-motion';
import { useContent } from '../hooks/useContent';
import { useLanguage } from '../contexts/LanguageContext';


export default function Systems() {
  const { content, loading, error } = useContent();
  const { t } = useLanguage();

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

  if (loading) return <div className="py-20 text-center">{t('systems.loading')}</div>;
  if (error) return <div className="py-20 text-center">{t('systems.error')}</div>;
  if (!content?.systems) return null;

  return (
    <section className="py-20 bg-black">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <motion.div variants={itemVariants} className="space-y-4 mb-10">
          <h1 className="text-3xl min-[430px]:text-4xl md:text-5xl font-bold text-stone-200">
            {t('systems.title')}
          </h1>
          <p className="text-stone-200/70 text-sm min-[430px]:text-base max-w-lg md:max-w-3xl">
            {t('systems.description')}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {content.systems.map((system) => (
            <motion.div
              key={system.title}
              variants={itemVariants}
              className="bg-dark-300 rounded-xl overflow-hidden border border-dark-700"
            >
              <div className="relative h-48">
                <img
                  src={system.image}
                  alt={system.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{system.title}</h3>
                <p className="text-gray-400 mb-4">{system.description}</p>
                <div className="flex flex-col gap-4 mt-6 pt-6 border-t border-dark-700">
                  <div className="flex flex-wrap gap-2">
                    {system.features.map((feature: string, index: number) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs rounded-md bg-purple-500/10 text-purple-400 border border-purple-500/20"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}