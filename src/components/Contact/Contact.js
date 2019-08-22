import React from 'react';
import styles from './Contact.scss'
import {contact} from "../../data/datastore";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";
import {faMapMarkerAlt, faPhoneAlt, faAt} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";

class Contact extends React.Component {

    render() {
        return (
            <div className={styles.container}>
                <a id="contact"/>
                <h4>Contact Us</h4>
                <div className={classNames("row list-unstyled", styles.contactCont)}>
                    <li className={styles.mediaIcon}><FontAwesomeIcon icon={faFacebookF}
                                                                      style={{color: '#4968ad'}}/>
                    </li>
                    <li className={styles.mediaIcon}><FontAwesomeIcon icon={faTwitter} style={{color: '#49a1eb'}}/>
                    </li>
                    <li className={styles.mediaIcon}><FontAwesomeIcon icon={faYoutube} style={{color: '#eb3223'}}/>
                    </li>
                </div>
                <div className={classNames("row", styles.options)}>
                    <div className="col">
                        <div className="row">
                            <div className={classNames("col-12 col-md-4", styles.optionCol)}>
                                <FontAwesomeIcon icon={faPhoneAlt} className={styles.optionIcon}/>
                                <div className={styles.subtitle}> Reception:</div>
                                <span>{contact.phoneReception}</span>
                                <div className={styles.subtitle}> Ordering:</div>
                                <span>{contact.phoneOrdering}</span>
                                <div className={styles.subtitle}> Delivery:</div>
                                <span>{contact.phoneDelivery}</span>
                                <div className={styles.subtitle}> Media:</div>
                                <span>{contact.phoneMedia}</span>
                            </div>
                            <div className={classNames("col-12 col-md-4", styles.optionCol)}>
                                <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.optionIcon}/>
                                <div>{contact.street}</div>
                                <div>{contact.city}</div>
                                <div>{contact.country}</div>
                            </div>

                            <div className={classNames("col-12 col-md-4", styles.optionCol)}>
                                <FontAwesomeIcon icon={faAt} className={styles.optionIcon}/>
                                <div className={styles.subtitle}> Reception:</div>
                                <span className={styles.mail}>{contact.emailReception}</span>
                                <div className={styles.subtitle}> Ordering:</div>
                                <span className={styles.mail}>{contact.emailOrdering}</span>
                                <div className={styles.subtitle}> Delivery:</div>
                                <span className={styles.mail}>{contact.emailDelivery}</span>
                                <div className={styles.subtitle}> Media:</div>
                                <span className={styles.mail}>{contact.emailMedia}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;