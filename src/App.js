import React from 'react';
import Navigation from "./components/Nav/Navigation";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import ItemCustom from "./components/ItemCustom/ItemCustom";
// import {categoriesData} from './data/datastore'
import Categories from "./components/Categories/Categories";
import DeliveryNShipping from "./components/DeliveryNShipping/DeliveryNShipping";
import TermsOfUse from "./components/TermsOfUse/TermOfUse";
import CartPage from "./components/CartPage/CartPage";
// import StillLife from "./components/StillLife/StillLife";
// import Contact from "./components/Contact/Contact";
import {
    Route,
    Switch,
    HashRouter
} from "react-router-dom";




class App extends React.Component {


    render() {


        return (

            <HashRouter>
                <div className="App">

                    <Navigation/>
                    <div className="Content">
                        <Switch>
                            {/*<Route exact path="/contact" component={Contact}/>*/}
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/home" component={Home}/>
                            <Route exact path="/cartpage" component={CartPage}/>
                            <Route exact path="/delivery" component={DeliveryNShipping}/>
                            <Route exact path="/terms" component={TermsOfUse}/>
                            <Route exact path="/itemcustom" component={ItemCustom}/>
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
