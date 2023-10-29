import React, { useEffect, useState } from "react";
import { Image, Nav, NavLink } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "../stylePage.css";
import { useSelector } from "react-redux";
//bootstrap
import "./style/styleLogin.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/signin.css";

export default function Login() {
  
  const login = useSelector((state) => state.login);
  const compte = useSelector((state) => state.compte);
  const trasport = useSelector((state) => state.trasport);
  const [identif, setIdentif] = useState({ name: "", mdp: "" });
  const handleIdentif = (event) => {
    setIdentif({
      ...identif,
      [event.target.name]: event.target.value,
    });
  };
  const hangleVerification = () => {
    const compteVrai = login.find((identifs) => identifs.name === identif.name);
    const compte = "";
    if (compteVrai) {
      if (compteVrai.mdp === identif.mdp) {
        const compteUn = compte.find(
          (compt) => compt.id_login === compteVrai.id
        );
        const transportVrai = trasport.find(
          (trans) => trans.id === compteVrai.id
        );

        console.log(compteVrai);
        console.log(compteUn);
        console.log(transportVrai);
        compte = compteUn;
      } else {
        console.log("Mot de passe est faut");
      }
    } else {
      console.log("Login est faut");
    }
  };
  return (
    <>
      
      <div className="text-center">
        <main className="form-signin">
          <form>
            <Image src="../../../../assets/icon/login.png" alt="" />

            <h1 className="h3 mb-3 fw-normal">Se connecter</h1>
            <div className="form-floating">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Email/numero"
                id="floatingInput"
                value={identif.name}
                onChange={handleIdentif}
              />

              <label htmlFor="floatingInput">Identification</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                name="mdp"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                value={identif.mdp}
                onChange={handleIdentif}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <button className="w-100 btn btn-lg btn-primary mt-4" type="submit"
            onClick={() => console.log("okok")}>
              Verifier
            </button>
            <p className="text-muted">mot de passe oublier ?</p>
            <p className="text-muted">
              <LinkContainer to="/SignUs">
                <Nav.Link>creer un compte</Nav.Link>
              </LinkContainer>
            </p>
          </form>
        </main>
        
      </div>
      
    </>
  );
}
