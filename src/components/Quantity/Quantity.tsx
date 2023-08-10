import { Button, TextField } from "@mui/material";

type Props = {
  onDecrementClick: () => void;
  onIncrementClick: () => void;
  count: number;
  minCount: number;
};

const Quantity = ({
  count,
  onIncrementClick,
  onDecrementClick,
  minCount,
}: Props) => {
  return (
    <div className="product-quantity">
      <Button
        variant="outlined"
        onClick={() => onDecrementClick()}
        disabled={count <= minCount}
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
