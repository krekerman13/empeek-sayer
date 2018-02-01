import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const Header = (props, context) => {
    const isBackButtonExist = props.backButton;
    const backButtonHandle = (event)=> {

    }

    return (
        <header className="sayer__header">
            {!isBackButtonExist ? (
                <div>
                    <h1 className="sayer__title">Sayer</h1>
                    <span className="sayer__subtitle">
                        World's most used time waster
                    </span>
                </div>
            ) : (
                <div className='sayer__header-flex'>
                    <button className='button-back' onClick={context.router.history.goBack}>
                        Back
                    </button>
                    <span className='page-title'>{props.title}</span>
                </div>
            )}
        </header>
    );
};

Header.contextTypes = {
    router: PropTypes.object.isRequired
}



export default Header;
