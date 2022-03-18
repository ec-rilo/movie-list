import React from 'react';

const MovieList = (props) => (
  <ul className='movie-list'>
    {props.movies.map((movie, index) => {
      return (
        <li className='movie' key={index}>{movie.title}</li>
      );
    })}
  </ul>
);

export default MovieList;