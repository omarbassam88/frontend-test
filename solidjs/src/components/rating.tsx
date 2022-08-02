import { Component } from "solid-js";

interface IRating {
  name: string;
  content: string;
  rate: number;
}

export function Rating(props: IRating): Component {
  return (
    <div>
      <For each={Array(5)}>
        {(star, index) => (
          <i class={"fa fa-star " + (index() < props.rate ? "filled" : "")}></i>
        )}
      </For>
    </div>
  );
}

export function AverageRating(props: { ratings: IRating[] }): Component {
  const sum = props.ratings.reduce((acc, item) => {
    acc += item.rate;
    return acc;
  }, 0);
  const average = Math.ceil(sum / props.ratings.length);
  return (
    <div>
      <Rating name="average rating" content="Average Rating" rate={average} />
    </div>
  );
}

export function RatingsList(props: { ratings: IRating[] }): Component {
  return (
    <div>
      <For each={props.ratings}>
        {(rating, i) => (
          <Rating
            name={rating.name}
            content={rating.content}
            rate={rating.rate}
          />
        )}
      </For>
    </div>
  );
}
