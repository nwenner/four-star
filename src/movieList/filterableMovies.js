import React, { useEffect } from "react";
import CardColumns from 'react-bootstrap/CardColumns';
import MovieCard from './movieCard';

function FilterableMovies(data) {
    const [searchResults, setSearchResults] = React.useState([]);

    useEffect(() => {
        function matchesSearch(movie) {
            return movie.title.toLowerCase().includes(data.searchTerm.toLowerCase()) ||
                   movie.genre.toLowerCase().includes(data.searchTerm.toLowerCase());
        }

        const results = data.movies.filter((movie) => {
            return (data.searchTerm === null || data.searchTerm === '') || matchesSearch(movie);
        });
        setSearchResults(results);
    }, [data.movies, data.searchTerm]);

    return (
        <div>
            <CardColumns className="Movie-container">
                {
                    searchResults.map((data,id)=> {
                        return <MovieCard 
                                    key={id} 
                                    movie={data}></MovieCard>
                    })
                }
            </CardColumns>
        </div>
    );
}

export default FilterableMovies;
