import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {logo} from '../../data/datastore';
import styles from './Navigation.scss'
import './Navigation_Override.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";

function Navigation() {

    return (
        <Navbar collapseOnSelect className="fixed-top" bg="transparent" expand="md">
            <Navbar.Brand href="#home">
                <img className={styles.logo} src={logo.logoImage} alt=""/>
            </Navbar.Brand>
            <div className={styles.navitems}>
                <Nav.Link className="nav-link-cart" href="#cart">
                    <ul className="navbar-nav ml-auto flex-row">
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
                               aria-expanded="false">
                                    <span>
                                        <FontAwesomeIcon className="mr-1" icon={faShoppingCart}
                                                         style={{color: '#A00000'}}/>
                                                         <span className={styles.navcartitems}>7
                                                             - Items</span>
                                    </span>
                                <span className="caret"></span></a>
                            {/*        <ul className="dropdown-menu dropdown-cart" role="menu">*/}
                            {/*            <li>*/}
                            {/*  <span className="item">*/}
                            {/*    <span className="item-left">*/}
                            {/*        <img src="http://lorempixel.com/50/50/" alt=""/>*/}
                            {/*        <span className="item-info">*/}
                            {/*            <span>Item name</span>*/}
                            {/*            <span>23$</span>*/}
                            {/*        </span>*/}
                            {/*    </span>*/}
                            {/*    <span className="item-right">*/}
                            {/*        <button className="btn btn-xs btn-danger pull-right">x</button>*/}
                            {/*    </span>*/}
                            {/*</span>*/}
                            {/*            </li>*/}

                            {/*            <li className="divider"></li>*/}
                            {/*            <li><a className="text-center" href="">View Cart</a></li>*/}
                            {/*        </ul>*/}
                        </li>
                    </ul>
                </Nav.Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>

            </div>
                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="mr-auto">
                        <Nav.Link href="#portraits">Self-portraits</Nav.Link>
                        <Nav.Link href="#landscapes">Landscapes</Nav.Link>
                        <Nav.Link href="#stilllife">Still life</Nav.Link>

                    </Nav>
                </Navbar.Collapse>


        </Navbar>
    )
}

export default Navigation;