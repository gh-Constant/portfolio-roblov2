import { motion } from 'framer-motion';
import { useContent } from '../hooks/useContent';
import { Project } from '../types/content';
import { useLanguage } from '../contexts/LanguageContext';
import { Calendar } from 'lucide-react';

export default function Projects() {
  const { content, loading, error } = useContent();
  const { t } = useLanguage();

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  if (loading) return <div className="py-20 text-center">{t('projects.loading')}</div>;
  if (error) return <div className="py-20 text-center">{t('projects.error')}</div>;
  if (!content?.projects) return null;

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <motion.div 
          variants={itemVariants} 
          initial="hidden"
          animate="visible"
          className="space-y-4 mb-10">
          <h1 className="text-3xl min-[430px]:text-4xl md:text-5xl font-bold text-stone-200">
            {t('projects.title')}
          </h1>
          <p className="text-stone-200/70 text-sm min-[430px]:text-base max-w-lg md:max-w-3xl">
            {t('projects.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.projects.map((project: Project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="bg-dark-300 rounded-xl overflow-hidden border border-dark-700 hover:border-purple-500/50 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-48">
                <img
                  src={project.media.url}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-300/80 to-transparent" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                </div>
                <div className="space-y-4 mt-6 pt-6 border-t border-dark-700">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-md bg-purple-500/10 text-purple-400 border border-purple-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Calendar size={14} />
                    <span>{t('projects.date')}{project.projectDate}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}