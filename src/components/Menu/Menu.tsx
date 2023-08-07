// import { Button } from "@mui/material";
// import { NavLink } from "react-router-dom";
// import "./MenuItem.scss";
import MenuItem from "./MenuItem";
type Props = {
  // to: string;
};

const Menu = (props: Props) => {
  return (
    <>
      {/* <Button color="inherit">
        <NavLink
          className={({ isActive }) =>
            isActive ? "menu-item-active" : "menu-item"
          }
          to="/"
        >
          Home
        </NavLink>
      </Button>
      <Button color="inherit">About us</Button>
      <Button color="inherit">Payment</Button>
      <Button color="inherit">Shipping</Button>
      <Button color="inherit">
        <NavLink to="/cart">Cart</NavLink>
      </Button> */}

      <MenuItem to="/">Home</MenuItem>
      <MenuItem to="/about-us">About us</MenuItem>
      <MenuItem to="/payment">Payment</MenuItem>
      <MenuItem to="/shipment">Shipment</MenuItem>
      <MenuItem to="/cart">Cart</MenuItem>
    </>
  );
};
export default Menu;
