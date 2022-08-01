<script lang="ts">
  import AutoCompleteInput from "./lib/AutoCompleteInput.svelte";
  import LikeDislike from "./lib/LikeDislike.svelte";
  import Rating from "./lib/Rating.svelte";

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

<main>
  <h1>Like/Dislike</h1>
  <LikeDislike />
  <h1>Ratings</h1>
  <h2>Rating</h2>
  <Rating name="rating" content="individual rating" rate={3} />
  <h2>Average Rating</h2>
  <Rating name="average rating" content="Average Rating" rate={average} />
  <h2>Ratings List</h2>
  {#each ratings as rating}
    <Rating {...rating} />
  {/each}
  <h1>Autocomplete Input</h1>
  <AutoCompleteInput />
</main>

<style></style>
