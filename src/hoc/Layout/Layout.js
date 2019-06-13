/*
 * @author: Razvan Rauta
 * Date: 03.06.2019
 * Time: 14:44
*/
import React from 'react';
import AUX from '../_Aux/_Aux'
import cssClass from './Layout.css';
import Toolbar from '../../components/Navigation/Tollbar/Toolbar';
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends React.Component {

    state = {
        showSideDrawer: false,

    };

    sideDrawerClosedHandler = () => {

        this.setState({showSideDrawer: false})

    };

    sideDrawerToggleHandler = () => {

        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });

    };

    render() {
        return (
            <AUX>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
                < main className={cssClass.Content}>
                    {this.props.children}
                </main>
            </AUX>
        )
    }

}

export default Layout;