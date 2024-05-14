import React from 'react';
import { Link } from 'react-router-dom';

export const Page = ({ page }) => {
  return (
    <>
      <h3>{page.title}</h3>
      <p>Author: {page.author.name}</p>
      <p>Content: {page.content}</p>
      {page.tags && (
        <p>Tags: {page.tags.map(tag => tag.name).join(', ')}</p>
      )}
      <p>Date: {new Date(page.createdAt).toLocaleDateString()}</p>
      <Link to="/">
        <button>Back to Wiki List</button>
      </Link>
    </>
  );
};
