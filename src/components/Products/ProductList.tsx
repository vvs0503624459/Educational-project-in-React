import { Grid, Typography } from "@mui/material";
import ProductListItem from "./ProductListItem";
import productsArray from "utils/productsArray";

type Props = {
  addProductToCart: (id: number, count: number) => void;
};

const ProductList = ({ addProductToCart }: Props) => {
  return (
    <div>
      <Typography
        variant="h4"
        component={"h1"}
        sx={{
          marginTop: "30px",
          textTransform: "uppercase",
        }}
        align="center"
      >
        Product List
      </Typography>
      <Grid container spacing={4}>
        {/* {productsArray.filter(({category}) => category==="sport").map( */}
        {productsArray.map(
          ({ id, title, description, type, capacity, price, image }) => (
            <Grid item xs={12} sm={6} md={4} key={id}>
              <ProductListItem
                id={id}
                title={title}
                description={description}
                type={type}
                capacity={capacity}
                price={price}
                image={image}
                // addProductToCart={addProductToCart}
              />
            </Grid>
          )
        )}
      </Grid>
    </div>
  );
};
export default ProductList;
