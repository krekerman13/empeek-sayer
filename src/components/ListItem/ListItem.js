import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import Swipeable from 'react-swipeable';

import './ListItem.css';

const ListItem = props => {
    let addButton = null;

    const deleteItem = () => {
        props.deleteAction(props.id);
    };

    const swipingLeft = (e, absX) => {
        addButton.className = 'list-item__delete-button swiped';
        console.log(e, absX);
    };

    const swipingRight = (e, absX) => {
        addButton.className = 'list-item__delete-button';
        console.log(e, absX);
    };

    return (
        <Swipeable onSwipingLeft={swipingLeft} onSwipingRight={swipingRight}>
            <li className="list-item">
                <Link to={`/items/${props.id}`}>
                    <span className='list-item__title'>{props.title}</span>
                    <span className="list-item__comments">
                        {props.comments}
                    </span>
                </Link>
                <div>
                    <button
                        className="list-item__delete-button"
                        onClick={deleteItem}
                        ref={button => {
                            addButton = button;
                        }}
                    >
                        Delete
                    </button>
                </div>
            </li>
        </Swipeable>
    );
};

export default ListItem;
