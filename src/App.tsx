import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Navbar from "./commponents/navbar/NavBar";
import {AppRoutes} from "./routes/Route";

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <AppRoutes/>
        </BrowserRouter>
    );
}
export default App;
