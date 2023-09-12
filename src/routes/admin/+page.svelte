<script>
  import { administrator } from "$lib/store/stores";
</script>

<svelte:head>
  <title>{$administrator ? "Admin" : "Not Found"}</title>
</svelte:head>
