import React from 'react'
import ColisEnvoiPrixLivUn from './ColisEnvoiPrixLivUn'
import { useSelector } from 'react-redux'

function ColisEnvoiPrix() {
  const colisList = useSelector((state) => state.colis.objet);
  const colisLivreur = colisList.filter(colis => colis.PrixLivreur !== false)
  return (
    <>
      {colisLivreur.map((colis) => {
        return (
          <div key={colis.id}>
            <ColisEnvoiPrixLivUn colis={colis} />
            
          </div>
        );
      })}
    </>
  );
}

export default ColisEnvoiPrix