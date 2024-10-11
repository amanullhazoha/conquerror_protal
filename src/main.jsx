import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import "react-image-lightbox/style.css";
import "react-international-phone/style.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App.jsx";
import "./index.css";
import { persister, store } from "./redux/store";

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
