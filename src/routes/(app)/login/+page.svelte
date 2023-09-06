<script lang="ts">
  import { goto } from "$app/navigation";
  import axios from "$lib/axios/axios";
  import type { Login, UserResponse } from "$lib/custom-types";
  import { administrator, authenticated, roleIdStore } from "$lib/store/stores";

  const login: Login = {
    email: "",
    password: ""
  };

  const submit = async () => {
    await axios.post("/login", login);
    const {data} = await axios.get("user");
    const user: UserResponse = data;
    if (user) {
      authenticated.set(true);
      roleIdStore.set(user.role.id);
      if ($roleIdStore === 1) {
        administrator.set(true);
        goto("/admin");
        return;
      }
      goto("/courses");
      return;
    }
    goto("/");  
  }
</script>

<svelte:head>
  <title>Login</title>
</svelte:head>

<div class="grid place-items-center h-full">
  <div class="w-[80%] p-6 mx-auto md:rounded-md md:shadow-md md:ring-2 md:ring-neutral-content sm:w-[512px]">
    <h1 class="text-3xl font-semibold text-center">Login</h1>
    <form class="space-y-4">
      <div>
        <label for="email" class="label">
          <span class="text-base label-text">Email</span>
        </label>
        <input bind:value={login.email} id="email" type="text" placeholder="Email Address" class="w-full input input-bordered" required />
      </div>
      <div>
        <label for="password" class="label">
          <span class="text-base label-text">Password</span>
        </label>
        <input bind:value={login.password} id="password" type="password" placeholder="Enter Password" class="w-full input input-bordered" required />
      </div>
      <div class="space-y-4">
        <button type="submit" class="btn btn-block btn-primary" on:click={submit}>Login</button>
        <hr class="hidden md:block"/>
        <a href="/sign-up" class="btn btn-block btn-primary btn-outline">Sign Up</a>
      </div>
    </form>
  </div>
</div>
