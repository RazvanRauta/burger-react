/*
 * @author: Razvan Rauta
 * Date: 10.06.2019
 * Time: 11:54
*/

import React from 'react';
import cssClasses from './Modal.css';
import Aux from '../../../hoc/_Aux/_Aux';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {

        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        
    }

    render() {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div
                    className={cssClasses.Modal} style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0'
                }}>
                    {this.props.children}
                </div>
            </Aux>
        );
    }
}

export default Modal;