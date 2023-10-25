import React from "react";
import ImgCliLivreur from "../../../../assets/img/colisLivrer.jpg";

export default function Card2() {
  return (
    <>
      <div
        className="bg-image mb-5"
        style={{
          backgroundImage: `url(${ImgCliLivreur})`,
          backgroundSize: "cover",
          height:'40vh',
          filter: 'brightness(60%)',

        }}
      >
        <div className="text-center text-white pt-4">
          <h3 className="pb-3">Notre mission, simplifier la livraison de votre colie</h3>
          <p>
            {" "}
            Face au besoins cotidien des personnes et le temps qui manque les
            personne a besoins d'assurence pour leur livraison et et les livreur
            a des produits livrer. <br />
            La confience et la confirencialiter de chaque client et connaissence
            de le livreur et obligatoire pour que sa marche en tout securité.
          </p>
        </div>
      </div>
    </>
  );
}
