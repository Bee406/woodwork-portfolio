import React, { Component } from 'react';
import { Card, CardBody, CardHeader, CardImg, CardText } from '../../components/Card';
import { Col, Container, Row } from '../../components/Grid';

class Home extends Component {
    state = {
        img: "",
        header: "",
        text: ""
    };
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Card>
                            <CardBody>
                                <CardHeader>
                                    John Doe
                            </CardHeader>
                                <CardText>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
                                ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived 
                                not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 
                                1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
                                Aldus PageMaker including versions of Lorem Ipsum.
                                <br/>
                                <br/>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
                                ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived 
                                not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-3">
                        <Card>
                            <CardImg>
                            https://a.1stdibscdn.com/archivesE/upload/1121189/f_104953211524037920120/10495321_master.jpg?width=768
                            </CardImg>
                            <CardBody>
                                <CardHeader>
                                    Resin Dining Table
                                </CardHeader>
                                <CardText>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col size="md-3">
                    <Card>
                            <CardImg>
                            https://a.1stdibscdn.com/radius-three-shelf-walnut-etagere-with-two-drawers-and-blackened-brass-details-for-sale/1121189/f_118895611538202388898/11889561_master.jpg?width=768                            
                            </CardImg>
                            <CardBody>
                                <CardHeader>
                                    Bookshelf
                                </CardHeader>
                                <CardText>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col size="md-3">
                    <Card>
                            <CardImg>
                            https://a.1stdibscdn.com/pierre-guariche-side-table-france-1950-for-sale/1121189/f_145857711556955329454/14585771_master.jpg?width=768                            
                            </CardImg>
                            <CardBody>
                                <CardHeader>
                                    Side Table
                                </CardHeader>
                                <CardText>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col size="md-3">
                    <Card>
                            <CardImg>
                            https://a.1stdibscdn.com/archivesE/upload/1121189/f_72880531494914752796/7288053_l.jpg                            
                            </CardImg>
                            <CardBody>
                                <CardHeader>
                                    Storage Bench
                                </CardHeader>
                                <CardText>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-3">
                    <Card>
                            <CardImg>
                            https://a.1stdibscdn.com/archivesE/upload/9247/27_15/2591972/2591972_l.jpeg                            
                            </CardImg>
                            <CardBody>
                                <CardHeader>
                                    Cutting Board
                                </CardHeader>
                                <CardText>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col size="md-3">
                    <Card>
                            <CardImg>
                            https://a.1stdibscdn.com/archivesE/upload/1121189/f_98482931518528425921/9848293_master.jpg?width=768                            
                            </CardImg>
                            <CardBody>
                                <CardHeader>
                                    Frame
                                </CardHeader>
                                <CardText>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col size="md-3">
                    <Card>
                            <CardImg>
                            https://a.1stdibscdn.com/archivesE/upload/1121189/f_98482931518528425921/9848293_master.jpg?width=768                            
                            </CardImg>
                            <CardBody>
                                <CardHeader>
                                    Frame
                                </CardHeader>
                                <CardText>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col size="md-3">
                    <Card>
                            <CardImg>
                            https://a.1stdibscdn.com/archivesE/upload/1121189/f_98482931518528425921/9848293_master.jpg?width=768                            
                            </CardImg>
                            <CardBody>
                                <CardHeader>
                                    Frame
                                </CardHeader>
                                <CardText>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                {/* <Row>
                <Col size="md-3">
                        <Card>
                            <CardImg>
                                {this.state.img}
                            </CardImg>
                            <CardBody>
                                <CardHeader>
                                    {this.state.header}
                                </CardHeader>
                                <CardText>
                                    {this.state.text}
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row> */}
            </Container>
        );
    }
}

export default Home;