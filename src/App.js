import React from 'react';
import Layout from './hoc/Layout/Layout'
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import {Route, Switch} from 'react-router-dom';
import Orders from "./containers/Orders/Orders";

function App() {
    return (
        <div>
            <Layout>
                {/*Defining routes.The order of the routes matters inside the Switch*/}
                <Switch>
                    <Route path="/checkout" component={Checkout}/>
                    <Route path="/orders" component={Orders}/>
                    <Route path="/" exact component={BurgerBuilder}/>
                </Switch>
            </Layout>

        </div>
    );
}

export default App;
