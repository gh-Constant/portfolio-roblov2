import { Languages } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();
  
  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-4 right-4 z-50 flex items-center gap-2 px-3 py-2 rounded-md bg-dark-300 border border-dark-700 hover:border-purple-500/50 transition-colors"
    >
      <Languages className="w-4 h-4" />
      <span className="text-sm font-medium uppercase">{language}</span>
    </button>
  );
}