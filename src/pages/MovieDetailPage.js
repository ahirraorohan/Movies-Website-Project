
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetailPage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=c45a857c193f6302f2b5061c3b85e743`)
            .then(response => response.json())
            .then(data => setMovie(data));
    }, [id]);

    if (!movie) return <div>Loading...</div>;

    return (
        <div className="movie-detail">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <h1>{movie.title}</h1>
            <p><strong>Release Date:</strong> {movie.release_date}</p>
            <p><strong>Rating:</strong> {movie.vote_average}</p>
            <p>{movie.overview}</p>
        </div>
    );
};

export default MovieDetailPage;
