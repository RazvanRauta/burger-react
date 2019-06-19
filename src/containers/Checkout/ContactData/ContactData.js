/*
 * @author: Razvan Rauta
 * Date: 19.06.2019
 * Time: 16:21
*/

import React from 'react';
import Button from "../../../components/UI/Button/Button";

class ContactData extends React.Component {

    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    };

    render() {
        return (
            <div>
                <h4>Enter your Contact Data</h4>
                <form>
                    <input type="text" name="name" placeholder="Your name"/>
                    <input type="text" name="email" placeholder="Your email"/>
                    <input type="text" name="street" placeholder="Street"/>
                    <input type="text" name="postal" placeholder="Postal Code"/>
                    <Button buttonType="Success">ORDER</Button>

                </form>
            </div>
        )
    }

}

export default ContactData;