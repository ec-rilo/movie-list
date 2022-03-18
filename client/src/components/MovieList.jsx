import React from 'react';
import Movie from './Movie.jsx';

const MovieList = (props) => (
  <ul className='movie-list'>
    {props.movies.map((movie, index) => {
      return (
        <Movie key={index} movie={movie}/>
      );
    })}
  </ul>
);

export default MovieList;