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
// const Header = (props: Props) => {
//   console.log(props);
//   return (
//     <h1 className="text">
//       Some {props.title}, Year {props.year}
//     </h1>
//   );
// };
// export default Header;

// const user = {
//     name: "Jack"

// }
// destructuring props
const Header = ({ title, year }: Props) => {
  return (
    <h1 className="text">
      Some {title}, Year {year}
    </h1>
  );
};
export default Header;
