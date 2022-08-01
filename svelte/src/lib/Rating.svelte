<script lang="ts">
  export let name: string = "";
  export let content: string = "";
  export let rate: number = 0;
</script>

<div>
  {#each Array(5) as star, index}
    <i class="fa fa-star" class:filled={index < rate} /> <!-- content here -->
  {/each}
</div>

<style>
  .fa-star {
    color: transparent;
    -webkit-text-stroke: 1px #000;
  }
  .filled {
    color: black;
  }
</style>
