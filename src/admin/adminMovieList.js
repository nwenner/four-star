import React, { useEffect, useState } from "react";
import { API } from "aws-amplify";

import { Form } from "react-bootstrap";

import FilterableMovies from "../movieList/filterableMovies";
import { useAuth } from "../authentication/useAuth";

function AdminMovieList() {
    const [movies, setMovies]=useState([]);
    const [searchTerm, setSearchTerm]=useState('');

    const auth = useAuth();

    console.log(`This is auth right now: ${auth.userGroups}`);

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
            <span style={{color: 'white'}}>Welcome Admin</span>
            <Form.Group className="Movie-list-filter-group">
                <Form.Control 
                    className="Movie-list-filter-input"
                    type="searchInput" 
                    placeholder="search/filter" 
                    onChange={(e)=>searchMovieList(e)}/>
            </Form.Group>
            <FilterableMovies movies={movies} searchTerm={searchTerm}></FilterableMovies>
        </div>
    );
}

export default AdminMovieList;