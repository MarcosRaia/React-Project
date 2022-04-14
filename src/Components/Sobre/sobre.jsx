import React from 'react';
import { Col, Container, Row, Card, Button } from 'react-bootstrap';

function About() {
    return <>
        <h1 style={{ color: '#4A96D2' }} className='d-flex justify-content-center mt-5'>Twitch</h1>
        <div className='container'>
            <div className='row justify-content-center'>
                <Col xs={4} className='d-flex justify-content-center' >
                    <Card style={{ width: '18rem' }}>
                        <Card.Img className='img' variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={4} className='d-flex justify-content-center' >
                    <Card style={{ width: '18rem' }}>
                        <Card.Img className='img' variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={4} className='d-flex justify-content-center' >
                    <Card style={{ width: '18rem' }}>
                        <Card.Img className='img' variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </div>
            <div className='row justify-content-center pt-5'>
                <Col xs={4} className='d-flex justify-content-center' >
                    <Card style={{ width: '18rem' }}>
                        <Card.Img className='img' variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={4} className='d-flex justify-content-center' >
                    <Card style={{ width: '18rem' }}>
                        <Card.Img className='img' variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={4} className='d-flex justify-content-center' >
                    <Card style={{ width: '18rem' }}>
                        <Card.Img className='img' variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </div>
        </div>
    </>
}
export default About;