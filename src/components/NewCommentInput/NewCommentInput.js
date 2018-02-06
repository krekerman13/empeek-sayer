import React from 'react'
import PropTypes from 'prop-types'

const NewCommentInput = (props) => {
    return (
        <div>
            <input type='text' value={props.comment} onChange={props.handleChange}/>
            <button onClick={props.addComment}>Add</button>
        </div>
    )
}

export default NewCommentInput;
