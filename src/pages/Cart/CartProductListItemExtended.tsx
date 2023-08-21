import { Button, Card, CardContent, Grid } from "@mui/material";
import { Product } from "utils/productsArray";
import DeleteIcon from "@mui/icons-material/Delete";
import Quantity from "components/Quantity/Quantity";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useAppDispatch, useAppSelector } from "redux/hooks";
type Props = {
  product: Product;
  productCount: number;
  minCount: number;
  removeProductFromCart: (id: number) => void;
  changeProductQuantity: (id: number, count: number) => void;
};

const CartProductListItemExtended = ({
  product,
  productCount,
  removeProductFromCart,
  changeProductQuantity,
  minCount,
}: Props) => {
  const isLiked = useAppSelector(
    (state) => state.productsLikeState[product.id]
  );
  const dispatch = useAppDispatch();
  return (
    <Grid item xs={12} sm={4}>
      <Card variant="outlined">
        <CardContent>
          <Button
            variant="outlined"
            onClick={() => dispatch({ type: "toggle_like", id: product.id })}
          >
            {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </Button>
          <div className="product-image">
            <img src={product.image} alt="" />
          </div>
          <div className="product-title">{product.title}</div>
          <div className="product-description">{product.description}</div>
          <div className="product-description product-features">
            Price for one item: ${product.price}
          </div>
          <div className="product-features">Count: {productCount}</div>
          <Quantity
            minCount={0}
            count={productCount}
            onIncrementClick={() =>
              changeProductQuantity(product.id, productCount + 1)
            }
            onDecrementClick={() => {
              if (productCount <= 1) {
                removeProductFromCart(product.id);
              } else {
                changeProductQuantity(product.id, productCount - 1);
              }
            }}
          />
          <Button
            variant="outlined"
            // onClick={() => removeProductFromCart(product.id)}
            onClick={() =>
              dispatch({ type: "remove_from_cart", id: product.id })
            }
          >
            <DeleteIcon />
            Remove
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CartProductListItemExtended;
