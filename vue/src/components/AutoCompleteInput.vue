<script setup lang="ts">
import { ref, watch } from "vue";

interface IResult {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const query = ref<string>("");
const results = ref<IResult>([]);

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

watch(query, async () => {
  console.log("Something has changed");

  const data = await fetch(BASE_URL)
    .then((res) => res.json())
    .catch((err) => {
      console.log("Error Fetching Data ", err);
    });

  results.value = data.filter((item) => item.title.includes(query.value));
});
</script>

<template>
  <div>
    <input type="text" v-model="query" placeholder="Type Your Search Here" />
    <div v-for="result of results">
      <a :href="`${BASE_URL}?id=${result.id}`" target="_blank"
        >{{ result.title }}
      </a>
    </div>
  </div>
</template>
