/*
 * @author: Razvan Rauta
 * Date: 10.06.2019
 * Time: 12:01
*/

import React from 'react';
import Aux from '../../../hoc/_Aux/_Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends React.Component {

    componentWillUpdate() {
        console.log('[OrderSummary] Will update')
    }

    render() {

        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{textTransform: 'capitalize'}}>{igKey}</span> : {this.props.ingredients[igKey]}
                    </li>);
            });

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)} $</strong></p>
                <p>Continue to Checkout?</p>
                <Button buttonType="Danger" clicked={this.props.purchaseCancelld}>CANCEL</Button>
                <Button buttonType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>

        );
    }

}

export default OrderSummary;