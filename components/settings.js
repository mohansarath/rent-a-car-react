import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Label, FormGroup, Button, Row, Col, Grid, Form } from 'reactstrap';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import validator from 'validator';

import { postCall } from '../services/api';
import { putCall } from '../services/api';

class settings extends Component {

    constructor(props) {
        super(props);
        this.state = {
            commission: '',
            commissionError: ''
        };

        this.handleCommissionChange = this.handleCommissionChange.bind(this);
        this.add = this.add.bind(this);
    }

    handleCommissionChange(event) {
        this.setState({ commission: event.target.value });
        this.handleCommissionValidation();
    }

    handleCommissionValidation() {
        if (!validator.isLength(this.state.commission, { min: 0 })) {
            this.setState({ commissionError: 'Required' });
        }else if (!validator.isNumeric(this.state.commission)) {
            this.setState({ commissionError: 'Commission should be numeric' })
        }
        else {
            this.setState({ commissionError: '' });
        }

    }

    clearError() {
        this.setState({
            commissionError: ''
        })
    }

    handleValidation() {
        var errorflag = 0;
        if (!validator.isLength(this.state.commission, { min: 1 })) {
            errorflag = 1;
            this.setState({ commissionError: 'Required' });
        } else if (!validator.isNumeric(this.state.commission)) {
            this.setState({ commissionError: 'Commission should be numeric' })
        }
        if (errorflag == 1)
            return false;
        else if (errorflag == 0)
            return true;
    }

    add() {
        this.clearError();
        if (this.handleValidation()) {
            const settings_id = localStorage.getItem('Settings_ID');
            putCall(`settings/${settings_id}`, this.state)
                .then((response) => {
                    console.log('response ::::::::', response.data);
                    window.location.reload()
                })
                .catch((error) => {

                    console.log('error:::::::', error);
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
                            <h3>Commission</h3>
                            <Form >
                                <FormGroup>
                                    <TextField
                                        hintText="commission"
                                        floatingLabelText="commission"
                                        fullWidth={true}
                                        onChange={this.handleCommissionChange}
                                        errorText={this.state.commissionError}
                                    />

                                </FormGroup>
                                <RaisedButton
                                    type="button"
                                    label="Add"
                                    primary={true}
                                    onClick={this.add}
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

export default withRouter(settings);