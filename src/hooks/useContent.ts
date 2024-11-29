import { useState, useEffect } from 'react';


const CONTENT_URL = 'https://raw.githubusercontent.com/gh-Constant/portfoliorbx-content/refs/heads/main/content.json';

export function useContent() {
  const [content, setContent] = useState<ContentData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch(CONTENT_URL)
      .then(res => res.json())
      .then(data => {
        setContent(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return { content, loading, error };
} 