import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PagesList } from './PagesList';
import SinglePageView from './SinglePageView';
import apiURL from '../api';

export const App = () => {
  const [pages, setPages] = useState([]);

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

  return (
    <Router>
      <main>
        <h1>WikiVerse</h1>
        <h2>An interesting 📚</h2>
        <Routes>
          <Route path="/" element={<PagesList pages={pages} />} />
          <Route path="/wiki/:slug" element={<SinglePageView />} />
        </Routes>
      </main>
    </Router>
  );
};
