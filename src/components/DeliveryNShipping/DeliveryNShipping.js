import React from 'react';
import styles from './DeliveryNShipping.scss'
import {deliveryNShipping} from "../../data/datastore";
import ReactHtmlParser from 'react-html-parser';

class DeliveryNShipping extends React.Component {

    render() {
        return (
            <div className={styles.container}>
                <a id="delivery"/>
                <h4>Delivery & Shipping</h4>
                <div className={styles.qNa}>
                    {deliveryNShipping.map((qNaItem, index) => {
                        return (
                            <div key={index}>
                                <div className={styles.quest}>
                                    {ReactHtmlParser(qNaItem.quest)}
                                </div>
                                <div className={styles.answer}>
                                    {ReactHtmlParser(qNaItem.answer)}
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>


        )
    }
}

export default DeliveryNShipping;