/*
 * @author: Razvan Rauta
 * Date: 19.06.2019
 * Time: 16:21
*/

import React from 'react';
import Button from "../../../components/UI/Button/Button";
import cssClasses from "./ContactData.css";
import axios from "../../../axios-orders";
import * as Swal from "sweetalert2";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";
import orderFormData from "./orderFormData";

class ContactData extends React.Component {

    state = {
        orderForm: orderFormData,
        formIsValid: false,
        loading: false,
    };

    static checkValidity(value, rules ){

        let isValid = true;

        if (rules.required) {

            isValid = value.trim() !== '' && isValid; // true or false
        }

        if (rules.minLength){

            isValid=value.length >= rules.minLength  && isValid;
        }

        if (rules.maxLength){

            isValid=value.length <= rules.maxLength  && isValid;
        }

        return isValid;

    };

    orderHandler = (event) => {

        event.preventDefault();
        this.setState({loading: true});

        const formData = {};

        for (let formElementIdentifier in this.state.orderForm) {

            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
        }

        const order = {

            ingredients: this.props.ingredients,
            price: this.props.price,
            orderData: formData

        };

        axios.post('/orders.json', order)
            .then(response => {
                this.setState({loading: false});

                this.props.history.push('/');

                Swal.fire({
                    title: 'Good job!',
                    text: 'Your Order has been successfully placed!',
                    type: 'success',
                    confirmButtonText: 'Thanks!',
                    confirmButtonColor: '#CF8F2E',
                });
            })
            .catch(error => {
                this.setState({loading: false})
            });

    };

    inputChangedHandler = (event, inputIdentifier) => {

        const updatedOrderForm = {

            ...this.state.orderForm
        };
        const updatedFormElement = {

            ...updatedOrderForm[inputIdentifier]
        };

        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = ContactData.checkValidity(updatedFormElement.value,updatedFormElement.validation); //check if it's valid
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;

        for (let inputIdentifier in updatedOrderForm){

            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }

        this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid});
    };

    render() {

        const formElementsArray = [];

        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }

        let form = (
            <form onSubmit={this.orderHandler}>
                {formElementsArray.map(formElement => (
                    <Input key={formElement.id}
                           elementType={formElement.config.elementType}
                           elementConfig={formElement.config.elementConfig}
                           value={formElement.config.value}
                           invalid={!formElement.config.valid}
                           shouldValidate={formElement.config.validation}
                           touched={formElement.config.touched}
                           changed={ (event) => this.inputChangedHandler(event,formElement.id)}
                    />
                ))}
                <Button buttonType="Success" disabled={!this.state.formIsValid}>ORDER</Button>

            </form>
        );

        if (this.state.loading) {
            form = <Spinner/>;
        }


        return (
            <div className={cssClasses.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        )
    }

}

export default ContactData;