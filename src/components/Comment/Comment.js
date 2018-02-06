import React from 'react'
import PropTypes from 'prop-types'

const Comment = (props) => {
    return (
        <div>
            <div className='comment-color'>
                color
            </div>
            <div className='comment-title'>
                {props.title}
            </div>
        </div>
    )
}

export default Comment;
