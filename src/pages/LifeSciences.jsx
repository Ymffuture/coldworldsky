import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NewsComponent = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://google-news13.p.rapidapi.com/business', {
          headers: {
            'x-rapidapi-key': 'c86cea8bf3msh9e31c9a867bd02cp1fb593jsn7c8b37c42184',
            'x-rapidapi-host': 'google-news13.p.rapidapi.com',
          },
        });
        setNews(response.data.articles); // Adjust based on API response structure
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <div className='load-dm'> <div class="transition-animation-html preload"></div>
  <div class="transition-animationhtml preload">
    <p class='g-3 center justify-content-center text-center'>
     Loading...</p>
      <p class='g-3 center fw-bolder justify-content-center text-center
      size
      '>
      </p>
  </div>
  </div>;
  if (error) return <div><span className='err-text'>Error loading News: {error.message}</span>
  </div>;

  // Group news by date
  const groupedNews = news.reduce((acc, article) => {
    const date = new Date(article.publishedAt).toLocaleDateString();
    if (!acc[date]) acc[date] = [];
    acc[date].push(article);
    return acc;
  }, {});

  return (
    <div>
      {Object.keys(groupedNews).map(date => (
        <div key={date}>
          <h2>{date}</h2>
          <ul>
            {groupedNews[date].map((article, index) => (
              <li key={index}>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  {article.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default NewsComponent;
