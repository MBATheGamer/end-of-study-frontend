<script lang="ts">
  import { goto } from "$app/navigation";
  import axios from "$lib/axios/axios";
  import { subjectValidator } from "$lib/common-functions";
  import type { PageData } from "./$types";
  import "$styles/book.css";
  import Textarea from "$components/Textarea.svelte";
    import Input from "$components/Input.svelte";
    import SelectOptions from "$components/SelectOptions.svelte";

  export let data: PageData;
  const {id, subject, classrooms, teachers} = data;
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
        <h1 class="absolute text-5xl text-black font-bold top-36 left-8">Edit Subject #{id}</h1>
      </label>
    </div>
    <div class="page" id="page1">
      <div class="front-page">
        <form>
          <Input bind:value={subject.name} type="text" id={"name"} label={"Name*"} />
          <div class="flex my-2">
            <Input bind:value={subject.multiplier} type={"number"} step={0.5} id={"multiplier"} label={"Multiplier*"} />
            <Input value={subject.credit} type={"number"} id={"credit"} disabled={true} label={"Credit*"} />
          </div>

          <div class="flex my-2">
            <SelectOptions bind:id={classroomId} items={classrooms} label={"Pick a Classroom"}/>
            <SelectOptions bind:id={teacherId} items={teachers} isTeacher={true} label={"Pick a Teacher"}/>
          </div>

          <Textarea bind:value={subject.description} label="Description" rows={7} />

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
