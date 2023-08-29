<script lang="ts">
  import { subjectStore } from "$lib/store/stores";
  import type { PageData } from "./$types";

  export let data: PageData;

  subjectStore.set(data.subject);
</script>