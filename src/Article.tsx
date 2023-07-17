type Props = {
  title: string;
  description: string;
  author: string;
};
const Article = ({ title, description, author }: Props) => {
  //   console.log(Props);
  return (
    <h1 className="text">
      First {title}, Second {description}, Third {author}
    </h1>
  );
};
export default Article;
