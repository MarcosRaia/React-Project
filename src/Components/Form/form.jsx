import React from 'react';
import { Form, Container, Button, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';

function FormComponent() {
    return <>
        <Container className='m-auto mt-5 d-flex flex-column align-items-center p-2"'>
            <h1 style={{ color: '#5e3929' }} className='text-center p-8'>Faça seu Login</h1>
            <div className="">
                <Form.Control style={{ width: 'auto' }} className='mb-2 p-2' size="lg" type="text" placeholder="Digite seu e-mail" />
            </div>
            <div className="p-3">
                <Form.Control style={{ width: 'auto' }} className='p-2' size="lg" type="text" placeholder="Digite sua senha" />
            </div>
            <div className="d-flex flex-column align-items-center">
                <Form.Check style={{ color: '#5e3929' }} className='' name="lembrar" label=" Lembrar de mim" type='radio' />
                <Link style={{ color: '#5e3929' }} className='' to ='/registrar' eventKey="link-1">Ainda não é cadastrado? Crie sua conta!</Link>
                <Button style={{ width: '100%', backgroundColor: '#5e3929' }} className="mb-2">Acessar</Button>
            </div>
        </Container>
    </>
}


export default FormComponent;