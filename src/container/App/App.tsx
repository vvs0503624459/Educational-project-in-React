import Header from "../Header/Header";
import CssBaseline from "@mui/material/CssBaseline";
import { StyledEngineProvider } from "@mui/material/styles";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";
import Home from "pages/Home/Home";

import AboutUS from "pages/AboutUs/AboutUS";
import Shipment from "pages/Shipment/Shipment";
import Payment from "pages/Payment/Payment";
import CartPage from "pages/Cart/CartPage";
type Props = {};
type ProductsInCartType = {
  [id: number]: number;
};

const App = (props: Props) => {
  const [productsInCart, setProductsInCart] = useState<ProductsInCartType>({
    1: 1,
    2: 3,
  });
  const addProductToCart = (id: number, count: number) => {
    setProductsInCart((prevState) => ({
      ...prevState,
      [id]: (prevState[id] || 0) + count,
    }));
  };
  const removeProductFromCart = (id: number) => {
    setProductsInCart((prevState) => {
      let prevProductsInCart = { ...prevState };
      delete productsInCart[id];
      return prevProductsInCart;
    });
  };

  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <Header productsInCart={productsInCart} />
      <button onClick={() => removeProductFromCart(1)}>Delete from cart</button>
      <Container>
        <Routes>
          <Route
            path="/"
            element={<Home addProductToCart={addProductToCart} />}
          />
          <Route
            path="/cart"
            element={<CartPage productsInCart={productsInCart} />}
          />
          <Route path="/about-us" element={<AboutUS />} />
          <Route path="/shipmet" element={<Shipment />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </Container>
    </StyledEngineProvider>
  );
};
export default App;
