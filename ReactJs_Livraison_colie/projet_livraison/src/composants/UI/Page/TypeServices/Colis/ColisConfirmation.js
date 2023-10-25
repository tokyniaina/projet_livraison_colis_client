import React from 'react'
import { useSelector } from 'react-redux'
import ColisConfirmationUn from './ColisConfirmationUn'

function ColisConfirmation() {
  const colisList = useSelector(state => state.colis.objet)
  const colisConfirme = colisList.filter(colis => colis.confirm === true)
  return (
    <div>
      {colisConfirme.map(colis =>  {
        return <ColisConfirmationUn
          key={colis.id}
          colis = {colis}
        />
      })}

    </div>
  )
}

export default ColisConfirmation