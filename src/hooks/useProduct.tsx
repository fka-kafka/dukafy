import { useContext } from "react";
import ProductsContext from "../context/PorductsProvider";
import { UseProductContextType } from "../context/PorductsProvider";

const useProduct = (): UseProductContextType => {
  return useContext(ProductsContext);
};

export default useProduct;
