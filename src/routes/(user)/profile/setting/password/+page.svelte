<script lang="ts">
    import { goto } from "$app/navigation";
  import axios from "$lib/axios/axios";

  let password = {
    password: "",
    passwordConfirm: ""
  }

  const submit = async () => {
    await axios.put(`/users/password`, password)
      .then(() => {
        goto("/courses");
      });
  }
</script>
