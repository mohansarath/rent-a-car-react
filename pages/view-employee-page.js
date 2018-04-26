import React, { Component } from 'react';
import Navbar from '../components/navbar-login';
import ViewEmployee from '../components/view-employee';

export default class extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="exactCenter">
                    <ViewEmployee />
                </div>
            </div>
        )
    }
}