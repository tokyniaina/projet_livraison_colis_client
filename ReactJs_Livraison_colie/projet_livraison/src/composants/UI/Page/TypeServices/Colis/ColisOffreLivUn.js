import React, { useState } from "react";
import Boutton from "../../../Boutton/Boutton";
import { useDispatch } from "react-redux";
import { modifprixLivreur } from "../../../../Redux";

function ColisOffreLivUn({ colis }) {
  const [prix, setPrix] = useState(colis.prix);
  const dispatch = useDispatch();
  return (
    <div className="border bordeer-primary m-3">
      <p>
        {colis.name} ({colis.type})
      </p>
      <div>
        <p>Fragiliter: {colis.niveau}</p>
        <p>
          Parcours : {colis.depart} -- {colis.arriver}
        </p>
        <p>Date : {colis.dateLivraison}</p>
        <div className="form-group">
          <label htmlFor="colisDemondePrix">Démonde de prix</label>
          <input
            type="text"
            className="form-control"
            id="colisDemondePrix"
            name="prix"
            placeholder={prix}
            value={prix}
            onChange={(ev) => setPrix(ev.target.value)}
          />
        </div>
      </div>
      <Boutton
        click={() => {
          dispatch(modifprixLivreur({id:colis.id, prix:prix}))
        }}
      >
        Envoyer
      </Boutton>
    </div>
  );
}

export default ColisOffreLivUn;
