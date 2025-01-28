import React, { useEffect, useState } from 'react';
import axios from 'axios';
import err from '../assets/404.png'
import preloadpage from "../assets/preloader.gif";


const Movies = () => {
  const [movieData, setMovieData] = useState(null);
  const [error, setError] = useState(null);
  const movieTitle = 'Incep'; // Change this to any movie title you want to search for

  useEffect(() => {
    const fetchMovieData = async () => {
      const options = {
        method: 'GET',
        url: `https://moviedatabase8.p.rapidapi.com/Search/${movieTitle}`,
        headers: {
          'x-rapidapi-key': 'c86cea8bf3msh9e31c9a867bd02cp1fb593jsn7c8b37c42184',
          'x-rapidapi-host': 'moviedatabase8.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setMovieData(response.data);
      } catch (error) {
        setError(error);
        console.error(error);
      }
    };

    fetchMovieData();
  }, [movieTitle]);

  if (error) return <div className='load-dm'> <div class="transition-animation-html preload"></div>
  <div class="transition-animationhtml preload">
    <p class='g-3 center justify-content-center text-center'>
    Connection error: Connect to internet</p>
      <p class='g-3 center fw-bolder justify-content-center text-center
      size
      '>
      </p>
  </div>
  </div>;
  if (!movieData) return  <div className='load-dm'> <div class="transition-animation-html preload"></div>
  <div class="transition-animationhtml preload">
    <p class='g-3 center justify-content-center text-center'>
     No movies found</p>
      <p class='g-3 center fw-bolder justify-content-center text-center
      size
      '>
      </p>
  </div>
  </div>;

  return (
    <div>
      <h1>Movie Search Results</h1>
      {movieData.results && movieData.results.map(movie => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
        </div>
      ))}
    </div>
  );
};

export default Movies;
