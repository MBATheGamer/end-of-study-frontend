<script lang="ts">
  import { goto } from "$app/navigation";
  import axios from "$lib/axios/axios";
  import { subjectValidator } from "$lib/common-functions";
  import type { SubjectRequest } from "$lib/custom-types";
  import type { PageData } from "./$types";
  import "$styles/book.css";
  import Input from "$components/Input.svelte";
  import SelectOptions from "$components/SelectOptions.svelte";
  import Textarea from "$components/Textarea.svelte";

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
  <div class="book w-[30rem] h-[36rem] 2xl:w-[40rem] 2xl:h-[48rem]">
    <div class="cover">
      <label for="checkbox-cover">
        <h1 class="absolute text-5xl text-black font-bold top-36 left-8">Add Subject</h1>
      </label>
    </div>
    <div class="page w-[30rem] h-[36rem] 2xl:w-[38rem] 2xl:h-[45.6rem] 2xl:my-4" id="page1">
      <div class="front-page">
        <form>
          <Input bind:value={subject.name} type="text" id={"name"} label={"Name*"} />
          
          <div class="flex my-2">
            <Input bind:value={subject.multiplier} type={"number"} step={0.5} id={"multiplier"} label={"Multiplier*"} />
            <Input value={subject.credit} type={"number"} id={"credit"} disabled={true} label={"Credit*"} />
          </div>

          <div class="flex my-2">
            <SelectOptions bind:id={subject.classroomId} items={classrooms} label={"Pick a Classroom"}/>
            <SelectOptions bind:id={subject.teacherId} items={teachers} isTeacher={true} label={"Pick a Teacher"}/>
          </div>

          <Textarea bind:value={subject.description} label="Description" rows={7} xlrows={13} />

          <div class="flex justify-end text-center space-x-2 me-2 absolute bottom-10 right-4">
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
