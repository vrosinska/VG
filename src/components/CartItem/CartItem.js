import React from 'react';
import classNames from "classnames";
import styles from "../CartItem/CartItem.scss";
import App from "../../App";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {formatting} from "../../utils";
import './CartItem_Override.css';

class CartItem extends React.Component {


    state = {
        cartItem: this.props.cartItem,
        index: this.props.index,
    };

    increaseQuantity = (event) => {
        event.preventDefault();
        const currentState = this.state;

        if (currentState.cartItem.quantity < currentState.cartItem.stock) {
            currentState.cartItem.quantity++;
            App.getInstance().getEmitter().emit('changedQuantity', currentState.cartItem);
        } else {
            alert("We are really sorry. You exceeded the number of our stock reserves. Please contact us for larger orders => special discounts will apply. Thanks.")
            App.getInstance().getEmitter().emit('changedQuantity', currentState.cartItem);
        }

        this.setState(currentState);
    };
    decreaseQuantity = (event) => {
        event.preventDefault();
        const currentState = this.state;

        if (currentState.cartItem.quantity > 1) {
            currentState.cartItem.quantity--;
            App.getInstance().getEmitter().emit('changedQuantity', currentState.cartItem);
        }

        this.setState(currentState);
    };
    deleteFromCart = (event) => {
        event.preventDefault();
        const currentState = this.state;
        currentState.cartItem.quantity = 0;
        App.getInstance().getEmitter().emit('itemDeleted', currentState.cartItem)
    };

    render() {

        const quantity = this.state.cartItem.quantity;
        const price = this.state.cartItem.price;
        const fullPrice = quantity * price;


        return (
            this.state.cartItem.quantity > 0 ?
                <div className={classNames(styles.product, "row",)} key={this.state.index}>
                    <div className={classNames("col-12", styles.cartCont)}>
                        <div className={classNames("row", styles.cartRow)}>
                            <div className={classNames(styles.picture, "col-4")}>
                                <img className={styles.image}
                                     src={this.state.cartItem.src}
                                     alt=""/>
                            </div>
                            <div className="col-8">
                                <div className={styles.title}><Link
                                    to={this.state.cartItem.url}>{this.state.cartItem.name}</Link>
                                    <div className={styles.delete} onClick={this.deleteFromCart}><FontAwesomeIcon
                                        icon={faTrash}
                                    />
                                    </div>
                                </div>
                                <p className={styles.subtitle}>
                                    {this.state.cartItem.frame ? 'With Frame' : 'No Frame'}</p>
                            </div>
                        </div>
                        <div className={classNames("row", styles.cartRow, styles.row2)}>
                            <div className={classNames(styles.productCalculations, styles.col1, "col-4")}>
                                <span className={styles.minus} onClick={this.decreaseQuantity}>
                                    -</span>
                                <span className={styles.quantity}>{this.state.cartItem.quantity}</span>
                                <span className={styles.plus} onClick={this.increaseQuantity}>
                                    +</span>
                            </div>
                            <div className={classNames(styles.productCalculations, styles.col2, "col-8")}>

                                <span className={styles.price}> {this.state.cartItem.price}</span>
                                <span className={styles.fullPrice}> {formatting(fullPrice)}</span>


                            </div>
                        </div>
                    </div>
                </div>
                : <div/>
        )
    }


}

export default CartItem;