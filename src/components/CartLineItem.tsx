import { ChangeEvent, ReactElement } from "react";
import { CartItemType } from "../context/CartProvider";
import { ReducerAction } from "../context/CartProvider";
import { ReducerActionsType } from "../context/CartProvider";

type PropsType = {
  item: CartItemType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTION: ReducerActionsType;
};

const CartLineItem = ({ item, dispatch, REDUCER_ACTION }: PropsType) => {
  const img: string = new URL(`../images/${item.sku}.jpg`, import.meta.url)
    .href;

  const lineTotoal: number = item.qty * item.price;

  const highestQty: number = 20 > item.qty ? 20 : item.qty;

  const optionValues: number[] = [...Array(highestQty).keys()].map(
    (i) => i + 1
  );

  const options: ReactElement[] = optionValues.map((val) => {
    return (
      <option key={`opt${val}`} value={val}>
        {val}
      </option>
    );
  });

  const onChangeQty = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: REDUCER_ACTION.QTY,
      payload: { ...item, qty: Number(e.target.value) },
    });
  };

  const onRemoveItem = () => {
    dispatch({
      type: REDUCER_ACTION.REMOVE,
      payload: item,
    });
  };

  const content = (
    <li className="cart__item">
      <img src={img} alt={item.name} className="cart__img" />
      <div aria-label="Item Name">{item.name}</div>
      <div aria-label="Price per Item">
        {new Intl.NumberFormat("en-UK", {
          style: "currency",
          currency: "KES",
        }).format(item.price)}
      </div>
      <label htmlFor="itemQty" className="offscreen">
        Item Quantity
      </label>
      <select
        name="itemQty"
        id="itemQty"
        className="cart__select"
        value={item.qty}
        aria-label="Item Quantity"
        onChange={onChangeQty}
      >
        {options}
      </select>
      <div className="cart__item--total" aria-label="Line Item Subtotal">
        {new Intl.NumberFormat("en-UK", {
          style: "currency",
          currency: "KES",
        }).format(lineTotoal)}
      </div>
      <button
        className="cart__button"
        aria-label="Remove Item For Cart"
        title="Remove Item For Cart"
        onClick={onRemoveItem}
      >
        Remove
      </button>
    </li>
  );

  return content;
};

export default CartLineItem;
