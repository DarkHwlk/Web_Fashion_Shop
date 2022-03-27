function CartBill() {
    return (
        <div className="cart-checkout">
            <div className="cart-content-title">
                <h2>Bill</h2>
            </div>
            <table className="cart-table-checkout">
                <tr>
                    <th>Price:</th>
                    <td>100$</td>
                </tr>
                <tr>
                    <th className="cart-total-discount">Discount:</th>
                    <td className="cart-total-discount">20$</td>
                </tr>
                <tr>
                    <th className="cart-total-final">Total:</th>
                    <td className="cart-total-final">80$</td>
                </tr>
            </table>
            <button className="btn-checkout-order">ORDER</button>
        </div>
    );
}

export default CartBill;