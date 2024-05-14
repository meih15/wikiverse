import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import apiURL from '../api';
import { Page } from './Page';

const SinglePageView = () => {
  const { slug } = useParams();
  const [page, setPage] = useState(null);
  // const history = useHistory();

  const fetchPage = async () => {
    try {
      const response = await fetch(`${apiURL}/wiki/${slug}`);
      const pageData = await response.json();
      setPage(pageData);
    } catch (err) {
      console.log('Oh no an error!', err);
    }
  }

  useEffect(() => {
    fetchPage();
  }, [slug]);

  const handleDelete = async () => {
    try {
      const response = await fetch(`${apiURL}/wiki/${slug}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        // Deletion successful, navigate back to the list of articles
        // history.push('/');
        window.location.href = '/';

      } else {
        console.error('Failed to delete page:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting page:', error);
    }
  };

  return (
    <div>
      {page ? (
        <div>
          <Page page={page} />
          <button onClick={handleDelete}>Delete</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SinglePageView;
