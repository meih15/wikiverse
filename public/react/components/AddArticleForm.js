import React, { useState } from 'react';

const AddArticleForm = ({ onSubmit, onCancel }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [authorEmail, setAuthorEmail] = useState('');
  const [tags, setTags] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const articleData = {
      title,
      content,
      name: authorName,
      email: authorEmail,
      tags
    };
    onSubmit(articleData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <br />
      <label>
        Content:
        <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      </label>
      <br />
      <label>
        Author Name:
        <input type="text" value={authorName} onChange={(e) => setAuthorName(e.target.value)} />
      </label>
      <br />
      <label>
        Author Email:
        <input type="email" value={authorEmail} onChange={(e) => setAuthorEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Tags (optional):
        <input type="text" value={tags} onChange={(e) => setTags(e.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default AddArticleForm;
