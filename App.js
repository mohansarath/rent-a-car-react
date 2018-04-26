import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Home from './pages/home-page';
import Login from './pages/login-page';
import Dashboard from './pages/admin-dashboard-page';
import AddDealer from './pages/add-dealer-page';
import ViewDealer from './pages/view-dealer-page';
import RentedCars from './pages/rented-cars';
import AvailableCars from './pages/available-cars';
import Settings from './pages/settings-page';
import AddEmployee from './pages/add-employee-page'

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
                        <Route
                            path='/view-dealer'
                            component={ViewDealer}
                        />
                        <Route
                            path='/rented-car'
                            component={RentedCars}
                        />
                        <Route
                            path='/available-car'
                            component={AvailableCars}
                        />
                        <Route
                            path='/settings'
                            component={Settings}
                        />
                        <Route
                            path='/add-employee'
                            component={AddEmployee}
                        />

                    </div>
                </BrowserRouter>
            </MuiThemeProvider>
        )
    }
}