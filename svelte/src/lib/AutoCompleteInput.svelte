<script lang="ts">
  interface IResult {
    id: number;
    title: string;
    body: string;
    userId: number;
  }

  const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

  let query: string = "";
  let results: IResult[] = [];
  const fetchData = async () => {
    const data = await fetch(BASE_URL)
      .then((res) => res.json())
      .catch((err) => {
        console.log("Error Fetching Data ", err);
      });
    results = data.filter((item) => item.title.includes(query));
  };
</script>

<div>
  <input
    type="text"
    bind:value={query}
    on:input={fetchData}
    placeholder="Type Your Search Here"
  />
  <div>
    {#each results as result}
      <div>
        <a href={`${BASE_URL}/${result.id}`} target="_blank">{result.title}</a>
      </div>
    {/each}
  </div>
</div>
