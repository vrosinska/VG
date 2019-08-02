import React from 'react';
import styles from './TermsOfUse.scss'
import {termsOfUse} from "../../data/datastore";
import ReactHtmlParser from 'react-html-parser';

class TermsOfUse extends React.Component {

    render() {
        return (
            <div className={styles.container}>
                <a id="terms"/>
                <h4>Terms of Use</h4>
                <div className={styles.terms}>
                    {termsOfUse.map((termsItem, index) => {
                        return (
                            <div key={index}>
                                <div className={styles.headline}>
                                    {ReactHtmlParser(termsItem.headline)}
                                </div>
                                <div className={styles.description}>
                                    {ReactHtmlParser(termsItem.text)}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default TermsOfUse;