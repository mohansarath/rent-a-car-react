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
                                    title={item.Make_ID[0].name}
                                    subtitle={item.Model_ID[0].name}
                                    actAsExpander={true}
                                    showExpandableButton={true}
                                />
                                {/* <CardActions>
                                    <FlatButton label="Action1" />
                                    <FlatButton label="Action2" />
                                </CardActions> */}
                                <CardText expandable={true}>
                                    <Row className="margin-top">
                                        <Col sm="6" className="headings">price</Col>
                                        <Col sm="6">{item.features[0].price}</Col>
                                    </Row>
                                    <Row className="margin-top">
                                        <Col sm="6" className="headings">type</Col>
                                        <Col sm="6">{item.Type_ID[0].name}</Col>
                                    </Row>
                                    <Row className="margin-top">
                                        <Col sm="6" className="headings">year</Col>
                                        <Col sm="6">{item.year}</Col>
                                    </Row>
                                    <Row className="margin-top">
                                        <Col sm="6" className="headings">kilometers</Col>
                                        <Col sm="6">{item.kilometers}</Col>
                                    </Row>
                                    <Row className="margin-top">
                                        <Col sm="6" className="headings">mileage</Col>
                                        <Col sm="6">{item.mileage}</Col>
                                    </Row>
                                    <Row className="margin-top">
                                        <Col sm="6" className="headings">engine</Col>
                                        <Col sm="6">{item.features[0].engine}</Col>
                                    </Row>
                                    <Row className="margin-top">
                                        <Col sm="6" className="headings">exterior colour</Col>
                                        <Col sm="6">{item.features[0].exterior_Colour}</Col>
                                    </Row>
                                    <Row className="margin-top">
                                        <Col sm="6" className="headings">interior colour</Col>
                                        <Col sm="6">{item.features[0].interior_Colour}</Col>
                                    </Row>
                                    <Row className="margin-top">
                                        <Col sm="6" className="headings">fuel type</Col>
                                        <Col sm="6">{item.features[0].fuel_Type_ID[0].name}</Col>
                                    </Row>
                                    <Row className="margin-top">
                                        <Col sm="6" className="headings">seater</Col>
                                        <Col sm="6">{item.features[0].seater}</Col>
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