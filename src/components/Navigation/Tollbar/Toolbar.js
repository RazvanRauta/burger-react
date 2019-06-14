/*
 * @author: Razvan Rauta
 * Date: 10.06.2019
 * Time: 15:46
*/

import React from 'react';
import cssClasses from './Toolbar.css';
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const toolbar = (props) => (
    <header className={cssClasses.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked}/>
        <div className={cssClasses.Logo}>
            <a href='/'> <Logo /></a>
        </div>
        <nav className={cssClasses.DesktopOnly}>
            <NavigationItems/>
        </nav>
    </header>
);

export default toolbar;