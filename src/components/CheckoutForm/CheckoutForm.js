import React from 'react';
import styles from './CheckoutForm.scss'
import classNames from "classnames";
import App from "../../App";
import {Link} from "react-router-dom";
import {formatting} from "../../utils";

class CheckoutForm extends React.Component {

    render() {
        return (
            <div className={styles.container}>
                <a id="checkout"/>
                <h4>Checkout</h4>

                <div className={classNames("row", styles.formCont)}>
                    <form action="https://formspree.io/19456w@gmail.com" method="POST">
                        <div className="row">
                            <div className={classNames("col-lg-6 col-sm-12", styles.form)}>
                                <p>
                                    <input className="form-control" name="name"
                                           placeholder="Your first name and surname"
                                           required type="text"/>
                                </p>
                                <p>
                                    <input className="form-control" name="address" placeholder="Your full address"
                                           required type="text"/>
                                </p>
                                <p>
                                    <input className="form-control" name="email" placeholder="Your e-mail" required
                                           type="email"/>
                                </p>
                                <p>
                                    <input className="form-control" name="phone" placeholder="Your phone number"
                                           type="numeric"/>
                                </p>
                            </div>
                            <div className={classNames("col-lg-6 col-sm-12", styles.form)}>
                                <p>
                                    <textarea className="form-control" name="text" rows="7" cols="50"
                                              placeholder="Please type in your comments here, if needed"/>
                                </p>
                                <div className={classNames("row", styles.cartSumUp)}>
                                    <p>Total: <span>${formatting(App.getInstance().state.totalPrice)}</span></p>
                                </div>
                                <div className={classNames("row", styles.checkout)}>
                                    <Link to="thanks" className={styles.btn}>Checkout</Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        )
    }
}

export default CheckoutForm;