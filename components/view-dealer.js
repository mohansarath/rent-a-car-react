import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import TextField from 'material-ui/TextField';

import { getCall } from '../services/api';
import Dealer from './dealer';

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
            searchError: '',
            search: ''
        }

        this.handleSearchChange = this.handleSearchChange.bind(this);
    }

    componentDidMount() {
        this.setState({ loading: true }, () => {
            this.getDealers();
        });
    }

    handleSearchChange(event) {
        this.setState({ search: event.target.value },() => {
            console.log('search:::', this.state.search);
            this.getSearchDealer();
        });
        
    }

    getSearchDealer() {
        getCall(`dealer/${this.state.search}`)
            .then((response) => {
                console.log('response ::::::::', response.data.dealer);
                this.setState({ data: response.data.dealer, loading: false });
            })
            .catch((error) => {

                console.log('error:::::::', error);
                this.setState({ loading: false });
            })
    }

    getDealers() {
        getCall('dealer')
            .then((response) => {
                console.log('response ::::::::', response.data.dealer);
                this.setState({ data: response.data.dealer, loading: false });
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
            <div class="container margin-left">
                <TextField
                    hintText="search"
                    floatingLabelText="search"
                    // fullWidth={true}
                    onChange={this.handleSearchChange}
                    errorText={this.state.searchError}
                />
                <Dealer data={this.state.data} />
            </div>
        )
    }
}

export default withRouter(viewDealer);