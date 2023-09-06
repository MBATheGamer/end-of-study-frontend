<script lang="ts">
  import { goto } from "$app/navigation";
    import Book from "$components/Book.svelte";
  import ConfirmModal from "$components/ConfirmModal.svelte";
    import ContextMenu from "$components/ContextMenu.svelte";
  import axios from "$lib/axios/axios";
  import { numberFormat } from "$lib/common-functions";
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

<!-- <div>  
  {#if $authenticated}
    {#if $roleIdStore === 2}
      <button class="btn btn-outline-secondary mb-3" on:click={() => goto("/courses/add")} disabled={subjects.length > 10}>
        Add Course
      </button>
    {/if}
    <div class="grid grid-cols-4 gap-y-12">
      {#each subjects as subject}
        <div class="card card-compact w-[275px] h-[375px] bg-base-100 shadow-xl">
          <div class="w-full h-full p-2">
            <figure class="w-full h-full mx-auto bg-base-300 rounded-lg">
              {#if $roleIdStore === 2}
                <div class="dropdown dropdown-end absolute top-2 right-2">
                  <label for="" tabIndex={0} class="btn btn-ghost">...</label>
                  <ul tabIndex={0} class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40">
                    <li>
                      <a href={`/courses/${subject.id}/edit`}>Edit Course</a>
                    </li>
                    <li>
                      <button on:click={() => deleteSubject(subject["id"])}>
                        Delete Course
                      </button>
                    </li>
                  </ul>
                </div>
              {/if}
              <p>{subject.name}</p>
            </figure>  
          </div>
          <div class="card-body items-center text-center">
            <h2 class="card-title text-center text-3xl">
              {subject.classroom.name}
            </h2>
            <p class="text-center">
              Multiplier: <strong>{numberFormat(subject.multiplier)}</strong>,
              Credit: <strong>{subject.credit}</strong>
            </p>
            <div class="card-actions">
              <a href="/courses/{subject.id}" class="btn btn-primary">Go to Course</a>
            </div>
          </div>
        </div>
      {/each}
    </div>
  {:else}
    <div></div>
  {/if}
</div> -->

<div>  
  {#if $authenticated}
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
  {:else}
    <div></div>
  {/if}
</div>

<ConfirmModal bind:showModal={show} onConfirm={async () => {
  await axios.delete(`subjects/${id}`);

  // delete subject
  subjects = subjects.filter(subject => subject.id !== id);
}}/>
