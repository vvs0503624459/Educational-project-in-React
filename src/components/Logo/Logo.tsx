import logo from "assets/RozetkaLogo.svg";
type Props = {};
const Logo = (props: Props) => {
  return (
    <div className="logo" style={{ marginTop: "7px" }}>
      <img src={logo} alt="Fake-shop" />
    </div>
  );
};
export default Logo;
