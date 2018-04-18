import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Label, FormGroup, Button, Row, Col, Grid, Form } from 'reactstrap';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


class login extends Component {

    render(){
        return(
            <div className="container">
                <Row>
                    <Col xs="4"></Col>
                    <Col xs="4" className="border">
                        <div className="text-center">
                            <h3>Sign In</h3>
                            <Form >
                                <FormGroup>
                                    <TextField
                                        hintText="Email"
                                        floatingLabelText="email"
                                        fullWidth= {true}
                                        // onChange={this.handleEmailChange}
                                        // errorText={this.state.emailError}
                                    />
                    
                                </FormGroup>
                                <FormGroup>
                                    <TextField
                                        hintText="password"
                                        floatingLabelText="Password"
                                        type="password"
                                        fullWidth={true}
                                        // onChange={this.handlePasswordChange}
                                        // errorText={this.state.passwordError}

                                    />
                               </FormGroup>
                                <RaisedButton
                                    type="button"
                                    label="Sign In"
                                    primary={true}
                                    // onClick={this.signin}
                                />
                            </Form>
                        </div>
                    </Col>
                    <Col xs="4"></Col>
                </Row>
            </div>
        )
    }
}

export default withRouter(login);