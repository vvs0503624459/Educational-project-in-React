import { Button, Card, CardContent } from "@mui/material";
import "./ProductListItem.scss";
type Props = {
  title: string;
  description: string;
  type: string;
  capacity: string;
  price: number;
};

const ProductListItem = ({
  title,
  description,
  type,
  capacity,
  price,
}: Props) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <h2 className="product-title">{title}</h2>
        <p className="product-description">{description}</p>
        <div className="product-features">{type}</div>
        <div className="product-capacity">{capacity}</div>
        <div className="product-price">
          Price: <span>${price}</span>
        </div>
        <Button variant="outlined">Add to cart</Button>
      </CardContent>
    </Card>
  );
};
export default ProductListItem;
