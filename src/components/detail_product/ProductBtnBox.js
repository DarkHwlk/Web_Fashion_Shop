import React, {useState} from "react";

function ProductBtnBox(props) {

    const {onAddToCart} = props;  

    const [heart, setHeart] = useState(false);

    return (
        <div id="product-option-box">
        <button 
            className="btn-checkout-order"
            onClick={() => onAddToCart()}
        >ADD TO THE CART</button>
        <div className="product-heart-share">
            <div 
                className="product-heart"
                onClick={() => setHeart(prev => !prev)}
            >
                <i className={`fa fa-heart ${heart?"active":null}`} aria-hidden="true"/>
                <span>Add to favorites list</span>
            </div>
            <div className="product-share">
                <i className="fa fa-share-square" aria-hidden="true"/>
                <span>Share to your friend</span>
            </div>
        </div>
    </div>
    );
}
export default ProductBtnBox;