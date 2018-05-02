import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { Col, Row } from 'reactstrap';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
// import MobileTearSheet from '../../../MobileTearSheet';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';


const data = [
    { name: 'Jan', amount: 4000 ,amt: 2400 },
    { name: 'Feb', amount: 7523, amt: 2210 },
    { name: 'Mar', amount: 2000, amt: 2290 },
    { name: 'Apr', amount: 2780,  amt: 2000 },
    { name: 'May', amount: 1890,  amt: 2181 },
    { name: 'Jun', amount: 2390,  amt: 2500 },
    { name: 'Jul', amount: 6250,  amt: 2100 },
    { name: 'Aug', amount: 4000, amt: 2400 },
    { name: 'Sep', amount: 3000, amt: 2210 },
    { name: 'Oct', amount: 10025, amt: 2290 },
    { name: 'Nov', amount: 2780, amt: 2000 },
    { name: 'Dec', amount: 9956, amt: 2181 }
];

class dashboard extends Component {


    render() {
        return (
            <div className="container">
                <Row>
                    <Col md="4">
                        <Card className="green">
                            <CardTitle title="Dealers" subtitle="20" />
                        </Card>
                    </Col>
                    <Col md="4">
                        <Card className="violet">
                            <CardTitle title="Revenue" subtitle="1,250,000 $" />
                        </Card>
                    </Col>
                    <Col md="4">
                        <Card className="blue">
                            <CardTitle title="Cars" subtitle="1000" />
                        </Card>
                    </Col>
                </Row>
                <Row>
                  
                    <Col md="8">
                        <br />
                        <BarChart width={600} height={300} data={data}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="amount" fill="#82ca9d" />
                        </BarChart>
                    </Col>
                    <Col md="4">
                        <br />
                        {/* <MobileTearSheet> */}
                        <Card>
                            <List>
                                <Subheader>Top Dealers of the month</Subheader>
                                <ListItem
                                    primaryText="Audi"
                                    insetChildren={true}
                                />
                                <ListItem
                                    primaryText="Mercedez"
                                    insetChildren={true}
                                />
                                <ListItem
                                    primaryText="Maruti"
                                    insetChildren={true}
                                />
                                <ListItem
                                    primaryText="Toyota"
                                    insetChildren={true}
                                />
                                <ListItem
                                    primaryText="Ford"
                                    insetChildren={true}
                                />
                                {/* <ListItem
                                    primaryText="Jeep"
                                    insetChildren={true}
                                />
                                <ListItem
                                    primaryText="Honda"
                                    insetChildren={true}
                                />
                                <ListItem
                                    primaryText="Hyundai"
                                    insetChildren={true}
                                /> */}
                            </List>
                        {/* </MobileTearSheet> */}
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default withRouter(dashboard);