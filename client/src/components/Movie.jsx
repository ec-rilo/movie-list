import React from 'react';

const WatchBtn = ({ watchHandler, movieId, watched, toggleDetailsBlock }) => {
  return (
  <input
  className='watch-btn'
  type='radio'
  onClick={() => {toggleDetailsBlock(); watchHandler(movieId);}}
  defaultChecked={watched}
  />);
}

const DetailsBlock = (props) => (
  <ul className='movie-card describe-block'>
    <li><span className='bold-text'>Year:</span> </li>
    <li><span className='bold-text'>Runtime:</span> </li>
    <li><span className='bold-text'>Metascore:</span> </li>
    <li><span className='bold-text'>imdbRating:</span> </li>
    <li>
      <span className='bold-text'>Watched:</span>
      <WatchBtn
      toggleDetailsBlock={props.toggleDetailsBlock}
      watchHandler={props.watchHandler}
      movieId={props.movieId}
      watched={props.watched}
      />
    </li>
  </ul>
);

class Movie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      detailsVisible: false
    };

    this.toggleDetailsBlock = this.toggleDetailsBlock.bind(this);
  }

  toggleDetailsBlock() {
    this.setState({ detailsVisible: !this.state.detailsVisible })
  }

  render() {
    const { movie, watchHandler } = this.props;

    return (
      <li>
        <div className='movie-card'>
          <p className='movie-title' onClick={() => this.toggleDetailsBlock()}>{movie.title}</p>
        </div>
        {this.state.detailsVisible &&
        <DetailsBlock
        toggleDetailsBlock={this.toggleDetailsBlock}
        movieId={movie.id}
        watched={movie.watched}
        watchHandler={watchHandler}
        />}
      </li>
    );
  }
}

export default Movie;