import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./styles/styleNavService.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./styles/sidebars";
import "./styles/sidebars.css";
import "./styles/styleNavService.css";

export default function NavBarServices() {
  const colisList = useSelector(state => state.colis)
  return (
    <>
    <div
        className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
        // style={{ width: " 280px" }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          {/* <svg className="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg> */}
          <span className="fs-4">Sidebar</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li>
            <LinkContainer to="/services/colis/acceuil" >
            <Nav.Link className="nav-link text-white active">acceil</Nav.Link>
          </LinkContainer>
          </li>
          <li>
            <LinkContainer to="/services/colis/ajout">
            <Nav.Link className="nav-link text-white"> Ajout+ </Nav.Link>
          </LinkContainer>
            </li>
            <li>
            <LinkContainer to="/services/colis/Demonde_prix">
            <Nav.Link className="nav-link text-white"> Démonde de prix </Nav.Link>
          </LinkContainer>
            </li>
            <li>
            <LinkContainer to="/services/colis/confirmation">
            <Nav.Link className="nav-link text-white">Confirmation</Nav.Link>
          </LinkContainer>
            </li>
            <li>
            <LinkContainer to="/services/colis/Livrer">
            <Nav.Link className="nav-link text-white">Livré</Nav.Link>
          </LinkContainer>
            </li>
            <li>
            <LinkContainer to="/services/colis/Fait">
            <Nav.Link className="nav-link text-white">Fait</Nav.Link>
          </LinkContainer>
            </li>
            <li>
            <LinkContainer to="/services/colis/OffreLiv">
            <Nav.Link className="nav-link text-white">Offre(Livreur)</Nav.Link>
          </LinkContainer>
            </li>
          <li>
            <LinkContainer to="/services/colis/Prix">
            <Nav.Link className="nav-link text-white">Envoye de prix(livreur)</Nav.Link>
          </LinkContainer>
          </li>
          <li>
            <LinkContainer to="/services/colis/Fait">
            <Nav.Link className="nav-link text-white">Livraison(Liveur)</Nav.Link>
          </LinkContainer>
          </li>
          
          
        </ul>
        <hr />
        <div className="dropdown">
          <a
            href="#"
            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            id="dropdownUser1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <strong>mdo</strong>
          </a>
          <ul
            className="dropdown-menu dropdown-menu-dark text-small shadow"
            aria-labelledby="dropdownUser1"
          >
            <li>
              <a className="dropdown-item" href="#">
                New project...
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* <Nav
        defaultActiveKey="/services/colis/acceuil"
        variant="underline"
        className=" flex-column my-1"
      >
          <LinkContainer to="/services/colis/acceuil" >
            <Nav.Link >acceil</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/services/colis/ajout">
            <Nav.Link> Ajout+ </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/services/colis/Demonde_prix">
            <Nav.Link> Démonde de prix </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/services/colis/confirmation">
            <Nav.Link>Confirmation</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/services/colis/Livrer">
            <Nav.Link>Livré</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/services/colis/Fait">
            <Nav.Link>Fait</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/services/colis/OffreLiv">
            <Nav.Link>Offre(Livreur)</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/services/colis/Prix">
            <Nav.Link>Envoye de prix(livreur)</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/services/colis/Fait">
            <Nav.Link>Livraison(Liveur)</Nav.Link>
          </LinkContainer>
        
      </Nav> */}
    </>
  );
}
