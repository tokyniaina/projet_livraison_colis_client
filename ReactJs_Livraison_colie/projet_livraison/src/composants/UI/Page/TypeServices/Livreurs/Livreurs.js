import React from "react";
import "../../stylePage.css";
import NavBarVerticalG from "../../../NavBar/NavBarVerticalG";
import { Outlet } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function Livreurs() {
  const listLien = (
    <ul className="nav nav-pills flex-column mb-auto">
      <li>
        <LinkContainer to="/services/livreurs/Aceuil">
          <Nav.Link className="nav-link text-white">Acceuil</Nav.Link>
        </LinkContainer>
      </li>
      <li>
        <LinkContainer to="/services/livreurs/ListeLivreur">
          <Nav.Link className="nav-link text-white">
            Liste de Livreur(client)
          </Nav.Link>
        </LinkContainer>
      </li>
      <li>
        <LinkContainer to="/services/livreurs/ListeDemondeLivreur">
          <Nav.Link className="nav-link text-white">
            liste de démonde (client)
          </Nav.Link>
        </LinkContainer>
      </li>
      <li>
        <LinkContainer to="/services/livreurs/OffreLivreur">
          <Nav.Link className="nav-link text-white">Offre </Nav.Link>
        </LinkContainer>
      </li>
      <li>
        <LinkContainer to="/services/livreurs/EnvoyePrixLivreur">
          <Nav.Link className="nav-link text-white">Envoye de prix</Nav.Link>
        </LinkContainer>
      </li>
      <li>
        <LinkContainer to="/services/livreurs/ColisALivrer">
          <Nav.Link className="nav-link text-white">Colis à livrer</Nav.Link>
        </LinkContainer>
      </li>
      <li>
        <LinkContainer to="/services/livreurs/FaitLivreur">
          <Nav.Link className="nav-link text-white">Fait</Nav.Link>
        </LinkContainer>
      </li>
    </ul>)
  return <>
  <div className="contenu">
    <div className="row">
             
          <NavBarVerticalG lien={listLien} />
        
      <div className="col" style={{ height: "100vh", overflow: "auto" }}>
        <Outlet />
      </div>
    </div>
  </div>
</>
}
