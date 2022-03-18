import React from 'react';
import MovieList from './MovieList.jsx';
import SearchForm from './SearchForm.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: props.movies.length - 1,
      movies: props.movies.map((movie, index) => {
        movie.id = index;
        movie.watched = false,
        movie.watchedVisible = true
        return movie;
      }),
      visibleMovies: props.movies.map((movie) => {
        movie.watched = false,
        movie.watchedVisible = true
        return movie;
      }),
      userMovies: []
    }

    this.showMatches = this.showMatches.bind(this);
    this.createMovie = this.createMovie.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.toggleWatched = this.toggleWatched.bind(this);
    this.createMovieId = this.createMovieId.bind(this);
  }

  createMovieId() {
    let oldCount = this.state.counter;
    oldCount += 1;
    this.setState({
      counter: oldCount
    });
    return oldCount;
  }

  createMovie(movieTitle, watchVisible = true) {
    const id = this.createMovieId();
    return { id: id, title: movieTitle, watched: false, watchedVisible: watchVisible};
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
        visibleMovies: movieMatches
      });
    } else {
      let errMovie = this.createMovie('No movie by that name found.');
      this.setState({
        visibleMovies: [errMovie]
      });
    }
  }

  addMovie(movieTitle) {
    console.log(this.state.counter);
    console.log(this.state.movies);
    if (movieTitle && typeof movieTitle === 'string') {
      let movie = this.createMovie(movieTitle);
      const userMovies = this.state.userMovies;
      const movies = this.state.movies;
      movies.push(movie);
      userMovies.push(movie);
      this.setState({
        movies: movies,
        userMovies: userMovies,
        visibleMovies: userMovies,
      });
    }
  }

  toggleWatched() {

  }

  render() {
    return (
      <div>
        <SearchForm searchHandler={this.addMovie} btnTxt='Add' btnPlaceholder='Add movie title here'/>
        <SearchForm searchHandler={this.showMatches} btnTxt='Go!' btnPlaceholder='Search...'/>
        <MovieList movies={this.state.visibleMovies} />
      </div>
    );
  }
}

export default App;