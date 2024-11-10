'use client'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from "react";
import { Button } from '@/components/ui/button';

const FavoriteGenres = () => {
  const movieGenres = [
    'Action',
    'Comedy',
    'Drama',
    'Sci-Fi',
    'Horror',
    'Romance',
    'Adventure',
    'Fantasy',
    'Mystery',
    'Thriller'
  ];

  const songGenres = [
    'Pop',
    'Rock',
    'Hip-Hop',
    'Jazz',
    'Classical',
    'Country',
    'Electronic',
    'Blues',
    'R&B',
    'Reggae'
  ];

  const [data, setData] = useState([]); 
    useEffect(() => {
      axios.get("http://localhost:8080/")
        .then(res => setData(res.data))  
        .catch(err => console.log(err));
    }, []);


  
  const handleSubmit = (event) => {
    console.log(event)
    axios.put("http://localhost:8080/update/"+event)
    .then(res => {
      console.log(res)
      location.reload();
  })
};

  const handleSubmit1 = (event) => {
    console.log(event)
    axios.put("http://localhost:8080/update/songs/"+event)
    .then(res => {
      console.log(res)
      location.reload();
  })
    
  };

  return (
    <div>
  {movieGenres.map((genre) => (
              <div key={genre} className="flex items-center justify-center gap-10">
                <span>{genre}</span>
                <div className="space-x-2">
                  <Button
                    type="button"
                    className={`px-2 py-1 rounded `}
                    onClick={() => handleSubmit(genre, 'like')}
                  >
                    Like
                  </Button>
                  
                </div>
              </div>
            ))}
            {/* {data.map((genre, id) => (
              <div key={id} className="flex items-center justify-center gap-10">
                <span>{genre.genre}</span>
                <span>{genre.counter}</span>
            </div>
            ))} */}

            
              </div>
  );
};

export default FavoriteGenres;
