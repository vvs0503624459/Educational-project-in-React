import CartTotal from "pages/Cart/CartTotal";

import CartProductList from "pages/Cart/CartProductList";
type Props = {
  productsInCart: {
    [id: number]: number;
  };
};

const CartHeader = ({ productsInCart }: Props) => {
  return (
    <div>
      <CartProductList productsInCart={productsInCart} />
      <CartTotal productsInCart={productsInCart} />
    </div>
  );
};
export default CartHeader;
