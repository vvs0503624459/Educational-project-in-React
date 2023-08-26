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
import { omit } from "lodash";
import CheckoutPage from "pages/Checkout/CheckoutPage";
import ProductPage from "pages/Product/ProductPage";

type Props = {};
type ProductsInCartType = {
  [id: number]: number;
};

const App = (props: Props) => {
  const [productsInCart, setProductsInCart] = useState<ProductsInCartType>({
    1: 1,
    2: 3,
  });
  // const addProductToCart = (id: number, count: number) => {
  //   setProductsInCart((prevState) => ({
  //     ...prevState,
  //     [id]: (prevState[id] || 0) + count,
  //   }));
  // };
  const removeProductFromCart = (id: number) => {
    setProductsInCart((prevState) => omit(prevState, [id]));
  };
  const changeProductQuantity = (id: number, count: number) =>
    setProductsInCart((prevState) => ({
      ...prevState,
      [id]: count,
    }));

  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <Header productsInCart={productsInCart} />
      {/* <button onClick={() => removeProductFromCart(1)}>Delete from cart</button> */}
      <Container>
        <Routes>
          {/* <Route
            path="/"
            element={<Home addProductToCart={addProductToCart} />}
          /> */}
          <Route path="/" element={<Home />} />

          <Route
            path="/cart"
            element={
              <CartPage
                removeProductFromCart={removeProductFromCart}
                changeProductQuantity={changeProductQuantity}
              />
            }
          />
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
