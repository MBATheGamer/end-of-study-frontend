<script lang="ts">
  import { authenticated } from "$lib/store/stores";
  import type { PageData } from "./$types";
  import "$styles/book.css";
  import Input from "$components/Input.svelte";

  export let data: PageData;

  let { user } = data;
  let dateOfBirth = new Date(user.dateOfBirth as Date).toISOString().split('T')[0];
</script>

<svelte:head>
  <title>{$authenticated ? "Profil Setting" : "Not Found"}</title>
</svelte:head>

<main class="mx-auto">
  <input type="checkbox" id="checkbox-cover">
  <div class="book w-[30rem] h-[36rem] 2xl:w-[40rem] 2xl:h-[48rem]">
    <div class="cover">
      <label for="checkbox-cover">
        <h1 class="absolute text-5xl text-black font-bold top-36 left-8">View Profile</h1>
      </label>
    </div>
    <div class="page w-[30rem] h-[36rem] 2xl:w-[38rem] 2xl:h-[45.6rem] 2xl:my-4" id="page1">
      <div class="front-page">
        <Input value={user.cin} type="text" id="cin" label="C.I.N.*" disabled={true} />

        <div class="w-full flex">
          <Input value={user.firstName} type="text" id="firstName" label="First Name*" disabled={true} />
          <Input value={user.lastName} type="text" id="lastName" label="Last Name*" disabled={true} />
        </div>

        <Input value={user.email} type="email" id="email" label="Email*" disabled={true} />

        <div class="w-full flex">
          <Input value={user.dateOfBirth} type="date" id="dateOfBirth" label="Date of Birth" disabled={true} />
          <Input value={user.mobile} type="text" id="mobile" label="Mobile" disabled={true} />
        </div>

        <Input value={user.address} type="text" id="address" label="Address" disabled={true} />

        <div class="flex my-2">
          <Input value={user.role.name} type="text" id="role" label="Role" disabled={true} />
          {#if (user.role.id === 3)}
            <Input value={user.classroom?.name} type="text" id="classroom" label="Classroom" disabled={true} />
          {/if}
        </div>
      </div>
    </div>
    <div class="back-cover"></div>
  </div>
</main>
