import { Grid, Typography } from "@mui/material";
import CartTotal from "./CartTotal";
import CartProductList from "./CartProductList";
import CartProductListItemExtended from "./CartProductListItemExtended";
type Props = {
  productsInCart: {
    [id: number]: number;
  };
  removeProductFromCart: (id: number) => void;
};

const CartPage = ({ productsInCart, removeProductFromCart }: Props) => {
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
            removeProductFromCart={removeProductFromCart}
          />
        </Grid>

        <CartTotal productsInCart={productsInCart} />
      </div>
    </div>
  );
};

export default CartPage;
