import React, { useEffect, useState } from "react";
import { API } from "aws-amplify";

import { Form } from "react-bootstrap";
import FilterableMovies from "./filterableMovies";

function MovieList() {
    const [movies, setMovies]=useState([]);
    const [searchTerm, setSearchTerm]=useState('');

    useEffect(() => {
        async function fetchData() {
            API.get('fourstar', '/movies')
            .then(response => {
                setMovies(response.data);
            })
            .catch(error => {
                console.log(`error requesting from /movies; ${error}`);
            });
        }
        fetchData();
    }, []);

    function searchMovieList(event) {
        setSearchTerm(event.target.value);
    }

    return (
        <div>
            <Form.Group className="Movie-list-filter-group">
                <Form.Control 
                    className="Movie-list-filter-input"
                    type="searchInput" 
                    placeholder="Filter by Title/Genre" 
                    onChange={(e)=>searchMovieList(e)}/>
            </Form.Group>
            <FilterableMovies 
                movies={movies} 
                searchTerm={searchTerm}></FilterableMovies>
        </div>
    );
}

export default MovieList;
