import { Button, TextField } from "@mui/material";

type Props = {
  onDecrementClick: () => void;
  onIncrementClick: () => void;
  count: number;
};

const Quantity = ({ count, onIncrementClick, onDecrementClick }: Props) => {
  return (
    <div className="product-quantity">
      <Button
        variant="outlined"
        onClick={() => onDecrementClick()}
        disabled={count <= 1}
      >
        -
      </Button>
      <TextField value={count} size="small" />
      <Button variant="outlined" onClick={() => onIncrementClick()}>
        +
      </Button>
    </div>
  );
};

export default Quantity;
