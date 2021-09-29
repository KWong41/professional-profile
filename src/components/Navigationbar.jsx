import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import React from 'react';

class Navigationbar extends React.Component {

  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/LandingPage">Professional Profile</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/Projects">Projects</Nav.Link>
                <Nav.Link href="/Resume">Resume</Nav.Link>
                <Nav.Link href="/Blog">Blog</Nav.Link>
                <NavDropdown title="Contact me!" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="mailto:WongKevin41@gmail.com">E-mail</NavDropdown.Item>
                  <NavDropdown.Item href="https://www.linkedin.com/in/wongkevin41/">LinkedIn</NavDropdown.Item>
                  <NavDropdown.Item href="https://github.com/KWong41">Github</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Feedback</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
};

export default Navigationbar;