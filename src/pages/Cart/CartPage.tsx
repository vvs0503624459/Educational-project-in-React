import { Typography } from "@mui/material";
import CartTotal from "./CartTotal";
import CartProductList from "./CartProductList";
type Props = {
  productsInCart: {
    [id: number]: number;
  };
};

const CartPage = ({ productsInCart }: Props) => {
  return (
    <div>
      <Typography variant="h4" component="h1" sx={{ margin: "30px 0" }}>
        CartPage
      </Typography>
      <CartProductList productsInCart={productsInCart} />
      <CartTotal productsInCart={productsInCart} />
    </div>
  );
};

export default CartPage;
