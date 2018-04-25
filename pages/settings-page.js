import React, { Component } from 'react';
import Navbar from '../components/navbar-login';
import Commission from '../components/settings';
import ViewSettings from '../components/view-settings';

export default class extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="exactCenter">
                    <Commission />
                    <ViewSettings />
                </div>
            </div>
        )
    }
}