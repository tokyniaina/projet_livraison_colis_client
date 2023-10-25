import React from "react";
import { useSelector } from "react-redux";
import Boutton from "../../../Boutton/Boutton";
import ColisOffreLivUn from "./ColisOffreLivUn";

function ColisOffreLiv() {
  const colisList = useSelector((state) => state.colis.objet);
  return (
    <>
      {colisList.filter(colis => colis.PrixLivreur !== true).map((colis) => {
        return (
          <div key={colis.id}>
            <ColisOffreLivUn colis={colis} />
            
          </div>
        );
      })}
    </>
  );
}

export default ColisOffreLiv;
