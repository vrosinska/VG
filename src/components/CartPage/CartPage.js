import React from 'react';
import styles from './CartPage.scss'
import classNames from 'classnames';

class CartPage extends React.Component {


    render() {
        return (
            <div className={styles.container}>
                <a id="cartPage"/>
                <h4>Your Shopping Cart</h4>

                <div className={classNames(styles.product, "row")}>
                    <div className={classNames("col-12", styles.cartCont)}>
                        <div className={classNames("row", styles.cartRow)}>
                            <div className={classNames(styles.picture, "col-4")}>
                                <img className={styles.image}
                                     src="./../../../public/images/CypressesAndTwoWomen.jpg"
                                     alt=""/>
                            </div>
                            <div className="col-8">
                                <p className={styles.title}>Title of The Image</p>
                                <p className={styles.subtitle}>With Frame/No Frame</p>
                            </div>
                        </div>
                        <div className={classNames("row", styles.cartRow)}>
                            <div className={classNames(styles.productCalculations, "col-4")}>
                                <span className={styles.minus}>
                                    <a href="#">-</a></span>
                                <span className={styles.quantity}>2</span>
                                <span className={styles.plus}>
                                    <a href="#">+</a></span>
                            </div>
                            <div className={classNames(styles.productSum, "col-8")}>

                                <span className={styles.fullPrice}> 200 $</span>
                                <span className={styles.price}> 100 $</span>

                            </div>
                        </div>
                    </div>
                </div>
                <div className={classNames("row", styles.cartSumUp)}>
                    <p className={styles.total}>Total: <span>177.16</span>$</p>
                </div>
                <div className={classNames("row", styles.checkout)}>
                    <a href="#checkout" className={styles.btn}>Checkout</a>
                </div>

            </div>
        )
    }
}

export default CartPage;