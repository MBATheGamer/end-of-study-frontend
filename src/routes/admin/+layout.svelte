<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import axios from "$lib/axios/axios";
  import { adminPath as paths } from "$lib/data/paths";
  import { administrator, authenticated, limitStore, pageStore, searchStore, sortStore } from "$lib/store/stores";
  import { onMount } from "svelte";

	onMount(async () => {
    const { data } = (await axios.get("user"));
    if (data) {
      authenticated.set(true);
      if (data.role.id === 1) administrator.set(true);
    }
    else {
      goto("/");
    }
  });

  const clearStores = () => {
      pageStore.set(1);
      sortStore.set({ field: "", order: "" });
      limitStore.set(10)
      searchStore.set({ keyword: "", field: "" })
  }

  const getPath = (path: string) => {
    return $page.url.href.indexOf(path) !== -1;
  }
  
	const logout = async () => {
    goto("/");
    await axios.post("logout");
    authenticated.set(false);
    administrator.set(false);
  }
</script>

{#if $administrator}
  <div class="navbar bg-base-100 md:px-12 sm:px-6 z-10">
    <div class="drawer navbar-start md:hidden">
      <input id="my-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <label for="my-drawer" class="btn btn-ghost drawer-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
        </label>
      </div> 
      <div class="drawer-side">
        <label for="my-drawer" class="drawer-overlay"></label>
        <ul class="menu p-4 w-60 h-full bg-base-200 text-base-content space-y-2">
          {#each paths as {path, label}}
            <li>
              <a href="/admin/{path}" class="normal-case text-lg {getPath(path) ? "text-primary" : ""}" on:click={clearStores}>{label}</a>
            </li>
          {/each}
        </ul>
      </div>
    </div>
    <div class=":sm:navbar-center md:navbar-start">
      <a href="/admin" class="btn btn-ghost normal-case text-3xl">Logo</a>
    </div>
    <div class="hidden md:navbar-center md:flex">
      <ul class="menu menu-horizontal">
        {#each paths as {path, label}}
          <li>
            <a href="/admin/{path}" class="normal-case text-lg {getPath(path) ? "text-primary" : ""}" on:click={clearStores}>{label}</a>
          </li>
        {/each}
      </ul>
    </div>
    <div class="navbar-end">
      <div class="dropdown dropdown-end">
        <label for="" tabIndex={0} class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
              <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
            </svg>
          </div>
        </label>
        <ul tabIndex={0} class="mt-3 z-[1] p-2 shadow menu dropdown-content bg-base-300 rounded-box w-52">
          <li>
            <a href="/admin/profile/view">Profile</a>
          </li>
          <li><a href="/admin/profile/setting">Settings</a></li>
          <li><a href="/" on:click={logout}>Logout</a></li>
        </ul>
      </div>
    </div>
  </div>

  <div class="w-full h-full my-auto p-6 overflow-y-auto">
    <div class="w-full h-full lg:block hidden m-0 p-0">
      <slot />
    </div>

    <div class="w-full h-full lg:hidden">
      <h1 class="w-full h-full text-3xl  flex justify-center items-center">Please use this app on PC</h1> 
    </div>
  </div>
{:else}
  <h1 class="flex justify-center items-center text-6xl">
    404
    <br />
    Not Found
  </h1>
{/if}
  