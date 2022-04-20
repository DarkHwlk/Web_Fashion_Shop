import React, {useState} from "react";

function ProductOptionBox(props) {

    const {color, size, onCheckSize} = props;  

    const [sizeCheck, setSizecheck] = useState(-1);

    const showSizeList = (sizeList) => {
        let result = null;
        result = sizeList.map((size, index) => {
            if(sizeCheck===index)
                return <div 
                    key={index}
                    className="product-size active"
                    onClick={() => clickCheckSize(-1)}
                >{size}</div>;
            return <div 
                key={index}
                className="product-size"
                onClick={() => clickCheckSize(index)}
            >{size}</div>
        });
        return result;
    }

    const clickCheckSize = (index) => {
        setSizecheck(index);
        if(index===-1){
            onCheckSize(size);
        }else{
            onCheckSize(size[index]);
        }
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