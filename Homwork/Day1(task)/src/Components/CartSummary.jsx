export default function CartSummary({ cart }) {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="mt-3 font-bold">
      <p>Total Items : {totalItems}</p>
      <P>Total Price : {totalPrice}</P>
    </div>
  );
}
