import { Button, Card, CardContent, Grid } from "@mui/material";
import { Product } from "utils/productsArray";
import DeleteIcon from "@mui/icons-material/Delete";
import Quantity from "components/Quantity/Quantity";
type Props = {
  product: Product;
  productCount: number;
  removeProductFromCart: (id: number) => void;
  changeProductQuantity: (id: number, count: number) => void;
};

const CartProductListItemExtended = ({
  product,
  productCount,
  removeProductFromCart,
  changeProductQuantity,
}: Props) => {
  return (
    <Grid item xs={12} sm={4}>
      <Card variant="outlined">
        <CardContent>
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
            count={productCount}
            onIncrementClick={() =>
              changeProductQuantity(product.id, productCount + 1)
            }
            onDecrementClick={() =>
              changeProductQuantity(product.id, productCount - 1)
            }
          />
          <Button
            variant="outlined"
            onClick={() => removeProductFromCart(product.id)}
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
