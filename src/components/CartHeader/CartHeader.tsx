import CartTotal from "pages/Cart/CartTotal";

import CartProductList from "pages/Cart/CartProductList";
// import { useAppSelector } from "redux/hooks";
type Props = {};
// type Props = {
//   productsInCart: {
//     [id: number]: number;
//   };
// };

const CartHeader = (props: Props) => {
  // const productsInCart = useAppSelector((state) => state.productsInCart);
  return (
    <div>
      {/* <CartProductList productsInCart={productsInCart} /> */}
      <CartProductList />
      {/* <CartTotal productsInCart={productsInCart} /> */}
      <CartTotal />
    </div>
  );
};
export default CartHeader;
