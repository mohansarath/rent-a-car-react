import React, { Component } from 'react';
import Navbar from '../components/navbar-login';
import ViewDealer from '../components/view-dealer';

export default class extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="exactCenter">
                    <ViewDealer />
                </div>
            </div>
        )
    }
}