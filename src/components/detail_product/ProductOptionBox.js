import React, {useState} from "react";

function ProductOptionBox(props) {

    const {color, size} = props;  

    const [sizeCheck, setSizecheck] = useState(0);

    const showSizeList = (sizeList) => {
        let result = null;
        result = sizeList.map((size, index) => {
            if(sizeCheck===index)
                return <div className="product-size active">{size}</div>;
            return <div className="product-size">{size}</div>
        });
        return result;
    }

    return (
    <div id="product-option-box">
        <div className="option-color">
            <p>COLOR:</p>
            <div className="product-color-list">
                <div className={`product-color ${color} active`}></div>
            </div>
        </div>
        <div className="option-size">
            <p>SIZE:</p>
            <div className="product-size-list">
                {showSizeList(size)}
            </div>
            <h4>How to choose size?</h4>
        </div>
    </div>
    );
}
export default ProductOptionBox;