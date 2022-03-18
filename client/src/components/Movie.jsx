import React from 'react';

const WatchBtn = ({ watched, watchHandler, movieId }) => {
  let classname = 'watch-btn ';
  watched ? classname += 'active' : classname +='inactive';

  return <button className={classname} onClick={() => watchHandler(movieId)}>Watched</button>;
}

const Movie = ({ movie, watchHandler }) => (
  <li className='movie'>
    <p>{movie.title}</p>
    {movie.watchedVisible && <WatchBtn movieId={movie.id} watched={movie.watched} watchHandler={watchHandler}/>}
  </li>
);

export default Movie;