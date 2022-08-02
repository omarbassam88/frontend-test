import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("like-dislike")
export class LikeDislike extends LitElement {
  static styles = css`
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
  `;

  @property({ type: Number })
  countLikes: number = 100;

  @property({ type: Boolean })
  liked: boolean = false;

  @property({ type: Number })
  countDislikes: number = 25;

  @property({ type: Boolean })
  disliked: boolean = false;

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

  render() {
    return html`
      <div>
        <button
          class=${"like-button " + (this.liked ? "liked" : "")}
          @click=${this.onLikeBtnClicked}
        >
          Likes | <span class="likes-counter"> ${this.countLikes}</span>
        </button>
        <button
          class=${"dislike-button " + (this.disliked ? "disliked" : "")}
          @click=${this.onDislikeBtnClicked}
        >
          Dislikes |
          <span class="dislikes-counter"> ${this.countDislikes}</span>
        </button>
      </div>
    `;
  }
}
