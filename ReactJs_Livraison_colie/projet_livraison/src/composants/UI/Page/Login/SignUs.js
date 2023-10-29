import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "../stylePage.css";
//css booststrap
import "./style/styleLogin.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/signin.css";

export default function SignUs() {
  return (
    <>
      <div className="text-center">
        <main className="form-signin">
          <form>
            <h1 className="h3 mb-3 fw-normal">S'inscrire</h1>
            <p className="text-muted">Remplire des champs</p>
            <div className="row">
              <div className="col">
                <div className="form-floating">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="name"
                id="name"
              />
              <label htmlFor="floatingInput">Name</label>
            </div>
            
            <div className="form-floating">
              <input
                type="number"
                name="numtel"
                className="form-control"
                placeholder="numtel"
                id="numTel"
              />
              <label htmlFor="floatingInput">Numero Téléphone</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                name="mdp"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                name="mdp"
                className="form-control"
                id="PasswordConfirm"
                placeholder="PasswordConfirm"
              />
              <label htmlFor="floatingPassword">Password confirmation</label>
            </div>
              </div>
              <div className="col">
              <div className="form-floating">
              <input
                type="text"
                name="firstname"
                className="form-control"
                placeholder="firstname"
                id="firstname"
              />
              <label htmlFor="floatingInput">FirstName</label>
            </div>
              <div className="form-floating">
              <select
                id="transport"
                name="transport"
                className="form-control"
                // value={colis.niveau}
                // onChange={handleChange}
              >
                <option>Moto</option>
                <option>Voiture</option>
                <option>Forgon</option>
              </select>
              <label htmlFor="floatingPassword">Moyen de transport</label>
            </div>
            <div className="form-floating">
              <select
                id="typeCompte"
                name="typeCompte"
                className="form-control"
              >
                <option>Client</option>
                <option>Coursier</option>
                <option>Livreur</option>
                <option>Courcier & Livreur</option>
              </select>
              <label htmlFor="floatingPassword">Type compte</label>
            </div>
              </div>

            </div>
            
            
            
            <button className="w-50 btn btn-lg btn-primary mt-4" type="submit">
              Valider
            </button>
            <p className="text-muted">
              <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
            </p>
          </form>
        </main>
      </div>
    </>
  );
}
