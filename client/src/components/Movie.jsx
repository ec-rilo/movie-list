import React from 'react';

const WatchBtn = ({ watched}) => {
  let classname = 'watch-btn ';
  watched ? classname += 'active' : classname +='inactive';

  return <button className={classname}>Watched</button>;
}

const Movie = ({ movie }) => (
  <li className='movie'>
    <p>{movie.title}</p>
    {movie.watchedVisible && <WatchBtn watched={movie.watched} />}
  </li>
);

export default Movie;