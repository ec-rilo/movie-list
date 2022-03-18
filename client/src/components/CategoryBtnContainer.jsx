import React from 'react';
import CategoryBtn from './CategoryBtn.jsx';


class CategoryBtnContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      watchBtn: { isActive: false },
      toWatchBtn: { isActive: true }
    };

    this.showToWatchedMovies = this.showToWatchedMovies.bind(this);
    this.showWatchedMovies = this.showWatchedMovies.bind(this);
    this.filterWatchedMovies = this.filterWatchedMovies.bind(this);
    this.filterToWatchMovies = this.filterToWatchMovies.bind(this);
  }

  filterWatchedMovies() {
    let movies = this.props.movies.slice();
    movies = movies.filter((movie) => {
      if (movie.watched === true) {
        return movie;
      }
    });

    return movies;
  }

  filterToWatchMovies() {
    let movies = this.props.movies.slice();
    movies = movies.filter((movie) => {
      if (movie.watched === false) {
        return movie;
      }
    });

    return movies;
  }

  showToWatchedMovies() {
    if (!this.state.toWatchBtn.isActive) {
      this.setState({
        toWatchBtn: { isActive: true }
      });
    }

    if (this.state.watchBtn.isActive) {
      this.setState({
        watchBtn: { isActive: false }
      });
    }

    let movies = this.filterToWatchMovies();
    this.props.updateVisibleMovies(movies);
  }

  showWatchedMovies() {
    if (!this.state.watchBtn.isActive) {
      this.setState({
        watchBtn: { isActive: true }
      });
    }

    if (this.state.toWatchBtn.isActive) {
      this.setState({
        toWatchBtn: { isActive: false }
      });
    }

    let movies = this.filterWatchedMovies();
    this.props.updateVisibleMovies(movies);
  }

  render() {
    return (
      <div>
        <CategoryBtn text='Watched' isActive={this.state.watchBtn.isActive} showHandler={this.showWatchedMovies} />
        <CategoryBtn text='To Watch' isActive={this.state.toWatchBtn.isActive} showHandler={this.showToWatchedMovies} />
      </div>
    );
  }
}

export default CategoryBtnContainer;