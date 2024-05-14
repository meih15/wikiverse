import { useState, useEffect } from 'react';
import { fetchPages, submitArticle } from './api';

const UseWikiState = () => {
  const [pages, setPages] = useState([]);
  const [isAddingArticle, setIsAddingArticle] = useState(false);

  useEffect(() => {
    fetchPages().then(pagesData => setPages(pagesData)).catch(err => console.error(err));
  }, []);

  const handleAddArticle = () => {
    setIsAddingArticle(true);
  };

  const handleCancelAddArticle = () => {
    setIsAddingArticle(false);
  };

  const handleSubmit = async (articleData) => {
    try {
      await submitArticle(articleData);
      setIsAddingArticle(false);
      fetchPages().then(pagesData => setPages(pagesData)).catch(err => console.error(err));
    } catch (error) {
      console.error('Error creating article:', error);
    }
  };

  return { pages, isAddingArticle, handleAddArticle, handleCancelAddArticle, handleSubmit };
};

export default UseWikiState;
