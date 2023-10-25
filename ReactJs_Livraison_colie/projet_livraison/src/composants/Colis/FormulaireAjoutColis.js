import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Boutton from "../UI/Boutton/Boutton";
import { addColis } from "../Redux";

function FormulaireAjoutColis() {
  const dispatch = useDispatch();
  const [colis, setColis] = useState({
    name: "",
    type: "",
    niveau: "",
    depart: "",
    arriver: "",
    dateLivraison: "",
    prix: ""
  });

  const handleChange = (event) => {
    setColis({
      ...colis,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addColis(colis));
    setColis({
      name: "",
      type: "",
      niveau: "",
      depart: "",
      arriver: "",
      dateLivraison: "",
      prix: "",
    });
  };
  return (
    <div className="container">
      <form>
        <div className="form-group">
          <label htmlFor="colisAjout">Nom de colie</label>
          <input
            type="text"
            className="form-control"
            id="colisAjout"
            name="name"
            placeholder="Telephone Nokia"
            value={colis.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="colisType">Type de colie</label>
          <input
            type="text"
            className="form-control"
            id="colisType"
            name="type"
            placeholder="Electronique"
            value={colis.type}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="colisNiveau">Niveau de fragilité</label>
          <select
            className="form-control"
            id="colisNiveau"
            name="niveau"
            value={colis.niveau}
            onChange={handleChange}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="colisTrajet">Trajet (depart et arrivée)</label>
          <div className="row">
            <div className="col">
              <label htmlFor="colisTrajet1">depart</label>
              <input
                type="text"
                className="form-control"
                id="colisTrajet1"
                placeholder="Analakely box-15"
                name="depart"
                value={colis.depart}
                onChange={handleChange}
              />
            </div>
            <div className="col">
              <label htmlFor="colisTrajet2">Arrivée</label>
              <input
                type="text"
                className="form-control"
                id="colisTrajet2"
                placeholder="Andohalo Cité"
                name="arriver"
                value={colis.arriver}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="colisDate">date de livraison</label>
              <input
                type="date"
                className="form-control"
                id="colisDate"
                name="dateLivraison"
                value={colis.dateLivraison}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="colisDemondePrix">Démonde de prix</label>
              <input
                type="text"
                className="form-control"
                id="colisDemondePrix"
                name="prix"
                placeholder="5000 ar"
                value={colis.prix}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <Boutton click={handleSubmit}>Ajouter</Boutton>
      </form>
    </div>
  );
}

export default FormulaireAjoutColis;
