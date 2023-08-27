// import productsArray, { Product, getProductsObject } from "utils/productsArray";
import { Product, getProductsObject } from "utils/productsArray";
import CartProductListItem from "./CartProductListItem";
import { useAppSelector } from "redux/hooks";

type Props = {
  CartItem?: any;
  removeProductFromCart?: (id: number) => void;
  changeProductQuantity?: (id: number, count: number) => void;
};
type ProductsObjectType = {
  [id: number]: Product;
};
const CartProductList = ({
  removeProductFromCart,
  changeProductQuantity,
  CartItem = CartProductListItem,
}: Props) => {
  const productsArray = useAppSelector((state) => state.products);
  const productsObject: ProductsObjectType = getProductsObject(productsArray);
  const productsInCart = useAppSelector((state) => state.productsInCart);
  return (
    <>
      {Object.keys(productsInCart).map((id) => (
        <CartItem
          key={productsObject[parseInt(id!)]}
          product={productsObject[parseInt(id!)]}
          productCount={productsInCart[parseInt(id!)]}
          removeProductFromCart={removeProductFromCart}
          changeProductQuantity={changeProductQuantity}
        />
      ))}
    </>
  );
};

export default CartProductList;
