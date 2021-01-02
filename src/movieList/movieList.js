import React, { useEffect, useState } from "react";
import { API } from "aws-amplify";

import CardColumns from 'react-bootstrap/CardColumns';

import MovieCard from './movieCard';

function MovieList() {
    const [movies, setMovies]=useState([]);

    useEffect(async () => {
        API.get('fourstar', '/movies')
        .then(response => {
            setMovies(response.data);
        })
        .catch(error => {
            console.log(`error requesting from /movies; ${error}`);
        });
    }, []);

    return (
        <CardColumns className="Movie-container">
            {movies.map((data,id)=> {
                console.log(`data: ${JSON.stringify(data)}`)
                return <MovieCard key={id} movie={data}></MovieCard>
            })}
            
        </CardColumns>
    );
}

export default MovieList;
