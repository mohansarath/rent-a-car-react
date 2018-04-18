import React, { Component } from 'react';
import Navbar from '../components/navbar-login';
import AddDealer from '../components/add-dealer';

export default class extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="exactCenter">
                    <AddDealer />
                </div>
            </div>
        )
    }
}