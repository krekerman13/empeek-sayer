import React from 'react';
import PropTypes from 'prop-types';

import Comment from '../Comment/Comment';

const CommentList = props => {
    const list = props.comments.map((item,index) =>
        <Comment key={index} title={item.title} />
    );

    return (
        <div>
            <ul>{list}</ul>
        </div>
    );
};

export default CommentList;
