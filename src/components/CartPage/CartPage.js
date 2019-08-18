import React from 'react';
import styles from './CartPage.scss'
import classNames from 'classnames';
import App from "../../App";
import CartItem from "../CartItem/CartItem";
import {Link} from "react-router-dom";
import {formatting} from "../../utils";

class CartPage extends React.Component {

    updateFunction = this.update(this);


    componentDidMount() {
        App.getInstance().getEmitter().addListener('changedQuantity', this.updateFunction);
        App.getInstance().getEmitter().addListener('itemDeleted', this.updateFunction);
    }

    componentWillUnmount() {
        App.getInstance().getEmitter().removeListener('changedQuantity', this.updateFunction);
        App.getInstance().getEmitter().removeListener('itemDeleted', this.updateFunction);
    }

    update(that) {
        return function () {
            that.forceUpdate();
        }
    }


    render() {
        App.getInstance().state.totalPrice = 0;
        let itemRow;
        for (itemRow of App.getInstance().state.cart) {
            const rowPrice = itemRow.quantity * itemRow.price;
            App.getInstance().state.totalPrice += rowPrice;
        }

        return (
            <div className={styles.container}>
                <a id="cartPage"/>
                <h4>Your Shopping Cart</h4>
                {App.getInstance().state.cart.map((cartItem, index) => {
                    const cartItemProps =
                        {
                            ...this.props,
                            cartItem: cartItem,
                            index: index,
                        };
                    return (
                        <CartItem key={index} {...cartItemProps}/>)
                })}

                <div className={classNames("row", styles.cartSumUp)}>
                    <p>Total: <span>${formatting(App.getInstance().state.totalPrice)}</span></p>
                </div>
                <div>
                    {App.getInstance().state.totalPrice > 0 ?

                        <div className={classNames("row", styles.checkout)}>
                            <Link to="checkout" className={styles.btn}>Checkout</Link>
                        </div>
                        : <div/>}
                </div>
            </div>
        )
    }
}

export default CartPage;