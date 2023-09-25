import CartTotal from "pages/Cart/CartTotal";
import CartProductList from "pages/Cart/CartProductList";

type Props = {};

const CartHeader = (props: Props) => {
  return (
    <div>
      <CartProductList />
      <CartTotal />
    </div>
  );
};
export default CartHeader;
