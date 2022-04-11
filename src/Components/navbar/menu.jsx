import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
function NavComponent() {
    return <>
        <Navbar className='p-0 m-0 justify-content-center' style={{ backgroundColor: 'white' }}>
            <Container className='p-0 m-0'>
                <Nav className="m-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#sobre">Sobre</Nav.Link>
                    <Nav.Link href="#mapas e polos">Mapas e Polos</Nav.Link>
                    <Nav.Link href="#ranking">Ranking</Nav.Link>
                    <Nav.Link href="#publicações e links">Publicações e Links</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

    </>
}

export default NavComponent;