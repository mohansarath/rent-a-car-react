import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';
import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import { ic_business } from 'react-icons-kit/md/ic_business';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavLink } from 'reactstrap';

export class SidenavClass extends Component {
    constructor(props) {
        super(props);

        this.toggleD = this.toggleD.bind(this);
        this.toggleE = this.toggleE.bind(this);
        this.toggleC = this.toggleC.bind(this);
        this.state = {
            dropdownOpenD: false,
            dropdownOpenE: false,
            dropdownOpenC: false
        };
    }

    toggleD() {
        this.setState({
            dropdownOpenD: !this.state.dropdownOpenD
        });
    }

    toggleE() {
        this.setState({
            dropdownOpenE: !this.state.dropdownOpenE
        });
    }
    toggleC() {
        this.setState({
            dropdownOpenC: !this.state.dropdownOpenC
        });
    }


    render() {
        return (
            <div className="mysidenav">
                <SideNav highlightColor='#E91E63' highlightBgColor='#00bcd4' defaultSelected='dashboard'>
                   
                    <Nav id='dashboard'>
                        <NavIcon><SvgIcon size={20} icon={ic_aspect_ratio} /></NavIcon>
                        <NavText> <NavLink tag={Link} to="/dashboard"> Dashboard</NavLink> </NavText>

                    </Nav>
                
                    <Nav id='dealer'>
                        <NavText>
                            <ButtonDropdown isOpen={this.state.dropdownOpenD} toggle={this.toggleD} className="bg">
                                <DropdownToggle caret>
                                    Dealer
                                </DropdownToggle>
                                <DropdownMenu>
                                    <Link to='/add-dealer'> <DropdownItem>Add</DropdownItem></Link>
                                    <Link to='/view-dealer'> <DropdownItem>View</DropdownItem></Link>
                                </DropdownMenu>
                            </ButtonDropdown>
                        </NavText>
                    </Nav>
                    <Nav id='employee'>
                        <NavText>
                            <ButtonDropdown isOpen={this.state.dropdownOpenE} toggle={this.toggleE} className="bg">
                                <DropdownToggle caret>
                                    Employee
                                </DropdownToggle>
                                <DropdownMenu>
                                    <Link to='/add-employee'> <DropdownItem>Add</DropdownItem></Link>
                                    <Link to='/view-employee'>     <DropdownItem>View</DropdownItem></Link>
                                </DropdownMenu>
                            </ButtonDropdown>
                        </NavText>
                    </Nav>
                    <Nav id='cars'>
                        <NavText>
                            <ButtonDropdown isOpen={this.state.dropdownOpenC} toggle={this.toggleC} className="bg">
                                <DropdownToggle caret>
                                    Cars
                                </DropdownToggle>
                                <DropdownMenu>
                                    <Link to='/rented-car'> <DropdownItem>Rented</DropdownItem></Link>
                                    <Link to='/available-car'>   <DropdownItem>Available</DropdownItem></Link>
                                </DropdownMenu>
                            </ButtonDropdown>
                        </NavText>
                    </Nav>
            
                    <Nav id='settings'>
                        <NavIcon><span className="fas fa-cog"></span> </NavIcon>
                            <NavText ><NavLink tag={Link} to="/settings"> Settings</NavLink> </NavText>
                    </Nav>  
            
                </SideNav>
            </div>
        )
    }
}

export default withRouter(SidenavClass);