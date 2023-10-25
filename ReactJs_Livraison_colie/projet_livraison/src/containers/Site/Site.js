import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Acceuil from "../../composants/UI/Page/Acceuil/Acceuil";
import NavBar from "../../composants/UI/NavBar/NavBar";
import Apropos from "../../composants/UI/Page/Apropos/Apropos";
import Login from "../../composants/UI/Page/Login/Login";
import Services from "../../composants/UI/Page/ServicesPage/PageServices";
import Contact from "../../composants/UI/Page/Contact/Contact";
import News from "../../composants/UI/Page/News/News";
import Footer from "../../composants/UI/Page/Footer/Footer";
import SignUs from "../../composants/UI/Page/Login/SignUs";
import Colis from "../../composants/UI/Page/TypeServices/Colis/Colis";
import Coursiers from "../../composants/UI/Page/TypeServices/Coursiers";
import Livreurs from "../../composants/UI/Page/TypeServices/Livreurs";
import NavBarServices from "../../composants/UI/NavBar/NavBarServices";
import PageAcceuilColis from "../../composants/UI/Page/TypeServices/Colis/ColisAcceille";
import ColisAjout from "../../composants/UI/Page/TypeServices/Colis/ColisAjout";
import ColisConfirmation from "../../composants/UI/Page/TypeServices/Colis/ColisConfirmation";
import ColisLivrer from "../../composants/UI/Page/TypeServices/Colis/ColisLivrer";
import ColisFait from "../../composants/UI/Page/TypeServices/Colis/ColisFait";
import ColisOffreLiv from "../../composants/UI/Page/TypeServices/Colis/ColisOffreLiv";
import ColisEnvoiPrixLiv from "../../composants/UI/Page/TypeServices/Colis/ColisEnvoiPrixLiv";
import ColisDemondePrix from "../../composants/UI/Page/TypeServices/Colis/ColisDemondePrix";
import Profil from "../../composants/UI/Page/Dasbord/profil";
// import ColisAcceille from '../../composants/UI/Page/TypeServices/Colis/composant/colisAcceille'

const Site = () => {
  return (
    <div>
      <NavBar />

      <Routes>
        
        <Route path="/" element={<Acceuil />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/SignUs" element={<SignUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/colis" element={<Colis />}>
            <Route path="/services/colis/acceuil" element={<PageAcceuilColis/>}/>
            <Route path="/services/colis/ajout" element={<ColisAjout/>}/>
            <Route path="/services/colis/Demonde_prix" element={<ColisDemondePrix/>}/>
            <Route path="/services/colis/confirmation" element={<ColisConfirmation/>}/>
            <Route path="/services/colis/Livrer" element={<ColisLivrer/>}/>
            <Route path="/services/colis/Fait" element={<ColisFait/>}/>
            <Route path="/services/colis/OffreLiv" element={<ColisOffreLiv/>}/>
            <Route path="/services/colis/Prix" element={<ColisEnvoiPrixLiv/>}/>
        </Route>
        <Route path="/services/coursiers" element={<Coursiers />} />
        <Route path="/services/livreurs" element={<Livreurs />} />

        <Route path="/news" element={<News />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
};

export default Site;
