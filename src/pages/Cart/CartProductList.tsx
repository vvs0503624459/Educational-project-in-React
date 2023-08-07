import productsArray, { Product, getProductsObject } from "utils/productsArray";

type Props = {
  productsInCart: {
    [id: number]: number;
  };
};
type ProductsObjectType = {
  [id: number]: Product;
};
const CartProductList = ({ productsInCart }: Props) => {
  const productsObject: ProductsObjectType = getProductsObject(productsArray);
  return (
    <div>
      {Object.keys(productsInCart).map((productId) => (
        <div key={productId}>
          {productsObject[parseInt(productId)].title}:{" "}
          {productsInCart[parseInt(productId)]}: price:{"$ "}
          {productsObject[parseInt(productId)].price}
        </div>
      ))}
    </div>
  );
};

export default CartProductList;
