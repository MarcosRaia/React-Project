import React from 'react';
import { Form, Stack, Container, Button} from 'react-bootstrap';


function FormComponent() {
    return <>

        <Container className='p-8 h-100 mt-5'>
            <p className='text-center p-8'>Faça seu Login</p>
            <Stack gap={3}>
                <div className="m-auto">
                    <Form.Control className='w-100 mb-2' size="lg" type="text" placeholder="Login" />
                    <Form.Control size="lg" type="text" placeholder="Senha" />
                    <Form.Check className='d-flex justify-content-center mt-2 p-2' name='lembrar de mim' label="Lembrar de mim" type='radio' />
                    <Button className="w-100 mb-2" variant="danger">Login</Button>
                </div>

            </Stack>
        </Container>


    </>
}


export default FormComponent;