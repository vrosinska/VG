import React from 'react';
import styles from './ItemCustom.scss'
import {categoriesData} from "../../data/datastore";
// import ReactHtmlParser from 'react-html-parser';
import classNames from 'classnames';
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


class ItemCustom extends React.Component {
    state = {
        showComponent: false
    };
    handleChange = () =>
        this.setState({showComponent: !this.state.showComponent})


    render() {
        const itemData = this.getItemDataFromDataStore(this.props.match)

        return (
            <div className={styles.container}>
                <a id="itemcustom"/>
                <h4>{itemData.name}</h4>
                <div className={classNames('row', styles.rowCont)}>
                    <div className={classNames('col-12 col-md-6', styles.cont1)}>
                        {this.state.showComponent ?
                            <div id="frame" className={styles.frame}>
                                <img className={styles.image}
                                     src={itemData.img} alt=""
                                     style={{width: '100%'}}/>
                            </div>
                            : <div className={styles.noframe}>
                                <img className={styles.image}
                                     src={itemData.img} alt=""
                                     style={{width: '100%'}}/>
                            </div>
                        }
                    </div>
                    <div className={classNames('col-12 col-md-6', styles.cont2)}>
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
                                    <span> {itemData.priceFramed} USD </span>
                                    <a href="#"><FontAwesomeIcon ahref="#" className="mr-1"
                                                                 icon={faShoppingCart}
                                                                 style={{color: '#A00000'}}/>
                                    </a>
                                </div>
                                :
                                <div className={styles.overview}>
                                    <span> {itemData.price} USD </span>
                                    <a href="#"><FontAwesomeIcon ahref="#" className="mr-1"
                                                                 icon={faShoppingCart}
                                                                 style={{color: '#A00000'}}/>
                                    </a>
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