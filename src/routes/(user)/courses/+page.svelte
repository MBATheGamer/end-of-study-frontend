<script lang="ts">
  import { goto } from "$app/navigation";
  import Book from "$components/Book.svelte";
  import ConfirmModal from "$components/ConfirmModal.svelte";
  import axios from "$lib/axios/axios";
  import { authenticated, roleIdStore } from "$lib/store/stores";
  import type { PageData } from "./$types";

  export let data: PageData;

  let { subjects } = data;
  let id = -1;
  let show = false;

  subjects.map(subject => (subject.description as string).split(" ").slice(0, 30).join(" "));

  const deleteSubject = (currentId: number) => {
    id = currentId;
    show = true;
  }
</script>

<svelte:head>
  <title>{$authenticated ? "Courses" : "Not Found"}</title>
</svelte:head>

<div>
  {#if $roleIdStore === 2}
    <button class="btn btn-outline-secondary mb-3" on:click={() => goto("/courses/add")} disabled={subjects.length > 10}>
      Add Course
    </button>
  {/if}
  <div ></div>
  <div class="grid lg:grid-cols-2 2xl:grid-cols-3 gap-y-12">
    {#each subjects as subject}
      <div class="container space-y-5 w-[400px]">
        <Book title={subject.name} href="/courses/{subject.id}" author={`${subject.teacher.firstName} ${subject.teacher.lastName}`} />
        {#if $roleIdStore === 2}
          <div class="grid grid-cols-2 gap-x-8">
            <a class="btn btn-neutral mb-3 w-full" href={`/courses/${subject.id}/edit`}>
              Edit Course
            </a>
            <button class="btn btn-error mb-3 w-full" on:click={() => deleteSubject(subject["id"])}>
              Delete Course
            </button>
          </div>
        {/if}
      </div>
    {/each}
  </div>
</div>

<ConfirmModal bind:showModal={show} onConfirm={async () => {
  await axios.delete(`subjects/${id}`);

  // delete subject
  subjects = subjects.filter(subject => subject.id !== id);
}}/>
