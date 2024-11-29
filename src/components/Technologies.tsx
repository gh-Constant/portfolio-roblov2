import { motion } from 'framer-motion';
import { technologies } from '../data/technologies';
import { useLanguage } from '../contexts/LanguageContext'

export default function Technologies() {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="relative z-[10] py-16 sm:py-24 bg-black"
      id="about"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <motion.div variants={itemVariants} className="space-y-4 mb-10">
          <h1 className="text-3xl min-[430px]:text-4xl md:text-5xl font-bold text-stone-200">
            {t('technologies.title')}
          </h1>
          <p className="text-stone-200/70 text-sm min-[430px]:text-base max-w-lg md:max-w-3xl">
            {t('technologies.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-stretch justify-between gap-4">
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              className="flex flex-1 gap-5 p-4 rounded-xl bg-gradient-to-br from-dark-200 to-dark-300 border border-dark-700 hover:from-dark-300 hover:to-dark-400 transition-all duration-300 h-[120px]"
            >
              <div 
                className={`p-4 rounded-lg w-[80px] h-[80px] flex items-center justify-center self-center bg-[${tech.bgColorHex}33]`}
              >
                <img    
                  src={tech.logo}
                  alt={`${tech.name} logo`}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h4 className="text-lg font-medium text-stone-200">{tech.name}</h4>
                <p className="text-white/70 text-sm line-clamp-2">{tech.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}