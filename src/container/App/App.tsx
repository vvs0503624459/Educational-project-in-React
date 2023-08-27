import Header from "../Header/Header";
import CssBaseline from "@mui/material/CssBaseline";
import { StyledEngineProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";
import Home from "pages/Home/Home";
import AboutUS from "pages/AboutUs/AboutUS";
import Shipment from "pages/Shipment/Shipment";
import Payment from "pages/Payment/Payment";
import CartPage from "pages/Cart/CartPage";
import { omit } from "lodash";
import CheckoutPage from "pages/Checkout/CheckoutPage";
import ProductPage from "pages/Product/ProductPage";
import { fetchProducts } from "redux/productsReducer";
import { useAppDispatch } from "redux/hooks";

type Props = {};

const App = (props: Props) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <Header />
      {/* <button onClick={() => removeProductFromCart(1)}>Delete from cart</button> */}
      <Container>
        <Routes>
          {/* <Route
            path="/"
            element={<Home addProductToCart={addProductToCart} />}
          /> */}
          <Route path="/" element={<Home />} />

          <Route path="/cart" element={<CartPage />} />
          <Route path="/about-us" element={<AboutUS />} />
          <Route path="/shipmet" element={<Shipment />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/products/:id" element={<ProductPage />} />
        </Routes>
      </Container>
    </StyledEngineProvider>
  );
};
export default App;
