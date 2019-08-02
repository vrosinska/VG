import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {logo} from '../../data/datastore';
import styles from './Navigation.scss'
import './Navigation_Override.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import Media from 'react-bootstrap/Media';
import classNames from "classnames";

class Navigation extends React.Component {

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
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
        return (
            <Navbar collapseOnSelect expand="md" className={classNames('fixed-top js-nav', styles.jsnav)}>
                <Navbar.Brand href="#home">
                    <img className={styles.logo} src={logo.logoImage} alt=""/>
                </Navbar.Brand>
                <div className={styles.navitems}>
                    <Nav.Link className="nav-link-cart" href="#cartpage">
                        <ul className="navbar-nav ml-auto flex-row">
                            <li className="dropdown">
                                <Media tag="a" href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
                                       aria-expanded="false">
                                    <span>
                                        <FontAwesomeIcon icon={faShoppingCart}
                                                         className={classNames('mr-1', styles.navcart)}/>
                                                         <span className={styles.navcartitems}>7
                                                             - Items</span>
                                    </span>
                                    <span className="caret"></span></Media>
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