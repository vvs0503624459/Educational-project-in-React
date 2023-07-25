import { Button, Card, CardContent } from "@mui/material";
import "./ProductListItem.scss";
type Props = {
  modelNumber: string;
  price: number;
};

const ProductListItem = ({ modelNumber, price }: Props) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <h2 className="product-title">iPhone {modelNumber} Pro</h2>
        <p className="product-description">This is iPhon 14 Pro</p>
        <div className="product-features">Type: phone</div>
        <div className="product-price">
          Price: <span>${price}</span>
        </div>
        <Button variant="outlined">Add to cart</Button>
      </CardContent>
    </Card>
  );
};
export default ProductListItem;
