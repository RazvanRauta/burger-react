/*
 * @author: Razvan Rauta
 * Date: 12.06.2019
 * Time: 15:31
*/

import React from 'react';
import cssClasses from './NavigationItems.css';
import NavigationItem from "./NavigationItem/NavigationItem";


const navigationItems = (props) => (

    <ul className={cssClasses.NavigationItems}>
        <NavigationItem link="/" exact >Burger Builder</NavigationItem>
        <NavigationItem link="/orders">Orders</NavigationItem>


    </ul>

);

export default navigationItems;