import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { Col, Row } from 'reactstrap';

import { getCall } from '../services/api';
import Car from './cars';

const style = {
    container: {
        position: 'relative',
    },
    refresh: {
        display: 'inline-block',
        position: 'relative',
    }
};

class viewDealer extends Component {



    constructor() {
        super();
        this.state = {
            loading: false,
            data: [],
            dealer_ID: '',
            dealers: []
        }
        this.handledealerIDChange = this.handledealerIDChange.bind(this);
        this.reload = this.reload.bind(this);
    }

    componentDidMount() {
        console.log('didmount');
        this.setState({ loading: true, dealers: [], data: [] }, () => {
            this.getCars();
        });
    }

    reload() {
        window.location.reload();
    }
    handledealerIDChange(event, index, value) {
        console.log('dealer_ID:::::::', value);
        this.setState({ dealer_ID: value, loading: true, data: [] }, () => {
            this.viewCarsDealer();
        })

    };


    viewCarsDealer() {
        console.log('in view cars', this.state.dealer_ID);
        console.log(`${this.props.url}/${this.state.dealer_ID}`);
        getCall(`${this.props.url}/${this.state.dealer_ID}`)
            .then((response) => {
                console.log('cars response ::::::::', response.data);
                this.setState({ data: response.data, loading: false });
                console.log('state data:::::::', this.state.data);
            })
            .catch((error) => {

                console.log('error:::::::', error);
                this.setState({ loading: false });
            })
    }


    getCars() {
        getCall(this.props.url)
            .then((response) => {
                console.log('response ::::::::', response.data);
                this.setState({ data: response.data, loading: false });
                console.log('state data:::::::', this.state.data);
            })
            .catch((error) => {

                console.log('error:::::::', error);
                this.setState({ loading: false });
            })

        getCall('dealer')
            .then((response) => {
                console.log('dealer response ::::::::', response.data.dealer);
                // localStorage.setItem('Settings_ID', response.data[0]._id);
                this.setState({ dealers: response.data.dealer, loading: false });
            })
            .catch((error) => {

                console.log('error:::::::', error);
                this.setState({ loading: false });
            })
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
                    <Col md="3">
                        <SelectField
                            floatingLabelText="Select Dealer"
                            value={this.state.dealer_ID}
                            onChange={this.handledealerIDChange}
                            // errorText={this.state.dealer_IDError}
                            maxHeight={400}
                        // fullWidth={true}
                        >
                            {this.state.dealers.map((item) =>
                                <MenuItem value={item._id} primaryText={item.contact_Name} />
                            )}

                        </SelectField>
                    </Col>
                    <Col md="2">
                        <RaisedButton
                            type="button"
                            label="View All"
                            secondary={true}
                            onClick={this.reload}
                            className="margin-top"
                        />
                    </Col>
                    <Col md="7"></Col>
                </Row>
                <h6>Cars</h6>
                <Car data={this.state.data} />
            </div>
        )
    }
}

export default withRouter(viewDealer);