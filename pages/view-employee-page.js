import React, { Component } from 'react';
import Navbar from '../components/navbar-login';
import ViewEmployee from '../components/view-employee-scroll';
import Sidenav from '../components/sidenav';

export default class extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Sidenav />
                <div className="exactCenter">
                    <ViewEmployee />
                </div>
            </div>
        )
    }
}