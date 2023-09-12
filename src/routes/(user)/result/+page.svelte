<script lang="ts">
  import { authenticated } from "$lib/store/stores";
</script>

<svelte:head>
  <title>{$authenticated ? "Result" : "Not Found"}</title>
</svelte:head>
