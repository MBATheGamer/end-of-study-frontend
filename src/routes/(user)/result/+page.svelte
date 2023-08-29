<script lang="ts">
  import { authenticated } from "$lib/store/stores";
</script>

<svelte:head>
  <title>{$authenticated ? "Result" : "Not Found"}</title>
</svelte:head>

{#if $authenticated}
  <div></div>
{:else}
  <h1>404</h1>
  <p>Not Found</p>
{/if}