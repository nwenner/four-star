import React, { useEffect } from "react";
import AdminMovieRow from "./adminMovieRow";

function FilterableAdminMovies(data) {
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
        <tbody>
            {
                searchResults.map((data,id)=> {
                    return <AdminMovieRow key={id} movie={data}></AdminMovieRow>
                })
            }
        </tbody>
    );
}

export default FilterableAdminMovies;
