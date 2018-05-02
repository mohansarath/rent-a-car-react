import React, { Component } from 'react';
import Navbar from '../components/navbar-login';
import ViewDealer from '../components/view-dealer';
import Sidenav from '../components/sidenav';

export default class extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Sidenav />
                <div className="exactCenter">
                    <ViewDealer />
                </div>
            </div>
        )
    }
}