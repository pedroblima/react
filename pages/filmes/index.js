import React, { useEffect, useState } from 'react'
import Pagina from '../../components/Pagina'
import apiFilmes from '../../services/apiFilmes'

const index = () => {

    const [filmes, setFilmes] = useState([])

    useEffect(()=>{
        apiFilmes.get('/movie/popular').then(resultado=>{
            setFilmes(resultado.data.results)
        })
    }, [])

    return (
        <Pagina titulo="Filmes">
            <div>index</div>

            {filmes.map(item => (
                <div>
                    <img width='500' src={'https://image.tmdb.org/t/p/w500/' + item.poster_path} />
                    <p>{item.title}</p>
                </div>
            ))}

        </Pagina>
    )
}

export default index
