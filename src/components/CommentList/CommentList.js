import React from 'react';
import PropTypes from 'prop-types';

import Comment from '../Comment/Comment';
import './CommentList.css';

import ls from '../../service/localStorageService';

const CommentList = props => {
    const comments = props.comments;


    const list = props.comments.map((item,index) =>
        <Comment key={index} index={index} title={item.title} deleteComment={props.onDelete} />
    );
    const message = <li>Comment list is empty. You can add your first comment below</li>

    return (
        <div className='listComments'>
            <ul>{comments.length > 0 ? list : message}</ul>
        </div>
    );
};

export default CommentList;
