import { Button, Card, CardContent, TextField } from "@mui/material";
import "./ProductListItem.scss";
import { useState } from "react";
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
  const [count, setCount] = useState<number>(1);
  const [color, setColor] = useState<string>("green");

  const changeColor = () => {
    setColor((prevState) => (prevState === "green" ? "red" : "green"));
  };
  const onIncrementClick = () => {
    setCount((prevState) => prevState + 1);
  };
  const onDecrementClick = () => {
    setCount((prevState) => prevState - 1);
  };
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
        <div className={color}>Color: {color}</div>
        <button onClick={changeColor}>Change color</button>
        <div className="prodact-quantity">
          <Button
            variant="outlined"
            onClick={onDecrementClick}
            disabled={count <= 1}
          >
            -
          </Button>
          <TextField value={count} size="small"></TextField>
          <Button variant="outlined" onClick={onIncrementClick}>
            +
          </Button>
        </div>
        <Button variant="outlined">Add to cart</Button>
      </CardContent>
    </Card>
  );
};
export default ProductListItem;
