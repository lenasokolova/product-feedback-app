import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import GlobalCSS from "./global.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
	<React.StrictMode>
		<GlobalCSS />
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
);
