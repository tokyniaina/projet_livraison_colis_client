import React from "react";
import { useSelector } from "react-redux";
import ColisConfirmationUn from "./ColisConfirmationUn";
import Boutton from "../../../Boutton/Boutton";

function ColisDemondePrix() {
  const colisList = useSelector((state) => state.colis.objet);
  return (
    <div>
      {colisList.map((colis) => {
        return <ColisConfirmationUn key={colis.id} colis={colis} />;
      })}
    </div>
  );
}

export default ColisDemondePrix;
