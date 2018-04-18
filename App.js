import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import  Home from './pages/home-page';
import Login from './pages/login-page';

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
                </div>
            </BrowserRouter>
            </MuiThemeProvider>
        )
    }
}