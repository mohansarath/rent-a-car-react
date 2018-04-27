import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Label, FormGroup, Button, Row, Col, Grid, Form } from 'reactstrap';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import validator from 'validator';

import { postCall } from '../services/api';

class login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            emailError: '',
            passwordError: ''
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.signin = this.signin.bind(this);
    }

    handleEmailChange(event) {
        this.setState({ username: event.target.value });
        this.handleEmailValidation();
    }
    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
        this.handlePasswordValidation();
    }
    clearError() {
        this.setState({
            emailError: '',
            passwordError: ''
        })
    }


    handleEmailValidation() {
        if (!validator.isEmail(this.state.username)) {
            this.setState({ emailError: 'username format not correct' })
        }
        else {
            this.setState({ emailError: '' })
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


    handleValidation() {
        var errorflag = 0;
        if (!validator.isEmail(this.state.username)) {
            errorflag = 1;
            this.setState({ emailError: 'username format not correct' })
        }
        if (!validator.isLength(this.state.password, { min: 6 })) {
            errorflag = 1;
            this.setState({ passwordError: 'Minimum characters is 6' });
        }
        if (errorflag == 1)
            return false;
        else if (errorflag == 0)
            return true;
    }
    signin() {
        this.clearError();
        if (this.handleValidation()) {
            console.log('hi');
            console.log('state::::::::', this.state);
            postCall('login', this.state)
                .then((response) => {
                    console.log('response::::::::::', response.data);
                    if (response.status === 200) {
                        if (response.data.role === 'admin') {
                            this.autho = response.headers["x-auth"];
                            localStorage.setItem('Auth', this.autho);
                            this.useremail = response.data.username;
                            localStorage.setItem('Useremail', JSON.stringify(this.useremail))
                            this.props.history.push({
                                pathname: '/add-dealer'
                            })
                        }
                    }
                    if (response.data == 'username doesnot exist') {
                        console.log('in else if');
                        this.setState({ emailError: 'username doesnot exist' })
                    }
                     if (response.data == 'wrong password') {
                        this.setState({ passwordError: 'wrong password' });
                    }

                })
                .catch((error) => {
                    console.log('error ::::::: ', error);
                  
                })
        }

    }

    render() {
        return (
            <div className="container">
                <Row>
                    <Col md="4"></Col>
                    <Col md="4" className="border">
                        <div className="text-center">
                            <h3>Sign In</h3>
                            <Form >
                                <FormGroup>
                                    <TextField
                                        hintText="username"
                                        floatingLabelText="username"
                                        fullWidth={true}
                                        onChange={this.handleEmailChange}
                                        errorText={this.state.emailError}
                                    />

                                </FormGroup>
                                <FormGroup>
                                    <TextField
                                        hintText="password"
                                        floatingLabelText="Password"
                                        type="password"
                                        fullWidth={true}
                                        onChange={this.handlePasswordChange}
                                        errorText={this.state.passwordError}

                                    />
                                </FormGroup>
                                <RaisedButton
                                    type="button"
                                    label="Sign In"
                                    primary={true}
                                    onClick={this.signin}
                                />
                            </Form>
                        </div>
                    </Col>
                    <Col md="4"></Col>
                </Row>
            </div>
        )
    }
}

export default withRouter(login);