import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Link} from "react-router-dom";

function NavigationBar() {
  return (
    <Navbar variant="dark" bg="dark" expand="md" sticky="top">
      <Container>
        <Navbar.Brand as={Link}  to="/">Cloth-Rental </Navbar.Brand>
        {/* <Navbar.Brand as={Link}  to="/"><span style={{fontSize:'28px'}}>Cloth-Rental</span> <span style={{color:'yellow'}}>(User)</span> </Navbar.Brand> */}
       
        <Nav>
          {/* <Nav.Link as={Link}  to="/About">About</Nav.Link> */}
          <Nav.Link as={Link}  to="/">Sign In</Nav.Link>
          <Nav.Link as={Link}  to="/Signup">Signup</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
export default NavigationBar;

