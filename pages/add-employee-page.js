import React, { Component } from 'react';
import Navbar from '../components/navbar-login';
import AddEmployee from '../components/add-employee';

export default class extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="exactCenter">
                    <AddEmployee />
                </div>
            </div>
        )
    }
}