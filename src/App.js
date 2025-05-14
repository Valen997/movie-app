import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import snowpiercerPoster from './assets/snowpiercer.jpg';
import blacklistPoster from './assets/blacklist.jpg';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Snowpiercer',
      description: 'Snowpiercer is an American post-apocalyptic dystopian thriller television series that premiered on May 17, 2020',
      posterURL: snowpiercerPoster,
      rating: 9.0,
    },
    {
      title: 'The Blacklist',
      description: 'The Blacklist is an American crime thriller television series created by Jon Bokenkamp and developed by John Eisendrath.',
      posterURL: blacklistPoster,
      rating: 9.1,
    },
  ]);
  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState('');

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      (filterRating ? movie.rating >= filterRating : true)
    );
  });

  return (
    <div className="app">
      <h1>My Movie App</h1>
      <Filter
        filterTitle={filterTitle}
        setFilterTitle={setFilterTitle}
        filterRating={filterRating}
        setFilterRating={setFilterRating}
      />
      <MovieList movies={filteredMovies} />
      {/* You can add a form here to add a movie */}
    </div>
  );
};

export default App;
