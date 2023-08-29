<script lang="ts">
  import { goto } from "$app/navigation";
  import axios from "$lib/axios/axios";
  import type { PageData } from "./$types";

  export let data: PageData;

  let { user } = data;
  let dateOfBirth = new Date(user.dateOfBirth).toISOString().split('T')[0];

  const submit = async () => {
    user["dateOfBirth"] = new Date(dateOfBirth);
    const {  roleId, ...data } = user;
    await axios.put(`/users/info`, data)
      .then(() => {
        goto("/courses");
      });
  }
</script>
