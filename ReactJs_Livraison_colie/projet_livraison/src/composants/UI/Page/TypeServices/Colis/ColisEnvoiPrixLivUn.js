import React from 'react'
import { useDispatch } from 'react-redux';
import Boutton from '../../../Boutton/Boutton';

function ColisEnvoiPrixLivUn({colis}) {
    const dispatch = useDispatch();
    return (
      <div className="border bordeer-primary m-3">
        <p>{colis.name} ({colis.type})</p>
        <div>
          <p>Fragiliter: {colis.niveau}</p>
          <p>Parcours : {colis.depart} -- {colis.arriver}</p>
          <p>Date : {colis.dateLivraison}</p>
          <p>Prix : {colis.prix} </p>
        </div>
        <Boutton>Accépter</Boutton>
      </div>
    );
}

export default ColisEnvoiPrixLivUn