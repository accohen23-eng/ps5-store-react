function CartSummary(props) {
    const today = new Date().toLocaleDateString("he-IL");

    let priceStatus = "";
    if (props.sum > 1000) {
        priceStatus = "Expensive";
    } else if (props.sum > 0) {
        priceStatus = "Cheap";
    }

    return (
        <div>
            <p className="date-badge">Current date: <span>{today}</span></p>
            <button className="reset-btn" onClick={props.onReset}>Reset</button>
            <h2>PS5 Console & Accessories</h2>

            <h3 style={{ textAlign: "center", color: "blue" }}>
                Total amount: <span>{props.count}</span>
            </h3>
            <h3 style={{ textAlign: "center", color: "green" }}>
                Total price: <span>{props.sum.toLocaleString()}</span> ILS
            </h3>
            <h3 style={{ textAlign: "center", color: "purple" }}>
                Price check: <span>{priceStatus}</span>
            </h3>
            <h3 style={{ textAlign: "center", color: "orange" }}>
                Products list in cart: <span>{props.cartProducts.join(", ")}</span>
            </h3>
        </div>
    );
}

export default CartSummary;