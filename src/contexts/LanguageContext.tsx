import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    "hero.location": "Based In France",
    "hero.title": "Roblox Scripting Services & ",
    "hero.description": "Hi, I'm Constant, I write clean, organized roblox scripts that can be used to build reliable games and systems on Roblox.",
    "hero.cta.works": "See My Works",
    "hero.cta.contact": "Contact on Discord",
    "nav.home": "Home",
    "nav.projects": "Projects",
    "footer.contact": "Contact",
    "footer.links": "Links",
    "footer.social": "Social",
    "footer.rights": "© {year} Constant Scripting Services. All rights reserved.",
    "technologies.title": "Technologies & Tools",
    "technologies.description": "I use modern tools and technologies to create robust and scalable Roblox experiences.",
    "systems.title": "Game Systems",
    "systems.description": "Explore some of the custom systems I've built for various Roblox games.",
    "projects.title": "Featured Projects",
    "projects.description": "Here are some of the projects I've worked on. Each demonstrates my expertise in different aspects of Roblox development.",
    "projects.viewProject": "View Project",
    "projects.ownedBy": "Owned by",
    "testimonials.title": "Client Testimonials",
    "testimonials.description": "Here's what some of my clients have to say about working with me."
  },
  fr: {
    "hero.location": "Basé en France",
    "hero.title": "Services de Scripting Roblox & ",
    "hero.description": "Bonjour, je suis Constant, j'écris des scripts Roblox propres et organisés qui peuvent être utilisés pour créer des jeux et des systèmes fiables sur Roblox.",
    "hero.cta.works": "Voir Mes Travaux",
    "hero.cta.contact": "Contact Discord",
    "nav.home": "Accueil",
    "nav.projects": "Projets",
    "footer.contact": "Contact",
    "footer.links": "Liens",
    "footer.social": "Réseaux",
    "footer.rights": "© {year} Services de Scripting Constant. Tous droits réservés.",
    "technologies.title": "Technologies & Outils",
    "technologies.description": "J'utilise des outils et technologies modernes pour créer des expériences Roblox robustes et évolutives.",
    "systems.title": "Systèmes de Jeu",
    "systems.description": "Découvrez quelques-uns des systèmes personnalisés que j'ai créés pour divers jeux Roblox.",
    "projects.title": "Projets",
    "projects.description": "Voici quelques-uns des projets sur lesquels j'ai travaillé. Chacun démontre mon expertise dans différents aspects du développement Roblox.",
    "projects.viewProject": "Voir le Projet",
    "projects.ownedBy": "Créé par",
    "testimonials.title": "Témoignages Clients",
    "testimonials.description": "Voici ce que certains de mes clients disent de leur collaboration avec moi."
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    // First check localStorage
    const savedLanguage = localStorage.getItem('preferred-language');
    if (savedLanguage === 'fr' || savedLanguage === 'en') {
      return savedLanguage;
    }
    // Then check browser language
    const browserLang = navigator.language.toLowerCase();
    return browserLang.startsWith('fr') ? 'fr' : 'en';
  });

  const toggleLanguage = () => {
    setLanguage(prev => {
      const newLang = prev === 'en' ? 'fr' : 'en';
      localStorage.setItem('preferred-language', newLang);
      return newLang;
    });
  };

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 