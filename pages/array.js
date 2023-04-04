import React from 'react'
import Pagina from '../components/Pagina'
import 'bootstrap/dist/css/bootstrap.min.css';

const array = () => {
  
  
  const nome = 'Orion'
  const idade = 25
  const telefone = '(61) 951515147'
  const endereco = 'abc'
  

  const pessoa = {
    nome: 'orion', 
    idade: 25, 
    telefone: '61 985646144', 
    endereco: 'abc'
  }
  
  
  // Boleano 
  // Inteiro 
  // String
  // Array 
  // Objeto
  // Char
  
  const carros = ['astra', 'opala', 'uno', 'ka', 'omega']

  return (
    
    <>
      <Pagina titulo="Array" >
        <ol>
          {carros.map(item => (
            <li>{item}</li>
          ))}
        </ol>

        


      </Pagina>
    </>
  )
}

export default array