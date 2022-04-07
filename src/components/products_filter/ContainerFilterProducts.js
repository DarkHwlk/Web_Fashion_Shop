import React,{useState} from "react";

/* Components */
import SortProducts from "./SortProducts";

function ContainerFilterProducts() {
    return (
        <div className="block-products-filter">
            <SortProducts/>
        </div>
    );
}

export default ContainerFilterProducts;