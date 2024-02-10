import useCart from "../hooks/useCart";
import { useState } from "react";
import CartLineItem from "./CartLineItem";

const Cart = () => {
  const [confirm, setConfirm] = useState<boolean>(false);
  const { dispatch, REDUCER_ACTION, totalItems, totalPrice, cart } = useCart();

  const onSubmitOrder = () => {
    dispatch({ type: REDUCER_ACTION.ADD });
    setConfirm(true);
  };

  const pageContent = confirm ? (
    <h2>Order Placed.</h2>
  ) : (
    <>
      <h2 className="offscreen">Cart</h2>
      <ul className="cart">
        {cart.map((item) => {
          return (
            <CartLineItem
              key={item.sku}
              item={item}
              dispatch={dispatch}
              REDUCER_ACTION={REDUCER_ACTION}
            />
          );
        })}
      </ul>
      <div className="__totals">
        <p>Total Items: {totalItems}</p>
        <p>Total Price: {totalPrice}</p>
        <button
          className="__submit"
          disabled={!totalItems}
          onClick={onSubmitOrder}
        >
          Place Order
        </button>
      </div>
    </>
  );

  const content = <main className="main main--cart">{pageContent}</main>;
  return content;
};

export default Cart;
