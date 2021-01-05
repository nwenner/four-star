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
import CommentRating from '../rating/editableRating';

function CommentSection(data) {
    const blankReview = {
        comment: '',
        rating: 0
    };
    const [comments, setComments]=useState([]);
    const auth = useAuth();
    const [movieReview, setMovieReview]=useState(blankReview);
    const [loading, setLoading]=useState(false);

    function fetchData() {
        API.get('fourstar', `/comments/${data.movieId}`)
            .then(response => {
                setComments(response);
            })
            .catch(error => {
                console.log(`error requesting from /comments/1; ${error}`);
            })
            .finally(() => {
                setLoading(false);
                setMovieReview(blankReview);
            });
    }

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

    function hasUserCommented() {
        return auth.user && comments.find((comment) => {
            return comment.username === auth.user.attributes.email;
        });
    }

    function onCommentRatingClick(clickedRating) {
        setMovieReview({
            ...movieReview,
            rating: clickedRating
        });
    }

    function onCommentUpdated(e) {
        setMovieReview({
            ...movieReview,
            comment: e.currentTarget.value
        });
    }

    function onSubmitComment() {
        setLoading(true);
        var datePosted = Date.now();
        const commentToSend = {
            movieid: data.movieId,
            commentid: uuidv4(),
            username: auth.user.attributes.email,
            comment: movieReview.comment,
            rating: movieReview.rating,
            date: datePosted,
            isAdmin: auth.userGroups
        };
        API.put('fourstar', `/comments`, {
            body: commentToSend
        }).then(response => {
            fetchData();
        });
    }

    function onDeleteComment(comment) {
        setLoading(true);
        API.del('fourstar', `/comments/object/${comment.movieid}/${comment.commentid}`, {
            body: comment
        }).then(response => {
            fetchData();
        });
    }

    function onEditComment(comment) {
        setLoading(true);
        const dateUpdated = Date.now();
        comment.date = dateUpdated;
        API.put('fourstar', `/comments`, {
            body: comment
        }).then(response => {
            fetchData();
        });
    }

    return (
        <div>
            <ListGroupItem variant="flush">
                {
                    comments.map((data,id)=> {
                        return <Comment 
                                    key={id} 
                                    comment={data} 
                                    onDeleteComment={onDeleteComment} 
                                    onEditComment={onEditComment} 
                                    loading={loading}></Comment>
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
                        Please <a href="/login">Sign In</a> to add a comment
                    </span>
                }
                {auth.user && !hasUserCommented() &&
                    <>
                        <div className="Comment-submission-container">
                            <FormControl 
                                className="Comment-text-area" 
                                as='textarea' 
                                placeholder='Type a comment here' 
                                onChange={(e)=>onCommentUpdated(e)}></FormControl>
                        </div>
                        <div className="Comment-rating-container">
                            <span>Rating: </span>
                            <CommentRating 
                                rating={movieReview.rating} 
                                onCommentRatingClick={onCommentRatingClick}></CommentRating>
                        </div>
                        <div>
                            <Button 
                                variant="warning" 
                                disabled={loading}
                                onClick={onSubmitComment}>Submit</Button>
                        </div>
                    </>
                }
            
            </ListGroup.Item>
        </div>
    );
}

export default CommentSection;
