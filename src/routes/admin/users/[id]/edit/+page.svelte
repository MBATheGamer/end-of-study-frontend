<script lang="ts">
  import { goto } from "$app/navigation";
  import axios from "$lib/axios/axios";
  import type { UserRequest } from "$lib/custom-types";
  import { userRequestFactory } from "$lib/user.factory";
  import type { PageData } from "./$types";
  import "$styles/book.css";
  import Input from "$components/Input.svelte";
  import SelectOptions from "$components/SelectOptions.svelte";

  export let data: PageData;
  const {id, user, roles, classrooms} = data;
  const userRequest: UserRequest = userRequestFactory(user);
  let dateOfBirth: string;
  if (user.dateOfBirth) {
    dateOfBirth = new Date(user.dateOfBirth as Date).toISOString().split('T')[0];
  }

  const submit = async () => {
    if (!userRequest.address) delete userRequest.address;
    if (!userRequest.mobile) delete userRequest.mobile;
    if (!dateOfBirth) delete userRequest.dateOfBirth;
    else userRequest.dateOfBirth = new Date(dateOfBirth);
    if (userRequest.roleId !== 3) delete userRequest["classroomId"];
    if (userRequest.roleId === 3 && userRequest.classroomId == 0) return;
    await axios.put(`/users/${id}`, userRequest)
      .then(() => {
        goto("/admin/users");
      });
  }
</script>

<main class="mx-auto">
  <input type="checkbox" id="checkbox-cover">
  <div class="book w-[30rem] h-[36rem] 2xl:w-[40rem] 2xl:h-[48rem]">
    <div class="cover">
      <label for="checkbox-cover">
        <h1 class="absolute text-5xl text-black font-bold top-36 left-8">Edit User #{id}</h1>
      </label>
    </div>
    <div class="page w-[30rem] h-[36rem] 2xl:w-[38rem] 2xl:h-[45.6rem] 2xl:my-4" id="page1">
      <div class="front-page">
        <form>
          <Input bind:value={userRequest.cin} id="cin" label="C.I.N.*" type="text" required={true} />
          <div class="flex my-2">
            <Input bind:value={userRequest.firstName} id="firstName" label="First Name*" type="text" required={true} />
            <Input bind:value={userRequest.lastName} id="lastName" label="Last Name*" type="text" required={true} />
          </div>
          <Input bind:value={userRequest.email} id="email" label="Email*" type="email" required={true} />

          <div class="flex my-2">
            <Input bind:value={userRequest.dateOfBirth} id="dateOfBirth" label="Date of Birth" type="date" />
            <Input bind:value={userRequest.mobile} id="mobile" label="Mobile" type="text" />
          </div>

          <Input bind:value={userRequest.address} id="address" label="Address" type="text" />

          <div class="flex my-2">
            <SelectOptions bind:id={userRequest.roleId} items={roles} label={"Pick a Role"} required={true} />

            {#if (userRequest.roleId === 3)}
              <SelectOptions bind:id={userRequest.classroomId} items={classrooms} label={"Pick a Classroom"} required={true} />
            {/if}
          </div>

          <div class="flex justify-end text-center space-x-2 me-2 absolute bottom-10 right-4">
            <a class="btn btn-outline btn-secondary rounded-3" href="/admin/users">
              Close
            </a>
            <button class="btn btn-primary rounded-3" on:click={submit}>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
    <div class="back-cover"></div>
  </div>
</main>
