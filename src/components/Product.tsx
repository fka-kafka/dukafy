import { ProductType } from "../context/PorductsProvider";
import { ReducerActionsType, ReducerAction } from "../context/CartProvider";
import { ReactElement } from "react";

type PropsType = {
  product: ProductType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTION: ReducerActionsType;
  inCart: boolean;
};

const Product = ({
  product,
  dispatch,
  REDUCER_ACTION,
  inCart,
}: PropsType): ReactElement => {
  const img = new URL(`../images/${product.sku}.jpg`, import.meta.url).href;

  const onAddToCart = () => {
    dispatch({ type: REDUCER_ACTION.ADD, payload: { ...product, qty: 1 } });
  };

  const itemInCart = inCart ? "item in cart" : null;

  const content = (
    <article className="product">
      <h3>{product.name}</h3>
      <img src={img} alt={product.name} />
      <p>
        {new Intl.NumberFormat("en-UK", {
          style: "currency",
          currency: "KES",
        }).format(product.price)}{" "}
        {itemInCart}
      </p>
      <button onClick={onAddToCart}>Add to cart</button>
    </article>
  );

  return content;
};

export default Product;
