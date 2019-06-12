/*
 * @author: Razvan Rauta
 * Date: 12.06.2019
 * Time: 17:05
*/

import React from 'react';
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import cssClasses from './SideDrawer.css';

const sideDrawer = (props) => {

    return (
        <div className={cssClasses.SideDrawer}>
            <div className={cssClasses.Logo}>
                <Logo/>
            </div>
            <nav>
                <NavigationItems/>
            </nav>
        </div>
    );
};

export default sideDrawer;