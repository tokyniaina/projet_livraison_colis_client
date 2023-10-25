import React from "react";
import ImgLivreur from '../../../../assets/img/ClientLivrer.jpg'

export default function Card3() {
  return (
    <>
      <div className="container pb-5">
        <div className=" pt-4 pb-5">
          <h3 className="pb-3 text-center">Independence et Objectif</h3>
          <p className="text-justify">
            Cette platforme a pour objectif de rendre sache personnes qui
            l'utilise autonome, placer des colis, confirmation de livraison{" "}
            <br />
            Les livreur et capable de consulter des livraison et ces distance{" "}
            <br />
            Avec notre fonctionnalité « smart sorting », optimisant le tri des
            résultats en fonction du rapport prix/durée, aucun de nos
            partenaires n’est privilégié et chaque voyageur peut ainsi choisir
            la meilleure offre compte tenu de ses critères de sélection ; les
            offres sponsorisées sont quant à elles clairement identifiables. Par
            ailleurs, nous garantissons que le prix affiché sur notre page de
            résultats correspond au prix final de l’offre après redirection sur
            les sites partenaires
          </p>
        </div>
        <div>
            <div className='row'>
                <div className='col-md-5'>
                    <img src={ImgLivreur} className='rounded' alt='...'/>
                </div>
                <div className='col p-3'>
                    <h3 className='pb-2 text-center'> Les Clients</h3>
                    <p> Les clients a tous les droites de notez sache livreur qui accepte 
                      de faire une livraison de colis de client. <br/>
                      Dans le but de faire une clacification de sache livreur et la satisfaction
                      de propriéter de colis a livrer.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}
