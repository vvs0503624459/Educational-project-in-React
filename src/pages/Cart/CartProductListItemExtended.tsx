import { Card, CardContent, Grid } from "@mui/material";
import { Product } from "utils/productsArray";
import DeleteIcon from "@mui/icons-material";
import { Button } from "@mui/material";

type Props = {
  product: Product;
  productCount: number;
};

const CartProductListItemExtended = ({ product, productCount }: Props) => {
  return (
    <Grid item xs={12} sm={4}>
      <Card variant="outlined">
        <CardContent>
          <div className="product-image">
            <img src={product.image} alt="" />
          </div>
          <div className="product-title">{product.title}</div>
          <div className="product-description">{product.description}</div>
          <div className="product-description">
            Price for one item: ${product.price}
          </div>
          <div>Count: {productCount}</div>
          <Button variant="outlined">
            <DeleteIcon />
            Remove
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CartProductListItemExtended;
