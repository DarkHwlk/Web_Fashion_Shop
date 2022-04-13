import React,{useState} from "react";

/* Components */
import SortProducts from "./SortProducts";
import FilterProducts from "./FilterProducts";

function ContainerFilterProducts() {
    return (
        <div className="block-products-filter">
            <FilterProducts/>
            <SortProducts/>
        </div>
    );
}

export default ContainerFilterProducts;