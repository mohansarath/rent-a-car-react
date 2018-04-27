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
import { postCall } from '../services/api';

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
            email: '',
            gender: '',
            dob: '',
            mobile: '',
            address: '',
            password: '',
            dealer_ID: '',
            roleError: '',
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
            loading: false,
            data: []
        };

        this.handleCodeChange = this.handleCodeChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleRoleChange = this.handleRoleChange.bind(this);
        this.handleGenderChange = this.handleGenderChange.bind(this);
        this.handledealerIDChange = this.handledealerIDChange.bind(this);
        this.handleDojChange = this.handleDojChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleDobChange = this.handleDobChange.bind(this);
        this.handleMobileChange = this.handleMobileChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.add = this.add.bind(this);
    }

    componentDidMount() {
        this.setState({ loading: true }, () => {
            this.getDealer();
        });
    }

    getDealer() {
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
        this.setState({ code: event.target.value });
        this.handleCodeValidation();
    }

    handleNameChange(event) {
        this.setState({ name: event.target.value });
        this.handleNameValidation();
    }

    handleDojChange(event, date) {
        this.setState({ doj: (date.getMonth() + 1) + "-" + date.getDate() + "-" + date.getFullYear() });
        // this.handleDojValidation();
    }

    handleEmailChange(event) {
        this.setState({ email: event.target.value });
        this.handleEmailValidation();
    }

    handleDobChange(event, date) {
        this.setState({ dob: (date.getMonth() + 1) + "-" + date.getDate() + "-" + date.getFullYear() });
        // this.handleDobValidation();
    }

    handleMobileChange(event) {
        this.setState({ mobile: event.target.value });
        this.handleMobileValidation();
    }

    handleAddressChange(event) {
        this.setState({ address: event.target.value });
        this.handleAddressValidation();
    }
    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
        this.handlePasswordValidation();
    }

    handleRoleChange(event, index, value) {
        this.setState({ role: value })
        this.handleRoleValidation();
    };

    handleGenderChange(event, index, value) {
        this.setState({ gender: value })
        this.handleGenderValidation();
    };

    handledealerIDChange(event, index, value) {
        this.setState({ dealer_ID: value })
        this.handledealerIDValidation();
    };

    handleCodeValidation() {
        if (!validator.isLength(this.state.code, { min: 0 })) {
            this.setState({ codeError: 'Required' });
        } else {
            this.setState({ codeError: '' });
        }
    }

    handleNameValidation() {
        if (!validator.isLength(this.state.name, { min: 0 })) {
            this.setState({ nameError: 'Required' });
        } else {
            this.setState({ nameError: '' });
        }
    }

    // handleDojValidation() {
    //     if (!validator.isLength(this.state.doj, { min: 0 })) {
    //         this.setState({ dojError: 'Required' });
    //     } else {
    //         this.setState({ dojError: '' });
    //     }
    // }

    handleEmailValidation() {
        if (!validator.isEmail(this.state.email)) {
            this.setState({ emailError: 'email format not correct' })
        }
        else {
            this.setState({ emailError: '' })
        }
    }

    // handleDobValidation() {
    //   if (validator.isAfter(this.state.dob)) {
    //         this.setState({ dobError: 'not valid date' })
    //     } else {
    //         this.setState({ dobError: '' });
    //     }

    // }

    handleMobileValidation() {
        if (!validator.isNumeric(this.state.mobile)) {
            this.setState({ mobileError: 'Mobile should be numeric' })

        }
        else if (!validator.isLength(this.state.mobile, { min: 9, max: 9 })) {
            this.setState({ mobileError: 'Length should be 10' })
        } else {
            this.setState({ mobileError: '' })

        }
    }

    handleAddressValidation() {
        if (!validator.isLength(this.state.address, { min: 0 })) {
            this.setState({ addressError: 'Required' });
        } else {
            this.setState({ addressError: '' });
        }
    }

    handlePasswordValidation() {
        if (!validator.isLength(this.state.password, { min: 5 })) {
            this.setState({ passwordError: 'Minimum characters is 6' });
        }
        else {
            this.setState({ passwordError: '' });
        }
    }

    handleRoleValidation() {
        if (!validator.isLength(this.state.role, { min: 0 })) {
            this.setState({ roleError: 'Required' });
        } else {
            this.setState({ roleError: '' });
        }
    }

    handleGenderValidation() {
        if (!validator.isLength(this.state.gender, { min: 0 })) {
            this.setState({ genderError: 'Required' });
        } else {
            this.setState({ genderError: '' });
        }

    }

    handledealerIDValidation() {
        if (!validator.isLength(this.state.dealer_ID, { min: 0 })) {
            this.setState({ dealer_IDError: 'Required' });
        } else {
            this.setState({ dealer_IDError: '' });
        }
    }

    handleValidation() {
        var errorflag = 0;

        if (!validator.isLength(this.state.code, { min: 1 })) {
            errorflag = 1;
            this.setState({ codeError: 'Required' });
        }

        if (!validator.isLength(this.state.name, { min: 1 })) {
            errorflag = 1;
            this.setState({ nameError: 'Required' });
        }

        // if (!validator.isLength(this.state.doj, { min: 1 })) {
        //     errorflag = 1;
        //     this.setState({ dojError: 'Required' });
        // }

        if (!validator.isEmail(this.state.email)) {
            errorflag = 1;
            this.setState({ emailError: 'email format not correct' })
        }

        // if (!validator.isLength(this.state.dob, { min: 1 })) {
        //     errorflag = 1;
        //     this.setState({ dojError: 'Required' });
        // }

        // if (validator.isAfter(this.state.dob)) {
        //     errorflag = 1;
        //     this.setState({ dobError: 'not valid date' })
        // }

    

        if (!validator.isNumeric(this.state.mobile)) {
            errorflag = 1;
            this.setState({ mobileError: 'Mobile should be numeric' })
        }

        if (!validator.isLength(this.state.mobile, { min: 10, max: 10 })) {
            errorflag = 1; this.setState({ mobileError: 'Length should be 10' })

        }

        if (!validator.isLength(this.state.address, { min: 1 })) {
            errorflag = 1;
            this.setState({ addressError: 'Required' });
        }

        if (!validator.isLength(this.state.password, { min: 6 })) {
            errorflag = 1;
            this.setState({ passwordError: 'Minimum characters is 6' });
        }

        if (!validator.isLength(this.state.role, { min: 1 })) {
            errorflag = 1;
            this.setState({ roleError: 'Required' });
        }

        if (!validator.isLength(this.state.gender, { min: 1 })) {
            errorflag = 1;
            this.setState({ genderError: 'Required' });
        }

        if (!validator.isLength(this.state.dealer_ID, { min: 1 })) {
            errorflag = 1;
            this.setState({ dealer_IDError: 'Required' });
        }

        if (!validator.isLength(this.state.code, { min: 1 })) {
            errorflag = 1;
            this.setState({ codeError: 'Required' });
        }


        if (errorflag == 1)
            return false;
        else if (errorflag == 0)
            return true;
    }

    clearError() {
        this.setState({
            roleError: '',
            dealer_IDError: '',
            passwordError: '',
            addressError: '',
            mobileError: '',
            dobError: '',
            genderError: '',
            emailError: '',
            dojError: '',
            nameError: '',
            codeError: ''
        })
    }

    add() {
        this.clearError();
        if (this.handleValidation()) {
            console.log('hi');
            postCall('employee', this.state)
                .then((response) => {
                    console.log('response::::::::::', response);
                    if (response.status === 200) {
                        alert(`Employee created: ${response.data.name}`);
                        this.props.history.push('/view-employee');
                    }
                })
                .catch((error) => {
                    console.log('we have error',error.response.data.code);
                    if (error.response.data.code == 11000){
                        this.setState({ emailError: 'email already exists' })
                    }
                    // console.log('error ::::::: ', response);
                })

        }
    }


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
                            errorText={this.state.dealer_IDError}
                            maxHeight={400}
                        // fullWidth={true}
                        >

                            {this.state.data.map((item) =>
                                <MenuItem value={item._id} primaryText={item.dealer_Name} />
                            )}

                        </SelectField>
                        <Row>
                            <Col md="4">
                                <TextField
                                    hintText="Employee code"
                                    floatingLabelText="Employee code"
                                    fullWidth={true}
                                    onChange={this.handleCodeChange}
                                    errorText={this.state.codeError}
                                />
                            </Col>
                            <Col md="4">
                                <TextField
                                    hintText="Name"
                                    floatingLabelText="Name"
                                    fullWidth={true}
                                    onChange={this.handleNameChange}
                                    errorText={this.state.nameError}
                                />
                            </Col>
                            <Col md="4">
                                <SelectField
                                    floatingLabelText="Role"
                                    value={this.state.role}
                                    onChange={this.handleRoleChange}
                                    fullWidth={true}
                                    errorText={this.state.roleError}
                                >
                                    <MenuItem value="Manager" primaryText="Manager" />
                                    <MenuItem value="Salesman"  primaryText="Salesman" />

                                </SelectField>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="4">
                                <DatePicker
                                    hintText="doj"
                                    floatingLabelText="Date of Joining"
                                    onChange={this.handleDojChange}
                                    fullWidth={true}
                                    openToYearSelection={true}
                                    // locale="en-US"
                                    errorText={this.state.dojError}
                                />
                            </Col>
                            <Col md="4">
                                <TextField
                                    hintText="email"
                                    floatingLabelText="Email"
                                    fullWidth={true}
                                    onChange={this.handleEmailChange}
                                    errorText={this.state.emailError}

                                />
                            </Col>
                            <Col md="4">
                                <TextField
                                    hintText="Password"
                                    floatingLabelText="Password"
                                    fullWidth={true}
                                    onChange={this.handlePasswordChange}
                                    errorText={this.state.passwordError}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col md="4">
                                <DatePicker
                                    hintText="dob"
                                    floatingLabelText="Date of Birth"
                                    onChange={this.handleDobChange}
                                    fullWidth={true}
                                    openToYearSelection={true}
                                    // locale="en-US"
                                    errorText={this.state.dobError}
                                />
                            </Col>
                            <Col md="4">
                                <SelectField
                                    floatingLabelText="Gender"
                                    value={this.state.gender}
                                    onChange={this.handleGenderChange}
                                    errorText={this.state.genderError}
                                    fullWidth={true}
                                >
                                    <MenuItem value="male" primaryText="Male" />
                                    <MenuItem value="female" primaryText="Female" />

                                </SelectField>
                            </Col>
                            <Col md="4">
                                <TextField
                                    hintText="Mobile"
                                    floatingLabelText="Mobile"
                                    fullWidth={true}
                                    onChange={this.handleMobileChange}
                                    errorText={this.state.mobileError}
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
                                    onChange={this.handleAddressChange}
                                    errorText={this.state.addressError}
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
                    <Col md="1"></Col>
                </Row>
            </div>
        )
    }
}


export default withRouter(addEmployee);