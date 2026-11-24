import { Link } from "react-router-dom";

function ProductCard(props) {
    const product = props.product;

    function handleAddClick() {
        props.onAddToCart(product.name, product.price);
    }

    return (
        <div className="product-card">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <img src={product.mainImage} alt={product.name} />

            <Link to={`/product/${product.id}`}>
                <button>More Info</button>
            </Link>

            <button onClick={handleAddClick}>Add</button>
            <p>{product.price.toLocaleString()} {product.currency}</p>
        </div>
    );
}

export default ProductCard;