import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Router from './routes';

import Header from './components/Header/Header';

export default class App extends Component {
    render() {
        return (
            <div className='sayer-app'>
                <Router></Router>
            </div>
        );
    }
}
