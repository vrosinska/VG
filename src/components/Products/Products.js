import React from 'react';
import styles from './Products.scss'
// import {portraits} from "../../data/datastore";
import ReactHtmlParser from 'react-html-parser';
import classNames from 'classnames';
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import PropTypes from 'prop-types';

class Products extends React.Component {

    state = {
        title: this.props.title || '',
        array1: this.props.array1 || [],
    };
    static
    propTypes = {
        title: PropTypes.string.isRequired,
        array1: PropTypes.array.isRequired,
    };


    static generateItemUrl(categoryId, itemId) {
        return "#" + categoryId + "/" + itemId;
    }

    render() {
        return (
            <div className={styles.container}>
                <h4>{this.state.title}</h4>
                <div className={classNames('row', styles.rowCont)}>

                    {this.state.array1.map((item, id) => {
                        return (
                            <div className="col-md-4 col-sm-6 col-lg-3" key={id}>
                                <div className={classNames(styles.thumbCont, 'img-thumbnail')}>
                                    <a href="#"/>
                                    <div className={styles.imgCont}>
                                        <img className={styles.image} src={item.img} alt=""
                                             style={{width: '100%'}}/>
                                        <div className={styles.overview}>
                                            <p> from ${item.price}</p>
                                            <a href={Products.generateItemUrl(this.props.categoryId, id)}><FontAwesomeIcon ahref="#"
                                                className="mr-1"
                                                icon={faShoppingCart}
                                                style={{color: '#A00000'}}/></a>
                                        </div>
                                    </div>
                                    <div className="caption">
                                        <p className={styles.name}> {ReactHtmlParser(item.name)}</p>
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

export default Products;
