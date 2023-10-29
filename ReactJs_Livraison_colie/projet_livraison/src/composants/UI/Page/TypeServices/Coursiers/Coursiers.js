import React from "react";
import "../../stylePage.css";
import NavBarVerticalG from "../../../NavBar/NavBarVerticalG";
import { LinkContainer } from "react-router-bootstrap";
import { Nav } from "react-bootstrap";
import { Outlet } from "react-router-dom";

export default function Coursiers() {
  const listLien = (
    <ul className="nav nav-pills flex-column mb-auto">
      <li>
        <LinkContainer to="/services/coursiers/Aceuil">
          <Nav.Link className="nav-link text-white">Acceuil</Nav.Link>
        </LinkContainer>
      </li>
      <li>
        <LinkContainer to="/services/coursiers/Liste_coursier">
          <Nav.Link className="nav-link text-white">
            Liste de coursier(client)
          </Nav.Link>
        </LinkContainer>
      </li>
      <li>
        <LinkContainer to="/services/coursiers/Liste_demonde_course">
          <Nav.Link className="nav-link text-white">
            liste de démonde (client)
          </Nav.Link>
        </LinkContainer>
      </li>
      <li>
        <LinkContainer to="/services/coursiers/Offre">
          <Nav.Link className="nav-link text-white">Offre </Nav.Link>
        </LinkContainer>
      </li>
      <li>
        <LinkContainer to="/services/coursiers/Prix_coursier">
          <Nav.Link className="nav-link text-white">Envoye de prix</Nav.Link>
        </LinkContainer>
      </li>
      <li>
        <LinkContainer to="/services/coursiers/CourseAFaireCoursier">
          <Nav.Link className="nav-link text-white">Course a faire</Nav.Link>
        </LinkContainer>
      </li>
      <li>
        <LinkContainer to="/services/coursiers/Fait">
          <Nav.Link className="nav-link text-white">Fait</Nav.Link>
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
