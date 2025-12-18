import { useEffect, useState } from "react";
import ProductListPresenter from "./ProductListPresenter";

export default function ProductListContainer() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState("price");

  const fetchProducts = async () => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/products`
      );
      if (!res.ok) throw new Error("Failed at API request");

      const data = res.json();
      setProducts(data);
    } catch (error) {
      setError(error.message);
    }
  };

  const addToCart = (product) => {
    setCart((prev) => {
      const exsits = prev.find((item) => item.id === product.id);
      if (exsits) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === "price") return a.price - b.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductListPresenter
      products={sortedProducts}
      cart={cart}
      error={error}
      sortBy={sortBy}
      onSortChange={setSortBy}
      onAddToCart={addToCart}
    />
  );
}
