import React, { useEffect, useState } from "react";
import CardColumns from 'react-bootstrap/CardColumns';
import MovieCard from './movieCard';

function FilterableMovies(data) {
    const [searchResults, setSearchResults] = React.useState([]);

    useEffect(() => {
        const results = data.movies.filter((movie) => {
            if(data.searchTerm === null || data.searchTerm === '') {
                return movie;
            } else if (matchesSearch(movie)) {
                return movie;
            }
        });
        setSearchResults(results);
    }, [data.movies, data.searchTerm]);

    function matchesSearch(movie) {
        return movie.title.toLowerCase().includes(data.searchTerm.toLowerCase()) ||
               movie.genre.toLowerCase().includes(data.searchTerm.toLowerCase());
    }

    return (
        <div>
            <CardColumns className="Movie-container">
                {
                    searchResults.map((data,id)=> {
                        return <MovieCard key={id} movie={data}></MovieCard>
                    })
                }
            </CardColumns>
        </div>
    );
}

export default FilterableMovies;
