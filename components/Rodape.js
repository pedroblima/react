import React from 'react'


const style = {
  
    backgroundColor: 'red',
    textAlign: 'center',
    width: '100%',
  

    
}


/*const r = {
  backgroundColor: 'red',
  textAlign: 'center',
  width: '100%'
}
*/
const Rodape = () => {
  return (
    <div className="bg-secondary text-white text-center position-fixed bottom-0">
      <p style={style}>Rodape</p>
    </div>

  )
}

export default Rodape