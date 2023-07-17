import "./Article.scss";

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
        //     style={{
        //       backgroundColor: title === "News 1" ? "purple" : "green",
        //       color: "white",
        //       padding: "15px",
        //     }}
        className="article-title"
      >
        First {title}
      </h2>
      <p> Second {description}</p>
      <div> Third {author}</div>
    </div>
  );
};
export default Article;
