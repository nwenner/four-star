import React, { useEffect, useState } from "react";
import { API } from "aws-amplify";

import { Form, Table } from "react-bootstrap";

import { useAuth } from "../authentication/useAuth";
import FilterableAdminMovies from "./filterableAdminMovies";

function AdminMovieList() {
    const [movies, setMovies]=useState([]);
    const [searchTerm, setSearchTerm]=useState('');

    const auth = useAuth();

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
            <Table striped bordered hover responsive variant="dark">
                <thead>
                    <tr>
                        <th>Movie ID</th>
                        <th>Thumbnail</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Genre</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <FilterableAdminMovies 
                    movies={movies} 
                    searchTerm={searchTerm}></FilterableAdminMovies>
            </Table>
        </div>
        
    );
}

export default AdminMovieList;