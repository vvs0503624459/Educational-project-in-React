import { Button, Card, CardContent } from "@mui/material";
import { useParams } from "react-router-dom";
import productsArray, { Product, getProductsObject } from "utils/productsArray";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { toggleLike } from "redux/likeReducer";
import "./ProductPage";
type Props = {};
type ProductsObjectType = {
  [id: number]: Product;
};

const ProductPage = (props: Props) => {
  const { id } = useParams();
  const productsArray = useAppSelector((state) => state.products);
  const productsObject: ProductsObjectType = getProductsObject(productsArray);
  const isLiked = useAppSelector(
    (state) => state.productsLikeState[parseInt(id!)]
  );
  const dispatch = useAppDispatch();
  return (
    <>
      <Card variant="outlined">
        <CardContent>
          <Button
            variant="outlined"
            onClick={() => {
              dispatch(toggleLike(id!));
            }}
          >
            {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </Button>
          <div className="product-image">
            <img
              src={productsObject[parseInt(id!)].image}
              alt={productsObject[parseInt(id!)].title}
            />
          </div>
          <div className="product-title">
            {productsObject[parseInt(id!)].title}
          </div>
          <div className="product-description">
            {productsObject[parseInt(id!)].description}
          </div>
          <div className="product-description product-features">
            Price for one item: ${productsObject[parseInt(id!)].price}
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default ProductPage;
