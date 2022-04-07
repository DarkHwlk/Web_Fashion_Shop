import React,{useState} from "react";

/* Components */

function SortProducts() {

    const [showListType, setShowListType] = useState(false);

    const onToggle = () =>{

    }

    return (
        <div className="products-sort">
            <span className="products-sort-title">Sort by:</span>
            <span 
                className="products-sort-type"
                onClick={() => setShowListType(prev => !prev)}
            >
                Price - High to Low
                <i class="fa fa-angle-down"></i>
            </span>
            <div 
                className={showListType?"products-sort-list":"hide"}
            >
                <p>Price - High to Low</p>
                <p>Price - Low to High</p>
            </div>
        </div>
    );
}

export default SortProducts;