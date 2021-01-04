

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CommentRating(data) {

    function onClickRating(rating) {
        data.onCommentRatingClick(rating);
    }

    return (
        <div className="Comment-submission-container">
            <span>Rating:</span>
            <div className="Comment-submission-rating">
                <FontAwesomeIcon icon={faStar} color={data.rating >= 1 ? '#FFCC00' : ''} onClick={() => onClickRating(1)}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar} color={data.rating >= 2 ? '#FFCC00' : ''} onClick={() => onClickRating(2)}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar} color={data.rating >= 3 ? '#FFCC00' : ''} onClick={() => onClickRating(3)}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar} color={data.rating >= 4 ? '#FFCC00' : ''} onClick={() => onClickRating(4)}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar} color={data.rating >= 5 ? '#FFCC00' : ''} onClick={() => onClickRating(5)}></FontAwesomeIcon>
            </div>
        </div>
    );
}

export default CommentRating;

