import React from 'react';
import PropTypes from 'prop-types';


function Movie({title, url, year, rating, genres, poster, summary}) {
    return (
        <div className="movies_movie">
            <div className="movie_poster">
                <a href={url} target="_blank" rel="noopener noreferrer"> <img src={poster} alt={title} title={title} /> </a>
            </div>
            <div className="movie_info">
                <a href={url} target="_blank" rel="noopener noreferrer"> <div className="movie_title">{title}</div> </a>
                <div className="movie_desc">{year} / {rating}</div>
                <ul className="movie_genres">
                    {genres.map((genre, idx) => (<li className="movie_genre" key={idx}>{genre}</li>))}
                </ul>
                <div className="movie_summary">{summary.slice(0, 200) + '...'}</div>
            </div>
        </div>
    )
};

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired, 
    rating: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    poster: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired
};

export default Movie;