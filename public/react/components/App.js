import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import SinglePageView from './SinglePageView';
import UseWikiState from './UseWikiState';

export const App = () => {
  const { pages, isAddingArticle, handleAddArticle, handleCancelAddArticle, handleSubmit } = UseWikiState();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage
          pages={pages}
          isAddingArticle={isAddingArticle}
          onAddArticle={handleAddArticle}
          onSubmit={handleSubmit}
          onCancel={handleCancelAddArticle}
        />} />
        <Route path="/wiki/:slug" element={<SinglePageView />} />
      </Routes>
    </Router>
  );
};
