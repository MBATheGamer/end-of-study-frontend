<script lang="ts">
	import { goto } from "$app/navigation";
	import { page } from "$app/stores";
	import axios from "$lib/axios/axios";
	import { Roles } from "$lib/consts";
	import { authPaths as paths } from "$lib/data/paths";
	import { administrator, authenticated, subjectStore, roleIdStore, userStore } from "$lib/store/stores";
	import { onMount } from "svelte";

	const coursesURL = /^\/courses\/[0-9]+$/

	onMount(async () => {
    const user = (await axios.get("user")).data;
		userStore.set(user);
    if ($userStore) {
      authenticated.set(true);
			roleIdStore.set($userStore.role.id);
    }
    else {
      goto("/");
    }
  });

	$: getPath = (path: string) => {
    const params = $page.url.href.split("/");

    return path === params[params.length - 1] ? "link-secondary" : "";
  }
  
	const logout = async () => {
    goto("/");
    await axios.post("logout");
    authenticated.set(false);
    administrator.set(false);
  }
</script>


<div class="navbar bg-base-100 md:px-12 sm:px-6">
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
						<a href="/{path}" class="normal-case text-lg {getPath(path) ? "text-primary" : ""}">{label}</a>
					</li>
				{/each}
      </ul>
  	</div>
	</div>
	<div class=":sm:navbar-center md:navbar-start">
		<a href="/courses" class="btn btn-ghost normal-case text-3xl">Logo</a>
	</div>
	<div class="hidden md:navbar-center md:flex">
		<ul class="menu menu-horizontal">
			{#each paths as {path, label}}
				<li>
					<a href="/{path}" class="normal-case text-lg {getPath(path) ? "text-primary" : ""}">{label}</a>
				</li>
			{/each}
		</ul>
		{#if coursesURL.test($page.url.pathname)}
			{#if $roleIdStore === Roles.TEACHER_ID}
				<a href="{$page.url.pathname}/join" class="btn {$subjectStore.isOnMeet ? "btn-primary" : "btn-outline btn-primary"}" on:click={async () => {
					await axios.put(`subjects/${$page.params.id}`, {isOnMeet: true});
					subjectStore.set({...$subjectStore, isOnMeet : true});
				}}>
					{ $subjectStore.isOnMeet ? "Join Meet" : "Create Meet" }
				</a>
			{:else if $roleIdStore === Roles.STUDENT_ID && $subjectStore.isOnMeet}
				<a href="{$page.url.pathname}/join" class="btn btn-primary">
					Join Meet
				</a>
			{/if}
		{/if}
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
          <a href="/profile/view">Profile</a>
        </li>
        <li><a href="/profile/setting">Settings</a></li>
        <li><a href="/" on:click={logout}>Logout</a></li>
      </ul>
    </div>
	</div>
</div>

<div class="w-full h-full my-auto p-6 overflow-y-auto">
	<slot />
</div>
