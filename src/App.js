import React from 'react';
import axios from 'axios';

import Movie from './Movie';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const { data: {data: {movies}}} = await axios.get('https://yts.lt/api/v2/list_movies.json?order_by=rating')
    this.setState({isLoading: false, movies});
  };

  componentDidMount() {
    this.getMovies();
  };

  render() {
    const {isLoading, movies} = this.state;
    return (
      <div>
        {
          isLoading ? 
          "Loading..." 
          : (
            movies.map(movie => {return (
              <Movie 
                key = {movie.id}
                title = {movie.title}
                url = {movie.url}
                year = {movie.year}
                rating = {movie.rating}
                genres = {movie.genres}
                poster = {movie.medium_cover_image}
                summary = {movie.summary}
              />
            )})
          )
        }
      </div>
    )
  };
};

export default App;