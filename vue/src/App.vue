<script setup lang="ts">
import LikeDislike from "./components/LikeDislike.vue";
import Rating from "./components/Rating.vue";
import AutoCompleteInput from "./components/AutoCompleteInput.vue";

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
const sum = ratings.reduce((acc, item) => {
  acc += item.rate;
  return acc;
}, 0);
const average = ratings.length ? Math.ceil(sum / ratings.length) : 0;
</script>

<template>
  <h1>Like/Dislike</h1>
  <LikeDislike />
  <h1>Ratings</h1>
  <h2>Rating</h2>
  <Rating name="rating" content="individual rating" :rate="3" />
  <h2>Average Rating</h2>
  <Rating name="average-rating" content="Average rating" :rate="average" />
  <h2>RatingsList</h2>
  <Rating
    v-for="rating of ratings"
    :name="rating.name"
    :content="rating.content"
    :rate="rating.rate"
  />
  <h1>Autocomplete Input</h1>
  <AutoCompleteInput />
</template>

<style scoped></style>
