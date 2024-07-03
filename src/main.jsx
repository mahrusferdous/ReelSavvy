import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { MovieProvider } from "./context/MovieContext.jsx";
import { IdProvider } from "./context/IdContext.jsx";
import { IdsProvider } from "./context/IdsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <MovieProvider>
                <IdProvider>
                    <IdsProvider>
                        <App />
                    </IdsProvider>
                </IdProvider>
            </MovieProvider>
        </BrowserRouter>
    </React.StrictMode>
);
