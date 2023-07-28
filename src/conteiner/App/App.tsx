import Header from "../Header/Header";
import CssBaseline from "@mui/material/CssBaseline";
import { StyledEngineProvider } from "@mui/material/styles";
import Main from "conteiner/Main/Main";
type Props = {};
type CartDataProps = {
  totalCount: number;
  totalPrice: number;
};
const App = (props: Props) => {
  const [cartData, setCardData] = useState<CartDataProps>({
    totalCount: 10,
    totalPrice: 100,
  });
  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <Header />
      <Main />
    </StyledEngineProvider>
  );
};
export default App;
