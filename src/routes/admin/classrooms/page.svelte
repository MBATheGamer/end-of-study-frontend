<script lang="ts">
  import ConfirmModal from "$components/ConfirmModal.svelte";
  import axios from "$lib/axios/axios";
  import { pageStore } from "$lib/store/stores";
  import type { PageData } from "./$types";

  export let data: PageData;

  let { classrooms } = data;
  let show = false;
  let id = -1;

  $: previous = () => pageStore.update(n => n > 2 ? n - 1 : 1);
  $: next = () => pageStore.update(n => n + 1);

  const deleteClassroom = async (currentId: number) => {
    id = currentId;
    show = true;
  }
</script>

<svelte:head>
  <title>Admin - Classrooms</title>
</svelte:head>

<a class="btn btn-outline-secondary" href="classrooms/add">
  Add Classroom
</a>

<div class="table-responsive small">
  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col" class="col-1">#</th>
        <th scope="col" class="col-3">Name</th>
        <th scope="col" class="col-3">Department</th>
        <th scope="col" class="col-3">Description</th>
        <th scope="col" class="col-2">Action</th>
      </tr>
    </thead>
    <tbody>
      {#if classrooms}
        {#each classrooms as classroom }
          <tr>
            <td>{classroom["id"]}</td>
            <td>{classroom["name"]}</td>
            <td>{classroom["department"]["name"]}</td>
            <td>{classroom["description"] ? classroom["description"] : ""}</td>
            <td>
              <a class="btn btn-sm btn-outline-secondary" href={`classrooms/${classroom["id"]}/edit`}>
                Edit
              </a>
              <button
                class="btn btn-sm btn-outline-secondary"
                on:click={() => deleteClassroom(classroom["id"])}
              >
                Delete
              </button>
            </td>
          </tr>
        {/each}
      {/if}
    </tbody>
  </table>
</div>

<nav>
  <ul class="pagination justify-content-end text-center">
    <li class="page-item">
      <a
        class="page-link"
        href="classrooms{ $pageStore !== 1 ? `?page=${$pageStore}` : "" }"
        on:click={previous}
      >
        Previous
      </a>
    </li>
    <li class="page-item">
      <a
        class="page-link"
        href="classrooms{ $pageStore !== 1 ? `?page=${$pageStore}` : "" }"
        on:click={next}
      >
        Next
      </a>
    </li>
  </ul>
</nav>

<ConfirmModal bind:showModal={show} onConfirm={async () => {
  await axios.delete(`classrooms/${id}`);

  // delete classroom
  classrooms = classrooms.filter(classroom => classroom.id !== id);
}}/>
