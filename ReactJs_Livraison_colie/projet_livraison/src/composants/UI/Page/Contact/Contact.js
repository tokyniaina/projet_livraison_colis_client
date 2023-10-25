import React from "react";
import IconLocalisation from "../../../../assets/icon/localisation.png";
import IconMessage from "../../../../assets/icon/message.png";
import IconPhone from "../../../../assets/icon/phone.png";
import Iconfb from "../../../../assets/icon/facebook.png";
import Icontwit from "../../../../assets/icon/twitter.png";
import IconInsta from "../../../../assets/icon/instagram.png";
import StyleIcon from "./styleContact.module.css";

export default function Contact() {
  return (
    <>
      <div className="text-center">
        <h1>NOUS CONTACTER</h1>
        
        <p>
          Nous alignons les dirigeants autour d'un objectif commun et d'une
          histoire stratégique qui <br/> incitent leur entreprise et leur marque à
          agir
        </p>
      </div>
      <div className="container mt-5 mb-5">
        <div className="row row-cols-2">
          <div
            className="col-lg-6 col-md-7 col-sm-12 text-white rounded-2"
            style={{ backgroundColor: "#282c31" }}
          >
            <div className="row pt-3 pb-3">
              <div className="col-6 p-4">
                <div class="card-body text-center">
                  <img src={IconLocalisation} className={StyleIcon.icon} />

                  <h5 class="card-title p-2">ADRESS :</h5>
                  <p class="card-text">
                    TANANARIVO 101 <br />
                    LOT 152 MAHAMASINA 45
                  </p>
                </div>
              </div>
              <div className="col-6 p-4">
                <div class="card-body text-center">
                  <img src={IconMessage} className={StyleIcon.icon} />
                  <h5 class="card-title p-2">EMAIL :</h5>
                  <p class="card-text">
                    helloMada803@gmail.com <br />
                    toky803@gmail.com
                  </p>
                </div>
              </div>
              <div className="col-6 p-4">
                <div class="card-body text-center">
                  <img src={IconPhone} className={StyleIcon.icon} />
                  <h5 class="card-title p-2">APPELEZ VOUS :</h5>
                  <p class="card-text">
                    0344617222 <br />
                    0381524867
                  </p>
                </div>
              </div>
              <div className="col-6 p-4">
                <div class="card-body text-center">
                  <h5 class="card-title">NOUS CONTACTER :</h5>
                  <p class="card-text p-2">
                    Contactez-vous pour une <br />
                    situation. Aide ou pour <br />
                    rejoindre d'equipe
                  </p>
                  <div>
                    <img src={Iconfb} className={StyleIcon.rese} />
                    <img src={Icontwit} className={StyleIcon.rese} />
                    <img src={IconInsta} className={StyleIcon.rese} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3774.2897044386373!2d47.52663910460232!3d-18.918566768492948!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21f07e0a70304dbf%3A0xc9450c1371023880!2sMahamasina%2C%20Tananarive!5e0!3m2!1sfr!2smg!4v1692706368588!5m2!1sfr!2smg"
              // width="600"
              // height="450"
              // style="border:0;"
              style={{ width: "100%", height: "100%"}}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
