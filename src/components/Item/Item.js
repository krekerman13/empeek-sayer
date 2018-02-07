import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import CommentList from '../CommentList/CommentList';
import NewCommentInput from '../NewCommentInput/NewCommentInput';
import ls from '../../service/localStorageService';
import _ from 'lodash';

export default class Item extends React.Component {
    state = {
        items: ls.get('items') || [],
        newComment: ''
    };

    addComment = () => {
        let items = this.state.items;
        const itemIndex = _.findIndex(items, (el)=> el.id == this.props.match.params.id)
        items[itemIndex].comments.push(this.state.newComment);

        this.setState({
            items,
            newComment: {title :''},
        }, ls.set('items', items))
    };

    deleteComment = (comment) => {
        let items = this.state.items;
        const itemIndex = _.findIndex(items, (el)=> el.id == this.props.match.params.id)
        items[itemIndex].comments.splice(comment, 1);
        this.setState({
            items,
        }, ls.set('items', items))
    }

    inputHandleChange = (e) => {
        this.setState({
            newComment: {title :e.target.value},
        })
    }

    render() {
        const item = this.state.items.filter(
            elem => elem.id == this.props.match.params.id
        )[0];

        return (
            <div className='container'>
                <Header backButton={true} title={item.title} />
                <CommentList itemIndex={item.id} comments={item.comments} onDelete={this.deleteComment} />
                <NewCommentInput
                    addComment={this.addComment}
                    comment={this.state.newComment.title}
                    handleChange={this.inputHandleChange}
                />
            </div>
        );
    }
}
