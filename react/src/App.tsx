import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import LikeDislike from "./components/like-dislike";
import { AverageRating, Rating, RatingsList } from "./components/ratings";
import AutoCompleteInput from "./components/autocomplete-input";

function App() {
  const [count, setCount] = useState(0);
  const ratings = [
    {
      name: "test",
      content: "test",
      rate: 1,
    },

    {
      name: "test2",
      content: "test",
      rate: 2,
    },

    {
      name: "test3",
      content: "test",
      rate: 4,
    },
    {
      name: "test4",
      content: "test",
      rate: 4,
    },
  ];

  return (
    <div className="App">
      <h1>Like/Dislike</h1>
      <LikeDislike />
      <h1>Ratings</h1>
      <h2>Rating</h2>
      <Rating name="rating" content="" rate={3} />
      <h2>Average Rating</h2>
      <AverageRating ratings={ratings} />
      <h2>Ratings List</h2>
      <RatingsList ratings={ratings} />
      <h1>Autocomplete Input</h1>
      <AutoCompleteInput />
    </div>
  );
}

export default App;
