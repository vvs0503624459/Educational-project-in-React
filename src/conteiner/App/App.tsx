import Header from "../Header/Header";
import CssBaseline from "@mui/material/CssBaseline";
import { StyledEngineProvider } from "@mui/material/styles";
import Main from "conteiner/Main/Main";
import { useState } from "react";
type Props = {};
type ProductsInCartType = {
  [id: number]: number;
};

const App = (props: Props) => {
  const [productsInCart, setProductsInCart] = useState<ProductsInCartType>({
    // productsArray.map(ProductsInCartType.[id]) not work
    1: 3,
    2: 3,
  });
  const addProductToCart = (id: number, count: number) => {
    setProductsInCart((prevState) => ({
      ...prevState,
      [id]: (prevState[id] || 0) + count,
    }));
  };

  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <Header productsInCart={productsInCart} />
      <button onClick={() => addProductToCart(2, 5)}>
        add to cart (id:2, count:5)
      </button>
      <Main addProductToCart={addProductToCart} />
    </StyledEngineProvider>
  );
};
export default App;
