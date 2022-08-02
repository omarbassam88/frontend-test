import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'like-dislike',
  template: `
    <div>
      <button
        class="like-button"
        [class.liked]="liked"
        (click)="onLikeBtnClicked()"
      >
        Likes |
        <span class="likes-counter"> {{ countLikes }} </span>
      </button>
      <button
        class="dislike-button"
        [class.disliked]="disliked"
        (click)="onDislikeBtnClicked()"
      >
        Dislikes |
        <span class="dislikes-counter"> {{ countDislikes }} </span>
      </button>
    </div>
  `,
  styles: [
    `
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
    `,
  ],
})
export class LikeDislikeComponent implements OnInit {
  countLikes: number = 100;
  liked: boolean = false;
  countDislikes: number = 25;
  disliked: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onLikeBtnClicked() {
    this.countLikes += this.liked ? -1 : 1;

    if (this.disliked) {
      this.countDislikes -= 1;
      this.disliked = false;
    }
    this.liked = !this.liked;
  }

  onDislikeBtnClicked() {
    this.countDislikes += this.disliked ? -1 : 1;

    if (this.liked) {
      this.countLikes -= 1;
      this.liked = false;
    }
    this.disliked = !this.disliked;
  }
}
