import { Product, getProductsObject } from "utils/productsArray";
import { useAppSelector } from "redux/hooks";
type Props = {};
type ProductsObjectType = {
  [id: number]: Product;
};

type CartState = {
  [id: number]: number;
};

const CartTotal = (props: Props) => {
  const productsObject: ProductsObjectType = getProductsObject(
    useAppSelector((state) => state.products)
  );
  const productsInCart: CartState = useAppSelector(
    (state) => state.productsInCart
  );

  // console.log(productsInCart[2]);
  // console.log(productsObject[2].price * productsInCart[2]);
  return (
    <div>
      Total: ${" "}
      {Object.keys(productsInCart).reduce(
        (total, id) =>
          total +
          productsObject[parseInt(id!)]?.price * productsInCart[parseInt(id!)],
        0
      )}
    </div>
  );
};

export default CartTotal;
