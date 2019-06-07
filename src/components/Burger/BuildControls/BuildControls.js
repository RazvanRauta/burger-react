/*
 * @author: Razvan Rauta
 * Date: 05.06.2019
 * Time: 16:38
*/

import React from 'react';
import cssClasses from './BuildControls.css';
import BuildControl from "./BuildControl/BuildControl";

const controls = [

    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},

];

const buildControls = (props) => (

    <div className={cssClasses.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)} $</strong></p>
        {controls.map(ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]}/>
        ))}

        <button className={cssClasses.OrderButton} disabled={!props.purchasable}>ORDER NOW</button>

    </div>

);

export default buildControls;