<script lang="ts">
  import { authenticated } from "$lib/store/stores";
  import type { PageData } from "./$types";

  export let data: PageData;

  let { user } = data;
  let dateOfBirth = new Date(user.dateOfBirth as Date).toISOString().split('T')[0];
</script>

<svelte:head>
  <title>{$authenticated ? "Profil Setting" : "Not Found"}</title>
</svelte:head>
