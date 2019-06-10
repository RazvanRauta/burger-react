/*
 * @author: Razvan Rauta
 * Date: 10.06.2019
 * Time: 15:27
*/

import React from 'react';
import cssClasses from './Button.css';

const button = (props) => (

    <button
        className={[cssClasses.Button, cssClasses[props.buttonType]].join(' ')}
        onClick={props.clicked}>{props.children}</button>
);

export default button;