<script lang="ts">
  import { goto } from "$app/navigation";
  import axios from "$lib/axios/axios";
  import { subjectValidator } from "$lib/common-functions";
  import type { SubjectRequest } from "$lib/custom-types";
    import { authenticated, userStore } from "$lib/store/stores";
  import type { PageData } from "./$types";

  export let data: PageData;
  const {classrooms} = data;

  const subject: SubjectRequest = {
    name: "",
    description: "",
    multiplier: 0,
    credit: 0,
    classroomId: 0,
    teacherId: $userStore.id
  }

  $: subject.credit = subject.multiplier * 2;

  const submit = async () => {
    if (subjectValidator(subject)) {
      await axios.post(`/subjects`, subject)
        .then(() => {
          goto("/courses");
        });
    }
  }
</script>

<svelte:head>
  <title>{$authenticated ? "Add Course" : "Not Found"}</title>
</svelte:head>

<div class="ml-16 w-[600px]">
  <h1 class="ml-12 mb-3 font-bold text-3xl">Add Subject</h1>
  <form class="ml-10 ">
    <div class="relative m-2">
      <input bind:value={subject.name} type="text" id="name" class="block px-3 pb-3 pt-6 w-full bg-transparent text-accent-content font-semibold rounded-lg border-2 border-base-content appearance-none focus:outline-none peer" placeholder=" " required />
      <label for="name" class="absolute left-2 text-md font-semibold text-accent-content transform duration-300 top-5 scale-75 -translate-y-4 origin-[0] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-5 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:font-bold">
        Name
      </label>
    </div>
    <div class="flex my-2">
      <div class="relative w-full mx-2">
        <input bind:value={subject.multiplier} type="number" step="0.5" id="multiplier" class="block px-3 pb-3 pt-6 bg-transparent text-accent-content font-semibold w-full rounded-lg border-2 border-base-content appearance-none focus:outline-none peer" placeholder=" " required />
        <label for="multiplier" class="absolute left-2 text-md font-semibold text-accent-content transform duration-300 top-5 scale-75 -translate-y-4 origin-[0] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-5 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:font-bold">
          Multiplier
        </label>
      </div>
      <div class="relative w-full mx-2">
        <input value={subject.credit} type="number" id="credit" class="block px-3 pb-3 pt-6 w-full bg-transparent disabled:bg-base-content/25 rounded-lg border-2 border-base-content appearance-none focus:outline-none" placeholder=" " disabled />
        <label for="credit" class="absolute left-2 text-md font-semibold text-accent-content transform duration-300 top-5 scale-75 -translate-y-4 origin-[0] px-2">
          Credit
        </label>
      </div>
    </div>

    <div class="flex my-2">
      <div class="relative w-full mx-2">
        <select bind:value={subject.classroomId} class="select w-full h-[64px] border-base-content border-2" required>
          <option disabled value={0}>Pick a Classroom</option>
          {#each classrooms as classroom}
            <option value={classroom.id}>
              {classroom.name}
            </option>
          {/each}
        </select>
      </div>
    </div>

    <div class="relative m-2">
      <textarea bind:value={subject.description} id="description" class="block px-3 pb-3 pt-6 w-full bg-transparent rounded-lg border-2 border-base-content appearance-none focus:outline-none peer resize-none" placeholder=" " rows="8" />
      <label for="description" class="absolute left-2 text-md font-semibold text-accent-content transform duration-300 top-5 scale-75 -translate-y-4 origin-[0] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-9 peer-focus:top-5 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:font-bold">
        Description (Optional)
      </label>
    </div>

    <div class="flex justify-end text-center space-x-2 me-2">
      <a class="btn btn-outline btn-secondary rounded-3" href="/courses">
        Close
      </a>
      <button class="btn btn-primary rounded-3" on:click={submit}>
        Save
      </button>
    </div>
  </form>
</div>
