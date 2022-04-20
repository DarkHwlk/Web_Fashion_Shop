import React from "react";
/* Router */
import {useLocation} from 'react-router-dom';

/* Components */
import Products from "./Products";
import ContainerFilterProducts from "../products_filter/ContainerFilterProducts";

function ContainerProducts() {

    const location = useLocation();  // info about current url

    return (
    <div id="wrapper-content">
        {/* Title */}
        <div className="headline">
            <h3>HOT MAN ITEMS</h3>
        </div>
        {/* Block filter */}
        <ContainerFilterProducts/>
        {/* Products */}
        <Products pathURL={location.pathname}/>
        {/* Index */}
        <div id="index">
            <a className="index-1 page-current" href="#">1</a>
            <a className="index-2" href="#">2</a>
            <a className="index-3" href="#">3</a>
            <a className="index-4" href="#">4</a>
            <a className="index-5" href="#">5</a>
            <a href="#">...</a>
        </div>
    </div>
    );
}

export default ContainerProducts;