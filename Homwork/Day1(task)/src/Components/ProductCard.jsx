export default function ProductCard({ product, onAddCart }) {
  return (
    <div className="border border-black  m-3 p-3">
      <h3> {product.name}</h3>
      <p>Price : ₹{product.price}</p>
      <p>Rateing :{product.rateing}</p>
      <button onClick={() => onAddCart(product)}> Add to cart </button>
    </div>
  );
}
