<script lang="ts">
	import { page } from "$app/stores";
	import "$main/app.css";
	import { paths } from "$lib/data/paths";
	
	$: getPath = (path: string) => {
    const params = $page.url.href.split("/");

    return path === params[params.length - 1];
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
				<li><a href="/login" class="btn btn-primary normal-case text-lg">Login</a></li>
				<li><a href="/sign-up" class="btn btn-outline btn-primary normal-case text-lg">Sign up</a></li>
    	</ul>
  	</div>
	</div>
	<div class="md:navbar-start navbar-end">
		<a href="/" class="btn btn-ghost normal-case text-3xl">Logo</a>
	</div>
	<div class="hidden md:navbar-center md:flex">
		<ul class="menu menu-horizontal">
			{#each paths as {path, label}}
				<li>
					<a href="/{path}" class="normal-case text-lg {getPath(path) ? "text-primary" : ""}">{label}</a>
				</li>
			{/each}
		</ul>
	</div>
	<div class="hidden md:navbar-end md:flex">
		<a href="/login" class="btn btn-primary mx-3">Login</a>
		<a href="/sign-up" class="btn btn-outline btn-primary ms-3">Sign up</a>
	</div>
</div>

<div class="w-full my-auto p-6">
	<slot />
</div>
