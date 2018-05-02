import React, { Component } from 'react';
import Navbar from '../components/navbar-login';
import Cars from '../components/view-cars';
import Sidenav from '../components/sidenav';

export default class extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Sidenav />
                <div className="exactCenter">
                    <Cars url={'car-rented'} />
                </div>
            </div>
        )
    }
}