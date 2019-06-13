/*
 * @author: Razvan Rauta
 * Date: 12.06.2019
 * Time: 17:05
*/

import React from 'react';
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import cssClasses from './SideDrawer.css';
import Aux from '../../../hoc/_Aux/_Aux';
import Backdrop from "../../UI/Backdrop/Backdrop";

const sideDrawer = (props) => {

    let attachedCssClasses = [cssClasses.SideDrawer, cssClasses.Close];
    if (props.open) {
        attachedCssClasses = [cssClasses.SideDrawer, cssClasses.Open];
    }

    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedCssClasses.join(' ')}>
                <div className={cssClasses.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;