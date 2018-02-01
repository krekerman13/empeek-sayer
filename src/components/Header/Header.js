import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';
const Header = props => {
    return (
        <header className='sayer__header'>
            <h1 className='sayer__title'>Sayer</h1>
            <span className='sayer__subtitle'>World's most used time waster</span>
        </header>
    );
};

export default Header;
