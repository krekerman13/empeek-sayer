import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

const ListItem = props => {
    console.log(props.coments);

    const deleteItem = () => {
        props.deleteAction(props.id);
    };

    return (
        <li>
                <Link to={`/items/${props.id}`}>
                    <span>{props.title}</span>
                    <span>{props.comments}</span>
                </Link>
            <div>
                <button onClick={deleteItem}>Delete</button>
            </div>
        </li>
    );
};

export default ListItem;
