/*
 * @author: Razvan Rauta
 * Date: 25.06.2019
 * Time: 12:14
*/

import React from 'react';
import cssClasses from './Input.css';

const Input = (props) => {
    let inputElement = null;
    const inputClasses = [cssClasses.InputElement];
    let validationError = null;

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(cssClasses.Invalid);
    }

    if (props.invalid && props.touched) {

        console.log(props);
        validationError = <p className={cssClasses.ValidationError}>Please enter a valid {props.elementConfig.placeholder}</p>;
    }

    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig} value={props.value} onChange={props.changed}/>;
            break;
        case ('textarea'):
            inputElement = <textarea
                className={inputClasses.join(' ')}
                {...props.elementConfig} value={props.value} onChange={props.changed}/>;
            break;
        case ('select'):
            inputElement = (
                <select
                    className={inputClasses.join(' ')}
                    {...props.elementConfig} value={props.value} onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}

                </select>

            );
            break;
        default:
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig} value={props.value} onChange={props.changed}/>;

    }


    return (
        <div className={cssClasses.Input}>
            <label className={cssClasses.Label}>{props.label}</label>
            {inputElement}
            {validationError}
        </div>
    );

};

export default Input;