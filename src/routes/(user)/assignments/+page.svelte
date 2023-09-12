<script lang="ts">
  import { authenticated } from "$lib/store/stores";
</script>

<svelte:head>
  <title>{$authenticated ? "Assignments" : "Not Found"}</title>
</svelte:head>
