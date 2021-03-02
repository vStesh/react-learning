import React from 'react';
import style from './Navbar.module.css';
import {NavLink} from "react-router-dom";

function Navbar() {
    return (
        <nav className={style.nav}>
            <div className={style.item} >
                <NavLink to="/profile" activeClassName={style.active}>
                    Profile
                </NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/messages" activeClassName={style.active}>Messages</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/news" activeClassName={style.active}>News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/settings" activeClassName={style.active}>Settings</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;
    