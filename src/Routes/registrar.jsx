import React from 'react';
import { Form, Container, Button, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';
function Register() {
    return <>
        <Container className='m-auto mt-5 d-flex flex-column align-items-center p-2"'>
            <h1 style={{ color: '#4A96D2' }} className='text-center p-8'>Cadastro</h1>
            <div className="">
                <Form.Control style={{ width: 'auto' }} className='mb-2 p-2' size="lg" type="text" placeholder="Digite Usuário" />
            </div>
            <div className="p-3">
                <Form.Control style={{ width: 'auto' }} className='p-2' size="lg" type="text" placeholder="Digite e-mail" />
            </div>
            <div className="p-2">
                <Form.Control style={{ width: 'auto' }} className='p-2' size="lg" type="text" placeholder="Digite sua senha" />
            </div>
            <div className="d-flex flex-column align-items-center">
                <Nav.Link style={{ color: '#64C2C8' }} className='' eventKey="link-1">Já possui cadastro? Faça o login!</Nav.Link>
                <Button style={{ width: '100%', backgroundColor: '#4A96D2' }} className="mb-2">Cadastrar</Button>
            </div>
            <div>
                <Link to='/'>Voltar</Link>
            </div>
        </Container>
    </>
}

export default Register;