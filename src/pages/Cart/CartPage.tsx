import { Grid, Typography } from "@mui/material";
import CartTotal from "./CartTotal";
import CartProductList from "./CartProductList";
import CartProductListItemExtended from "./CartProductListItemExtended";
import { Link } from "react-router-dom";
type Props = {};

const CartPage = (props: Props) => {
  return (
    <div>
      <Typography variant="h4" component="h1" sx={{ margin: "30px 0" }}>
        Cart
      </Typography>
      <div>
        <Grid container spacing={4}>
          <CartProductList CartItem={CartProductListItemExtended} />
        </Grid>
        <CartTotal />
        <Link to="/checkout">Proceed to checkout</Link>
      </div>
    </div>
  );
};

export default CartPage;
