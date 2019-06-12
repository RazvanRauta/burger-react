/*
 * @author: Razvan Rauta
 * Date: 10.06.2019
 * Time: 15:46
*/

import React from 'react';
import cssClasses from './Toolbar.css';
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const toolbar = (props) => (
    <header className={cssClasses.Toolbar}>
        <div>MENU</div>
        <div className={cssClasses.Logo}>
            <Logo/>
        </div>
        <nav className={cssClasses.DesktopOnly}>
            <NavigationItems/>
        </nav>
    </header>
);

export default toolbar;