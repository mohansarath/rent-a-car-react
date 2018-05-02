import React, { Component } from 'react';
import Navbar from '../components/navbar-login';
import AddDealer from '../components/add-dealer';
import Sidenav from '../components/sidenav';

export default class extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Sidenav />
                <div className="exactCenter">
                    <AddDealer />
                </div>
            </div>
        )
    }
}