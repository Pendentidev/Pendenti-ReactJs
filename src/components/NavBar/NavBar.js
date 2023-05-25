import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <Navbar sticky="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to ="/" >Kirei Manga</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to ="/">Home</Nav.Link>
            <Nav.Link as={Link} to ="/category/mangas">Mangas</Nav.Link>
            <Nav.Link as={Link} to ="/category/figuras">Figuras</Nav.Link>
            <Nav.Link as={Link} to ="/cart"><CartWidget /></Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </>
  );
}

export default NavBar;

