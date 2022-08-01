<script setup lang="ts">
interface IRatingProps {
  name: string;
  content: string;
  rate: number;
}

const props = defineProps<IRatingProps>();
</script>

<template>
  <div>
    <i
      v-for="n of 5"
      class="fa fa-star"
      :class="{ filled: n <= props.rate }"
    ></i>
  </div>
</template>

<style scoped>
.fa-star {
  color: transparent;
  -webkit-text-stroke: 1px #000;
}
.filled {
  color: black;
}
</style>
