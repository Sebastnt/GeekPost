import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ScrollToTop } from "./component/ScrollToTop.jsx";

import { Home } from "./views/Home.jsx";
// import { Demo } from "./views/demo";
// import { Single } from "./views/single";
import injectContext from "./store/appContext";

import Layout from "./layout.js";

const App = () => {
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="*" element={<h1>Not found!</h1>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(App);
