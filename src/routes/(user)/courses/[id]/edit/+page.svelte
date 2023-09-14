<script lang="ts">
  import { goto } from "$app/navigation";
  import axios from "$lib/axios/axios";
  import { subjectValidator } from "$lib/common-functions";
  import type { PageData } from "./$types";
  import "$styles/book.css";
  import Textarea from "$components/Textarea.svelte";
  import SelectOptions from "$components/SelectOptions.svelte";
  import Input from "$components/Input.svelte";

  export let data: PageData;
  const {id, subject, classrooms} = data;
  let classroomId = subject.classroom.id;
  delete subject.classroom;
  let teacherId = subject.teacher.id;
  delete subject.teacher;

  $: subject.credit = subject.multiplier * 2;

  const submit = async () => {
    subject["classroomId"] = classroomId;
    subject["teacherId"] = teacherId;
    if (subjectValidator(subject)) {
      await axios.put(`/subjects/${id}`, subject)
        .then(() => {
          goto("/courses");
        });
    }
  }
</script>

<main class="mx-auto">
  <input type="checkbox" id="checkbox-cover">
  <div class="book w-[30rem] h-[36rem] 2xl:w-[40rem] 2xl:h-[48rem]">
    <div class="cover">
      <label for="checkbox-cover">
        <h1 class="absolute text-5xl text-black font-bold top-36 left-8">{subject.name}</h1>
      </label>
    </div>
    <div class="page w-[30rem] h-[36rem] 2xl:w-[38rem] 2xl:h-[45.6rem] 2xl:my-4" id="page1">
      <div class="front-page">
        <form>
          <Input bind:value={subject.name} id="name" label="Name*" type="text" required={true} />
            
          <div class="flex my-2">
            <Input bind:value={subject.multiplier} id="multiplier" label="Multiplier*" type="number" step={0.5} required={true} />
            <Input value={subject.credit} id="credit" label="Credit*" type="number" required={true} disabled />
          </div>

          <SelectOptions bind:id={subject.classroomId} items={classrooms} label={"Pick a Classroom"} required={true} />
          <Textarea bind:value={subject.description} rows={6} xlrows={6} label={"Description"} />

          <div class="flex justify-end text-center space-x-2 me-2 absolute bottom-10 right-4">
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
