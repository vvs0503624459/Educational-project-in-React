import { Typography } from "@mui/material";
import productsArray, { Product, getProductsObject } from "utils/productsArray";
import CartTotal from "./CartTotal";
type Props = {
  productsInCart: {
    [id: number]: number;
  };
};
type ProductsObjectType = {
  [id: number]: Product;
};

const CartPage = ({ productsInCart }: Props) => {
  const productsObject: ProductsObjectType = getProductsObject(productsArray);
  return (
    <div>
      <Typography variant="h4" component="h1" sx={{ margin: "30px 0" }}>
        CartPage
      </Typography>
      <CartTotal productsInCart={productsInCart} />
    </div>
  );
};

export default CartPage;
