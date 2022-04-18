import React, {useState} from "react";

function ProductTitleBox(props) {

    const {name, id, status, type, price, sale} = props;  

    const showPercentDiscount = (price, sale) => {
        let result = null;
        if(sale){
            let percent = (price-sale)/price*100;
            result = <div className="label-sale">
                Discount {percent.toFixed(2)}%
            </div>
        }
        return result;
    }

    return (
    <>
        <h3 className="product-name">{name.toUpperCase()}</h3> 
        <p className="product-type">{type}</p>
        <div className="product-price-code">
            <div className="detail-code">ID: {id}</div>
            <div className="price-info">
                {sale ? 
                <><span>{price}$</span><span>{sale}$</span></>
                : <span>{price}$</span>}
                
            </div>
            {showPercentDiscount(price, sale)}
        </div>
    </>
    );
}
export default ProductTitleBox;