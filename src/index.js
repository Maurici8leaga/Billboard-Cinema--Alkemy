import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			{/* el BrowserRouter permite gestionar el browser page aplication permitiendo ingresar a una ruta o redireccionamiento */}
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
