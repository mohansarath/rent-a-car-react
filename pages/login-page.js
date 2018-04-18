import React, { Component } from 'react';
import Navbar from '../components/navbar'
import Login from '../components/login';

export default class extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="exactCenter">
                    <Login />
                </div>
            </div>
        )
    }
}