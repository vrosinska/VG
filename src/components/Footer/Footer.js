import React from 'react';
import styles from './Footer.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";
import {logo} from "../../data/datastore";
import classNames from "classnames";
import {Link} from 'react-router-dom';

function Footer() {
    return (
        <footer id="footer" className="fixed-bottom">
            <div className={classNames('row', styles.footRow1)}>
                <div className={classNames('col-auto px-1', styles.footer1)}>
                    <Link to='/contact'> Contact </Link>|
                </div>
                <div className={classNames('col-auto px-1', styles.footer1)}><Link
                    to='/delivery'> Delivery&Shipping </Link>|
                </div>
                <div className={classNames('col-auto px-1', styles.footer1)}><Link to='/terms'> Terms of Use</Link></div>
            </div>
            <div className={classNames('row', styles.footRow2)}>
                <div className="col-md-4 col-xs-12 d-flex justify-content-center">
                    <p className={styles.footer2}>© 2019 Van Gogh For You</p>
                </div>
                <div className="col-4 d-none d-md-flex justify-content-center">
                    <img className={styles.logo} src={logo.logoImage} alt=""/>
                </div>
                <div className="d-none d-md-flex justify-content-center col-4 list-unstyled">
                    <li className={styles.mediaIcon}><FontAwesomeIcon icon={faFacebookF} style={{color: '#4968ad'}}/>
                    </li>
                    <li className={styles.mediaIcon}><FontAwesomeIcon icon={faTwitter} style={{color: '#49a1eb'}}/>
                    </li>
                    <li className={styles.mediaIcon}><FontAwesomeIcon icon={faYoutube} style={{color: '#eb3223'}}/>
                    </li>
                </div>
            </div>
        </footer>
    )
}

export default Footer;