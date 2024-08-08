// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard'; // Ensure this is the correct import path

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('/movies')
      .then(response => response.json())
      .then(data => setMovies(data));
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </main>
    </>
  );
};

export default Home;
