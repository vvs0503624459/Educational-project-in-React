import CssBaseline from "@mui/material/CssBaseline";
import { StyledEngineProvider } from "@mui/material/styles";
import Header from "container/Header/Header";

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
    </StyledEngineProvider>
  );
};
export default App;
