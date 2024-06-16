import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
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

            <BrowserRouter>
                <ul style={{ position: "absolute", bottom: 0, zIndex: 10001, backgroundColor: "black", color: "white" }}>
                    <li><Link to="/">포트폴리오</Link></li>
                </ul>

                <Routes>
                    <Route path="/" element={<HomeView />} />
                </Routes>

            </BrowserRouter>
        </div>
    );
};

export default App;