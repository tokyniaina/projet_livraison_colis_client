import React from "react";
import ServicesType from "./ServicesType";
import colis from "../../../../assets/img/colis.jpg";
import livreur from "../../../../assets/img/livreur11.jpg";
import Coursier from "../../../../assets/img/coursier.jpg";
import { LinkContainer } from "react-router-bootstrap";
import '../stylePage.css'
import { Outlet } from "react-router-dom";

export default function PageServices() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row d-flex justify-content-around">
        
          <ServicesType titre='Coursier' Images={Coursier} lien='/services/coursiers'>
          ville pour une administration, un commerçant, un atelier et 
          pour un personne particulier
          </ServicesType>
          <ServicesType titre='Livreur' Images={livreur} lien='/services/livreurs'>
            Personne de confient et ponctuel
            Ils assures tous vos marchandise et de colis a livrée au 
            propriétée.
          </ServicesType>
          <ServicesType titre='Colis' Images={colis} lien='/services/Colis'>
            Les colies et leurs type peur se voire ici et peur voire les qualités de services
          </ServicesType>
          
      </div>
    </div>
  );
}
