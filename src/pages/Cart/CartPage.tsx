import { Grid, Typography } from "@mui/material";
import CartTotal from "./CartTotal";
import CartProductList from "./CartProductList";
import CartProductListItemExtended from "./CartProductListItemExtended";
import { useAppSelector } from "redux/hooks";
import { Link } from "react-router-dom";
type Props = {};

const CartPage = (props: Props) => {
  const productsInCart = useAppSelector((state) => state.productsInCart);
  return (
    <div>
      <Typography variant="h4" component="h1" sx={{ margin: "30px 0" }}>
        Cart
      </Typography>
      <div>
        <Grid container spacing={4}>
          <CartProductList
            productsInCart={productsInCart}
            CartItem={CartProductListItemExtended}
          />
        </Grid>

        <CartTotal productsInCart={productsInCart} />

        <Link to="/checkout">Proceed to checkout</Link>
      </div>
    </div>
  );
};

export default CartPage;
