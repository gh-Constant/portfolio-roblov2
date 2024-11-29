import { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface ContentData {
  systems: any[];
  projects: any[];
}

const CONTENT_URL = 'https://raw.githubusercontent.com/gh-constant/portfoliorbx-content/main/content.json';

export function useContent() {
  const [content, setContent] = useState<ContentData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const { language } = useLanguage();

  useEffect(() => {
    const fetchContent = async () => {
      try {
        setLoading(true);
        const response = await fetch(CONTENT_URL);
        const data = await response.json();
        
        // If we have translations for the current language, use them, otherwise fallback to English
        const languageContent = data[language] || data['en'];
        setContent(languageContent);
        setError(null);
      } catch (err) {
        console.error('Error fetching content:', err);
        setError(err instanceof Error ? err : new Error('Failed to fetch content'));
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [language]);

  return { content, loading, error };
} 