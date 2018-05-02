import React, { Component } from 'react';
import Navbar from '../components/navbar-login';
import AddEmployee from '../components/add-employee';
import Sidenav from '../components/sidenav';

export default class extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Sidenav />
                <div className="exactCenter">
                    <AddEmployee />
                </div>
            </div>
        )
    }
}