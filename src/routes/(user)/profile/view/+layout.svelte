<script>
  import { authenticated } from "$lib/store/stores";
</script>

<svelte:head>
  <title>{$authenticated ? "View Profil" : "Not Found"}</title>
</svelte:head>

<slot />
