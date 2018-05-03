import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';
import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import { ic_business } from 'react-icons-kit/md/ic_business';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavLink } from 'reactstrap';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import Subheader from 'material-ui/Subheader';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

const style = {
    color: 'white'
}
const margin = {
    marginTop: '10px'
}

export class SidenavClass extends Component {
    constructor(props) {
        super(props);

        this.toggleD = this.toggleD.bind(this);
        this.toggleE = this.toggleE.bind(this);
        this.toggleC = this.toggleC.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.handleNestedListToggle = this.handleNestedListToggle.bind(this);
        this.state = {
            dropdownOpenD: false,
            dropdownOpenE: false,
            dropdownOpenC: false,
            open: false
        };
    }
    handleToggle() {
        this.setState({
            open: !this.state.open,
        });
    };

    handleNestedListToggle(item) {
        this.setState({
            open: item.state.open,
        });
    };

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

                    {/* <Nav id='dashboard'>
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
                    </Nav>   */}
                    <center>
                        <Avatar
                            size={100}
                            style={margin}
                        >
                            A
                        </Avatar>
                    </center>
                    <List className="white">
                        <Link to='/dashboard'>
                            <ListItem
                                primaryText="Dashboard"
                                style={style}
                                leftIcon={<span className="fas fa-columns"></span>}
                            />
                        </Link>

                        <ListItem
                            primaryText="Dealer"
                            initiallyOpen={false}
                            primaryTogglesNestedList={true}
                            style={style}
                            leftIcon={<span className="fas fa-briefcase"></span>}
                            nestedItems={[
                                <Link to='/add-dealer'>
                                    <ListItem
                                        key={1}
                                        primaryText="Add"
                                        style={style}
                                        leftIcon={<span className="fas fa-plus-square"></span>}
                                    />
                                </Link>,
                                <Link to='/view-dealer'>
                                    <ListItem
                                        key={2}
                                        primaryText="View"
                                        style={style}
                                        leftIcon={<span className="fas fa-eye"></span>}
                                    />
                                </Link>
                            ]}
                        />
                        <ListItem
                            primaryText="Employee"
                            initiallyOpen={false}
                            primaryTogglesNestedList={true}
                            style={style}
                            leftIcon={<span className="fas fa-users"></span>}
                            nestedItems={[
                                <Link to='/add-employee'>
                                    <ListItem
                                        key={1}
                                        primaryText="Add"
                                        style={style}
                                        leftIcon={<span className="fas fa-plus-square"></span>}
                                    />
                                </Link>,
                                <Link to='/view-employee'>
                                    <ListItem
                                        key={2}
                                        primaryText="View"
                                        style={style}
                                        leftIcon={<span className="fas fa-eye"></span>}
                                    />
                                </Link>
                            ]}
                        />
                        <ListItem
                            primaryText="Cars"
                            initiallyOpen={false}
                            primaryTogglesNestedList={true}
                            style={style}
                            leftIcon={<span className="fas fa-car"></span>}
                            nestedItems={[
                                <Link to='/rented-car'>
                                    <ListItem
                                        key={1}
                                        primaryText="Rented"
                                        leftIcon={<span className="fas fa-undo"></span>}
                                        style={style}
                                    />
                                </Link>,
                                <Link to='/available-car'>
                                    <ListItem
                                        key={2}
                                        primaryText="Available"
                                        leftIcon={<span className="fas fa-redo"></span>}
                                        style={style}
                                    />
                                </Link>
                            ]}
                        />
                        <Link to='/settings'>
                            <ListItem
                                primaryText="Settings"
                                style={style}
                                leftIcon={<span className="fas fa-cog"></span>}
                            />
                        </Link>
                    </List>

                </SideNav>
            </div>
        )
    }
}

export default withRouter(SidenavClass);