
/* Components */
import CartItem from './cart/CartItem.js';
import CartBill from './cart/CartBill.js'

function Cart() {
    return (
        <div id="wrapper-content">
            {/* Tittle */}
            <div class="headline">
                <h3>CART</h3>
            </div>  
            {/* Cart container */}
            <div className="cart-container">
                <div className="cart-content">
                    <div className="cart-content-title">
                        <h2>5 products</h2>
                    </div>
                    <table className="cart-table-items">
                        <thead>
                            <tr>
                                <th className="col-item">PRODUCT</th>
                                <th className="col-price">PRICE</th>
                                <th className="col-quantity">QUANTITY</th>
                                <th className="col-total">TOTAL</th>
                                <th className="col-check">
                                    <input type="checkbox"/>
                                </th>
                            </tr>
                        </thead>
                        {/* List items */}
                        <tbody>
                            <CartItem/>
                        </tbody>
                    </table>
                </div>
                {/* Bill */}
                <CartBill/>
            </div>

        </div>
    );
}

export default Cart;