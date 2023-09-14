<script lang="ts">
  import { goto } from "$app/navigation";
  import axios from "$lib/axios/axios";
  import type { UserRequest } from "$lib/custom-types";
  import { userRequestFactory } from "$lib/user.factory";
  import type { PageData } from "./$types";
  import "$styles/book.css";
  import Input from "$components/Input.svelte";

  export let data: PageData;

  let { user } = data;
  const userRequest: UserRequest = userRequestFactory(user);
  delete userRequest.roleId;
  delete userRequest.classroomId;
  let dateOfBirth = new Date(user.dateOfBirth as Date).toISOString().split('T')[0];
  const password = {
    password: "",
    passwordConfirm: ""
  }

  const submitInformation = async () => {
    if (!userRequest.address) delete userRequest.address;
    if (!userRequest.mobile) delete userRequest.mobile;
    if (!dateOfBirth) delete userRequest.dateOfBirth;
    else userRequest.dateOfBirth = new Date(dateOfBirth);
    await axios.put(`/users/info`, userRequest)
      .then(() => {
        goto("/courses");
      });
  }

  const submitPassword = async () => {
    await axios.put(`/users/password`, password)
      .then(() => {
        goto("/courses");
      });
  }
</script>

<main class="mx-auto">
  <input type="checkbox" id="checkbox-cover">
  <input type="checkbox" id="checkbox-page1">
  <div class="book w-[30rem] h-[36rem] 2xl:w-[40rem] 2xl:h-[48rem]">
    <div class="cover">
      <label for="checkbox-cover">
        <h1 class="absolute text-5xl text-black font-bold top-36 left-8">Edit Profile</h1>
      </label>
    </div>
    <div class="page w-[30rem] h-[36rem] 2xl:w-[38rem] 2xl:h-[45.6rem] 2xl:my-4" id="page1">
      <div class="front-page">
        <form>
          <h1 class="ml-2 mb-3 font-bold text-3xl">Edit Information</h1>
          <Input bind:value={userRequest.cin} type="text" id="cin" label="C.I.N.*" required={true} />

          <div class="w-full flex">
            <Input bind:value={userRequest.firstName} type="text" id="firstName" label="First Name*" required={true} />
            <Input bind:value={userRequest.lastName} type="text" id="lastName" label="Last Name*" required={true} />
          </div>

          <Input bind:value={userRequest.email} type="email" id="email" label="Email*" required={true} />

          <div class="w-full flex">
            <Input bind:value={userRequest.dateOfBirth} type="date" id="dateOfBirth" label="Date of Birth" />
            <Input bind:value={userRequest.mobile} type="text" id="mobile" label="Mobile" />
          </div>

          <Input bind:value={userRequest.address} type="text" id="address" label="Address"/>

          <div class="flex justify-end text-center space-x-2 me-2 absolute bottom-10 right-4">
            <a class="btn btn-outline btn-secondary rounded-3" href="/courses">
              Close
            </a>
            <button class="btn btn-primary rounded-3" on:click={submitInformation}>
              Save
            </button>
          </div>
        </form>

        <label class="next" for="checkbox-page1">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </label>
      </div>
      <div class="back-page">
        <label class="prev" for="checkbox-page1">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
          </svg>
        </label>
      </div>
    </div>
    <div class="page w-[30rem] h-[36rem] 2xl:w-[38rem] 2xl:h-[45.6rem] 2xl:my-4" id="page2">
      <div class="front-page">
        <form>
          <h1 class="ml-2 mb-3 font-bold text-3xl">Edit Password</h1>
          <Input bind:value={password.password} type="password" id="password" label="Password"/>
          <Input bind:value={password.passwordConfirm} type="password" id="passwordConfirm" label="Confirm Password"/>

          <div class="flex justify-end text-center space-x-2 me-2 absolute bottom-10 right-4">
            <a class="btn btn-outline btn-secondary rounded-3" href="/courses">
              Close
            </a>
            <button class="btn btn-primary rounded-3" on:click={submitPassword}>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
    <div class="back-cover"></div>
  </div>
</main>
