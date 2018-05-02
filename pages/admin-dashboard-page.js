import React, { Component } from 'react';
import Navbar from '../components/navbar-login';
import Sidenav from '../components/sidenav';
import Dashboard from '../components/dashboard';

export default class extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Sidenav />
                <div className="exactCenter">
                    <Dashboard />
                </div>
            </div>
        )
    }
}