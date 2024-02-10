import { ReactElement } from "react";
import useCart from "../hooks/useCart";

type PropsType = {
  viewCart: boolean;
};

const Footer = ({ viewCart }: PropsType) => {
  const { totalItems, totalPrice } = useCart();

  const pageContent: ReactElement = viewCart ? (
    <p>Shopping Cart &copy; 2024</p>
  ) : (
    <>
      <p>Total items: {totalItems}</p>
      <p>Total price: {totalPrice}</p>
      <p>Shopping Cart &copy; 2024</p>
    </>
  );

  const content = <footer className="footer">{pageContent}</footer>;

  return content;
};

export default Footer;
