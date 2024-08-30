import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const handleSearch = () => {
        navigate(`/search?query=${query}`);
    };

    return (
        <nav>
            <h1>Movie Web Panel</h1>
            <input 
                type="text" 
                placeholder="Search movies..." 
                value={query} 
                onChange={(e) => setQuery(e.target.value)} 
            />
            <button onClick={handleSearch}>Search</button>
        </nav>
    );
};

export default Navbar;
