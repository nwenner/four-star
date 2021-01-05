import { Badge, Button, FormControl, ListGroup } from "react-bootstrap";

import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {useAuth} from '../authentication/useAuth';
import MovieRating from '../rating/movieRating';
import EditableRating from "../rating/editableRating";
import { useState } from "react";

function Comment(data) {
    const dateValue = new Date(data.comment.date).toLocaleString();
    const [editableComment, setEditableComment] = useState({});
    const [editMode, setEditMode] = useState(false);

    const isUpvoteEnabled = false;

    const auth = useAuth();

    function onSubmitDelete() {
        setEditMode(false);
        data.onDeleteComment(data.comment);
    }

    function onSubmitEdit() {
        setEditMode(false);
        data.onEditComment(editableComment);
    }

    function startEditMode() {
        setEditMode(true);
        setEditableComment(data.comment);
    }

    function cancelEditMode() {
        setEditMode(false);
        setEditableComment(data.comment);
    }

    function canEnterEditMode() {
        return auth.user && data.comment.username === auth.user.attributes.email;
    }

    function onCommentRatingClick(clickedRating) {
        setEditableComment({
            ...editableComment,
            rating: clickedRating
        });
    }

    function onCommentUpdated(e) {
        setEditableComment({
            ...editableComment,
            comment: e.currentTarget.value
        });
    }

    return (
        <ListGroup.Item>
            <div className="Comment-component-container">
                <span className="Margin-right--">{dateValue}</span>
                { isUpvoteEnabled &&
                    <div className="Comment-container">
                        <span>
                            <FontAwesomeIcon icon={faThumbsUp} className="Comment-upvote-container"></FontAwesomeIcon>
                        </span>
                        <span className="Comment-upvote-container">
                            <FontAwesomeIcon icon={faThumbsDown} color={''}></FontAwesomeIcon>
                        </span>
                    </div>
                }
                { editMode &&
                    <EditableRating 
                        rating={editableComment.rating} 
                        onCommentRatingClick={onCommentRatingClick}></EditableRating>
                }
                { !editMode &&
                    <MovieRating rating={data.comment.rating}></MovieRating>
                }
                
                <div className="Comment-delete-container">
                    { canEnterEditMode() && !editMode &&
                        <Button 
                            variant="warning" 
                            size="sm" 
                            onClick={startEditMode}>Edit</Button>
                    }
                    {auth.userGroups && 
                        <Button 
                            variant="danger" 
                            size="sm" 
                            className="Margin-left"
                            disabled={data.loading}
                            onClick={onSubmitDelete}>Delete</Button>
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
            { editMode && 
                <div>
                    <FormControl 
                        as='textarea' 
                        value={editableComment.comment} 
                        className="Margin-top--" 
                        onChange={(e)=>onCommentUpdated(e)}></FormControl>
                    <div className="Margin-top--">
                        <Button 
                            variant="warning" 
                            size="sm" 
                            disabled={data.loading}
                            onClick={onSubmitEdit}>Submit</Button>
                        <Button 
                            variant="danger" 
                            size="sm" 
                            className="Margin-left--" 
                            onClick={cancelEditMode}>Cancel</Button>
                    </div>
                </div>
            }
            { !editMode &&
                <div className="Margin-top--">{data.comment.comment}</div>
            }
            
        </ListGroup.Item>
    );
}

export default Comment;

