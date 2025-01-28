import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../componets/Loader';



const Mathematics = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://spotify23.p.rapidapi.com/search/',
        params: {
          type: 'multi',
          offset: '0',
          limit: '10',
          numberOfTopResults: '5'
        },
        headers: {
          'x-rapidapi-key': 'c86cea8bf3msh9e31c9a867bd02cp1fb593jsn7c8b37c42184',
          'x-rapidapi-host': 'spotify23.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setData(response.data);
      } catch (error) {
        setError(error);
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (error) return <div className='load-dm'>
    <div class="transition-animation-html preload"></div>
  <div class="transition-animationhtml preload">
    <p class='g-3 center justify-content-center text-center'>
     Connection error: Connect to internet</p>
      <p class='g-3 center fw-bolder justify-content-center text-center
      size
      '>
      </p>
  </div>
  </div>;;
  if (!data) return <div className='load-dm'>
     
     <Loader/>
  <div class="transition-animationhtml preload">
    <p class='g-3 center justify-content-center text-center'>
     Loading... Please wait it might take a while.</p>
      <p class='g-3 center fw-bolder justify-content-center text-center
      size
      '>
      </p>
  </div>
  </div>;;

  return (
    <div>
      {/* Render your data here */}
      {JSON.stringify(data)}
    </div>
  );
};

export default Mathematics;
