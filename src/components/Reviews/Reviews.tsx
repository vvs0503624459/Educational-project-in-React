import {
  Button,
  Card,
  CardContent,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import { useState } from "react";

type Props = {};
type Review = {
  name: string;
  text: string;
};

const Reviews = (props: Props) => {
  const arrReviews = [
    {
      name: "Jack",
      text: "lorem",
    },
    {
      name: "Denisse",
      text: "lorem2",
    },
  ];
  const [reviews, setReviews] = useState<Review[]>(arrReviews);
  const [newReview, setNewReview] = useState<Review>({
    name: "",
    text: "",
  });
  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewReview((prevState) => ({
      ...prevState,
      name: e.target.value,
    }));
  };
  const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewReview((prevState) => ({
      ...prevState,
      text: e.target.value,
    }));
  };
  const onSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newReview.name === "" || newReview.text === "") {
      alert("All fields are required!!!");
    } else {
      setReviews((prevState) => {
        return [...prevState, newReview];
      });
      setNewReview({
        name: "",
        text: "",
      });
    }
  };
  console.log(newReview);
  return (
    <>
      <Typography variant="h4" component={"h2"} sx={{ margin: "30px 0" }}>
        Reviews
      </Typography>
      {reviews.map(({ name, text }, i) => (
        <Card variant="outlined" key={i} sx={{ marginBottom: "15px" }}>
          <CardContent>
            <Typography variant="h6" component="div">
              {name}:
            </Typography>
            <div>{text}</div>
          </CardContent>
        </Card>
      ))}
      <form onSubmit={onSend}>
        <Typography variant="h5" component={"div"}>
          Please leave a review
        </Typography>
        <div>
          <TextField
            size="small"
            placeholder="Your name"
            value={newReview.name}
            onChange={handleName}
          />
        </div>
        <div>
          <TextareaAutosize
            minRows={5}
            placeholder="Your review"
            value={newReview.text}
            onChange={handleText}
          />
        </div>
        <Button variant="outlined" type="submit">
          ADD
        </Button>
      </form>
    </>
  );
};

export default Reviews;
