/*
 * @author: Razvan Rauta
 * Date: 12.06.2019
 * Time: 15:19
*/

import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import cssClasses from './Logo.css';

const logo = (props) =>(

    <div className={cssClasses.Logo}>
        <img src={burgerLogo} alt="MyBurger"/>
    </div>
);

export default logo;