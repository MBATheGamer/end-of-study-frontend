<script lang="ts">
  import { goto } from "$app/navigation";
  import Input from "$components/Input.svelte";
  import SelectOptions from "$components/SelectOptions.svelte";
  import Textarea from "$components/Textarea.svelte";
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
  <div class="book w-[30rem] h-[36rem] 2xl:w-[40rem] 2xl:h-[48rem]">
    <div class="cover">
      <label for="checkbox-cover">
        <h1 class="absolute text-5xl text-black font-bold top-36 left-8">Add Classroom</h1>
      </label>
    </div>
    <div class="page w-[30rem] h-[36rem] 2xl:w-[38rem] 2xl:h-[45.6rem] 2xl:my-4" id="page1">
      <div class="front-page">
        <form>
          <Input bind:value={classroom.name} id="name" label="Name*" type="text" required={true} />

          <SelectOptions bind:id={classroom.departmentId} items={departments} label={"Pick a Department"} required={true} />

          <Textarea bind:value={classroom.description} rows={10} xlrows={17} label={"Description"} />
  
          <div class="flex justify-end text-center space-x-2 me-2 absolute bottom-10 right-4">
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
