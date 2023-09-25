// import productsArray, { Product, getProductsObject } from "utils/productsArray";
import { Product, getProductsObject } from "utils/productsArray";
import CartProductListItem from "./CartProductListItem";
import { useAppSelector } from "redux/hooks";

type Props = {
  CartItem?: any;
};
type ProductsObjectType = {
  [id: number]: Product;
};

const CartProductList = ({ CartItem = CartProductListItem }: Props) => {
  const productsInCart = useAppSelector((state) => state.productsInCart);
  const productsObject: ProductsObjectType = getProductsObject(
    useAppSelector((state) => state.products)
  );
  // const test = getProductsObject(productsArray);
  // console.log(test);
  return (
    <>
      {Object.keys(productsInCart).map((id) => (
        <CartItem
          // key={productsObject[parseInt(id!)]}
          key={parseInt(id!)}
          product={productsObject[parseInt(id!)]}
          productCount={productsInCart[parseInt(id!)]}
        />
      ))}
    </>
  );
};

export default CartProductList;
