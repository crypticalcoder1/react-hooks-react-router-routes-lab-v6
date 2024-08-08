// src/pages/Movie.js
import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import { useParams } from 'react-router-dom';

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`/movies/${id}`)
      .then(response => response.json())
      .then(data => setMovie(data));
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time} minutes</p>
        {movie.genres.map((genre, index) => (
          <span key={index}>{genre}</span>
        ))}
      </main>
    </>
  );
};

export default Movie;
