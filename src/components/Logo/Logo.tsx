import logo from "assets/RozetkaLogo.svg";
type Props = {};
const Logo = (props: Props) => {
  return (
    <div className="logo">
      <img src={logo} alt="Fake-shop" />
    </div>
  );
};
export default Logo;
