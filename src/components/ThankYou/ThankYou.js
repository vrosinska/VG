import React from 'react';
import styles from './ThankYou.scss'
import {thanks} from "../../data/datastore";
import ReactHtmlParser from 'react-html-parser';

class ThankYou extends React.Component {

    render() {
        return (
            <div className={styles.container}>
                <a id="thanks"/>
                <h4>Order Confirmation</h4>
                <div className={styles.thanks}>
                    <div className={styles.headline}>
                        {ReactHtmlParser(thanks.headline)}
                    </div>
                    <div className={styles.text}>
                        {ReactHtmlParser(thanks.text)}
                    </div>
                </div>

            </div>
        )
    }
}

export default ThankYou;