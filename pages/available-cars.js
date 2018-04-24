import React, { Component } from 'react';
import Navbar from '../components/navbar-login';
import Cars from '../components/view-cars';

export default class extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="exactCenter">
                    <Cars url={'car-available'} />
                </div>
            </div>
        )
    }
}