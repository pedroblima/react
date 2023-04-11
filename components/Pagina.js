import React from 'react'
import Cabecalho from './Cabecalho'
import Rodape from './Rodape'
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Pagina = (props) => {

    console.log(props);


    return (
        <>
            <Cabecalho />

            <div className='bg-secondary text-white text-center py-2 mb-3'>

                <h1>{props.titulo}</h1>

            </div>
            
            <Container>
                {props.children}
            </Container>
            
            <Rodape />

        </>
    )
}

export default Pagina