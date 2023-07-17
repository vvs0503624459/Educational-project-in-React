// const Header = () => {
//   return (
//     <header>
//       <h1 className="text">Some React.js</h1>
//     </header>
//   );
// };
// export default Header;
// export const Header = () => {
//   return (
//     <header>
//       <h1 className="text">Some React.js</h1>
//     </header>
//   );
// };
type Props = {
  title: string;
  year: number;
};
const Header = (props: Props) => {
  return (
    <h1 className="text">
      Some {props.title}, Year {props.year}
    </h1>
  );
};
export default Header;
