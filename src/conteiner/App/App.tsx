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
    1: 3,
    2: 3,
    3: 3,
  });
  const addProductToCart = (count: number, price: number) => {};

  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <Header productsInCart={productsInCart} />

      <Main addProductToCart={addProductToCart} />
    </StyledEngineProvider>
  );
};
export default App;
