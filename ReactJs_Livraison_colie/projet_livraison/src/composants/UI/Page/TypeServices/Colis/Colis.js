import React from "react";
import NavBarColis from "../../../NavBar/NavBarColis";
import "../../stylePage.css";
import { Outlet } from "react-router-dom";

export default function Colis() {
  return (
    <>
      <div className="contenu">
        <div className="row">
          <div className="col-3">
            <NavBarColis />
          </div>
          <div className="col">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
