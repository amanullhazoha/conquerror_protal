import App from "./App.jsx";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import "react-image-lightbox/style.css";
import { Toaster } from "react-hot-toast";
import "react-international-phone/style.css";
import { createRoot } from "react-dom/client";
import { persister, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <Toaster />
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
);
