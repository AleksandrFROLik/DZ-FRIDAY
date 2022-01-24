import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Profile from "./pages/Profile";
import Error404 from "./pages/Error404";
import PasswordRecovery from "./pages/PasswordRecovery";
import EnterNewPassword from "./pages/EnterNewPassword";
import TestPage from "./pages/TestPage";

function App() {
    return (
        <BrowserRouter>
            <Login/>
            <Registration/>
            <Profile/>
            <Error404/>
            <PasswordRecovery/>
            <EnterNewPassword/>
            <TestPage/>
        </BrowserRouter>
    );
}
export default App;
