import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';

const UpcomingPage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=c45a857c193f6302f2b5061c3b85e743`)
            .then(response => response.json())
            .then(data => setMovies(data.results));
    }, []);

    return (
        <div className="movie-list">
            {movies.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
};

export default UpcomingPage;

