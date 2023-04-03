import React from 'react'
import Cabecalho from './Cabecalho'
import Rodape from './Rodape'

const Pagina = () => {
    return (
        <>
            <Cabecalho />

            <div className='bg-secondary text-white text-center py-2 mb-3'>

                <h1>Página Inicial</h1>

            </div>
            <Rodape />

        </>
    )
}

export default Pagina