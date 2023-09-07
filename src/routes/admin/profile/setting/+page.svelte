<script lang="ts">
  import { goto } from "$app/navigation";
  import axios from "$lib/axios/axios";
  import type { UserRequest } from "$main/lib/custom-types";
  import { userRequestFactory } from "$main/lib/user.factory";
  import type { PageData } from "./$types";

  export let data: PageData;

  let { user } = data;
  const userRequest: UserRequest = userRequestFactory(user);
  delete userRequest.roleId;
  delete userRequest.classroomId;
  let dateOfBirth = new Date(user.dateOfBirth).toISOString().split('T')[0];
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
        goto("/admin");
      });
  }

  const submitPassword = async () => {
    await axios.put(`/users/password`, password)
      .then(() => {
        goto("/admin");
      });
  }
</script>

<main class="mx-auto">
  <input type="checkbox" id="checkbox-cover">
  <input type="checkbox" id="checkbox-page1">
  <div class="book">
    <div class="cover">
      <label for="checkbox-cover">
        <h1 class="absolute text-5xl font-bold top-36 left-8">Edit Profile</h1>
      </label>
    </div>
    <div class="page" id="page1">
      <div class="front-page">
        <form>
          <h1 class="ml-2 mb-3 font-bold text-3xl">Edit Information</h1>
          <div class="relative m-2">
            <input value={userRequest.cin} type="text" id="cin" class="block px-3 pb-3 pt-6 w-full bg-transparent disabled:bg-base-content/25 rounded-lg border-2 border-base-content appearance-none focus:outline-none" placeholder=" " disabled />
            <label for="cin" class="absolute left-2 text-md font-semibold text-accent-content transform duration-300 top-5 scale-75 -translate-y-4 origin-[0] px-2">
              C.I.N.
            </label>
          </div>
          <div class="flex my-2">
            <div class="relative w-full mx-2">
              <input bind:value={userRequest.firstName} type="text" id="firstName" class="block px-3 pb-3 pt-6 bg-transparent text-accent-content font-semibold w-full rounded-lg border-2 border-base-content appearance-none focus:outline-none peer" placeholder=" " />
              <label for="firstName" class="absolute left-2 text-md font-semibold text-accent-content transform duration-300 top-5 scale-75 -translate-y-4 origin-[0] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-5 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:font-bold">
                First Name
              </label>
            </div>
            <div class="relative w-full mx-2">
              <input bind:value={userRequest.lastName} type="text" id="lastName" class="block px-3 pb-3 pt-6 bg-transparent text-accent-content font-semibold w-full rounded-lg border-2 border-base-content appearance-none focus:outline-none peer" placeholder=" " />
              <label for="lastName" class="absolute left-2 text-md font-semibold text-accent-content transform duration-300 top-5 scale-75 -translate-y-4 origin-[0] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-5 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:font-bold">
                Last Name
              </label>
            </div>
          </div>
          <div class="relative m-2">
            <input value={userRequest.email} type="text" id="email" class="block px-3 pb-3 pt-6 w-full bg-transparent disabled:bg-base-content/25 rounded-lg border-2 border-base-content appearance-none focus:outline-none" placeholder=" " disabled />
            <label for="email" class="absolute left-2 text-md font-semibold text-accent-content transform duration-300 top-5 scale-75 -translate-y-4 origin-[0] px-2">
              Email
            </label>
          </div>
          <div class="flex my-2">
            <div class="relative w-full mx-2">
              <input bind:value={userRequest.dateOfBirth} type="date" id="dateOfBirth" class="block px-3 pb-3 pt-6 bg-transparent text-accent-content font-semibold w-full rounded-lg border-2 border-base-content appearance-none focus:outline-none peer" placeholder=" " />
              <label for="dateOfBirth" class="absolute left-2 text-md font-semibold text-accent-content transform duration-300 top-5 scale-75 -translate-y-4 origin-[0] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-5 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:font-bold">
                Date of Birth (Optional)
              </label>
            </div>
            <div class="relative w-full mx-2">
              <input bind:value={userRequest.mobile} type="text" id="mobile" class="block px-3 pb-3 pt-6 bg-transparent text-accent-content font-semibold w-full rounded-lg border-2 border-base-content appearance-none focus:outline-none peer" placeholder=" " />
              <label for="mobile" class="absolute left-2 text-md font-semibold text-accent-content transform duration-300 top-5 scale-75 -translate-y-4 origin-[0] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-5 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:font-bold">
                Mobile Number (Optional)
              </label>
            </div>
          </div>
          <div class="relative m-2">
            <input bind:value={userRequest.address} type="text" id="address" class="block px-3 pb-3 pt-6 w-full bg-transparent text-accent-content font-semibold rounded-lg border-2 border-base-content appearance-none focus:outline-none peer" placeholder=" " />
            <label for="address" class="absolute left-2 text-md font-semibold text-accent-content transform duration-300 top-5 scale-75 -translate-y-4 origin-[0] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-5 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:font-bold">
              Address (Optional)
            </label>
          </div>
      
          <div class="flex justify-end text-center space-x-2 me-2 absolute bottom-8 right-10">
            <a class="btn btn-outline btn-secondary rounded-3" href="/admin/users">
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
    <div class="page" id="page2">
      <div class="front-page">
        <form>
          <h1 class="ml-2 mb-3 font-bold text-3xl">Edit Password</h1>
          <div class="relative m-2">
            <input bind:value={password.password} type="password" id="password"  class="block px-3 pb-3 pt-6 w-full bg-transparent text-accent-content font-semibold rounded-lg border-2 border-base-content appearance-none focus:outline-none peer" placeholder=" " />
            <label for="password" class="absolute left-2 text-md font-semibold text-accent-content transform duration-300 top-5 scale-75 -translate-y-4 origin-[0] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-5 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:font-bold">
              Password
            </label>
          </div>
          <div class="relative m-2">
            <input bind:value={password.passwordConfirm} type="password" id="password-confirm" class="block px-3 pb-3 pt-6 w-full bg-transparent text-accent-content font-semibold rounded-lg border-2 border-base-content appearance-none focus:outline-none peer" placeholder=" " />
            <label for="password-confirm" class="absolute left-2 text-md font-semibold text-accent-content transform duration-300 top-5 scale-75 -translate-y-4 origin-[0] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-5 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:font-bold">
              Confirm Password
            </label>
          </div>
      
          <div class="flex justify-end text-center space-x-2 me-2 absolute bottom-8 right-10">
            <a class="btn btn-outline btn-secondary rounded-3" href="/admin/users">
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

<style>
  main {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .book {
    width: 32.5rem;
    height: 40rem;
    position: relative;
    transition-duration: 1s;
    perspective: 1500;
  }

  input[type="checkbox"] {
    display: none;
  }

  .cover, .back-cover {
    background: linear-gradient(45deg,  #8b868d 0%, #f2ebf4 100%);
    width: 100%;
    height: 100%;
    border-radius: 0 15px 15px 0;
    box-shadow: 0 0 5px rgb(41, 41, 41);
    display: flex;
    align-items: center;
    justify-content: center;
    transform-origin: center left;
  }
  .cover {
    position: absolute;
    z-index: 4;
    transition: transform 1s;
  }
  .cover label {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
  .back-cover {
    position: relative;
    z-index: -1;
  }
  .page {
    position: absolute;
    background-color: white;
    width: 31.5rem;
    height: 38rem;
    border-radius: 0 15px 15px 0;
    margin-top: 1rem;
    transform-origin: left;
    transform-style: preserve-3d;
    transform: rotateY(0deg);
    transition-duration: 1.5s;
  }

  .front-page {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    box-sizing: border-box;
    padding: 2rem;
  }

  .back-page {
    transform: rotateY(180deg);
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    box-sizing: border-box;
    padding: 2rem;
    z-index: 99;
  }

  .next, .prev {
    position: absolute;
    bottom: 1em;
    cursor: pointer;
  }

  .next {
    right: 1em;
  }

  .prev {
    left: 1em;
  }

  #page1 {
    z-index: 3;
  }

  #page2 {
    z-index: 2;
  }

  #checkbox-cover:checked ~ .book {
    transform: translateX(200px);
  }

  #checkbox-cover:checked ~ .book .cover {
    transition: transform 1.5s, z-index 0.5s 0.5s;
    transform: rotateY(-180deg);
    z-index: 1;
  }
  #checkbox-cover:checked ~ .book .cover label h1 {
    display: none;
  }

  #checkbox-cover:checked ~ .book .page {
    box-shadow: 0 0 3px rgb(99, 98, 98);
  }

  #checkbox-page1:checked ~ .book #page1 {
    transform: rotateY(-180deg);
    z-index: 2;
  }
  
  #checkbox-page2:checked ~ .book #page2 {
    transform: rotateY(-180deg);
    z-index: 3;
  }
</style>
