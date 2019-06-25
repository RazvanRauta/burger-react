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

class ContactData extends React.Component {

    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false,
    };

    orderHandler = (event) => {

        event.preventDefault();
        this.setState({loading: true});

        const order = {

            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Razvan',
                address: {
                    street: 'Calea Lactee',
                    zipCode: '55555',
                    country: 'Romania'
                },
                email: 'test@testy.com'
            },
            deliveryMethod: 'fastest'

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

    render() {

        let form = (
            <form>
                <input className={cssClasses.Input} type="text" name="name" placeholder="Your name"/>
                <input className={cssClasses.Input} type="text" name="email" placeholder="Your email"/>
                <input className={cssClasses.Input} type="text" name="street" placeholder="Street"/>
                <input className={cssClasses.Input} type="text" name="postal" placeholder="Postal Code"/>
                <Button className={cssClasses.Input} clicked={this.orderHandler} buttonType="Success">ORDER</Button>

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