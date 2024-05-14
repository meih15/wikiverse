import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import apiURL from '../api';
import { Page } from './Page';

const SinglePageView = () => {
  const { slug } = useParams();
  const [page, setPage] = useState(null);

  useEffect(() => {
    async function fetchPage() {
      try {
        const response = await fetch(`${apiURL}/wiki/${slug}`);
        const pageData = await response.json();
        setPage(pageData);
      } catch (err) {
        console.log('Oh no an error!', err);
      }
    }
    fetchPage();
  }, [slug]);

  if (!page) {
    return <div>Loading...</div>;
  }

  return <Page page={page} />;
}

export default SinglePageView;
