import React, { Component } from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';

import { getCall } from '../services/api';

const style = {
    container: {
        position: 'relative',
    },
    refresh: {
        display: 'inline-block',
        position: 'relative',
    }
};


export default class extends Component {


    constructor() {
        super();
        this.state = {
            loading: false,
            data: []
        }
    }

    componentDidMount() {
        this.setState({ loading: true }, () => {
            this.getSettings();
        });
    }

    getSettings() {
        getCall('settings')
            .then((response) => {
                console.log('response ::::::::', response.data[0]._id);
                localStorage.setItem('Settings_ID', response.data[0]._id);
                this.setState({ data: response.data[0].commission, loading: false });
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
            
            <center>
                <br/>
                <div>
                    Current Commission : {this.state.data}
                </div>
            </center>
        )
    }
}