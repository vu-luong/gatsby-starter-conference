import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'gatsby';
import HoverDropdown from './hoverdropdown';
import './style.scss';

const Navibar = ({ sticky, title }) => (
  <div className="outter" style={{ marginBottom: 100 }}>
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      id="nav"
      className={sticky ? 'alt1' : ''}
    >
      <Container>
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            {title}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <HoverDropdown
                href=""
                title="Program"
                id="collasible-nav-dropdown-1"
              >
                <NavDropdown.Item as={Link} to="/keynote">
                  Keynotes
                </NavDropdown.Item>
                <NavDropdown.Item href="/accepted-papers">
                  Accepted papers
                </NavDropdown.Item>
              </HoverDropdown>
              <HoverDropdown
                href=""
                title="Conference"
                id="collasible-nav-dropdown-2"
              >
                <NavDropdown.Item as={Link} to="/call-papers">
                  Call for Papers
                </NavDropdown.Item>
                <NavDropdown.Item href="/committees">
                  Committees
                </NavDropdown.Item>
                <NavDropdown.Item href="/important-dates">
                  Important Dates
                </NavDropdown.Item>
              </HoverDropdown>
              <HoverDropdown
                title="Workshops, Demos, Doctoral Consortium"
                id="collasible-nav-dropdown-3"
              >
                <NavDropdown.Item href="/workshops">Workshops</NavDropdown.Item>
                <NavDropdown.Item href="/call-demos">
                  Call for Demos
                </NavDropdown.Item>
                <NavDropdown.Item href="/doctoral-consortium">
                  Doctoral Consortium
                </NavDropdown.Item>
              </HoverDropdown>
              <Nav.Link as={Link} to="/registration">
                Registration
              </Nav.Link>
              <Nav.Link href="/venue">Venue</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Container>
    </Navbar>
  </div>
);

export default Navibar;
