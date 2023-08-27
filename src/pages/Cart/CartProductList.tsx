// import productsArray, { Product, getProductsObject } from "utils/productsArray";
import { Product, getProductsObject } from "utils/productsArray";
import CartProductListItem from "./CartProductListItem";
import { useAppSelector } from "redux/hooks";

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
  const productsArray = useAppSelector((state) => state.products);
  const productsObject: ProductsObjectType = getProductsObject(productsArray);

  return (
    <>
      {Object.keys(productsInCart).map((id) => (
        <CartItem
          key={productsObject[parseInt(id!)]}
          product={productsObject[parseInt(id!)]}
          productCount={productsInCart[parseInt(id!)]}
        />
      ))}
    </>
  );
};

export default CartProductList;
