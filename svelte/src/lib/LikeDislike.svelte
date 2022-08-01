<script lang="ts">
  let countLikes: number = 100;
  let liked: boolean = false;
  let countDislikes: number = 25;
  let disliked: boolean = false;

  const onLikeBtnClicked = () => {
    countLikes += liked ? -1 : 1;
    if (disliked) {
      countDislikes -= 1;
      disliked = false;
    }
    liked = !liked;
  };

  const onDislikeBtnClicked = () => {
    countDislikes += disliked ? -1 : 1;
    if (liked) {
      countLikes -= 1;
      liked = false;
    }
    disliked = !disliked;
  };
</script>

<div>
  <button class="like-button" class:liked on:click={onLikeBtnClicked}
    >Likes | <span class="likes-counter">{countLikes}</span>
  </button>

  <button class="dislike-button" class:disliked on:click={onDislikeBtnClicked}
    >Dislikes | <span class="dislikes-counter">{countDislikes}</span>
  </button>
</div>

<style>
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
