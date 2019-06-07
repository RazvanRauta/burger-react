/*
 * @author: Razvan Rauta
 * Date: 05.06.2019
 * Time: 17:09
*/

import React from 'react';
import cssClasses from './BuildControl.css';

const buildControl = (props) => (

    <div className={cssClasses.BuildControl}>
        <div className={cssClasses.Label}>{props.label}</div>
        <button className={cssClasses.Less} onClick={props.removed} disabled={props.disabled}>Less</button>
        <button className={cssClasses.More} onClick={props.added}>More</button>
    </div>

);

export default buildControl;