import { html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";

interface IResult {
  id: number;
  title: string;
  body: string;
  userId: number;
}

@customElement("autocomplete-input")
export class AutocompleteInput extends LitElement {
  @state()
  query: string = "";

  @state()
  results: IResult[] = [];

  BASE_URL: string = "https://jsonplaceholder.typicode.com/posts";

  async onSearch(e) {
    this.query = e.target.value;

    const data = await fetch(this.BASE_URL)
      .then((res) => res.json())
      .catch((err) => {
        console.log("Error Fetching Data ", err);
      });

    this.results = data.filter((item) => item.title.includes(this.query));
  }

  render() {
    return html` <div>
      <input
        type="text"
        value=${this.query}
        @input=${(e) => this.onSearch(e)}
      />
      <div>
        ${this.results.map(
          (result) => html`
            <div>
              <a href=${this.BASE_URL + "/" + result.id}>${result.title}</a>
            </div>
          `
        )}
      </div>
    </div>`;
  }
}
