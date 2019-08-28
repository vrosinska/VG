import React from 'react';
import styles from './ItemCustom.scss'
import {categoriesData} from "../../data/datastore";
import classNames from 'classnames';
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import App from './../../App';

class ItemCustom extends React.Component {
    state = {
        showComponent: false,
        cart: []
    };

    handleChange = () =>
        this.setState({showComponent: !this.state.showComponent});

    addToCart = (event) => {
        event.preventDefault();
        const item = this.getItemDataFromDataStore(this.props.match);
        const price = this.state.showComponent ? item.priceFramed : item.price;
        const showComponent = this.state.showComponent;
        let found = false;
        let updatedCart = App.getInstance().state.cart.map((cartItem) => {
            if (cartItem.name === item.name && cartItem.price === price) {
                found = true;
                if (cartItem.quantity < item.count) {
                    cartItem.quantity++;
                } else {
                    alert("We are really sorry. You exceeded the number of our stock reserves. Please contact us for larger orders => special discounts will apply. Thanks.")
                }
            }
            return cartItem;
        });
        //if item IS NOT found, push product to cart with quantity: 1
        if (!found) {
            updatedCart.push({
                id: item.id,
                name: item.name,
                price: price,
                quantity: 1,
                frame: showComponent,
                src: item.img,
                stock: item.count,
                url: this.props.match.url,
            })
        }

        App.getInstance().setState({cart: updatedCart});

    };


    render() {
        const itemData = this.getItemDataFromDataStore(this.props.match);


        return (
            <div className={styles.container}>
                <a id="itemcustom"/>
                <span className={styles.title}><h4 className={styles.name}>{itemData.name}</h4>
                    <div className={styles.size}> {itemData.size} (cm) </div></span>
                <div className={classNames('row', styles.rowCont)}>
                    <div className={classNames('col-12 col-lg-9', styles.cont1)}>
                        {this.state.showComponent ?
                            <div id="frame" className={styles.frame}>
                                <img className={styles.image}
                                     src={itemData.img} alt=""
                                />
                            </div>
                            : <div className={styles.noframe}>
                                <img className={styles.image}
                                     src={itemData.img} alt=""
                                />
                            </div>
                        }
                    </div>
                    <div className={classNames('col-12 col-lg-3', styles.cont2)}>
                        <div className={styles.col2Cont}>
                            <div className={styles.radios}>
                                <label>
                                    <input type="radio" name="radios" onChange={this.handleChange}
                                           checked={!this.state.showComponent}/> {""} No Frame {""}</label>
                                <label>
                                    <input type="radio" name="radios" onChange={this.handleChange}
                                           checked={this.state.showComponent}/> {""} With Frame {""}</label>

                            </div>

                            {this.state.showComponent ?
                                <div className={styles.overview}>
                                    <span> $ {itemData.priceFramed} </span>
                                    <span className={styles.addIcon} onClick={this.addToCart}><FontAwesomeIcon
                                        icon={faShoppingCart}/>
                                    </span>
                                </div>
                                :
                                <div className={styles.overview}>
                                    <span> $ {itemData.price} </span>
                                    <span className={styles.addIcon} onClick={this.addToCart}><FontAwesomeIcon
                                        icon={faShoppingCart}/>
                                    </span>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    getItemDataFromDataStore(match) {
        const categoryId = match.params.categoryPath;
        const categoryItemList = categoriesData[categoryId];
        const itemId = match.params.itemId;
        return categoryItemList.array1.find(x => x.id == itemId);
    }
}


export default ItemCustom;
