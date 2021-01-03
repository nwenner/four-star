import React, { useEffect, useState } from "react";
import { API } from "aws-amplify";
import { useParams } from 'react-router-dom';

import Media from 'react-bootstrap/Media';
import FormControl from 'react-bootstrap/FormControl';
import { Col, Container, Row } from "react-bootstrap";

function Movie() {

    const [movie, setMovie]=useState({});

    let { id } = useParams();

    useEffect(async () => {
        API.get('fourstar', `/movies/${id}`)
        .then(response => {
            console.log(`Response: ${JSON.stringify(response)}`);
            setMovie(response[0]);
            console.log(`Movie is now: ${JSON.stringify(movie)}`);
        })
        .catch(error => {
            console.log(`error requesting from /movies/${id}; ${error}`);
        });
    }, [movie.id]);

  return (
    <div>
        <Media style={{backgroundColor: 'white'}}>
            <img
            className="align-self-start mr-3"
            src={movie.imgsrc ? movie.imgsrc : '/placeholder.jpg'}
            alt="Generic placeholder"
            />
            <Media.Body>
            <h5>{movie.title}</h5>
                <Container className="movieTextLabelContainer">
                    <Row>
                        <Col xs={2} className="movieTextLabel">Genre</Col>
                        <Col xs={10} className="movieText">This is some really long text and stuff I suppose</Col>
                    </Row>
                    <Row>
                        <Col xs={2} className="movieTextLabel">Language</Col>
                        <Col xs={10} className="movieText">This is some really long text and stuff I suppose</Col>
                    </Row>
                    <Row>
                        <Col xs={2} className="movieTextLabel">Release Date</Col>
                        <Col xs={10} className="movieText">This is some really long text and stuff I supposeThis is some really long text and stuff I suppose</Col>
                    </Row>
                    <Row>
                        <Col xs={2} className="movieTextLabel">Cast</Col>
                        <Col xs={10} className="movieText">This is some really long text and stuff I suppose</Col>
                    </Row>
                </Container>
            </Media.Body>
        </Media>
        <div style={{backgroundColor: 'white'}}>
            <p>{movie.description}</p>

                <FormControl as='textarea' value='Type a comment here' style={{paddingLeft: '2px', paddingRight: '2rem'}}></FormControl>
        </div>
    </div>
  );
}

export default Movie;
