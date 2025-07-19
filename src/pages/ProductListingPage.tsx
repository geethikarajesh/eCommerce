import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>eCommerce Store</h1>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <p>&copy; 2025 eCommerce Store</p>
    </footer>
  );
}

type Product = {
  id: number;
  name: string;
  price: number;
};

type CartItem = Product & { quantity: number };

function ProductListingPage() {
  const navigate = useNavigate();
  const [products] = useState<Product[]>([
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 300 },
  ]);

  const handleAddToCart = (product: Product) => {
    const existingCart: CartItem[] = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );
    const existingItem = existingCart.find(
      (item: CartItem) => item.id === product.id
    );

    let updatedCart;
    if (existingItem) {
      updatedCart = existingCart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      );
    } else {
      updatedCart = [...existingCart, { ...product, quantity: 1 }];
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    navigate("/cart");
    alert(`${product.name} added to cart.`);
  };

  return (
    <div>
      <Header />
      <h2>Product Listing Page</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );
}

export default ProductListingPage;
