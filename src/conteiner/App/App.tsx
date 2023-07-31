import Header from "../Header/Header";
import CssBaseline from "@mui/material/CssBaseline";
import { StyledEngineProvider } from "@mui/material/styles";
import Main from "conteiner/Main/Main";
import { useState } from "react";
type Props = {};
type CartDataProps = {
  totalCount: number;
  totalPrice: number;
};
const App = (props: Props) => {
  const [cartData, setCartData] = useState<CartDataProps>({
    totalCount: 0,
    totalPrice: 0,
  });
  const addProductToCart = (count: number, price: number) => {
    setCartData((prevState) => ({
      totalCount: prevState.totalCount + count,
      totalPrice: prevState.totalPrice + price * count,
    }));
  };

  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <Header cartData={cartData} />
      <button onClick={() => addProductToCart(5, 500)}>
        add to cart price & count
      </button>
      <Main />
    </StyledEngineProvider>
  );
};
export default App;
