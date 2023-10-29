import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./styles/styleNavService.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./styles/sidebars";
import "./styles/sidebars.css";
import "./styles/styleNavService.css";

export default function NavBarVerticalG({ lien }) {
  const colisList = useSelector((state) => state.colis);
  return (
    <>
      <div className="col-md-3 col-lg-2 d-md-block bg-dark sidebar collapse navbar-nav sidebar-nav">
        <div
          className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
          style={{ height: "100vh" }}
        >
          {lien}
          <hr />
        </div>
      </div>
    </>
  );
}
