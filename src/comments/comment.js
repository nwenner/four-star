import { Badge, Button, ListGroup } from "react-bootstrap";

import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {useAuth} from '../authentication/useAuth';
import MovieRating from '../rating/movieRating';
import EditableRating from "../rating/editableRating";
import { useState } from "react";

function Comment(data) {
    const dateValue = new Date(data.comment.date).toLocaleString();
    const [editableComment, setEditableComment] = useState(data.comment);

    const auth = useAuth();

    function onClickDelete() {
        data.onDeleteComment(data.comment);
    }

    function isEditMode() {
        return auth.user && data.comment.username === auth.user.attributes.email;
    }

    function onCommentRatingClick(clickedRating) {
        setEditableComment({
            ...editableComment,
            rating: clickedRating
        });
    }

    return (
        <ListGroup.Item>
            <div className="Comment-component-container">
                <span>{dateValue}</span>
                <div className="Comment-container">
                    <span>
                        <FontAwesomeIcon icon={faThumbsUp} className="Comment-upvote-container"></FontAwesomeIcon>
                    </span>
                    <span className="Comment-upvote-container">
                        <FontAwesomeIcon icon={faThumbsDown} color={''}></FontAwesomeIcon>
                    </span>
                </div>
                { isEditMode() &&
                    <EditableRating rating={editableComment.rating} onCommentRatingClick={onCommentRatingClick}></EditableRating>
                }
                { !isEditMode() &&
                    <MovieRating rating={data.comment.rating}></MovieRating>
                }
                
                <div className="Comment-delete-container">
                    { isEditMode() &&
                        <Button variant="warning" size="sm" onClick={onClickDelete}>Update</Button>
                    }
                    {auth.userGroups && 
                        <Button variant="danger" size="sm" onClick={onClickDelete} className="Margin-left">Delete</Button>
                    }
                </div>
            </div>
            <div className="Comment-user-info">
                <span className="Movie-text-label">User:</span>
                <span className="Margin-left--">{data.comment.username}</span>
                {data.comment.isAdmin && 
                  <Badge variant="warning" className={`Card-badge Margin-left--`}>Admin</Badge>
                }
            </div>
            <div className="Margin-top--">{data.comment.comment}</div>
        </ListGroup.Item>
    );
}

export default Comment;

