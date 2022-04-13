import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function About(){
    return<>
        <h1 style={{color:'#4A96D2'}} className='d-flex justify-content-center mt-5'>Sobre</h1>
        <Container className='d-flex justify-content-center'style={{color:'#4A96D2'}}>
            <Row>
                <Col >1of1</Col>
            </Row>
            <Row>
                <Col>1of2</Col>
            </Row>
        </Container>
        
    </>
}

export default About;