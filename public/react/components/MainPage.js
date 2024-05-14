import React from 'react';
import { PagesList } from './PagesList';
import AddArticleForm from './AddArticleForm'; 

const MainPage = ({ pages, isAddingArticle, onAddArticle, onSubmit, onCancel }) => {
  return (
    <main>
      <h1>WikiVerse</h1>
      <h2>An interesting 📚</h2>
      {isAddingArticle ? (
        <AddArticleForm onSubmit={onSubmit} onCancel={onCancel} />
      ) : (
        <PagesList pages={pages} />
      )}
      {!isAddingArticle && (
        <button onClick={onAddArticle}>Add New Article</button>
      )}
    </main>
  );
};

export default MainPage;
