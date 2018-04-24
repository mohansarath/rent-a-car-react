import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Col, Row } from 'reactstrap';

class Dealer extends Component {

    render() {
        return (
            <div className="container">
                <Row>
                    {this.props.data.map((item) =>
                        <Col sm="4" md="4">
                            <Card className="margin-top">
                                <CardHeader
                                    title={item.dealer_Name}
                                    subtitle={item.address}
                                    actAsExpander={true}
                                    showExpandableButton={true}
                                />
                                {/* <CardActions>
                                    <FlatButton label="Action1" />
                                    <FlatButton label="Action2" />
                                </CardActions> */}
                                <CardText expandable={true}>
                                    <Row className="margin-top">
                                        <Col sm="4" className="headings">contact mobile</Col>
                                        <Col sm="5">{item.contact_Mobile}</Col>
                                    </Row>
                                    <Row className="margin-top">
                                        <Col sm="4" className="headings">address</Col>
                                        <Col sm="5">{item.address}</Col>
                                    </Row>
                                    <Row className="margin-top">
                                        <Col sm="4" className="headings">pincode</Col>
                                        <Col sm="5">{item.pincode}</Col>
                                    </Row>
                                    <Row className="margin-top">
                                        <Col sm="4" className="headings">contact person</Col>
                                        <Col sm="5">{item.contact_Name}</Col>
                                    </Row>
                                    <Row className="margin-top">
                                        <Col sm="4" className="headings">mobile</Col>
                                        <Col sm="5">{item.contact_Mobile}</Col>
                                    </Row>
                                    <Row className="margin-top">
                                        <Col sm="4" className="headings">email</Col>
                                        <Col sm="7">{item.email}</Col>
                                    </Row>
                        
                              

                            </CardText>
                            </Card>
                        </Col>
                    )}
                </Row>
            </div>
        )
    }
}

export default withRouter(Dealer);