import { useLanguage } from '../contexts/LanguageContext';

interface Testimonial {
  text: {
    en: string;
    fr: string;
  };
  name: string;
  position: {
    en: string;
    fr: string;
  };
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    text: {
      en: "Fantastic the seller did exactly what I was looking for! No matter how many question's I asked the seller was very responsive and extra detailed in answering all my questions. I even provided models for this seller and when it didn't work they made it work for me and their self.",
      fr: "Fantastique, le vendeur a fait exactement ce que je recherchais ! Peu importe le nombre de questions que j'ai posées, il a toujours été très réactif et extrêmement détaillé dans ses réponses. J'ai même fourni des modèles et quand ça ne fonctionnait pas, il a trouvé une solution pour nous deux."
    },
    name: "Relaxingend",
    position: {
      en: "Fiverr Client",
      fr: "Client Fiverr"
    },
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop"
  },
  {
    text: {
      en: "Very well put together, everything works great, definitely delivered an amazing game. There were a few bugs in the beginning but they fixed them without a problem. Definitely worth working with.",
      fr: "Très bien assemblé, tout fonctionne parfaitement, il a vraiment livré un jeu incroyable. Il y avait quelques bugs au début mais ils ont été corrigés sans problème. Ça vaut vraiment le coup de travailler avec lui."
    },
    name: "Kevdawg25",
    position: {
      en: "Fiverr Client",
      fr: "Client Fiverr"
    },
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&auto=format&fit=crop"
  },
  {
    text: {
      en: "Holy shit. I'm buying more games of my dude. He's crazzzzyyy good. Should buy.",
      fr: "Incroyable. Je vais acheter plus de jeux de ce gars. Il est vraiment excellent. Je recommande."
    },
    name: "Emilianokalb",
    position: {
      en: "Fiverr Client",
      fr: "Client Fiverr"
    },
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop"
  }
];

export function useTestimonials() {
  const { language } = useLanguage();
  
  return testimonials.map(testimonial => ({
    ...testimonial,
    text: testimonial.text[language as keyof typeof testimonial.text] || testimonial.text.en,
    position: testimonial.position[language as keyof typeof testimonial.position] || testimonial.position.en
  }));
}