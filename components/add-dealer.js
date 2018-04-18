import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Label, FormGroup, Button, Row, Col, Grid, Form } from 'reactstrap';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import validator from 'validator';

class addDealer extends Component {

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
                                // onChange={this.handleEmailChange}
                                // errorText={this.state.emailError}
                                />

                            </Col>
                            <Col md="6">
                                <TextField
                                    hintText="mobile"
                                    floatingLabelText="Mobile"
                                    fullWidth={true}
                                // onChange={this.handleEmailChange}
                                // errorText={this.state.emailError}
                                />
                            </Col>
                        </Row>

                        <Row>
                            <Col md="6">
                                <TextField
                                    hintText="address"
                                    floatingLabelText="Address"
                                    fullWidth={true}
                                // onChange={this.handleEmailChange}
                                // errorText={this.state.emailError}
                                />
                            </Col>
                            <Col md="6">
                                <TextField
                                    hintText="pincode"
                                    floatingLabelText="Pincode"
                                    fullWidth={true}
                                // onChange={this.handleEmailChange}
                                // errorText={this.state.emailError}
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
                                // onChange={this.handleEmailChange}
                                // errorText={this.state.emailError}
                                />
                            </Col>
                            <Col md="6">
                                <TextField
                                    hintText="mobile"
                                    floatingLabelText="Mobile"
                                    fullWidth={true}
                                // onChange={this.handleEmailChange}
                                // errorText={this.state.emailError}
                                />
                            </Col>
                        </Row>

                        <Row>
                            <Col md="6">
                                <TextField
                                    hintText="email"
                                    floatingLabelText="Email"
                                    fullWidth={true}
                                // onChange={this.handleEmailChange}
                                // errorText={this.state.emailError}
                                />
                            </Col>
                            <Col md="6">
                                <TextField
                                    hintText="employee code"
                                    floatingLabelText="Employee Code"
                                    fullWidth={true}
                                // onChange={this.handleEmailChange}
                                // errorText={this.state.emailError}
                                />
                            </Col>
                        </Row>
                        <center>
                            <RaisedButton
                                type="button"
                                label="Add"
                                primary={true}
                            // onClick={this.signin}
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