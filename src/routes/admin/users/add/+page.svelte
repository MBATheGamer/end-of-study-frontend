<script lang="ts">
  import { goto } from "$app/navigation";
  import axios from "$lib/axios/axios";
  import type { UserRequest } from "$lib/custom-types";
  import { userRequestFactory } from "$lib/user.factory";
  import type { PageData } from "./$types";
  import "$styles/book.css";

  export let data: PageData;
  const {roles, classrooms} = data;
  let user: UserRequest = userRequestFactory();
  let dateOfBirth: string = "";
  let mobile: string = "";
  let address: string = "";

  const submit = async () => {
    if (dateOfBirth !== "") user.dateOfBirth = new Date(dateOfBirth);
    if (mobile !== "") user.mobile = mobile;
    if (address !== "") user.address = address;
    if (user.roleId !== 3) delete user.classroomId;
    if (user.roleId === 3 && user.classroomId == 0) return;
    await axios.post(`/users`, user)
      .then(() => {
        goto("/admin/users");
      });
  }
</script>

<main class="mx-auto">
  <input type="checkbox" id="checkbox-cover">
  <div class="book">
    <div class="cover">
      <label for="checkbox-cover">
        <h1 class="absolute text-5xl text-black font-bold top-36 left-8">Add User</h1>
      </label>
    </div>
    <div class="page" id="page1">
      <div class="front-page">
        <form>
          <div class="relative m-2">
            <input bind:value={user.cin} type="text" id="cin" class="block px-3 pb-3 pt-6 bg-transparent text-black font-semibold w-full rounded-lg border-2 border-base-content appearance-none focus:outline-none peer" placeholder=" " />
            <label for="cin" class="absolute left-2 text-md font-semibold text-black transform duration-300 top-5 scale-75 -translate-y-4 origin-[0] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-5 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:font-bold">
              C.I.N.*
            </label>
          </div>
          <div class="flex my-2">
            <div class="relative w-full mx-2">
              <input bind:value={user.firstName} type="text" id="firstName" class="block px-3 pb-3 pt-6 bg-transparent text-black font-semibold w-full rounded-lg border-2 border-base-content appearance-none focus:outline-none peer" placeholder=" " />
              <label for="firstName" class="absolute left-2 text-md font-semibold text-black transform duration-300 top-5 scale-75 -translate-y-4 origin-[0] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-5 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:font-bold">
                First Name*
              </label>
            </div>
            <div class="relative w-full mx-2">
              <input bind:value={user.lastName} type="text" id="lastName" class="block px-3 pb-3 pt-6 bg-transparent text-black font-semibold w-full rounded-lg border-2 border-base-content appearance-none focus:outline-none peer" placeholder=" " />
              <label for="lastName" class="absolute left-2 text-md font-semibold text-black transform duration-300 top-5 scale-75 -translate-y-4 origin-[0] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-5 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:font-bold">
                Last Name*
              </label>
            </div>
          </div>
          <div class="relative m-2">
            <input bind:value={user.email} type="email" id="email" class="block px-3 pb-3 pt-6 bg-transparent text-black font-semibold w-full rounded-lg border-2 border-base-content appearance-none focus:outline-none peer" placeholder=" " />
            <label for="email" class="absolute left-2 text-md font-semibold text-black transform duration-300 top-5 scale-75 -translate-y-4 origin-[0] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-5 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:font-bold">
              Email*
            </label>
          </div>
          <div class="flex my-2">
            <div class="relative w-full mx-2">
              <input bind:value={user.dateOfBirth} type="date" id="dateOfBirth" class="block px-3 pb-3 pt-6 bg-transparent text-black font-semibold w-full rounded-lg border-2 border-base-content appearance-none focus:outline-none peer" placeholder=" " />
              <label for="dateOfBirth" class="absolute left-2 text-md font-semibold text-black transform duration-300 top-5 scale-75 -translate-y-4 origin-[0] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-5 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:font-bold">
                Date of Birth
              </label>
            </div>
            <div class="relative w-full mx-2">
              <input bind:value={user.mobile} type="text" id="mobile" class="block px-3 pb-3 pt-6 bg-transparent text-black font-semibold w-full rounded-lg border-2 border-base-content appearance-none focus:outline-none peer" placeholder=" " />
              <label for="mobile" class="absolute left-2 text-md font-semibold text-black transform duration-300 top-5 scale-75 -translate-y-4 origin-[0] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-5 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:font-bold">
                Mobile Number
              </label>
            </div>
          </div>
          <div class="relative m-2">
            <input bind:value={user.address} type="text" id="address" class="block px-3 pb-3 pt-6 w-full bg-transparent text-black font-semibold rounded-lg border-2 border-base-content appearance-none focus:outline-none peer" placeholder=" " />
            <label for="address" class="absolute left-2 text-md font-semibold text-black transform duration-300 top-5 scale-75 -translate-y-4 origin-[0] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-5 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:font-bold">
              Address
            </label>
          </div>
          

          <div class="flex my-2">
            <div class="relative w-full mx-2">
              <select bind:value={user.roleId} class="select w-full h-[64px] bg-transparent text-black border-base-content border-2" required>
                <option disabled value={0}>Pick a Role</option>
                {#each roles as role}
                  <option value={role.id}>
                    {role.name}
                  </option>
                {/each}
              </select>
            </div>

            {#if (user.roleId === 3)}
              <div class="relative w-full mx-2">
                <select bind:value={user.classroomId} class="select w-full h-[64px] bg-transparent text-black border-base-content border-2" required>
                  <option disabled value={0}>Pick a Classroom</option>
                  {#each classrooms as classroom}
                    <option value={classroom.id}>
                      {classroom.name}
                    </option>
                  {/each}
                </select>
              </div>
            {/if}
          </div>

          <div class="flex justify-end text-center space-x-2 me-2 absolute bottom-8 right-10">
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
