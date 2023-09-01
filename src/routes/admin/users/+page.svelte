<script lang="ts">
  import { page } from "$app/stores";
  import ConfirmModal from "$components/ConfirmModal.svelte";
  import { administrator, limitStore, pageStore, searchStore, sortStore } from "$lib/store/stores";
  import { GetURL, sortBy } from "$lib/common-functions";
  import type { PageData } from "./$types";
  import { goto } from "$app/navigation";
  import type { Search } from "$lib/custom-types";
  import axios from "$lib/axios/axios";

  export let data: PageData;

  let { users } = data;
  let show = false;
  let id = -1;
  const search: Search = {
    keyword: "",
    field: ""
  };

  const url = new GetURL($page.url.href);

  $: users = data.users;

  $: getUrl = () => {
    return url.getUrlFromNumber("page", $pageStore !== 1, $pageStore)
      .getUrlFromNumber("limit", $limitStore !== 10, $limitStore)
      .getUrlFromSearch($searchStore)
      .getUrlFromSort($sortStore)
      .toString();
  }

  
  $: previous = () => {

    if (!search.keyword) {
      searchStore.set({
        keyword: "",
        field: ""
      });
    }

    pageStore.update(n => n > 2 ? n - 1 : 1);
  }

  $: next = () => {
    if (!search.keyword) {
      searchStore.set({
        keyword: "",
        field: ""
      });
    }

    pageStore.update(n => n + 1);
  }
  
  const deleteUser = async (currentId: number) => {
    id = currentId;
    show = true;
  }
</script>

<svelte:head>
  <title>Admin - Users</title>
</svelte:head>

{#if $administrator}
  <div class="w-full h-full">
    <div class="flex justify-between">
      <a class="btn btn-outline-secondary" href="users/add">
        Add User
      </a>

      <div class="w-[455px] join">
        <input bind:value={search.keyword} class="input input-bordered join-item w-[233px]" placeholder="Search" />
        <select bind:value={search.field} class="select select-bordered join-item" >
          <option disabled value="">Search By</option>
          <option value="firstName">First Name</option>
          <option value="lastName">Last Name</option>
          <option value="email">Email</option>
          <option value="role">Role</option>
        </select>
        <button class="btn join-item w-[88px]" on:click={() => {
          if (search.field && search.keyword) {
            searchStore.set(search);
            pageStore.set(1);
            goto(getUrl());
          }
          else if (search.field) {
            searchStore.set({field: "", keyword: ""});
            goto(getUrl());
          }
        }}>Search</button>
      </div>      
    </div>

    <div class="mt-2 mb-4 h-[80%] xl:h-[87%] overflow-y-auto">
      <table class="table table-pin-rows">
        <thead>
          <tr>
            <th>
            </th>
            <th>
              <button
                on:click={() => {
                  sortBy("firstName");
                  pageStore.set(1);
                  goto(getUrl());
                }}
              >
                First Name
              </button>
            </th>
            <th>
              <button
                on:click={() => {
                  sortBy("lastName");
                  pageStore.set(1);
                  goto(getUrl());
                }}
              >
                Last Name
              </button>
            </th>
            <th>
              <button
                on:click={() => {
                  sortBy("email");
                  pageStore.set(1);
                  goto(getUrl());
                }}
              >
                Email
              </button>
            </th>
            <th>
              <button
                on:click={() => {
                  sortBy("role");
                  pageStore.set(1);
                  goto(getUrl());
                }}
              >
                Role
              </button>
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {#each users as user }
            <tr>
              <td>{user["id"]}</td>
              <td>{user["firstName"]}</td>
              <td>{user["lastName"]}</td>
              <td>{user["email"]}</td>
              <td>{user["role"]["name"]}</td>
              <td>
                <a class="btn btn-outline" href={`users/${user["id"]}/edit`}>
                  Edit
                </a>
                <button
                  class="btn btn-outline btn-error"
                  on:click={() => deleteUser(user["id"])}
                >
                  Delete
                </button>
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>

    <div class="w-full grid grid-cols-4">
      <div>
        <select bind:value={$limitStore} class="select select-bordered" on:change={() => {
          pageStore.set(1);
          goto(getUrl());
        }}>
          <option value={10}>10 elements</option>
          <option value={25}>25 elements</option>
          <option value={50}>50 elements</option>
          <option value={100}>100 elements</option>
        </select>
      </div>
      <div class="col-span-2 join flex justify-center">
        <a 
          href={getUrl()}
          class="join-item btn" on:click={previous}
        >«</a>
        <button class="join-item btn">Page {$pageStore}</button>
        <a
          href={getUrl()}
          class="join-item btn" on:click={next}
        >»</a>
      </div>
      <div>
      </div>
    </div>
  </div>
{/if}

<ConfirmModal bind:showModal={show} onConfirm={async () => {
  await axios.delete(`users/${id}`);

  // delete user
  users = users.filter(user => user.id !== id);
}}/>
