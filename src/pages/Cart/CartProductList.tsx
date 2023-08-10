import productsArray, { Product, getProductsObject } from "utils/productsArray";
import CartProductListItem from "./CartProductListItem";

type Props = {
  productsInCart: {
    [id: number]: number;
  };
  CartItem?: any;
  removeProductFromCart?: (id: number) => void;
};
type ProductsObjectType = {
  [id: number]: Product;
};
const CartProductList = ({
  productsInCart,
  removeProductFromCart,
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
          removeProductFromCart={removeProductFromCart}
        />
      ))}
    </>
  );
};

export default CartProductList;
