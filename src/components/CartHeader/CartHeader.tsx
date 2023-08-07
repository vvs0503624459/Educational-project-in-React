import CartTotal from "pages/Cart/CartTotal";
import productsArray, { Product, getProductsObject } from "utils/productsArray";
import CartProductList from "pages/Cart/CartProductList";
type Props = {
  productsInCart: {
    [id: number]: number;
  };
};
type ProductsObjectType = {
  [id: number]: Product;
};
const CartHeader = ({ productsInCart }: Props) => {
  const productsObject: ProductsObjectType = getProductsObject(productsArray);

  return (
    <div>
      <CartProductList productsInCart={productsInCart} />
      <CartTotal productsInCart={productsInCart} />
    </div>
  );
};
export default CartHeader;
