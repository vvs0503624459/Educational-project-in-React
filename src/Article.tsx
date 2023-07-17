type Props = {
  title: string;
  description: string;
  author: string;
};
const Article = ({ title, description, author }: Props) => {
  //   console.log(Props);
  return (
    <div>
      <h2
        style={{
          backgroundColor: "purple",
          color: "white",
          padding: "15px",
        }}
      >
        First {title}
      </h2>
      <p> Second {description}</p>
      <div> Third {author}</div>
    </div>
  );
};
export default Article;
