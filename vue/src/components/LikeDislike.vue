<script setup lang="ts">
import { ref } from "vue";

const countLikes = ref<number>(100);
const liked = ref<boolean>(false);
const countDislikes = ref<number>(25);
const disliked = ref<boolean>(false);

function onLikeBtnClicked() {
  countLikes.value += liked.value ? -1 : 1;

  if (disliked.value) {
    countDislikes.value -= 1;
    disliked.value = false;
  }

  liked.value = !liked.value;
}
function onDislikeBtnClicked() {
  countDislikes.value += disliked.value ? -1 : 1;

  if (liked.value) {
    countLikes.value -= 1;
    liked.value = false;
  }

  disliked.value = !disliked.value;
}
</script>

<template>
  <div>
    <button
      class="like-button"
      :class="{ liked: liked }"
      @click="onLikeBtnClicked()"
    >
      Likes |
      <span class="likes-counter"> {{ countLikes }} </span>
    </button>
    <button
      class="dislike-button"
      :class="{ disliked: disliked }"
      @click="onDislikeBtnClicked()"
    >
      Dislikes |
      <span class="dislikes-counter"> {{ countDislikes }} </span>
    </button>
  </div>
</template>

<style scoped>
.like-button,
.dislike-button {
  font-size: 1rem;
  padding: 5px 10px;
  color: #585858;
}

.liked,
.disliked {
  font-weight: bold;
  color: #1565c0;
}
</style>
