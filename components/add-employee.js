import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Label, FormGroup, Button, Row, Col, Grid, Form } from 'reactstrap';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import validator from 'validator';

import { getCall } from '../services/api';

const style = {
    container: {
        position: 'relative',
    },
    refresh: {
        display: 'inline-block',
        position: 'relative',
    }
};

class addEmployee extends Component {

    constructor(props) {
        super(props);
        this.state = {
            code: '',
            name: '',
            doj: '',
            role: '',
            roleError: '',
            email: '',
            gender: '',
            dob: '',
            mobile: '',
            address: '',
            password: '',
            dealer_ID: '',
            dealer_IDError: '',
            passwordError: '',
            addressError: '',
            mobileError: '',
            dobError: '',
            genderError: '',
            emailError: '',
            dojError: '',
            nameError: '',
            codeError: '',
            value: 1,
            loading: false,
            data :[]
        };

        this.handleCodeChange = this.handleCodeChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleRoleChange = this.handleRoleChange.bind(this);
        this.handleGenderChange = this.handleGenderChange.bind(this);
        this.handledealerIDChange = this.handledealerIDChange.bind(this);
    }

    componentDidMount() {
        this.setState({ loading: true }, () => {
            this.getDealer();
        });
    }

    getDealer(){
        getCall('dealer')
            .then((response) => {
                console.log('response ::::::::', response.data.dealer);
                // localStorage.setItem('Settings_ID', response.data[0]._id);
                this.setState({ data: response.data.dealer, loading: false });
            })
            .catch((error) => {

                console.log('error:::::::', error);
                this.setState({ loading: false });
            })
    }

    handleCodeChange(event) {
        this.setState({ codeError: event.target.value });
        // this.handleCodeValidation();
    }

    handleNameChange(event) {
        this.setState({ nameError: event.target.value });
        // this.handleNameValidation();
    }

    handleRoleChange(event, index, value) {
        this.setState({ role: value })
    };

    handleGenderChange(event, index, value) {
        this.setState({ gender: value })
    };

    handledealerIDChange(event, index, value) {
        console.log('value::::::',value);
        this.setState({ dealer_ID: value })
    };




    render() {

        if (this.state.loading)
            return (

                <div style={style.container} className="margin-indicator">
                    <RefreshIndicator
                        size={150}
                        left={150}
                        top={50}
                        loadingColor="#FF9800"
                        status="loading"
                        style={style.refresh}
                    />
                </div>

            )

        return (
            <div className='container'>
                <Row>
                    <Col md="1"></Col>
                    <Col md="10" className="border">
                        <h6>Add Employee</h6>
                        <SelectField
                            floatingLabelText="Select Dealer"
                            value={this.state.dealer_ID}
                            onChange={this.handledealerIDChange}
                            maxHeight={400}
                            // fullWidth={true}
                        >

                        {this.state.data.map((item) => 
                                <MenuItem value={item._id} primaryText={item.dealer_Name}/>
                        )}

                        </SelectField>
                        <Row>
                            <Col md="4">
                                <TextField
                                    hintText="Employee code"
                                    floatingLabelText="Employee code"
                                    fullWidth={true}
                                // onChange={this.handleDealerNameChange}
                                // errorText={this.state.dealerNameError}
                                />
                            </Col>
                            <Col md="4">
                                <TextField
                                    hintText="Name"
                                    floatingLabelText="Name"
                                    fullWidth={true}
                                // onChange={this.handleDealerNameChange}
                                // errorText={this.state.dealerNameError}
                                />
                            </Col>
                            <Col md="4">
                                <SelectField
                                    floatingLabelText="Role"
                                    value={this.state.role}
                                    onChange={this.handleRoleChange}
                                    fullWidth={true}
                                >
                                    <MenuItem value={1} primaryText="Manager" />
                                    <MenuItem value={2} primaryText="Salesman" />

                                </SelectField>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="4">
                                <DatePicker
                                    hintText="doj"
                                    floatingLabelText="Date of Joining"
                                    // onChange={this.handleDobChange}
                                    fullWidth={true}
                                    openToYearSelection={true}
                                // locale="en-US"
                                // errorText={this.state.dobError}
                                />
                            </Col>
                            <Col md="4">
                                <TextField
                                    hintText="email"
                                    floatingLabelText="Email"
                                    fullWidth={true}
                                // onChange={this.handleFirstnameChange}
                                // value={this.state.first_name}
                                />
                            </Col>
                            <Col md="4">
                                <TextField
                                    hintText="Password"
                                    floatingLabelText="Password"
                                    fullWidth={true}
                                // onChange={this.handleDealerNameChange}
                                // errorText={this.state.dealerNameError}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col md="4">
                                <DatePicker
                                    hintText="dob"
                                    floatingLabelText="Date of Birth"
                                    // onChange={this.handleDobChange}
                                    fullWidth={true}
                                    openToYearSelection={true}
                                // locale="en-US"
                                // errorText={this.state.dobError}
                                />
                            </Col>
                            <Col md="4">
                                <SelectField
                                    floatingLabelText="Gender"
                                    value={this.state.gender}
                                    onChange={this.handleGenderChange}
                                    fullWidth={true}
                                >
                                    <MenuItem value={1} primaryText="Male" />
                                    <MenuItem value={2} primaryText="Female" />

                                </SelectField>
                            </Col>
                            <Col md="4">
                                <TextField
                                    hintText="Mobile"
                                    floatingLabelText="Mobile"
                                    fullWidth={true}
                                // onChange={this.handleDealerNameChange}
                                // errorText={this.state.dealerNameError}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12">
                                <TextField
                                    hintText="Address"
                                    floatingLabelText="Address"
                                    fullWidth={true}
                                    multiLine={true}
                                    rows={2}
                                // onChange={this.handleDealerNameChange}
                                // errorText={this.state.dealerNameError}
                                />
                            </Col>
                        </Row>
                        <center>
                            <RaisedButton
                                type="button"
                                label="Add"
                                primary={true}
                                // onClick={this.add}
                            />
                        </center>
                    </Col>
                    <Col md="1"></Col>
                </Row>
            </div>
        )
    }
}


export default withRouter(addEmployee);