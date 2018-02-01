import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';

const ListItem = props => {
    return (
        <li>
            <span>{props.title}</span>
            <span></span>
        </li>
    );
};

export default ListItem;
