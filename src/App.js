import React, { useEffect } from "react";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import HomeView from "./views/HomeView";
import smooth from "./utils/smooth"
import link from "./utils/link"


import FirstPage from './FirstPage';
import Second from './Second';
import About from "./components/About";
import Works from "./components/Works";
import Intro from "./components/Intro";

const App = () => {

    useEffect(() => {
        smooth();
        link();
    }, []);

    return (

        화면에 출력되는 내용
        <Intro />
    );
};

export default App;