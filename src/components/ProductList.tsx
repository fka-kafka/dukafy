import useProduct from "../hooks/useProduct";
import useCart from "../hooks/useCart";
// import { UseProductContextType } from "../context/PorductsProvider";
import { ReactElement } from "react";
import Product from "./Product";

const ProductList = () => {
  const { dispatch, REDUCER_ACTION, cart } = useCart();
  const { products } = useProduct();

  let pageContent: ReactElement | ReactElement[] = <p>Loading items...</p>;

  if (products?.length) {
    pageContent = products.map(product => {
        const inCart: boolean = cart.some(item => item.sku === product.sku)

        return (
            <Product key={product.sku} product={product} dispatch={dispatch} REDUCER_ACTION={REDUCER_ACTION} inCart={inCart} />
        )
    })
  }

  const content = <main className="main main--products">{pageContent}</main>

  return content
};

export default ProductList;
