import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FA from 'react-fontawesome';
import './NewCommentInput.css';

export default class NewCommentInput extends Component {
    state = {
        newComment: {title: ''},
        isValid: false
    };

    handleChange = e => {
        this.setState({
            newComment: {title :e.target.value},
            isValid: e.target.value.length > 2
        }, this.props.handleChange(e))
    }

    addComment = () => {
        this.props.addComment(this.state.newComment);
        this.setState({
            newComment: {title: ''},
            isValid: false
        })
    }


    render() {
        return (
            <div className="comment-input-block">
                <input
                    type="text"
                    value={this.state.newComment.title}
                    onChange={this.handleChange}
                    placeholder="New comment goes here.."
                    className={`${!this.state.isValid ? 'invalid' : ''}`}
                />
                <button
                    disabled={!this.state.isValid}
                    className="button-add"
                    onClick={this.addComment}
                >
                    <FA name="angle-right" />
                </button>
            </div>
        );
    }
}
