<script>
  import Menu from "$components/Menu.svelte";
  import { settingPath } from "$lib/data/paths";
  import { authenticated } from "$lib/store/stores";
</script>

<svelte:head>
  <title>{$authenticated ? "Profil Setting" : "Not Found"}</title>
</svelte:head>

<slot />
