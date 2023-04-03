import 'bootstrap/dist/css/bootstrap.min.css';
import Pagina from "../components/Pagina";
import { Container } from 'react-bootstrap';

export default function Home() {
  return (
    <>

        <Pagina />
        <Container>
        <h1>Hello Word!</h1>
        <p>Qualquer texto</p>
        <p>Qualquer texto</p>
        <p>Qualquer texto</p>
        
      </Container>

    </>
  )
}
