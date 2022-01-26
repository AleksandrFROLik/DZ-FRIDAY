import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {AppRoutes} from "./routes/Route";
import Navbar from './pages/navbar/NavBar';

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <AppRoutes/>
        </BrowserRouter>
    );
}
export default App;
