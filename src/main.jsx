import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext";
import { MenuProvider } from "./context/MenuContext";
import { CartProvider } from "./context/CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider>
      <MenuProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </MenuProvider>
    </ThemeProvider>
  </BrowserRouter>
);
