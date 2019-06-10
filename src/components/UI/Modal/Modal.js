/*
 * @author: Razvan Rauta
 * Date: 10.06.2019
 * Time: 11:54
*/

import React from 'react';
import cssClasses from './Modal.css';
import Aux from '../../../hoc/_Aux';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
    <Aux>
        <Backdrop show={props.show} clicked={props.modalClosed} />
        <div
            className={cssClasses.Modal} style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0'
        }}>
            {props.children}
        </div>
    </Aux>
);

export default modal;