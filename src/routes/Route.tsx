import React from 'react'
import Login from '../pages/Login'
import {Route, Routes} from "react-router-dom";
import Registration from "../pages/Registration";
import Profile from "../pages/Profile";
import PasswordRecovery from "../pages/PasswordRecovery";
import EnterNewPassword from "../pages/EnterNewPassword";
import Error404 from "../pages/error/Error404";
import TestPage from "../pages/testPage/TestPage";

export const PATH = {
    LOGIN: '/login',
    REGISTRATION: '/registration',
    PROFILE: '/profile',
    ERROR: '/error',
    PASSWORD_RECOVERY: '/password-recovery',
    ENTER_NEW_PASSWORD: '/enter-new-password',
    TEST_PAGE: '/test-page'


}

export  const AppRoutes = () =>{
    return (
        <Routes>
            <Route  path={PATH.LOGIN}  element={<Login/>}/>
            <Route path={PATH.REGISTRATION}  element={<Registration/>}/>
            <Route path={PATH.PROFILE}  element={<Profile/>}/>
            <Route path={PATH.ERROR}  element={<Error404/>}/>
            <Route path={PATH.PASSWORD_RECOVERY} element={<PasswordRecovery/>}/>
            <Route path={PATH.ENTER_NEW_PASSWORD} element={<EnterNewPassword/>}/>
            <Route path={PATH.TEST_PAGE}  element={<TestPage/>}/>
        </Routes>
    )
}


