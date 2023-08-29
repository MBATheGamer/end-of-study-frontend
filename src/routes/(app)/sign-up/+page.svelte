<script lang="ts">
  import { goto } from "$app/navigation";
  import axios from "$lib/axios/axios";
  import type { Register } from "$lib/custom-types";

  const user: Register = {
    cin: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
    roleId: 4
  };

  const submit = async () => {
    await axios.post("register", user);
    goto("/");
  }
</script>

<svelte:head>
  <title>Sign Up</title>
</svelte:head>

<div class="p-6 sm:mx-auto md:rounded-md md:shadow-md md:ring-2 md:ring-neutral-content sm:w-[37rem]">
  <h1 class="text-3xl font-semibold text-center">Sign Up</h1>
  <form class="space-y-1">
    <div>
      <label for="cin" class="label">
        <span class="text-base label-text">CIN</span>
      </label>
      <input bind:value={user.cin} id="cin" type="text" placeholder="CIN" class="w-full input input-bordered" required />
    </div>
    <div class="flex justify-between">
      <div class="w-full me-2">
        <label for="firstName" class="label">
          <span class="text-base label-text">First Name</span>
        </label>
        <input bind:value={user.firstName} id="firstName" type="text" placeholder="First Name" class="w-full input input-bordered" required />
      </div>
      <div class="w-full ms-2">
        <label for="lastName" class="label">
            <span class="text-base label-text">Last Name</span>
        </label>
        <input bind:value={user.lastName} id="lastName" type="text" placeholder="Last Name" class="w-full input input-bordered" required />
      </div>
    </div>
    <div>
      <label for="email" class="label">
        <span class="text-base label-text">Email</span>
      </label>
      <input bind:value={user.email} id="email" type="text" placeholder="Email Address" class="w-full input input-bordered" required />
    </div>
    <div class="flex justify-between">
      <div class="w-full me-2">
        <label for="password" class="label">
          <span class="text-base label-text">Password</span>
        </label>
        <input bind:value={user.password} id="password" type="text" placeholder="Password" class="w-full input input-bordered" required />
      </div>
      <div class="w-full ms-2">
        <label for="passwordConfirm" class="label">
          <span class="text-base label-text">Confirm Password</span>
        </label>
        <input bind:value={user.passwordConfirm} id="passwordConfirm" type="text" placeholder="Confirm Password" class="w-full input input-bordered" required />
      </div>
    </div>
    <div class="pt-2">
      <button class="btn btn-primary btn-block" on:click={() => submit()}>Sign Up</button>
    </div>
    <span>Already have an account?
      <a href="/login" class="text-blue-600 hover:text-blue-800 hover:underline">Login</a>
    </span>
  </form>
</div>
