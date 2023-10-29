import React from "react";
// import "../../../../style/dist/css/bootstrap.min.css"
// import "./Style/dashboard.css"
import "./Style/styleDasbord.css";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Outlet } from "react-router-dom";
import NavBarVerticalG from "../../NavBar/NavBarVerticalG";



function profil() {
  const listLien = (
    <ul className="nav nav-pills flex-column mb-auto">
      <li>
        <LinkContainer to="/services/coursiers/Aceuil">
          <Nav.Link className="nav-link text-white">Profil</Nav.Link>
        </LinkContainer>
      </li>
      <li>
        <LinkContainer to="/services/coursiers/Liste_coursier">
          <Nav.Link className="nav-link text-white">
            Production (Livreur)
          </Nav.Link>
        </LinkContainer>
      </li>
      <li>
        <LinkContainer to="/services/coursiers/Liste_demonde_course">
          <Nav.Link className="nav-link text-white">
            Raport
          </Nav.Link>
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

export default profil;
