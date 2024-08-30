
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    return (
        <div className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="Spider man:Far From Home" />
            <h2>Spider man:Far From Home</h2>
            <p>Release Date: 2-07-2019</p>
            <Link to={`/movie/${movie.id}`}>View Details</Link>
        </div>
    );
};


export default MovieCard;
