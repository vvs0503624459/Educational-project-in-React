import productsArray, { Product, getProductsObject } from "utils/productsArray";
type Props = {
  productsInCart: {
    [id: number]: number;
  };
};
type ProductsObjectType = {
  [id: number]: Product;
};

const CartTotal = ({ productsInCart }: Props) => {
  const productsObject: ProductsObjectType = getProductsObject(productsArray);
  return (
    <div>
      Total: ${" "}
      {Object.keys(productsInCart).reduce(
        (total, productId) =>
          total +
          productsObject[parseInt(productId)].price *
            productsInCart[parseInt(productId)],
        0
      )}
    </div>
  );
};

export default CartTotal;
