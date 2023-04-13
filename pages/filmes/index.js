import React, { useEffect, useState } from 'react'
import Pagina from '../../components/Pagina'
import ApiFilmes from '../../services/ApiFilmes'
import 'bootstrap/dist/css/bootstrap.min.css';


const hooks = () => {


    const [Filmes, setFilmes] = useState([])

    useEffect(()=>{

        ApiFilmes.get('/movie').then(resultado=>{
           setFilmes(resultado.data.dados)
        })
    }, [])
    
    return (
    
    
    <Pagina titulo='Filmes'>
        <h1>Hooks</h1>
        {Filmes.map(item => (
          <p>{item.nome}</p>
        ))}
    
    
    </Pagina>
  )
}

export default hooks