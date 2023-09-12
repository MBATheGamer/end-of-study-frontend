<script lang="ts">
  import { goto } from "$app/navigation";
  import axios from "$lib/axios/axios";
  import { classroomValidator } from "$lib/common-functions";
  import type { ClassroomRequest } from "$lib/custom-types";
  import type { PageData } from "./$types";

  export let data: PageData;
  const {departments} = data;

  const classroom: ClassroomRequest = {
    name: "",
    description: "",
    departmentId: 0
  }

  const submit = async () => {
    if (classroomValidator(classroom)) {
      await axios.post(`/classrooms`, classroom)
        .then(() => {
          goto("/admin/classrooms");
        });
    }
  }
</script>

<main class="mx-auto">
  <input type="checkbox" id="checkbox-cover">
  <div class="book">
    <div class="cover">
      <label for="checkbox-cover">
        <h1 class="absolute text-5xl text-black font-bold top-36 left-8">Add Classroom</h1>
      </label>
    </div>
    <div class="page" id="page1">
      <div class="front-page">
        <form>
          <div class="relative m-2">
            <input bind:value={classroom.name} type="text" id="name" class="block px-3 pb-3 pt-6 w-full bg-transparent  text-black font-semibold rounded-lg border-2 border-base-content appearance-none focus:outline-none peer" placeholder=" " required />
            <label for="name" class="absolute left-2 text-md font-semibold  text-black transform duration-300 top-5 scale-75 -translate-y-4 origin-[0] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-5 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:font-bold">
              Name*
            </label>
          </div>

          <div class="relative m-2">
            <select bind:value={classroom.departmentId} class="select w-full h-[64px] border-base-content border-2" required>
              <option disabled value={0}>Pick a Department</option>
              {#each departments as department}
                <option value={department.id}>
                  {department.name}
                </option>
              {/each}
            </select>
          </div>

          <div class="relative m-2">
            <textarea bind:value={classroom.description} id="description" class="block px-3 pb-3 pt-6 w-full bg-transparent rounded-lg border-2 border-base-content appearance-none focus:outline-none peer resize-none" placeholder=" " rows="10" />
            <label for="description" class="absolute left-2 text-md font-semibold  text-black transform duration-300 top-5 scale-75 -translate-y-4 origin-[0] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-9 peer-focus:top-5 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:font-bold">
              Description
            </label>
          </div>

          <div class="flex justify-end text-center space-x-2 me-2 absolute bottom-8 right-10">
            <a class="btn btn-outline btn-secondary rounded-3" href="/admin/classrooms">
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
