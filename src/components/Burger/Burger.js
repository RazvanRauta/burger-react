/*
 * @author: Razvan Rauta
 * Date: 05.06.2019
 * Time: 11:16
*/

import React from 'react';
import ccsClasses from './Burger.css';
import BurgerIngredient from './BurgerIngridient/BurgerIngredient';

const burger = (props) => {

    const transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey}/>;
            })
        });

    return (
        <div className={ccsClasses.Burger}>

            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>

        </div>
    );

};

export default burger;