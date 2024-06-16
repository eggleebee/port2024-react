import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeView from "./views/HomeView";
import About from "./components/About";

import smooth from "./utils/smooth"
import link from "./utils/link"
import Header from "./components/Header";

const App = () => {

    useEffect(() => {
        smooth();
        link();
    }, []);

    return (
        <BrowserRouter>
            <switch>
                <Routes>
                    <Route path="" element={<Header />} />
                </Routes>
            </switch>
        </BrowserRouter>
    );
};

export default App;