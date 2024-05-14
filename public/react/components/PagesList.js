import React from 'react';
import { Link } from 'react-router-dom';

export const PagesList = ({ pages }) => {
  return (
    <>
      {
        pages.map((page, idx) => (
          <div key={idx}>
            <Link to={`/wiki/${page.slug}`}>
              <h3>{page.title}</h3>
            </Link>
          </div>
        ))
      }
    </>
  );
};
