import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import MainMod from "../../UI/Page/Acceuil/styles/css/main.module.css";
import BooThemMod from "../../UI/Page/Acceuil/styles/css/bootstrap-theme.module.css";

export default function NavBar() {
  const navBarstyle = `sticky-top ${MainMod.headroom} bg-body-tertiary ${BooThemMod.navbarFixedTop} ${BooThemMod.navbarInverse}`;
  return (
    <>
      <Navbar
        expand="lg"
        className={navBarstyle}
        bg="dark"
        data-bs-theme="dark"
      >
        <Container fluid className="container">
          <Navbar.Brand href="#">Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              // style={{ maxHeight: '100px' }}
              // navbarScroll
              variant="underline"
            >
              <LinkContainer to="/">
                <Nav.Link>Acceuil</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link>Contact</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/apropos">
                <Nav.Link>A propos</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/services">
                <Nav.Link>Services</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/news">
                <Nav.Link>News</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/profil">
                <Nav.Link>Profil</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>login</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
