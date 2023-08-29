<script lang="ts">
  import ConfirmModal from "$components/ConfirmModal.svelte";
  import axios from "$lib/axios/axios";
  import { pageStore } from "$lib/store/stores";
  import type { PageData } from "./$types";

  export let data: PageData;

  let { departments } = data;
  let show = false;
  let id = -1;

  $: previous = () => pageStore.update(n => n > 2 ? n - 1 : 1);
  $: next = () => pageStore.update(n => n + 1);
  
  const deleteDepartment = async (currentId: number) => {
    id = currentId;
    show = true;
  }
</script>

<svelte:head>
  <title>Admin - Departments</title>
</svelte:head>

<a class="btn btn-outline-secondary" href="departments/add">
  Add Department
</a>

<div class="table-responsive small">
  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col" class="col-1">#</th>
        <th scope="col" class="col-3">Name</th>
        <th scope="col" class="col-6">Description</th>
        <th scope="col" class="col-2">Action</th>
      </tr>
    </thead>
    <tbody>
      {#if departments}
        {#each departments as department }
          <tr>
            <td>{department["id"]}</td>
            <td>{department["name"]}</td>
            <td>{department["description"] ? department["description"] : ""}</td>
            <td>
              <a class="btn btn-sm btn-outline-secondary" href={`departments/${department["id"]}/edit`}>
                Edit
              </a>
              <button
                class="btn btn-sm btn-outline-secondary"
                on:click={() => deleteDepartment(department["id"])}
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
        href="departments{ $pageStore !== 1 ? `?page=${$pageStore}` : "" }"
        on:click={previous}
      >
        Previous
      </a>
    </li>
    <li class="page-item">
      <a
        class="page-link"
        href="departments{ $pageStore !== 1 ? `?page=${$pageStore}` : "" }"
        on:click={next}
      >
        Next
      </a>
    </li>
  </ul>
</nav>

<ConfirmModal bind:showModal={show} onConfirm={async () => {
  await axios.delete(`departments/${id}`);

  // delete department
  departments = departments.filter(department => department.id !== id);
}}/>
