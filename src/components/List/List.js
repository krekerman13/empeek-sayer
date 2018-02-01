import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import ListItem from '../ListItem/ListItem';

import ls from '../../service/localStorageService';
import _ from 'lodash';
export default class List extends Component {
    state = {
        items: ls.get('items')
    }

    deleteItem = (id)=> {
        let items = this.state.items;
        const indexForDelete = _.findIndex(items, (el)=> el.id === id);
        items.splice(indexForDelete, 1);

        this.setState({
            items
        }, ls.set('items', items))
    }

    render() {
        const items = this.state.items;
        const list = items.map(item => (
                <ListItem
                    deleteAction={this.deleteItem}
                    comments={item.comments.length}
                    key={item.id}
                    id={item.id}
                    title={item.title}
                />
        ));
        return (
            <div>
                <Header />
                <ul>{list}</ul>
                <Link to={`/items/new`}>
                    <button>New</button>
                </Link>
            </div>
        );
    }
}
List;
