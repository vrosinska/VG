import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {logo} from '../../data/datastore';
import styles from './Navigation.scss'
import './Navigation_Override.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import App from "../../App";

class Navigation extends React.Component {

    updateFunction = this.update(this)


    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        App.getInstance().getEmitter().addListener('changedQuantity', this.updateFunction);
        App.getInstance().getEmitter().addListener('itemDeleted', this.updateFunction);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        App.getInstance().getEmitter().removeListener('changedQuantity', this.updateFunction);
        App.getInstance().getEmitter().addListener('itemDeleted', this.updateFunction);
    }

    update(that) {
        return function () {
            that.forceUpdate();
        }
    }


    handleScroll() {
        let scrollY = window.scrollY;
        const nav = document.querySelector('.js-nav')
        if (scrollY > 10) {
            nav.classList.add(styles.solid);
        } else {
            nav.classList.remove(styles.solid)
        }
    }

    render() {
        let cartQuantity = 0.0;
        let itemRow;
        for (itemRow of App.getInstance().state.cart) {
            const rowQuantity = itemRow.quantity;
            cartQuantity += rowQuantity;
        }
        return (
            <Navbar collapseOnSelect expand="md" className={classNames('fixed-top js-nav', styles.jsnav)}>
                <Navbar.Brand href="#home">
                    <img className={styles.logo} src={logo.logoImage} alt=""/>
                </Navbar.Brand>
                <div className={styles.navitems}>
                    <Nav.Link className="nav-link-cart" href="#cartpage">
                        <ul className="navbar-nav ml-auto flex-row">
                            <li className="dropdown">
                                    <span>
                                        <FontAwesomeIcon icon={faShoppingCart}
                                                         className={classNames('mr-1', styles.navcart)}/>
                                    <span className={styles.navcartitems}>
                                        {cartQuantity} <span className={styles.navcartitemstxt}> - Items </span>
                                    </span>
                                    </span>
                            </li>
                        </ul>
                    </Nav.Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>

                </div>
                <Navbar.Collapse className="navCollapse" id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#portraits">Self-portraits</Nav.Link>
                        <Nav.Link href="#landscape">Landscapes</Nav.Link>
                        <Nav.Link href="#stilllife">Still Life</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation;