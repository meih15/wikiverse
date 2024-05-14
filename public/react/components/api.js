import apiURL from '../api';

export async function fetchPages() {
  try {
    const response = await fetch(`${apiURL}/wiki`);
    const pagesData = await response.json();
    return pagesData;
  } catch (err) {
    console.log('Oh no an error!', err);
    throw err;
  }
}

export async function submitArticle(articleData) {
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
    return newData;
  } catch (error) {
    console.error('Error creating article:', error);
    throw error;
  }
}
