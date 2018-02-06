import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import ls from '../../service/localStorageService';
import FA from 'react-fontawesome';

import './NewItem.css';

export default class NewItem extends Component {
    state = {
        titleInput: '',
        titleInputError: '',
        titleValid: false,
        items: ls.get('items') || []
    };

    titleInputHandler = e => {
        const value = e.target.value;
        this.setState(
            {
                titleInput: value
            },
            this.validateInput
        );
    };

    validateInput() {
        const input = this._titleInput;
        let { titleInputError, titleValid } = this.state;

        titleValid = input.value.length > 2;
        titleInputError = titleValid
            ? ''
            : 'Title should be minimum 2 characters';

        this.setState({
            titleValid,
            titleInputError
        });
    }

    addItem = () => {
        let items = this.state.items;
        let newItem = {
            id: Date.now(),
            title: this.state.titleInput,
            comments: []
        };

        items.unshift(newItem);
        this.setState(
            {
                items: items
            },
            () => {
                ls.set('items', this.state.items);
                this.props.history.push('/');
            }
        );
    };

    render() {
        return (
            <div>
                <Header backButton={true} title="Create new Item" />
                <div className="input-block">
                    <input
                        className={`input-block__text-input ${this.state.titleValid ? '' : 'invalid'}`}
                        type="text"
                        ref="item-title-input"
                        placeholder="New item tile..."
                        onChange={this.titleInputHandler}
                        value={this.state.titleInput}
                        ref={node => (this._titleInput = node)}
                    />
                    <button
                        disabled={!this.state.titleValid}
                        className="button-add"
                        onClick={this.addItem}
                    >
                        <FA name="angle-right" />
                    </button>
                </div>
            </div>
        );
    }
}
