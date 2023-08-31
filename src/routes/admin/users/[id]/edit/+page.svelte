<script lang="ts">
  import { goto } from "$app/navigation";
  import axios from "$lib/axios/axios";
  import type { UserRequest } from "$lib/custom-types";
    import { userRequestFactory } from "$main/lib/user.factory";
  import type { PageData } from "./$types";

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


<div class="ml-16 w-[600px]">
  <h1 class="ml-12 mb-3 font-bold text-3xl">Edit User #{id}</h1>
  <form class="ml-10 ">
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
    

    <div class="flex my-2">
      <div class="relative w-full mx-2">
        <select bind:value={userRequest.roleId} class="select w-full h-[64px] border-base-content border-2" required>
          <option disabled value={0}>Pick a Role</option>
          {#each roles as role}
            <option value={role.id}>
              {role.name}
            </option>
          {/each}
        </select>
      </div>

      {#if (userRequest.roleId === 3)}
        <div class="relative w-full mx-2">
          <select bind:value={userRequest.classroomId} class="select w-full h-[64px] border-base-content border-2" required>
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

    <div class="flex justify-end text-center space-x-2 me-2">
      <a class="btn btn-outline btn-secondary rounded-3" href="/admin/users">
        Close
      </a>
      <button class="btn btn-primary rounded-3" on:click={submit}>
        Save
      </button>
    </div>
  </form>
</div>
