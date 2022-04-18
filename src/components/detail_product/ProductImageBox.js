import React, {useState} from "react";

function ProductImageBox(props) {

    const {img, list} = props;
    const [mainImage, setMainImage] = useState(img);

    const ImageList = (list) => {
        let result = null;
        result = list.map((item, index) => {
            return <img src={item} key={index} 
            onClick={() => setMainImage(item)}/>;
        });
        return result;
    }    

    return (
    <div id="product-image-box">
        <div className="product-image-list">
            {ImageList(list)}
        </div>
        <div className="product-image-main">
            <img src={mainImage} />
        </div> 
    </div>
    );
}
export default ProductImageBox;