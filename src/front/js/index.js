//import react into the bundle
import React from "react";
<<<<<<< HEAD:src/js/index.js
import { createRoot } from "react-dom/client";
=======
import ReactDOM from "react-dom";
>>>>>>> main:src/front/js/index.js

//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import App from "./app.js";

//
const root = createRoot(document.querySelector("#app"));

//render your react application
root.render(<App />);
