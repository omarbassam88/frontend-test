import { useState } from "react";

export default function LikeDislike() {
  const [countLikes, setCountLikes] = useState<number>(100);
  const [liked, setLiked] = useState<boolean>(false);
  const [countDislikes, setCountDislikes] = useState<number>(25);
  const [disliked, setDisliked] = useState<boolean>(false);
  const onLikeBtnClicked = () => {
    !liked ? setCountLikes(countLikes + 1) : setCountLikes(countLikes - 1);
    if (disliked) {
      setCountDislikes(countDislikes - 1);
      setDisliked(false);
    }
    setLiked(!liked);
  };

  const onDislikeBtnClicked = () => {
    !disliked
      ? setCountDislikes(countDislikes + 1)
      : setCountDislikes(countDislikes - 1);
    if (liked) {
      setCountLikes(countLikes - 1);
      setLiked(false);
    }
    setDisliked(!disliked);
  };
  return (
    <div>
      <button
        className={"like-button " + (liked ? "liked" : "")}
        onClick={onLikeBtnClicked}
      >
        Likes |<span className="likes-counter"> {countLikes}</span>
      </button>
      <button
        className={"dislike-button " + (disliked ? "disliked" : "")}
        onClick={onDislikeBtnClicked}
      >
        Dislikes | <span className="dislikes-counter">{countDislikes}</span>
      </button>
    </div>
  );
}
