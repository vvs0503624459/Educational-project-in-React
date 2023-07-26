import { Button, Card, CardContent, TextField } from "@mui/material";
import "./ProductListItem.scss";
import { Component } from "react";
type Props = {
  title: string;
  description: string;
  type: string;
  capacity: string;
  price: number;
  image: string;
  // count: number;
};

type State = {
  count: number;
};

class ProductListItem extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      count: 2,
    };
    this.onIncrementClick = this.onIncrementClick.bind(this);
  }

  onIncrementClick() {
    console.log(this);
    this.setState({
      count: 3,
    });
  }

  render() {
    const { title, description, type, capacity, price, image } = this.props;
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
            <TextField value={this.state.count} size="small"></TextField>
            <Button variant="outlined" onClick={this.onIncrementClick}>
              +
            </Button>
          </div>
          <Button variant="outlined">Add to cart</Button>
        </CardContent>
      </Card>
    );
  }
}

// const ProductListItem = ({
//   title,
//   description,
//   type,
//   capacity,
//   price,
//   image,
// }: Props) => {};
export default ProductListItem;
