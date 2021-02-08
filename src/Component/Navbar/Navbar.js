import {Navbar,Nav,NavDropdown} from 'react-bootstrap';

function App() {
    return (
<div className="navbarpos">
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link className="orange" href="#features">Home</Nav.Link>
      <Nav.Link href="#pricing">About</Nav.Link>
      <Nav.Link href="#features">Work</Nav.Link>
      <Nav.Link href="#pricing">Blog</Nav.Link>
      
    </Nav>
    <Nav>
      
      <Nav.Link eventKey={2} href="#memes">
        Contact
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>
 );
}
export default App;