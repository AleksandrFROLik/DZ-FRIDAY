import React from 'react';
import './App.css';
import {AppRoutes} from "./routes/Route";
import Navbar from './pages/navbar/NavBar';

function App() {
    return (
        <div className='.App'>
            <Navbar/>
            <AppRoutes/>
        </div>
    );
}
export default App;
