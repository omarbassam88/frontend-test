import React, { useEffect, useState } from "react";

interface IResult {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export default function AutoCompleteInput() {
  const [query, setQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<IResult[]>([]);
  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

  const fetchData = async () => {
    const data = await fetch(BASE_URL)
      .then((res) => res.json())
      .catch((err) => {
        console.log("Error Fetching Data ", err);
      });

    setSearchResults(
      data.filter((item: IResult) => item.title.includes(query))
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [query]);

  return (
    <div>
      <input type="text" value={query} onInput={onSearch} />
      <div className="list is-hoverable">
        {searchResults.map((item: IResult) => (
          <div key={item.id}>
            <a href={`${BASE_URL}?id=${item.id}`} target="_blank">
              {item.title}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
