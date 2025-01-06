import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { App } from "./app.jsx";
import store, { persistor } from "./redux/store.js";
import { BrowserRouter } from "react-router-dom";
import "modern-normalize";
import { PersistGate } from "redux-persist/integration/react";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("app")).render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <React.StrictMode>
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </React.StrictMode>
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
