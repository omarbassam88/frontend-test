import { Component, createEffect, createSignal } from "solid-js";

interface IResult {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export default function AutoCompleteInput(): Component {
  const [query, setQuery] = createSignal<string>("");
  const [searchResults, setSearchResults] = createSignal<IResult[]>([]);
  const onSearch = (e) => {
    setQuery(e.target.value);
  };

  const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

  createEffect(async () => {
    if (!query().length) return;
    console.log(query());

    const data = await fetch(BASE_URL)
      .then((res) => res.json())
      .catch((err) => {
        console.log("Error Fetching Data ", err);
      });

    setSearchResults(
      data.filter((item: IResult) => item.title.includes(query()))
    );
  });

  return (
    <div>
      <input type="text" onInput={onSearch} />
      <div className="list is-hoverable">
        <For each={searchResults()}>
          {(item: IResult, index) => (
            <div key={item.id}>
              <a href={`${BASE_URL}?id=${item.id}`} target="_blank">
                {item.title}
              </a>
            </div>
          )}
        </For>
      </div>
    </div>
  );
}
