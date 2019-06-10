/*
 * @author: Razvan Rauta
 * Date: 10.06.2019
 * Time: 12:46
*/

import React from 'react';
import cssCalases from './Backdrop.css';

const backdrop = (props) => (

    props.show ? <div className={cssCalases.Backdrop} onClick={props.clicked}> </div> : null
);

export default backdrop;