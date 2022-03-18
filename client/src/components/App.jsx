import React from 'react';
import MovieList from './MovieList.jsx';
import SearchForm from './SearchForm.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: props.movies,
      moviesTemp: props.movies
    }

    this.showMatches = this.showMatches.bind(this);
  }

  showMatches(text) {
    const movies = this.state.movies;
    const movieMatches = [];

    movies.forEach((movie) => {
      let charMatches = 0;
      for (let i = 0; i < movie.title.length; i++) {
        if (movie.title[i] === text[i]) {
          charMatches += 1;
        }
      }

      if (charMatches > movie.title.length * 0.2) {
        movieMatches.push(movie);
      }
    });

    if (movieMatches.length) {
      this.setState({
        moviesTemp: movieMatches
      });
    } else {
      // we need to push "No movie by that name found  at some point" at some point
    }
  }


  render() {
    return (
      <div>
        <SearchForm searchHandler={this.showMatches} />
        <MovieList movies={this.state.moviesTemp} />
      </div>
    );
  }
}

export default App;