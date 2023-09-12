<script lang="ts">
  import { goto } from "$app/navigation";
  import axios from "$lib/axios/axios";
  import { subjectValidator } from "$lib/common-functions";
  import type { SubjectRequest } from "$lib/custom-types";
  import { authenticated, userStore } from "$lib/store/stores";
  import type { PageData } from "./$types";
  import "$styles/book.css";
    import Input from "$components/Input.svelte";
    import SelectOptions from "$components/SelectOptions.svelte";
    import Textarea from "$components/Textarea.svelte";

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

<main class="mx-auto">
  <input type="checkbox" id="checkbox-cover">
  <div class="book">
    <div class="cover">
      <label for="checkbox-cover">
        <h1 class="absolute text-5xl text-black font-bold top-36 left-8">Add Course</h1>
      </label>
    </div>
    <div class="page" id="page1">
      <div class="front-page">
        <form>
          <Input bind:value={subject.name} id="name" label="Name*" type="text" required={true} />
            
          <div class="flex my-2">
            <Input bind:value={subject.multiplier} id="multiplier" label="Multiplier*" type="number" step={0.5} required={true} />
            <Input value={subject.credit} id="credit" label="Credit*" type="number" required={true} disabled />
          </div>
          
          <SelectOptions bind:id={subject.classroomId} items={classrooms} label={"Pick a Classroom"} required={true} />
          <Textarea bind:value={subject.description} rows={6} label={"Description"} />

          <div class="flex justify-end text-center space-x-2 me-2 absolute bottom-8 right-10">
            <a class="btn btn-outline btn-secondary rounded-3" href="/courses">
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
