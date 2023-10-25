import React from "react";
import Carousels from "./Carousels";

import slide3 from '../../../../assets/img/03.png'
import CardAffic from "./CardAffic";
import Header from "./Header";
import Footer from "../Footer/Footer";

export default function Acceuil() {
  return (
    <>
    <Header/>
      <Carousels />
      <CardAffic/>
      <CardAffic/>
      <Footer/>
    </>
  );
}
