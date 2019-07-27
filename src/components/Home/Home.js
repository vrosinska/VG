import React from 'react';
import styles from './Home.scss'
import {home} from "../../data/datastore";


class Home extends React.Component {

    render() {
        return (
            <div>
                <a id="home"/>
                <div className={styles.mobile}>
                    <img className={styles.homeImage} src={home.mobile} alt=""/>
                </div>
                <div className={styles.iPad}>
                    <img className={styles.homeImage} src={home.iPad} alt=""/>
                </div>
                <div className={styles.WS}>
                    <img className={styles.homeImage} src={home.laptop} alt=""/>
                </div>

            </div>


        )
    }
}

export default Home;
