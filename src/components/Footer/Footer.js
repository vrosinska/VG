import React from 'react';
import styles from './Footer.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faTwitter, faInstagram, faYoutube} from "@fortawesome/free-brands-svg-icons";
import {logo} from "../../data/datastore";
import classNames from "classnames";


function Footer() {
    return (
        <footer id="footer" className="fixed-bottom">
            <div className={classNames('row', styles.footRow1)}>
                <div className={classNames('col-auto px-1', styles.footer1)}>
                    <a href="#contact">Contact</a></div>
                <div className="col-auto px-1"><a className={styles.footer1} href="#delivery"> Delivery&Shipping</a>
                </div>
                <div className="col-auto px-1"><a className={styles.footer1} href="#terms"> Terms of Use</a></div>
            </div>
            <div className={classNames('row', styles.footRow2)}>
                <div className="col-md-4 col-xs-12 d-flex justify-content-center">
                    <p className={styles.footer2}>© 2019 Van Gogh For You</p>
                </div>
                <div className="col-4 d-none d-md-flex justify-content-center">
                    <img className={styles.logo} src={logo.logoImage} alt=""/>
                </div>
                <div className="d-none d-md-flex justify-content-center col-4 list-unstyled">
                    <li className="mx-1"><a href="#"><FontAwesomeIcon icon={faFacebookF}
                                                                      style={{color: '#4968ad'}}/></a>
                    </li>
                    <li className="mx-1"><a href="#"><FontAwesomeIcon icon={faInstagram} style={{color: 'black'}}/></a>
                    </li>
                    <li className="mx-1"><a href="#"><FontAwesomeIcon icon={faTwitter} style={{color: '#49a1eb'}}/></a>
                    </li>
                    <li className="mx-1"><a href="#"><FontAwesomeIcon icon={faYoutube} style={{color: '#eb3223'}}/></a>
                    </li>
                </div>
            </div>
        </footer>
    )
}

export default Footer;