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
};

class ProductListItem extends Component<Props> {
  render() {
    return (
      <Card variant="outlined">
        <CardContent>
          <div className="product-image">
            <img src={this.props.image} alt={this.props.title} />
          </div>
          <h2 className="product-title">{this.props.title}</h2>
          <p className="product-description">{this.props.description}</p>
          <div className="product-features">Type: {this.props.type}</div>
          <div className="product-capacity">
            Capacity: {this.props.capacity}
          </div>
          <div className="product-price">
            Price: <span>${this.props.price}</span>
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
