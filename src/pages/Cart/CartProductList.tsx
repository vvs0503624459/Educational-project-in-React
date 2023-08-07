import productsArray, { Product, getProductsObject } from "utils/productsArray";
import CartProductListItem from "./CartProductListItem";

type Props = {
  productsInCart: {
    [id: number]: number;
  };
  CartItem?: any;
};
type ProductsObjectType = {
  [id: number]: Product;
};
const CartProductList = ({
  productsInCart,
  CartItem = CartProductListItem,
}: Props) => {
  const productsObject: ProductsObjectType = getProductsObject(productsArray);
  return (
    <>
      {Object.keys(productsInCart).map((productId) => (
        <CartItem
          key={productId}
          product={productsObject[parseInt(productId)]}
          productCount={productsInCart[parseInt(productId)]}
        />
      ))}
    </>
  );
};

export default CartProductList;
