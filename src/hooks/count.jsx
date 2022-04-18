import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
function Teste() {

    const [fName, setfName] = useState('');
    const [lName, setlName] = useState('');
    const submitValue = (e) => {
        e.preventDefault();
        const details = {
            'Primeiro Nome' : fName,
            'Segundo Nome' : lName
        }
        console.log(details);
    }


    return <>
        <form onSubmit={submitValue}>
        <div className="container d-flex flex-column">
            <div className="row text-center">
                <p>Olá {fName} {lName} </p>
            </div>
            <div className="row justify-content-center p-1 ">
            <Form.Control style={{ width: '25%'}} type="name" placeholder='Primeiro Nome' onChange={e => setfName(e.target.value)}/>
            </div>
            <div className="row justify-content-center p-1 ">
            <Form.Control style={{ width: '25%'}} type="name" placeholder='Segundo Nome' onChange={e => setlName(e.target.value)}/>
            </div>
            <div className="row justify-content-center">
            <Button type='submit' style={{ width: '25%', backgroundColor: '#5e3929' }} className="mb-2">Submit</Button>
            </div>
        </div>
        </form>
        <section className="d-flex text-center">
            <div className="container" style={{backgroundColor:"white"}}>
            <p>Cadastro</p>            
            </div>
        </section>
        
    </>
}

export default Teste;  