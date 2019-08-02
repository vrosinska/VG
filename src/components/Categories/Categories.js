import React from "react"
import Products from "../Products/Products";
import {categoriesData} from "../../data/datastore";

class Categories extends React.Component {

    render() {
        const category = this.props.match.params.path;
        const categoryProps =
            {
                ...this.props,
                title: categoriesData[category].title,
                array1: categoriesData[category].array1,
                categoryId: category
            };
        return React.createElement(() => React.createElement(Products, categoryProps))
    }

}

export default Categories;