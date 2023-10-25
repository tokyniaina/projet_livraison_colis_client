import React, { Children } from "react";
import slide3 from "../../../../assets/img/03.png";
import Boutton from "../../Boutton/Boutton";
import { LinkContainer } from "react-router-bootstrap";
import { Nav } from "react-bootstrap";
import { Outlet } from "react-router-dom";

export default function ServicesType({ children, titre, Images, lien }) {
  return (
    <>
      <div
        className="col-lg-4 col-md-4 col-sm-12 mb-2"
        style={{ width: "18rem" }}
      >
        <img
          src={Images}
          style={{
            width: "100%",
            height: "200px",
          }}
          className=""
          alt="..."
        />
        <div className="card-body border mt-1 p-3">
          <h5 className="card-title">{titre}</h5>
          <p className="card-text">{children}</p>
          <LinkContainer to={lien}>
            <Nav.Link>
              <Boutton>Voir ...</Boutton>
            </Nav.Link>
          </LinkContainer>
        </div>
      </div>
    </>
  );
}
