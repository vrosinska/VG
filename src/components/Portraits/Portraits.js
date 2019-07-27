import React from 'react';
import styles from './Portraits.scss'
import {portraits} from "../../data/datastore";
import ReactHtmlParser from 'react-html-parser';
import classNames from 'classnames';
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Portraits extends React.Component {

    render() {
        return (
            <div className={styles.container}>
                {/*<a id="portraits"/>*/}
                <h4>Van Gogh Self-Portraits</h4>
                <div className={classNames('row', styles.rowCont)}>

                    {portraits.map((portraitsItem, id) => {
                        return (
                            <div className="col-md-4 col-sm-6 col-lg-3" key={id}>
                                <div className={classNames(styles.thumbCont, 'img-thumbnail')}>
                                    <a href="#"/>
                                    <div className={styles.imgCont}>
                                        <img className={styles.image} src={portraitsItem.img} alt=""
                                             style={{width: '100%'}}/>
                                        <div className={styles.overview}>
                                            <p> from ${portraitsItem.price}</p>
                                            <a href="#"><FontAwesomeIcon ahref="#" className="mr-1"
                                                                         icon={faShoppingCart}
                                                                         style={{color: '#A00000'}}/></a>
                                        </div>
                                    </div>
                                    <div className="caption">
                                        <p className={styles.name}> {ReactHtmlParser(portraitsItem.name)}</p>
                                    </div>

                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Portraits;
