import React from 'react';
import {Link} from "react-router-dom";
import style from './NavBar.module.css'

const Navbar = () => {
    return (
        <div className={style.navbar}>
            <div className={style.navbar__links}>
                <Link to='/login'>Login</Link>
                <Link to='/registration'> Registration</Link>
                <Link to='/profile'> Profile</Link>
                <Link to='/error'> Error</Link>
                <Link to='/password-recovery'> Password recovery</Link>
                <Link to='/enter-new-password'> Enter new password</Link>
                <Link to='/test-page'> Test page</Link>
            </div>
        </div>
    );
};

export default Navbar;