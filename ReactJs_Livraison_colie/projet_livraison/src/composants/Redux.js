import { configureStore, createSlice } from "@reduxjs/toolkit";
import { dataUser } from "./axios";
const initialState = dataUser



const loginSlice = createSlice({
  name: "login",
  initialState: [
    
    // {
    //   id: 1,
    //   name: "client1",
    //   firstname: "client1",
    //   num_tel: 344617222,
    //   mdp: "client1",
    // },
    // {
    //   id: 2,
    //   name: "client2",
    //   firstname: "client2",
    //   num_tel: 344617222,
    //   mdp: "client2",
    // },
    // {
    //   id: 3,
    //   name: "client3",
    //   firstname: "client3",
    //   num_tel: 344617222,
    //   mdp: "client3",
    // },
  ], reducers: {
  }
});
const transportSlice = createSlice({
  name:"trasport",
  initialState:[
    {id:1, transport:[], job:["client"]},
    {id:2, transport:["moto", "voiture"], job:["livreur", "courcier"]},
    {id:3, transport:["moto"], job:["livreur"]},
  ],
  reducers:{

  }
})

const compteSlice = createSlice({
  name: "compte",
  initialState:[
    {id_login: 1, id_trasport: 1, active:true},
    {id_login: 2, id_trasport: 2, active:true},
    {id_login: 3, id_trasport: 3, active:true},
  ],
  reducers:{}
})

const colisSlice = createSlice({
  name: "colis",
  initialState: {
    objet: [
      {
        id: 1,
        name: "Telephone",
        type: "Electronique",
        niveau: 2,
        depart: "Mahamasina",
        arriver: "Ampatobe",
        dateLivraison: "11/06/2024",
        prix: 5000,
        PrixLivreur: false,
        confirm: false,
        alivre: false,
      },
      {
        id: 2,
        name: "Camera",
        type: "Electronique",
        niveau: 2,
        depart: "Mahamasina",
        arriver: "Ampatobe",
        dateLivraison: "11/06/2024",
        prix: 5000,
        PrixLivreur: false,
        confirm: true,
        alivre: false,
      },
      {
        id: 3,
        name: "Ecouteur",
        type: "Electronique",
        niveau: 2,
        depart: "Mahamasina",
        arriver: "Ampatobe",
        dateLivraison: "11/06/2024",
        prix: 5000,
        PrixLivreur: false,
        confirm: false,
        alivre: false,
      },
    ],
    nbObjet: 5,
  },
  reducers: {
    addColis: (state, action) => {
      //{type:"colis/addColis", payload: "ajoute un colis a livré"}
      const newColis = {
        id: Date.now(),
        name: action.payload.name,
        type: action.payload.type,
        niveau: action.payload.niveau,
        depart: action.payload.depart,
        arriver: action.payload.arriver,
        dateLivraison: action.payload.dateLivraison,
        prix: action.payload.prix,
        confirm: false,
        PrixLivreur: false,
        alivre: false,
      };
      state.objet.push(newColis);
    },
    modifprixLivreur: (state, action) => {
      //type: "colis/modifprixLivreur", payload : "prix par livreur"
      const livreur = state.objet.find((prix) => prix.id === action.payload.id);
      livreur.PrixLivreur = !livreur.PrixLivreur;
      livreur.prix = action.payload.prix;
    },
  },
});

export const { addColis, modifprixLivreur } = colisSlice.actions;

export const store = configureStore({
  reducer: {
    colis: colisSlice.reducer,
    login: loginSlice.reducer,
    trasport: transportSlice.reducer,
    compte: compteSlice.reducer

  },
});
