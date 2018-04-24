import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Label, FormGroup, Button, Row, Col, Grid, Form } from 'reactstrap';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import validator from 'validator';

import { postCall } from '../services/api';

class addDealer extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            dealer_Name: '',
            dealer_Mobile: '',
            address: '',
            pincode: '',
            contact_Name: '',
            contact_Mobile: '',
            email: '',
            password: '',
            dealerNameError: '',
            dealerMobileError: '',
            dealerAddressError: '',
            dealerPincodeError: '',
            contactNameError: '',
            contactMobileError: '',
            emailError: '',
            passwordError: ''
        };


        this.handleDealerNameChange = this.handleDealerNameChange.bind(this);
        this.handleDealerMobileChange = this.handleDealerMobileChange.bind(this);
        this.handleDealerAddressChange = this.handleDealerAddressChange.bind(this);
        this.handleDealerPincodeChange = this.handleDealerPincodeChange.bind(this);
        this.handleContactNameChange = this.handleContactNameChange.bind(this);
        this.handleContactMobileChange = this.handleContactMobileChange.bind(this);
        this.handlepasswordChange = this.handlepasswordChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.add = this.add.bind(this);
    }

    handleDealerNameChange(event) {
        this.setState({ dealer_Name: event.target.value });
        this.handleDealerNameValidation();
    }
    handleDealerMobileChange(event) {
        this.setState({ dealer_Mobile: event.target.value });
        this.handleDealerMobileValidation();
    }
    handleDealerAddressChange(event) {
        this.setState({ address: event.target.value });
        this.handleDealerAddressValidation();
    }
    handleDealerPincodeChange(event) {
        this.setState({ pincode: event.target.value });
        this.handleDealerPincodeValidation();
    }
    handleContactMobileChange(event) {
        this.setState({ contact_Mobile: event.target.value });
        this.handleContactMobileValidation();
    }
    handlepasswordChange(event) {
        this.setState({ password: event.target.value });
        this.handlepasswordValidation();
    }
    handleContactNameChange(event) {
        this.setState({ contact_Name: event.target.value });
        this.handleContactNameValidation();
    }
    handleEmailChange(event) {
        this.setState({ email: event.target.value });
        this.handleEmailValidation();
    }
    clearError() {
        this.setState({
            dealerNameError: '',
            dealerMobileError: '',
            dealerAddressError: '',
            dealerPincodeError: '',
            contactNameError: '',
            contactMobileError: '',
            emailError: '',
            passwordError: ''
        })
    }

    handleDealerNameValidation() {
        if (!validator.isLength(this.state.dealer_Name, { min: 0 })) {
            this.setState({ dealerNameError: 'Required' });
        } else {
            this.setState({ dealerNameError: '' });
        }
    }

    handleDealerMobileValidation() {
        if (!validator.isNumeric(this.state.dealer_Mobile)) {
            this.setState({ dealerMobileError: 'Mobile should be numeric' })
        }
        else if (!validator.isLength(this.state.dealer_Mobile, { min: 9, max: 9 })) {
            this.setState({ dealerMobileError: 'Length should be 10' })
        }
        else {
            this.setState({ dealerMobileError: '' })
        }
    }

    handleDealerAddressValidation() {
        if (!validator.isLength(this.state.address, { min: 0 })) {
            this.setState({ dealerAddressError: 'Required' });
        } else {
            this.setState({ dealerAddressError: '' });
        }

    }

    handleDealerPincodeValidation() {
        if (!validator.isLength(this.state.pincode, { min: 0 })) {
            this.setState({ dealerPincodeError: 'Required' });
        }

        else if (!validator.isNumeric(this.state.pincode)) {
            this.setState({ dealerPincodeError: 'Pin should be numeric' })

        }
        else {
            this.setState({ dealerPincodeError: '' })
        }
    }

    handleContactNameValidation() {
        if (!validator.isLength(this.state.contact_Name, { min: 0 })) {
            this.setState({ contactNameError: 'Required' });
        } else {
            this.setState({ contactNameError: '' });
        }
    }

    handleContactMobileValidation() {
        if (!validator.isNumeric(this.state.contact_Mobile)) {
            this.setState({ contactMobileError: 'Mobile should be numeric' })

        }
        else if (!validator.isLength(this.state.contact_Mobile, { min: 9, max: 9 })) {
            this.setState({ contactMobileError: 'Length should be 10' })
        } else {
            this.setState({ contactMobileError: '' })

        }
    }

    handlepasswordValidation() {
        if (!validator.isLength(this.state.password, { min: 0 })) {
            this.setState({ passwordError: 'Required' });
        } else {
            this.setState({ passwordError: '' });
        }

    }


    handleEmailValidation() {
        if (!validator.isEmail(this.state.email)) {
            this.setState({ emailError: 'Email format not correct' })
        }
        else {
            this.setState({ emailError: '' })
        }
    }



    handleValidation() {
        var errorflag = 0;

        if (!validator.isLength(this.state.dealer_Name, { min: 1 })) {
            errorflag = 1;
            this.setState({ dealerNameError: 'Required' });
        }

        if (!validator.isNumeric(this.state.dealer_Mobile)) {
            errorflag = 1;
            this.setState({ dealerMobileError: 'Mobile should be numeric' })
        }

        if (!validator.isLength(this.state.contact_Mobile, { min: 10, max: 10 })) {
            errorflag = 1;
            this.setState({ dealerMobileError: 'Length should be 10' })
        }

        if (!validator.isLength(this.state.address, { min: 1 })) {
            errorflag = 1;
            this.setState({ dealerAddressError: 'Required' });
        }

        if (!validator.isLength(this.state.pincode, { min: 1 })) {
            errorflag = 1;
            this.setState({ dealerPincodeError: 'Required' });
        }

        if (!validator.isNumeric(this.state.pincode)) {
            errorflag = 1;
            this.setState({ dealerPincodeError: 'Pin should be numeric' })
        }

        if (!validator.isLength(this.state.contact_Name, { min: 1 })) {
            errorflag = 1;
            this.setState({ contactNameError: 'Required' });
        }

        if (!validator.isNumeric(this.state.contact_Mobile)) {
            errorflag = 1;
            this.setState({ contactMobileError: 'Mobile should be numeric' })
        }

        if (!validator.isLength(this.state.contact_Mobile, { min: 10, max: 10 })) {
            errorflag = 1;
            this.setState({ contactMobileError: 'Length should be 10' })
        }

        if (!validator.isEmail(this.state.email)) {
            errorflag = 1;
            this.setState({ emailError: 'Email format not correct' })
        }

        if (!validator.isLength(this.state.password, { min: 1 })) {
            errorflag = 1;
            this.setState({ passwordError: 'Required' });
        }

        if (errorflag == 1)
            return false;
        else if (errorflag == 0)
            return true;
    }
    
    add() {
        this.clearError();
        if (this.handleValidation()) {
            console.log('hi');
            postCall('dealer', this.state)
                .then((response) => {
                    console.log('response::::::::::', response);
                })
                .catch((error) => {
                    console.log('error ::::::: ', error);
                })

        }

    }


    render() {
        return (
            <div className='container'>
                <Row>
                    <Col md="3"></Col>
                    <Col md="6" className="border">
                        <h6>Dealership Details</h6>

                        <Row>
                            <Col md="6">
                                <TextField
                                    hintText="dealership name"
                                    floatingLabelText="Dealership name"
                                    fullWidth={true}
                                    onChange={this.handleDealerNameChange}
                                    errorText={this.state.dealerNameError}
                                />

                            </Col>
                            <Col md="6">
                                <TextField
                                    hintText="mobile"
                                    floatingLabelText="Mobile"
                                    fullWidth={true}
                                    onChange={this.handleDealerMobileChange}
                                    errorText={this.state.dealerMobileError}
                                />
                            </Col>
                        </Row>

                        <Row>
                            <Col md="6">
                                <TextField
                                    hintText="address"
                                    floatingLabelText="Address"
                                    fullWidth={true}
                                    onChange={this.handleDealerAddressChange}
                                    errorText={this.state.dealerAddressError}
                                />
                            </Col>
                            <Col md="6">
                                <TextField
                                    hintText="pincode"
                                    floatingLabelText="Pincode"
                                    fullWidth={true}
                                    onChange={this.handleDealerPincodeChange}
                                    errorText={this.state.dealerPincodeError}
                                />
                            </Col>
                        </Row>
                        <br />
                        <h6>Contact Person Details</h6>

                        <Row>
                            <Col md="6">
                                <TextField
                                    hintText="name"
                                    floatingLabelText="Name"
                                    fullWidth={true}
                                    onChange={this.handleContactNameChange}
                                    errorText={this.state.contactNameError}
                                />
                            </Col>
                            <Col md="6">
                                <TextField
                                    hintText="mobile"
                                    floatingLabelText="Mobile"
                                    fullWidth={true}
                                    onChange={this.handleContactMobileChange}
                                    errorText={this.state.contactMobileError}
                                />
                            </Col>
                        </Row>

                        <Row>
                            <Col md="6">
                                <TextField
                                    hintText="email"
                                    floatingLabelText="Email"
                                    fullWidth={true}
                                    onChange={this.handleEmailChange}
                                    errorText={this.state.emailError}
                                />
                            </Col>
                            <Col md="6">
                                <TextField
                                    hintText="password"
                                    floatingLabelText="password"
                                    fullWidth={true}
                                    onChange={this.handlepasswordChange}
                                    errorText={this.state.passwordError}
                                />
                            </Col>
                        </Row>
                        <center>
                            <RaisedButton
                                type="button"
                                label="Add"
                                primary={true}
                                onClick={this.add}
                            />
                        </center>
                    </Col>
                    <Col md="3"></Col>
                </Row>
            </div>
        )
    }
}

export default withRouter(addDealer);