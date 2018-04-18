import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

export default class extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <Link to="/">
                        <NavbarBrand>Rent A Car</NavbarBrand>
                    </Link>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>


                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Dealer
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <Link to='/add-dealer'>
                                        <NavLink>
                                            <DropdownItem>
                                                Add
                                            </DropdownItem>
                                        </NavLink>
                                    </Link>
                                    <Link to='/dashboard'>
                                        <NavLink>
                                            <DropdownItem>
                                                View
                                            </DropdownItem>
                                        </NavLink>
                                    </Link>
                                </DropdownMenu>
                            </UncontrolledDropdown>

                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                   Cars
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <Link to='/dashboard'>
                                        <NavLink>
                                            <DropdownItem>
                                                Rented
                                            </DropdownItem>
                                        </NavLink>
                                    </Link>
                                    <Link to='/dashboard'>
                                        <NavLink>
                                            <DropdownItem>
                                                Available
                                            </DropdownItem>
                                        </NavLink>
                                    </Link>
                                </DropdownMenu>
                            </UncontrolledDropdown>

                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Employee
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <Link to='/dashboard'>
                                        <NavLink>
                                            <DropdownItem>
                                                Add
                                            </DropdownItem>
                                        </NavLink>
                                    </Link>
                                    <Link to='/dashboard'>
                                        <NavLink>
                                            <DropdownItem>
                                                View
                                            </DropdownItem>
                                        </NavLink>
                                    </Link>
                                </DropdownMenu>
                            </UncontrolledDropdown>

                            <Link to="/dashboard">
                                <NavItem>
                                    <NavLink><span className="fas fa-bookmark"></span> Report</NavLink>
                                </NavItem>
                            </Link>

                            <Link to="/dashboard">
                                <NavItem>
                                    <NavLink><span className="fas fa-cog"></span> Settings</NavLink>
                                </NavItem>
                            </Link>

                            <Link to="/">
                                <NavItem>
                                    <NavLink><span className="fa fa-sign-in-alt"></span> Log Out</NavLink>
                                </NavItem>
                            </Link>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}