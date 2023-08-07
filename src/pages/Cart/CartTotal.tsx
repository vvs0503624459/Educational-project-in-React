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
      <div>
        {Object.keys(productsInCart).map((productId) => (
          <div key={productId}>
            {productsObject[parseInt(productId)].title}:{" "}
            {productsInCart[parseInt(productId)]}: price:{"$ "}
            {productsObject[parseInt(productId)].price}
          </div>
        ))}
      </div>
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
    </div>
  );
};

export default CartTotal;
