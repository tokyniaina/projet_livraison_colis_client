import React from "react";
import Site from "./containers/Site/Site";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { store } from "./composants/Redux";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Site />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
