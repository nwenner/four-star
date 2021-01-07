import React, { useEffect, useState } from "react";
import { API } from "aws-amplify";
import { useParams } from 'react-router-dom';

import Media from 'react-bootstrap/Media';
import { Col, Container, Row } from "react-bootstrap";

import MovieRating from '../rating/movieRating';
import CommentSection from "../comments/commentSection";

function Movie() {
    const [movie, setMovie] = useState({});

    let { id } = useParams();

    useEffect(() => {
        async function fetchData() {
            await API.get('fourstar', `/movies/${id}`)
                .then(response => {
                    setMovie(response[0]);
                })
                .catch(error => {
                    console.log(`error requesting from /movies/${id}; ${error}`);
                });
        }
        fetchData();
    }, [id]);

  return (
    <div>
        <Media style={{backgroundColor: 'white'}}>
            <img
                className="align-self-start mr-3"
                src={movie.imgsrc ? movie.imgsrc : '/placeholder.jpg'}
                alt="Generic placeholder" />
            <Media.Body>
                <h5>{movie.title}</h5>
                <Container className="Movie-text-label-container">
                    <Row>
                        <Col xs={12} className="Movie-text-label">
                            <MovieRating 
                                rating={movie.rating} 
                                shouldShowRating="true"></MovieRating>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={2} className="Movie-text-label">Genre</Col>
                        <Col xs={10} className="Movie-text">{movie.genre ? movie.genre : 'N/A'}</Col>
                    </Row>
                    <Row>
                        <Col xs={2} className="Movie-text-label">Language</Col>
                        <Col xs={10} className="Movie-text">{movie.language ? movie.language : 'N/A'}</Col>
                    </Row>
                    <Row>
                        <Col xs={2} className="Movie-text-label">Release Date</Col>
                        <Col xs={10} className="Movie-text">{movie.releaseDate ? movie.releaseDate : 'N/A'}</Col>
                    </Row>
                    <Row>
                        <Col xs={2} className="Movie-text-label">Cast</Col>
                        <Col xs={10} className="Movie-text">{movie.cast ? movie.cast : 'N/A'}</Col>
                    </Row>
                </Container>
            </Media.Body>
        </Media>
        <div style={{backgroundColor: 'white'}}>
            <div className="Movie-plot">{movie.plot}</div>
            <CommentSection movieId={id}></CommentSection>
        </div>
    </div>
  );
}

export default Movie;
