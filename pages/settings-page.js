import React, { Component } from 'react';
import Navbar from '../components/navbar-login';
import Commission from '../components/settings';
import ViewSettings from '../components/view-settings';
import Sidenav from '../components/sidenav';

export default class extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Sidenav />
                <div className="exactCenter">
                    <Commission />
                    <ViewSettings />
                </div>
            </div>
        )
    }
}