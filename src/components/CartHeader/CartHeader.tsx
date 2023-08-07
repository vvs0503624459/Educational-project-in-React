import CartTotal from "pages/Cart/CartTotal";
import productsArray, { Product, getProductsObject } from "utils/productsArray";

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
      <CartTotal productsInCart={productsInCart} />
    </div>
  );
};
export default CartHeader;
