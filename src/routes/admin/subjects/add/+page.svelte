<script lang="ts">
  import { goto } from "$app/navigation";
  import axios from "$lib/axios/axios";
  import { subjectValidator } from "$lib/common-functions";
  import type { SubjectRequest } from "$lib/custom-types";
  import type { PageData } from "./$types";
  import "$styles/book.css";

  export let data: PageData;
  const {classrooms, teachers} = data;

  const subject: SubjectRequest = {
    name: "",
    description: "",
    multiplier: 0,
    credit: 0,
    classroomId: 0,
    teacherId: 0
  }

  $: subject.credit = subject.multiplier * 2;

  const submit = async () => {
    if (subjectValidator(subject)) {
      await axios.post(`/subjects`, subject)
        .then(() => {
          goto("/admin/subjects");
        });
    }
  }
</script>

<main class="mx-auto">
  <input type="checkbox" id="checkbox-cover">
  <div class="book">
    <div class="cover">
      <label for="checkbox-cover">
        <h1 class="absolute text-5xl text-black font-bold top-36 left-8">Add Subject</h1>
      </label>
    </div>
    <div class="page" id="page1">
      <div class="front-page">
        <form>
          <div class="relative m-2">
            <input bind:value={subject.name} type="text" id="name" class="block px-3 pb-3 pt-6 bg-transparent text-black font-semibold w-full rounded-lg border-2 border-base-content appearance-none focus:outline-none peer" placeholder=" " required />
            <label for="name" class="absolute left-2 text-md font-semibold  text-black transform duration-300 top-5 scale-75 -translate-y-4 origin-[0] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-5 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:font-bold">
              Name*
            </label>
          </div>
          <div class="flex my-2">
            <div class="relative w-full mx-2">
              <input bind:value={subject.multiplier} type="number" step="0.5" id="multiplier" class="block px-3 pb-3 pt-6 bg-transparent text-black font-semibold w-full rounded-lg border-2 border-base-content appearance-none focus:outline-none peer" placeholder=" " required />
              <label for="multiplier" class="absolute left-2 text-md font-semibold  text-black transform duration-300 top-5 scale-75 -translate-y-4 origin-[0] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-5 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:font-bold">
                Multiplier*
              </label>
            </div>
            <div class="relative w-full mx-2">
              <input value={subject.credit} type="number" id="credit" class="block px-3 pb-3 pt-6 bg-transparent text-black font-semibold w-full rounded-lg border-2 border-base-content appearance-none focus:outline-none peer disabled:bg-base-content/25" placeholder=" " disabled />
              <label for="credit" class="absolute left-2 text-md font-semibold  text-black transform duration-300 top-5 scale-75 -translate-y-4 origin-[0] px-2">
                Credit*
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

            <div class="relative w-full mx-2">
              <select bind:value={subject.teacherId} class="select w-full h-[64px] border-base-content border-2" required>
                <option disabled value={0}>Pick a Teacher</option>
                {#each teachers as teacher}
                  <option value={teacher.id}>
                    {`${teacher["firstName"]} ${teacher["lastName"]} `}
                  </option>
                {/each}
              </select>
            </div>
          </div>

          <div class="relative m-2">
            <textarea bind:value={subject.description} id="description" class="block px-3 pb-3 pt-6 bg-transparent text-black font-semibold w-full rounded-lg border-2 border-base-content appearance-none focus:outline-none peer" placeholder=" " rows="7" />
            <label for="description" class="absolute left-2 text-md font-semibold  text-black transform duration-300 top-5 scale-75 -translate-y-4 origin-[0] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-9 peer-focus:top-5 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:font-bold">
              Description
            </label>
          </div>

          <div class="flex justify-end text-center space-x-2 me-2 absolute bottom-8 right-10">
            <a class="btn btn-outline btn-secondary rounded-3" href="/admin/subjects">
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
