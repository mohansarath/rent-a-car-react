import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Label, FormGroup, Button, Row, Col, Grid, Form } from 'reactstrap';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import validator from 'validator';

class addDealer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dealerName: '',
            dealerMobile: '',
            dealerAddress: '',
            dealerPincode: '',
            contactName: '',
            contactMobile: '',
            email: '',
            employeeCode: '',
            dealerNameError: '',
            dealerMobileError: '',
            dealerAddressError: '',
            dealerPincodeError: '',
            contactNameError: '',
            contactMobileError: '',
            emailError: '',
            employeeCodeError: ''
        };


        this.handleDealerNameChange = this.handleDealerNameChange.bind(this);
        this.handleDealerMobileChange = this.handleDealerMobileChange.bind(this);
        this.handleDealerAddressChange = this.handleDealerAddressChange.bind(this);
        this.handleDealerPincodeChange = this.handleDealerPincodeChange.bind(this);
        this.handleContactNameChange = this.handleContactNameChange.bind(this);
        this.handleContactMobileChange = this.handleContactMobileChange.bind(this);
        this.handleEmployeeCodeChange = this.handleEmployeeCodeChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.add = this.add.bind(this);
    }

    handleDealerNameChange(event) {
        this.setState({ dealerName: event.target.value });
        this.handleDealerNameValidation();
    }
    handleDealerMobileChange(event) {
        this.setState({ dealerMobile: event.target.value });
        this.handleDealerMobileValidation();
    }
    handleDealerAddressChange(event) {
        this.setState({ dealerAddress: event.target.value });
        this.handleDealerAddressValidation();
    }
    handleDealerPincodeChange(event) {
        this.setState({ dealerPincode: event.target.value });
        this.handleDealerPincodeValidation();
    }
    handleContactMobileChange(event) {
        this.setState({ contactMobile: event.target.value });
        this.handleContactMobileValidation();
    }
    handleEmployeeCodeChange(event) {
        this.setState({ employeeCode: event.target.value });
        this.handleEmployeeCodeValidation();
    }
    handleContactNameChange(event) {
        this.setState({ contactName: event.target.value });
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
            employeeCodeError: ''
        })
    }

    handleDealerNameValidation() {
        if (!validator.isLength(this.state.dealerName, { min: 0 })) {
            this.setState({ dealerNameError: 'Required' });
        } else {
            this.setState({ dealerNameError: '' });
        }
    }

    handleDealerMobileValidation() {
        if (!validator.isNumeric(this.state.dealerMobile)) {
            this.setState({ dealerMobileError: 'Mobile should be numeric' })
        }
        else if (!validator.isLength(this.state.dealerMobile, { min: 9, max: 9 })) {
            this.setState({ dealerMobileError: 'Length should be 10' })
        }
        else {
            this.setState({ dealerMobileError: '' })
        }
    }

    handleDealerAddressValidation() {
        if (!validator.isLength(this.state.dealerAddress, { min: 0 })) {
            this.setState({ dealerAddressError: 'Required' });
        } else {
            this.setState({ dealerAddressError: '' });
        }

    }

    handleDealerPincodeValidation() {
        if (!validator.isLength(this.state.dealerPincode, { min: 0 })) {
            this.setState({ dealerPincodeError: 'Required' });
        }

        else if (!validator.isNumeric(this.state.dealerPincode)) {
            this.setState({ dealerPincodeError: 'Pin should be numeric' })

        }
        else {
            this.setState({ dealerPincodeError: '' })
        }
    }

    handleContactNameValidation() {
        if (!validator.isLength(this.state.contactName, { min: 0 })) {
            this.setState({ contactNameError: 'Required' });
        } else {
            this.setState({ contactNameError: '' });
        }
    }

    handleContactMobileValidation() {
        if (!validator.isNumeric(this.state.contactMobile)) {
            this.setState({ contactMobileError: 'Mobile should be numeric' })

        }
        else if (!validator.isLength(this.state.contactMobile, { min: 9, max: 9 })) {
            this.setState({ contactMobileError: 'Length should be 10' })
        } else {
            this.setState({ contactMobileError: '' })

        }
    }

    handleEmployeeCodeValidation() {
        if (!validator.isLength(this.state.employeeCode, { min: 0 })) {
            this.setState({ employeeCodeError: 'Required' });
        } else {
            this.setState({ employeeCodeError: '' });
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

        if (!validator.isLength(this.state.dealerName, { min: 1 })) {
            errorflag = 1;
            this.setState({ dealerNameError: 'Required' });
        }

        if (!validator.isNumeric(this.state.dealerMobile)) {
            errorflag = 1;
            this.setState({ dealerMobileError: 'Mobile should be numeric' })
        }

        if (!validator.isLength(this.state.dealerMobile, { min: 10, max: 10 })) {
            errorflag = 1;
            this.setState({ dealerMobileError: 'Length should be 10' })
        }

        if (!validator.isLength(this.state.dealerAddress, { min: 1 })) {
            errorflag = 1;
            this.setState({ dealerAddressError: 'Required' });
        }

        if (!validator.isLength(this.state.dealerPincode, { min: 1 })) {
            errorflag = 1;
            this.setState({ dealerPincodeError: 'Required' });
        }

        if (!validator.isNumeric(this.state.dealerPincode)) {
            errorflag = 1;
            this.setState({ dealerPincodeError: 'Pin should be numeric' })

        }

        if (!validator.isLength(this.state.contactName, { min: 1 })) {
            errorflag = 1;
            this.setState({ contactNameError: 'Required' });
        }

        if (!validator.isNumeric(this.state.contactMobile)) {
            errorflag = 1;
            this.setState({ contactMobileError: 'Mobile should be numeric' })

        }
        if (!validator.isLength(this.state.contactMobile, { min: 10, max: 10 })) {
            errorflag = 1;
            this.setState({ contactMobileError: 'Length should be 10' })
        }

        if (!validator.isEmail(this.state.email)) {
            errorflag = 1;
            this.setState({ emailError: 'Email format not correct' })
        }

        if (!validator.isLength(this.state.employeeCode, { min: 1 })) {
            errorflag = 1;
            this.setState({ employeeCodeError: 'Required' });
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
                                    hintText="employee code"
                                    floatingLabelText="Employee Code"
                                    fullWidth={true}
                                    onChange={this.handleEmployeeCodeChange}
                                    errorText={this.state.employeeCodeError}
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