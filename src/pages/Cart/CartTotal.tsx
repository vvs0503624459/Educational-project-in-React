import { useAppSelector } from "redux/hooks";
import { Product, getProductsObject } from "utils/productsArray";
type Props = {};
type ProductsObjectType = {
  [id: number]: Product;
};

const CartTotal = (props: Props) => {
  const productsArray = useAppSelector((state) => state.products);
  const productsObject: ProductsObjectType = getProductsObject(productsArray);
  const productsInCart = useAppSelector((state) => state.productsInCart);
  return (
    <div>
      Total: ${" "}
      {Object.keys(productsInCart).reduce(
        (total, id) =>
          total +
          productsObject[parseInt(id!)].price * productsInCart[parseInt(id!)],
        0
      )}
    </div>
  );
};

export default CartTotal;
