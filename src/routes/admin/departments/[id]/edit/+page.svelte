<script lang="ts">
  import { goto } from "$app/navigation";
  import axios from "$lib/axios/axios";
  import { departmentValidator } from "$lib/common-functions";
  import type { PageData } from "./$types";
  import "$styles/book.css";
  import Input from "$components/Input.svelte";
  import Textarea from "$components/Textarea.svelte";

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

<main class="mx-auto">
  <input type="checkbox" id="checkbox-cover">
  <div class="book w-[30rem] h-[36rem] 2xl:w-[40rem] 2xl:h-[48rem]">
    <div class="cover">
      <label for="checkbox-cover">
        <h1 class="absolute text-5xl text-black font-bold top-36 left-8">Edit Department #{id}</h1>
      </label>
    </div>
    <div class="page w-[30rem] h-[36rem] 2xl:w-[38rem] 2xl:h-[45.6rem] 2xl:my-4" id="page1">
      <div class="front-page">
        <form>
          <Input bind:value={department.name} id="name" label="Name*" type="text" required={true} />

          <Textarea bind:value={department.description} rows={13} xlrows={20} label={"Description"} />

          <div class="flex justify-end text-center space-x-2 me-2 absolute bottom-10 right-4">
            <a class="btn btn-outline btn-secondary rounded-3" href="/admin/departments">
              Close
            </a>
            <button class="btn btn-primary rounded-3" on:click={submit}>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
    <div class="back-cover"></div>
  </div>
</main>
