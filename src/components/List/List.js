import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import ListItem from '../ListItem/ListItem';

import ls from '../../service/localStorageService';

const List = props => {
    const items = ls.get('items');
    const list = items.map(item => (
        <Link key={item.id} to={`/items/${item.id}`}>
            <ListItem key={item.id} title={item.title} />
        </Link>
    ));

    return (
        <div>
            <Header />
            <ul>{list}</ul>
        </div>
    );
};

export default List;
