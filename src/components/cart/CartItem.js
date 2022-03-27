function CartItem() {
    return (
    <tr>
        <td className="col-item">
            <div className="cart-item-info">
                <div className="cart-item-photo">
                    <a href="#" className="cart-img-container">
                        <img src="./Pictures/ao_thun_1.jpg"/>
                    </a>
                </div>
                <div className="cart-item-detail">
                    <a href="#">Black tshirt</a>
                    <p className="cart-item-type">Tshirt</p>
                    {/* Maybe have option like: size,color,... at here */}
                </div>
            </div>
        </td>
        <td className="col-price">
            <p className="cart-item-price">$5</p>
            <p className="cart-item-old-price">$10</p>
        </td>
        <td className="col-quantity">
            <div className="cart-item-quantity">
                <button className="cart-btn-quantity"><i class="fa fa-minus-square" /></button>
                <p>2</p>
                <button className="cart-btn-quantity"><i class="fa fa-plus-square" /></button>
            </div>
        </td>
        <td className="col-total">
            <p className="cart-item-total">$5</p>
        </td>
        <td className="col-check">
            <input type="checkbox"/>
        </td>
    </tr>
    );
}

export default CartItem;