import React, { Component } from 'react';
import Navbar from '../components/navbar-login';
import Sidenav from '../components/sidenav';

export default class extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Sidenav />
            </div>
        )
    }
}