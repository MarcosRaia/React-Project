import React, {useEffect} from 'react';
import axios from 'axios';
import { Navbar, Nav, NavLink, Container } from 'react-bootstrap';
import {Link, Router} from "react-router-dom";
function NavComponent() {
    return <>
        <Navbar className='p-0 m-0 justify-content-center' style={{height:'70px' ,backgroundColor: '#ffe2ba' }}>
            <Container className='p-0 m-0'>
                <Nav className="m-auto">
                    <Link className='text-decoration-none p-2' style={{fontWeight:'900', color:'#db3026'}} to ="/">HOME</Link>
                    <Link className='text-decoration-none p-2' style={{fontWeight:'900', color:'#583b7e'}} to ="/sobre">TWITCH</Link>
                    <Link className='text-decoration-none p-2' style={{fontWeight:'900', color:'#e72313'}} to ="/polos">YOUTUBE</Link>
                    <Link className='text-decoration-none p-2' style={{fontWeight:'900', color:'#5ecde0'}} to ="/ranking">TWITTER</Link>
                    <Link className='text-decoration-none p-2' style={{fontWeight:'900', color:'#fb718a'}} to ="/publicacoes">INSTAGRAM</Link>
                </Nav>
            </Container>
        </Navbar>

    </>
}

export default NavComponent;