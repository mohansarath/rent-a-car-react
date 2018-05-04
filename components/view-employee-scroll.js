import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { Col, Row } from 'reactstrap';

import { getCall } from '../services/api';
import Employee from './employee';

const style = {
    container: {
        position: 'relative',
    },
    refresh: {
        display: 'inline-block',
        position: 'relative',
    }
};

// var page=0;
var main = '';
class viewDealer extends Component {


    constructor() {
        super();
        this.state = {
            loading: false,
            data: [],
            dealer_ID: '',
            dealers: [],
            page: 0,
            requestSent: false,
            totalPage:0
        }
        this.handledealerIDChange = this.handledealerIDChange.bind(this);
        this.reload = this.reload.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleOnScroll);
        this.setState({ loading: true, dealers: [], data: [], requestSent: true }, () => {
             this.getEmployee();
        });
        main = this;
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleOnScroll);
    }

    handleOnScroll() {
        var scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        var scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
        var clientHeight = document.documentElement.clientHeight || window.innerHeight;
        var scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;

        if (scrolledToBottom) {
            console.log('scroll bottom 1111111');
            main.setState({ requestSent: true }, () => {
              
                console.log('scroll bottom');
                main.getEmployee();
            });

            // page=page+1;
            // console.log('page:::',page);
            // console.log('in get call employee');
            // getCall(`employee/${page}`)
            //     .then((response) => {
            //         console.log('response ::::::::', response.data);
            //         main.setState({ data: response.data.employee, loading: false });
            //     })
            //     .catch((error) => {

            //         console.log('error:::::::', error);
            //         main.setState({ loading: false });
            //     })
        }
    }

    reload() {
        window.location.reload();
    }

    handledealerIDChange(event, index, value) {
        console.log('dealer_ID:::::::', value);
        this.setState({ dealer_ID: value, loading: true, data: [] }, () => {
            this.viewEmployeeDealer();
        })

    };


    viewEmployeeDealer() {
        getCall(`employee/${this.state.dealer_ID}`)
            .then((response) => {
                console.log('response ::::::::', response.data);
                this.setState({ data: response.data, loading: false });
            })
            .catch((error) => {

                console.log('error:::::::', error);
                this.setState({ loading: false });
            })
    }


    getEmployee() {

        console.log('in get call employee');
        this.setState({ page: this.state.page +1}, () => {
            getCall(`employee/${this.state.page}`)
                .then((response) => {
                    console.log('page no:::::::::', this.state.page);
                    console.log('response ::::::::', response.data);
                    var newdata = this.state.data.concat(response.data.employee)

                    this.setState({ data: newdata, requestSent: false, loading: false, totalPage: Math.floor(response.data.count / 10 + 1) });
                    console.log('totalpage:::', this.state.totalPage);
                    if (this.state.totalPage == this.state.page){
                        window.removeEventListener('scroll', this.handleOnScroll);
                    }
                })
                .catch((error) => {

                    console.log('error:::::::', error);
                    this.setState({ requestSent: false, loading: false });
                })
        });
      

        // getCall('dealer')
        //     .then((response) => {
        //         console.log('dealer response ::::::::', response.data.dealer);
        //         // localStorage.setItem('Settings_ID', response.data[0]._id);
        //         this.setState({ dealers: response.data.dealer, loading: false });
        //     })
        //     .catch((error) => {

        //         console.log('error:::::::', error);
        //         this.setState({ loading: false });
        //     })
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
                {/* <h6>Employee</h6> */}
                
                <Employee data={this.state.data} />
                {console.log('requestsent:::::',this.state.requestSent)}
                {(() => {
                    if (this.state.requestSent) {
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
                        );
                    } else {
                        return (
                            <div></div>
                        );
                    }
                })()}
            </div>
        )
    }
}

export default withRouter(viewDealer);