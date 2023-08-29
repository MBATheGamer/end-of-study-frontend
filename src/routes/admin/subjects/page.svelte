<script lang="ts">
  import ConfirmModal from "$components/ConfirmModal.svelte";
  import axios from "$lib/axios/axios";
  import { pageStore } from "$lib/store/stores";
  import type { PageData } from "./$types";

  export let data: PageData;
  
  let { subjects } = data;
  let show = false;
  let id = -1;

  $: previous = () => pageStore.update(n => n > 2 ? n - 1 : 1);
  $: next = () => pageStore.update(n => n + 1);
  
  const deleteSubject = async (currentId: number) => {
    id = currentId;
    show = true;
  }
</script>

<svelte:head>
  <title>Admin - Subjects</title>
</svelte:head>

<a class="btn btn-outline-secondary" href="subjects/add">
  Add Subject
</a>

<div class="table-responsive small">
  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col" class="col-1">#</th>
        <th scope="col" class="col-3">Name</th>
        <th scope="col" class="col-2">Classroom</th>
        <th scope="col" class="col-2">Teacher</th>
        <th scope="col" class="col-2">Description</th>
        <th scope="col" class="col-2">Action</th>
      </tr>
    </thead>
    <tbody>
      {#each subjects as subject }
        <tr>
          <td>{subject["id"]}</td>
          <td>{subject["name"]}</td>
          <td>{subject["classroom"]["name"]}</td>
          <td>{`${subject["teacher"]["firstName"]} ${subject["teacher"]["lastName"]}`}</td>
          <td>{subject["description"] ? subject["description"] : ""}</td>
          <td>
            <a class="btn btn-sm btn-outline-secondary" href={`subjects/${subject["id"]}/edit`}>
              Edit
            </a>
            <button
              class="btn btn-sm btn-outline-secondary"
              on:click={() => deleteSubject(subject["id"])}
            >
              Delete
            </button>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<nav>
  <ul class="pagination justify-content-end text-center">
    <li class="page-item">
      <a
        class="page-link"
        href="subjects{ $pageStore !== 1 ? `?page=${$pageStore}` : "" }"
        on:click={previous}
      >
        Previous
      </a>
    </li>
    <li class="page-item">
      <a
        class="page-link"
        href="subjects{ $pageStore !== 1 ? `?page=${$pageStore}` : "" }"
        on:click={next}
      >
        Next
      </a>
    </li>
  </ul>
</nav>

<ConfirmModal bind:showModal={show} onConfirm={async () => {
  await axios.delete(`subjects/${id}`);

  // delete subject
  subjects = subjects.filter(subject => subject.id !== id);
}}/>
