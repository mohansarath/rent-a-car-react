import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Col, Row } from 'reactstrap';

class Employee extends Component {

    render() {
        return (
            <div className="container">
                <Row>
              
                    {this.props.data.map((item) =>
                        <Col sm="4" md="4">
                            <Card className="margin-top">
                                <CardHeader
                                    title={item.name}
                                    subtitle={item.dealer_ID[0].dealer_Name}
                                    actAsExpander={true}
                                    showExpandableButton={true}
                                />
                                {/* <CardActions>
                                    <FlatButton label="Action1" />
                                    <FlatButton label="Action2" />
                                </CardActions> */}


                                <CardText expandable={true}>
                                    <Row className="margin-top">
                                        <Col sm="6" className="headings">Designation</Col>
                                        <Col sm="6">{item.role}</Col>
                                    </Row>
                                    <Row className="margin-top">
                                        <Col sm="6" className="headings">Employee Code</Col>
                                        <Col sm="6">{item.code}</Col>
                                    </Row>
                                    <Row className="margin-top">
                                        <Col sm="6" className="headings">address</Col>
                                        <Col sm="6">{item.address}</Col>
                                    </Row>
                                    <Row className="margin-top">
                                        <Col sm="6" className="headings">gender</Col>
                                        <Col sm="6">{item.gender}</Col>
                                    </Row>
                                    <Row className="margin-top">
                                        <Col sm="6" className="headings">mobile</Col>
                                        <Col sm="6">{item.mobile}</Col>
                                    </Row>
                                    <Row className="margin-top">
                                        <Col sm="6" className="headings">email</Col>
                                        <Col sm="6">{item.email}</Col>
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

export default withRouter(Employee);