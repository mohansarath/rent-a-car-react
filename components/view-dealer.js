import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import RefreshIndicator from 'material-ui/RefreshIndicator';

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
            data: []
        }
    }

    componentDidMount() {
        this.setState({ loading: true }, () => {
            this.getDealers();
        });
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
            <div>
                <Dealer data={this.state.data} />
            </div>
        )
    }
}

export default withRouter(viewDealer);