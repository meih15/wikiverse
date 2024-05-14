import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PagesList } from './PagesList';
import SinglePageView from './SinglePageView';
import AddArticleForm from './AddArticleForm'; 
import apiURL from '../api';

export const App = () => {
  const [pages, setPages] = useState([]);
  const [isAddingArticle, setIsAddingArticle] = useState(false);

  async function fetchPages() {
    try {
      const response = await fetch(`${apiURL}/wiki`);
      const pagesData = await response.json();
      setPages(pagesData);
    } catch (err) {
      console.log('Oh no an error!', err);
    }
  }

  useEffect(() => {
    fetchPages();
  }, []);

  const handleAddArticle = () => {
    setIsAddingArticle(true);
  };

  const handleCancelAddArticle = () => {
    setIsAddingArticle(false);
  };

  const handleSubmit = async (articleData) => {
    try {
      const response = await fetch(`${apiURL}/wiki`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(articleData)
      });
      const newData = await response.json();
      console.log('New article created:', newData);
      setIsAddingArticle(false);
      fetchPages(); // Refetch articles after creating a new one
    } catch (error) {
      console.error('Error creating article:', error);
    }
  };

  return (
    <Router>
      <main>
        <h1>WikiVerse</h1>
        <h2>An interesting 📚</h2>
        {isAddingArticle ? (
          <AddArticleForm onSubmit={handleSubmit} onCancel={handleCancelAddArticle} />
        ) : (
          <Routes>
            <Route path="/" element={<PagesList pages={pages} />} />
            <Route path="/wiki/:slug" element={<SinglePageView />} />
          </Routes>
        )}
        {!isAddingArticle && (
          <button onClick={handleAddArticle}>Add New Article</button>
        )}
      </main>
    </Router>
  );
};
