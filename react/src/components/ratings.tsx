import React from "react";

interface IRating {
  name: string;
  content: string;
  rate: number;
}

export function Rating({ name, content, rate }: IRating) {
  const stars = new Array(5).fill(0);
  return (
    <div>
      {stars.map((star, index) => (
        <i className={"fa fa-star " + (index < rate ? "filled" : "")}></i>
      ))}
    </div>
  );
}

export function AverageRating({ ratings }: { ratings: IRating[] }) {
  const sum = ratings.reduce((acc, item) => {
    acc += item.rate;
    return acc;
  }, 0);
  const average = Math.ceil(sum / ratings.length);
  return (
    <div>
      <Rating name="average rating" content="" rate={average} />
    </div>
  );
}

export function RatingsList({ ratings }: { ratings: IRating[] }) {
  return (
    <div>
      {ratings.map((rating) => (
        <Rating key={rating.name} {...rating} />
      ))}
    </div>
  );
}
