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
        <div>
            확인
            <BrowserRouter>

                <Routes>
                    <Route path="/" element={<Header />} />
                </Routes>

            </BrowserRouter>
        </div>
    );
};

export default App;