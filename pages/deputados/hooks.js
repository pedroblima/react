import React, { useEffect, useState } from 'react'
import Pagina from '../../components/Pagina'
import { Button } from 'react-bootstrap'
import apiDeputados from '../../services/apiDeputados'

const hooks = () => {


    const [deputados, setDeputados] = useState([])

    useEffect(()=>{

        apiDeputados.get('/deputados').then(resultado=>{
           setDeputados(resultado.data.dados)
        })
    }, [])
    
    return (
    
    
    <Pagina titulo='Deputados'>
        <h1>Hooks</h1>
        {deputados.map(item => (
          <p>{item.nome}</p>
        ))}
    
    
    </Pagina>
  )
}

export default hooks