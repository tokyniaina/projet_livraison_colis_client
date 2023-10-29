import React from "react";
// import NavBarColis from "../../../NavBar/NavBarColis";
import "../../stylePage.css";
import { Outlet } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Nav } from "react-bootstrap";
import NavBarVerticalG from "../../../NavBar/NavBarVerticalG";

export default function Colis() {
  const listLien = (
    <ul className="nav nav-pills flex-column mb-auto">
      <li>
        <LinkContainer to="/services/colis/acceuil">
          <Nav.Link className="nav-link text-white">acceil</Nav.Link>
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
          <Nav.Link className="nav-link text-white">
            Envoye de prix(livreur)
          </Nav.Link>
        </LinkContainer>
      </li>
      <li>
        <LinkContainer to="/services/colis/Fait">
          <Nav.Link className="nav-link text-white">Livraison(Liveur)</Nav.Link>
        </LinkContainer>
      </li>
    </ul>
  );
  return (
    <>
      <div className="contenu">
        <div className="row">
            <NavBarVerticalG lien={listLien} />
          <div className="col" style={{ height: "100vh", overflow: "auto" }}>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
