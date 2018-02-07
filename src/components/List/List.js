import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import ListItem from '../ListItem/ListItem';
import FA from 'react-fontawesome';

import ls from '../../service/localStorageService';
import _ from 'lodash';

import './List.css';

export default class List extends Component {
    state = {
        items: ls.get('items') || []
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
            <div className='container main-page'>
                <Header />
                <ul className='main-page__list'>{list}</ul>
                <Link to={`/items/new`}>
                    <button className='main-page__add-button'><FA name='plus'></FA></button>
                </Link>
            </div>
        );
    }
}
List;
