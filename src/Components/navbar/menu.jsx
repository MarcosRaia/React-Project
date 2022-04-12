import React from 'react';
import { Navbar, Nav, NavLink, Container } from 'react-bootstrap';
import {Link, Router} from "react-router-dom";
function NavComponent() {
    return <>
        
        <Navbar className='p-0 m-0 justify-content-center' style={{ backgroundColor: 'white' }}>
            <Container className='p-0 m-0'>
                <Nav className="m-auto">
                    <Link className='text-decoration-none p-2' style={{color:'#002C43'}} to ="/">Home</Link>
                    <Link className='text-decoration-none p-2' style={{color:'#002C43'}} to ="/sobre">Sobre</Link>
                    <Link className='text-decoration-none p-2' style={{color:'#002C43'}} to ="/polos">Mapas e Polos</Link>
                    <Link className='text-decoration-none p-2' style={{color:'#002C43'}} to ="/ranking">Ranking</Link>
                    <Link className='text-decoration-none p-2' style={{color:'#002C43'}} to ="/publicacoes">Publicações e Links</Link>
                </Nav>
            </Container>
        </Navbar>

    </>
}

export default NavComponent;