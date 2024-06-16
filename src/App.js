import React, { useEffect } from "react";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import HomeView from "./views/HomeView";
import smooth from "./utils/smooth"
import link from "./utils/link"


import FirstPage from './FirstPage';
import Second from './Second';
import About from "./components/About";
import Works from "./components/Works";

const App = () => {

    useEffect(() => {
        smooth();
        link();
    }, []);

    return (

        <BrowserRouter>
            <ul style={{ position: "absolute", bottom: 0, zIndex: 10001, backgroundColor: "black", color: "white" }}>
                <li><Link to="/">포트폴리오</Link></li>
                <li><Link to="/first">첫번째</Link></li>
                <li><Link to="/second">두번째</Link></li>
            </ul>
            <Routes>
                <Route path="/" element={<HomeView />} />

                <Route path="/first" element={<FirstPage />} />
                <Route path="/second" element={<Second />} />

                <Route path="/about" element={<About />} />
                <Route path="/works" element={<Works />} />

                <Route path="/a" element={<Works />} />
                <Route path="/w" element={<Works />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;