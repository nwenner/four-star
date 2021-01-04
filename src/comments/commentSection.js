import { useEffect, useState } from 'react';
import { API } from 'aws-amplify';

import {useAuth} from '../authentication/useAuth';
import { v4 as uuidv4 } from 'uuid';

import { ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import FormControl from 'react-bootstrap/FormControl';
import Alert from 'react-bootstrap/Alert';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

import Comment from './comment';
import CommentRating from './commentRating';

function CommentSection(data) {
    const [comments, setComments]=useState([]);
    const auth = useAuth();
    const [movieReview, setMovieReview]=useState({
        comment: 'this is a comment',
        rating: 3
    });

    useEffect(() => {
        async function fetchData() {
            await API.get('fourstar', `/comments/${data.movieId}`)
            .then(response => {
                setComments(response);
            })
            .catch(error => {
                console.log(`error requesting from /comments/1; ${error}`);
            });
        }
        fetchData();
    }, [data.movieId]);

    function onCommentRatingClick(clickedRating) {
        setMovieReview({
            ...movieReview,
            rating: clickedRating
        });
        console.log(`MovieReview State: ${JSON.stringify(movieReview)}`);
    }

    function onCommentUpdated(e) {
        setMovieReview({
            ...movieReview,
            comment: e.currentTarget.value
        });
    }

    function onSubmitComment() {
        console.log(`Clicked submit comment, here are the details:`);
        var datePosted = Date.now();
        const commentToSend = {
            movieid: data.movieId,
            commentid: uuidv4(),
            comment: movieReview.comment,
            rating: movieReview.rating,
            date: datePosted
        };
        API.put('fourstar', `/comments`, {
            body: commentToSend
        }).then(response => {
            API.get('fourstar', `/comments/${data.movieId}`)
                .then(response => {
                    setComments(response);
                })
                .catch(error => {
                    console.log(`error requesting from /comments/1; ${error}`);
                });
        });
    }

    return (
        <div>
            <ListGroupItem variant="flush">
                {
                    comments.map((data,id)=> {
                        return <Comment key={id} comment={data}></Comment>
                    })
                }
                {!comments.length &&
                    <Alert variant="secondary" className="Empty-comment-alert">
                        <div className="Div-center">
                            <FontAwesomeIcon icon={faEdit} color="#CCC" size="lg"></FontAwesomeIcon>
                            <span className="Margin-left--">No comments yet, be the first!</span>
                        </div>
                    </Alert>
                }
            </ListGroupItem>
            <ListGroup.Item>
                {!auth.user && 
                    <span>
                        Please <a href="/login">Sign In</a> To Continue
                    </span>
                }
                {auth.user && 
                    <>
                        <div className="Comment-submission-container">
                            <FormControl as='textarea' placeholder='Type a comment here' style={{paddingLeft: '2px', paddingRight: '2rem'}} onChange={(e)=>onCommentUpdated(e)}></FormControl>
                        </div>
                        <CommentRating rating={movieReview.rating} onCommentRatingClick={onCommentRatingClick}></CommentRating>
                        <div>
                            <Button variant="warning" onClick={onSubmitComment}>Submit</Button>
                        </div>
                    </>
                }
            
            </ListGroup.Item>
        </div>
    );
}

export default CommentSection;
