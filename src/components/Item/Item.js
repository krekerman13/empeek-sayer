import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import ls from '../../service/localStorageService';

const Item = (props) => {

    const items = ls.get('items');
    const item = items.filter(elem => elem.id == props.match.params.id)[0];
    console.log(item);
    return (

        <div>
            <Header backButton={true} title={item.title} />
        </div>
    )
}

export default Item;
