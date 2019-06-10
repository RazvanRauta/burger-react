/*
 * @author: Razvan Rauta
 * Date: 03.06.2019
 * Time: 14:44
*/
import React from 'react';
import AUX from '../../hoc/_Aux'
import cssClass from './Layout.css';
import Toolbar from '../Navigation/Tollbar/Toolbar';

const layout = (props) => (
    <AUX>
        <Toolbar/>
        < main className={cssClass.Content}>
            {props.children}
        </main>
    </AUX>
);

export default layout;