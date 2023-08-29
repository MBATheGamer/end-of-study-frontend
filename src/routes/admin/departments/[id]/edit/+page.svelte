<script lang="ts">
  import { goto } from "$app/navigation";
  import axios from "$lib/axios/axios";
    import { departmentValidator } from "$lib/common-functions";
  import type { PageData } from "./$types";

  export let data: PageData;
  const {id, department} = data;

  const submit = async () => {
    if (departmentValidator(department)) {
      await axios.put(`/departments/${id}`, department)
        .then(() => {
          goto("/admin/departments");
        });
    }
  }
</script>

<div class="ml-16 w-[600px]">
  <h1 class="ml-12 mb-3 font-bold text-3xl">Edit Department #{department.id}</h1>
  <form class="ml-10 ">
    <div class="relative m-2">
      <input bind:value={department.name} type="text" id="name" class="block px-3 pb-3 pt-6 w-full bg-transparent text-accent-content font-semibold rounded-lg border-2 border-base-content appearance-none focus:outline-none peer" placeholder=" " required />
      <label for="name" class="absolute left-2 text-md font-semibold text-accent-content transform duration-300 top-5 scale-75 -translate-y-4 origin-[0] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-5 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:font-bold">
        Name
      </label>
    </div>

    <div class="relative m-2">
      <textarea bind:value={department.description} id="description" class="block px-3 pb-3 pt-6 w-full bg-transparent rounded-lg border-2 border-base-content appearance-none focus:outline-none peer resize-none" placeholder=" " rows="8" />
      <label for="description" class="absolute left-2 text-md font-semibold text-accent-content transform duration-300 top-5 scale-75 -translate-y-4 origin-[0] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-9 peer-focus:top-5 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:font-bold">
        Description (Optional)
      </label>
    </div>

    <div class="flex justify-end text-center space-x-2 me-2">
      <a class="btn btn-outline btn-secondary rounded-3" href="/admin/departments">
        Close
      </a>
      <button class="btn btn-primary rounded-3" on:click={submit}>
        Save
      </button>
    </div>
  </form>
</div>
