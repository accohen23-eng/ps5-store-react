import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";

function ProductDetails(props) {
    const params = useParams();
    const productId = Number(params.id);

    // מציאת המוצר לפי ה-ID מהכתובת
    const product = products.find(function (item) {
        return item.id === productId;
    });

    // ניהול התמונה הנוכחית והודעת ההוספה לסל באמצעות State
    const [currentImage, setCurrentImage] = useState(product ? product.mainImage : "");
    const [message, setMessage] = useState("...");

    if (!product) {
        return (
            <div>
                <h3>Product not found</h3>
                <Link to="/">
                    <button>back to main page</button>
                </Link>
            </div>
        );
    }

    function handleAddToCart() {
        props.onAddToCart(product.name, product.price);
        setMessage("Product added to cart");
    }

    return (
        <div className="product-card">
            <h3>{product.name}</h3>
            <p>{product.description}</p>

            <img id="mainImage" src={currentImage} alt={product.name} />

            <Link to="/">
                <button>back to main page</button>
            </Link>

            <button onClick={handleAddToCart}>Add to Cart</button>
            <p>{message}</p>

            <div>
                <button onClick={function () { setCurrentImage(product.images[0]); }}>Picture 1</button>
                <button onClick={function () { setCurrentImage(product.images[1]); }}>Picture 2</button>
                <button onClick={function () { setCurrentImage(product.images[2]); }}>Picture 3</button>
            </div>
        </div>
    );
}

export default ProductDetails;