import { useState } from "react";
import { Typography } from "@mui/material";
import axios from "axios";
type Props = {};
type OrderData = {
  name: string;
  address: string;
};

const CheckoutPage = (props: Props) => {
  const [orderData, setOrderData] = useState<OrderData>({
    name: "",
    address: "",
  });
  const [isOrderSend, setOrderSend] = useState<boolean>(false);

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrderData((prevState) => ({
      ...prevState,
      name: e.target.value,
    }));
  };
  const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrderData((prevState) => ({
      ...prevState,
      address: e.target.value,
    }));
  };
  const onSend = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // to not reload whole page
    try {
      const { data } = await axios.post(
        "https://my-json-server.typicode.com/kznkv-skillup/server/orders",
        {
          name: orderData.name,
          address: orderData.address,
        }
      );
      setOrderData({
        name: data.name,
        address: data.address,
      });
      setOrderSend(true);
    } catch (e) {
      console.log(e);
    }
    //   .then((res) => res.data)
    //   .then(({ name, address }) => {
    //     setOrderData({ name, address });
    //     setOrderSend(true);
    //   });
  };
  const renderForm = () => {
    return (
      <form onSubmit={onSend}>
        <div>
          <input
            type="text"
            value={orderData.name}
            placeholder="Your name"
            onChange={handleName}
          />
        </div>
        <div>
          <input
            type="text"
            value={orderData.address}
            placeholder="Your address"
            onChange={handleAddress}
          />
        </div>
        <button>Send</button>
      </form>
    );
  };
  const renderMessage = () => {
    return (
      <div>
        <div>Dear, {orderData.name} thanks for your order!</div>
        <div>Address: {orderData.address}</div>
      </div>
    );
  };
  return (
    <>
      <Typography
        variant="h4"
        component={"h1"}
        sx={{
          margin: "30px 0",
        }}
      >
        Checkout
      </Typography>
      {isOrderSend ? renderMessage() : renderForm()}
    </>
  );
};

export default CheckoutPage;
