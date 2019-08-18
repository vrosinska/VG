import React from 'react';
import Navigation from "./components/Nav/Navigation";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import ItemCustom from "./components/ItemCustom/ItemCustom";
import Categories from "./components/Categories/Categories";
import DeliveryNShipping from "./components/DeliveryNShipping/DeliveryNShipping";
import TermsOfUse from "./components/TermsOfUse/TermOfUse";
import CartPage from "./components/CartPage/CartPage";
import CheckoutForm from "./components/CheckoutForm/CheckoutForm";
import ThankYou from "./components/ThankYou/ThankYou";
import Contact from "./components/Contact/Contact";

import {
    Route,
    Switch,
    HashRouter
} from "react-router-dom";
import {EventEmitter} from "events";


class App extends React.Component {
    state = {
        cart: [],
        totalPrice: 0,
    };

    static instance = {};

    static getInstance() {
        return App.instance;
    }

    constructor(props, context) {
        super(props, context);
        this.emitter = new EventEmitter();
        App.instance = this;
    };

    getEmitter = function () {
        return this.emitter;
    };

    render() {
        return (
            <HashRouter>
                <div className="App">

                    <Navigation/>
                    <div className="Content">
                        <Switch>
                            <Route exact path="/contact" component={Contact}/>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/home" component={Home}/>
                            <Route exact path="/cartpage" component={CartPage}/>
                            <Route exact path="/checkout" component={CheckoutForm}/>
                            <Route exact path="/thanks" component={ThankYou}/>
                            <Route exact path="/delivery" component={DeliveryNShipping}/>
                            <Route exact path="/terms" component={TermsOfUse}/>
                            <Route path="/:categoryPath/:itemId" render={(props) => <ItemCustom {...props}/>}/>
                            <Route path="/:path" render={(props) => <Categories {...props} />}/>
                        </Switch>
                    </div>
                    <Footer/>

                </div>
            </HashRouter>
        );
    }
}


export default App;
