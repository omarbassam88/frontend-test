import { html, css, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";

interface IRating {
  name: string;
  content: string;
  rate: number;
}

@customElement("app-rating")
export class Rating extends LitElement {
  static styles = css`
    .fa-star {
      color: transparent;
      -webkit-text-stroke: 1px #000;
    }
    .filled {
      color: black;
    }
  `;

  @property({ type: String })
  name: string = "";

  @property({ type: String })
  content: string = "";

  @property({ type: Number })
  rate: number = 0;

  stars() {
    return new Array(5)
      .fill(0)
      .map(
        (star, index) =>
          html`<i
            class=${"fa fa-star " + (index < this.rate ? "filled" : "")}
          ></i>`
      );
  }

  render() {
    return html`
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
        integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <div>${this.stars()}</div>
    `;
  }
}

@customElement("average-rating")
export class AverageRating extends LitElement {
  @property({ type: Array })
  set ratings(val: IRating[]): IRating[] {
    if (!val) return [];
    const sum = val.reduce((acc, item) => {
      acc += item.rate;
      return acc;
    }, 0);
    this.average = Math.ceil(sum / val.length);
    return val;
  }

  @state()
  average: number = 0;

  render() {
    return html`
      <div>
        <app-rating
          name="average-rating"
          content="Average Rating"
          rate=${this.average}
        />
      </div>
    `;
  }
}

@customElement("ratings-list")
export class RatingsList extends LitElement {
  @property({ type: Array })
  ratings: IRating[] = [];

  render() {
    return html`
      <div>
        ${this.ratings.map(
          (rating) =>
            html`<app-rating
              name=${rating.name}
              content=${rating.content}
              rate=${rating.rate}
            ></app-rating>`
        )}
      </div>
    `;
  }
}
