import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Home from './pages/home-page';
import Login from './pages/login-page';
import Dashboard from './pages/admin-dashboard-page';
import AddDealer from './pages/add-dealer-page';

export default class App extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <BrowserRouter>
                    <div>
                        <Route
                            exact
                            path="/"
                            component={Home}
                        />
                        <Route
                            path='/login'
                            component={Login}
                        />
                        <Route
                            path='/dashboard'
                            component={Dashboard}
                        />
                        <Route
                            path='/add-dealer'
                            component={AddDealer}
                        />
                    </div>
                </BrowserRouter>
            </MuiThemeProvider>
        )
    }
}