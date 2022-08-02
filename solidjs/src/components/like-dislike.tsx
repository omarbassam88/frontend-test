import { Component, createSignal } from "solid-js";

export default function LikeDislike(): Component {
  const [countLikes, setCountLikes] = createSignal<number>(100);
  const [liked, setLiked] = createSignal<boolean>(false);
  const [countDislikes, setCountDislikes] = createSignal<number>(25);
  const [disliked, setDisliked] = createSignal<boolean>(false);
  const onLikeBtnClicked = () => {
    !liked()
      ? setCountLikes(countLikes() + 1)
      : setCountLikes(countLikes() - 1);
    if (disliked()) {
      setCountDislikes(countDislikes() - 1);
      setDisliked(false);
    }
    setLiked(!liked());
  };

  const onDislikeBtnClicked = () => {
    !disliked()
      ? setCountDislikes(countDislikes() + 1)
      : setCountDislikes(countDislikes() - 1);
    if (liked()) {
      setCountLikes(countLikes() - 1);
      setLiked(false);
    }
    setDisliked(!disliked());
  };
  return (
    <div>
      <button
        class={"like-button " + (liked() ? "liked" : "")}
        onClick={onLikeBtnClicked}
      >
        Likes |<span class="likes-counter"> {countLikes()}</span>
      </button>
      <button
        class={"dislike-button " + (disliked() ? "disliked" : "")}
        onClick={onDislikeBtnClicked}
      >
        Dislikes | <span class="dislikes-counter">{countDislikes}</span>
      </button>
    </div>
  );
}
