import { Button, Card, CardContent, TextField } from "@mui/material";
import "./ProductListItem.scss";
type Props = {
  title: string;
  description: string;
  type: string;
  capacity: string;
  price: number;
  image: string;
};

const ProductListItem = ({
  title,
  description,
  type,
  capacity,
  price,
  image,
}: Props) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <div className="product-image">
          <img src={image} alt={title} />
        </div>
        <h2 className="product-title">{title}</h2>
        <p className="product-description">{description}</p>
        <div className="product-features">Type: {type}</div>
        <div className="product-capacity">Capacity: {capacity}</div>
        <div className="product-price">
          Price: <span>${price}</span>
        </div>
        <div className="prodact-quantity">
          <Button variant="outlined">-</Button>
          <TextField value="1" size="small"></TextField>
          <Button variant="outlined">+</Button>
        </div>
        <Button variant="outlined">Add to cart</Button>
      </CardContent>
    </Card>
  );
};
export default ProductListItem;
