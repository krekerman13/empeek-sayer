import React, { Component } from 'react';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';

import List from '../components/List/List';
import ListItem from '../components/ListItem/ListItem';
import NewItem from '../components/NewItem/NewItem';
import Item from '../components/Item/Item';


class Router extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/items/new" component={NewItem} />
                    <Route path="/items/:id" component={Item} />
                    <Route exact path="/" component={List} />
                    <Redirect from="*" to="/" />
                </Switch>
            </HashRouter>
        );
    }
}

export default Router;
