import CartSummary from "./CartSummary";
import ProductCard from "./ProductCard";
import SortFilterControls from "./SortFilterControls";

export default function ProductListPresenter({
  products,
  cart,
  error,
  sortBy,
  onSortChange,
  onAddToCart,
}) {
  if (error) {
    return <p className="text-red-600">{error}</p>;
  }
  return (
    <div>
      <SortFilterControls value={sortBy} onChange={onSortChange} />
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddCart={onAddToCart}
        />
      ))}
      <CartSummary cart={cart} />
    </div>
  );
}
