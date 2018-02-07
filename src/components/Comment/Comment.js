import React from 'react';
import PropTypes from 'prop-types';

import FA from 'react-fontawesome';
import './Comment.css';

const Comment = props => {
    const deleteComment = () => {
        props.deleteComment(props.index);
    };

    return (
        <li className="comment">
            <div className="comment-color" />
            <div className="comment-title">{props.title}</div>
            <div className="comment-delete">
                <FA name="times" onClick={deleteComment} />
            </div>
        </li>
    );
};

export default Comment;
