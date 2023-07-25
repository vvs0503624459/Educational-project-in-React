import { Button, Card, CardContent } from "@mui/material";
import "./ProductListItem.scss";
type Props = {};

const ProductListItem = (props: Props) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <h2 className="product-title">iPhone 14 Pro</h2>
        <p className="product-description">This is iPhon 14 Pro</p>
        <div className="product-features">Type: phone</div>
        <div className="product-price">
          Price: <span>$1000</span>
        </div>
        <Button variant="outlined">Add to cart</Button>
      </CardContent>
    </Card>
  );
};
export default ProductListItem;
