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
      {/* <div className="text-center contenu">
        <div className="">
          <div className="">
            <div>
              <div className="text-center">
                <h2>Sign Up</h2>
                <p>Remplire des champs</p>
              </div>

              <div className="row">
                <div className="col">
                  <div>
                    <input type="text" id="typeTextName" placeholder="Name" />
                  </div>
                  <div>
                    <input
                      type="text"
                      id="typeTextLastName"
                      placeholder="Last Name"
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      id="typeNumberTele"
                      placeholder="Num Tele"
                    />
                  </div>

                  <div>
                    <input
                      type="password"
                      id="typePasswordX1"
                      placeholder="Password"
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      id="typePasswordX2"
                      placeholder="Password confirm"
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="">
                    <label htmlFor="colisNiveau">Type de compte</label>
                    <br />
                    <select
                      id="typeCompte"
                      name="typeCompte"
                      // value={colis.niveau}
                      // onChange={handleChange}
                    >
                      <option>Client</option>
                      <option>Coursier</option>
                      <option>Livreur</option>
                      <option>Courcier & Livreur</option>
                    </select>
                  </div>
                  <div className="">
                    <label htmlFor="colisNiveau">Transport</label>
                    <br />
                    <select
                      id="transport"
                      name="transport"
                      // value={colis.niveau}
                      // onChange={handleChange}
                    >
                      <option>Moto</option>
                      <option>Voiture</option>
                      <option>Forgon</option>
                    </select>
                  </div>
                </div>
              </div>

              <button type="submit">confirm</button>
            </div>

            <div>
              <p>
                Have a complet?
                <LinkContainer to="/login">
                  <Nav.Link>Login</Nav.Link>
                </LinkContainer>
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <div className="text-center">
        <main className="form-signin">
          <form>
            {/* <img
              className="mb-4"
              src="../assets/brand/bootstrap-logo.svg"
              alt=""
              width="72"
              height="57"
            /> */}
            <h1 className="h3 mb-3 fw-normal">Sign Up</h1>
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
              <label for="floatingInput">Name</label>
            </div>
            
            <div className="form-floating">
              <input
                type="number"
                name="numtel"
                className="form-control"
                placeholder="numtel"
                id="numTel"
              />
              <label for="floatingInput">Numero Téléphone</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                name="mdp"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Password</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                name="mdp"
                className="form-control"
                id="PasswordConfirm"
                placeholder="PasswordConfirm"
              />
              <label for="floatingPassword">Password confirmation</label>
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
              <label for="floatingInput">FirstName</label>
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
              <label for="floatingPassword">Moyen de transport</label>
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
              <label for="floatingPassword">Type compte</label>
            </div>
              </div>

            </div>
            
            
            
            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Sign in
            </button>
            <p className="text-muted">mot de passe oublier ?</p>
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
