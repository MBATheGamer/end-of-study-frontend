<script lang="ts">
  import { goto } from "$app/navigation";
  import axios from "$lib/axios/axios";
  import { departmentValidator } from "$lib/common-functions";
  import type { DepartmentRequest } from "$lib/custom-types";

  const department: DepartmentRequest = {
    name: "",
    description: "",
  }

  const submit = async () => {
    if (departmentValidator(department)) {
      await axios.post(`/departments`, department)
        .then(() => {
          goto("/admin/departments");
        });
    }
  }
</script>

<main class="mx-auto">
  <input type="checkbox" id="checkbox-cover">
  <div class="book">
    <div class="cover">
      <label for="checkbox-cover">
        <h1 class="absolute text-5xl font-bold top-36 left-8">Add Department</h1>
      </label>
    </div>
    <div class="page" id="page1">
      <div class="front-page">
        <form>
          <div class="relative m-2">
            <input bind:value={department.name} type="text" id="name" class="block px-3 pb-3 pt-6 w-full bg-transparent text-accent-content font-semibold rounded-lg border-2 border-base-content appearance-none focus:outline-none peer" placeholder=" " required />
            <label for="name" class="absolute left-2 text-md font-semibold text-accent-content transform duration-300 top-5 scale-75 -translate-y-4 origin-[0] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-5 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:font-bold">
              Name
            </label>
          </div>

          <div class="relative m-2">
            <textarea bind:value={department.description} id="description" class="block px-3 pb-3 pt-6 w-full bg-transparent rounded-lg border-2 border-base-content appearance-none focus:outline-none peer resize-none" placeholder=" " rows="15" />
            <label for="description" class="absolute left-2 text-md font-semibold text-accent-content transform duration-300 top-5 scale-75 -translate-y-4 origin-[0] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-9 peer-focus:top-5 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:font-bold">
              Description (Optional)
            </label>
          </div>

          <div class="flex justify-end text-center space-x-2 me-2 absolute bottom-10 right-10">
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

<style>
  main {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .book {
    width: 32.5rem;
    height: 40rem;
    position: relative;
    transition-duration: 1s;
    perspective: 1500;
  }

  input[type="checkbox"] {
    display: none;
  }

  .cover, .back-cover {
    background: linear-gradient(45deg,  #8b868d 0%, #f2ebf4 100%);
    width: 100%;
    height: 100%;
    border-radius: 0 15px 15px 0;
    box-shadow: 0 0 5px rgb(41, 41, 41);
    display: flex;
    align-items: center;
    justify-content: center;
    transform-origin: center left;
  }

  .cover {
    position: absolute;
    z-index: 4;
    transition: transform 1s;
  }

  .cover label {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  .back-cover {
    position: relative;
    z-index: -1;
  }

  .page {
    position: absolute;
    background-color: white;
    width: 31.5rem;
    height: 38rem;
    border-radius: 0 15px 15px 0;
    margin-top: 1rem;
    transform-origin: left;
    transform-style: preserve-3d;
    transform: rotateY(0deg);
    transition-duration: 1.5s;
  }

  .front-page {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    box-sizing: border-box;
    padding: 2rem;
  }

  #page1 {
    z-index: 3;
  }

  #checkbox-cover:checked ~ .book {
    transform: translateX(200px);
  }

  #checkbox-cover:checked ~ .book .cover {
    transition: transform 1.5s, z-index 0.5s 0.5s;
    transform: rotateY(-180deg);
    z-index: 1;
  }

  #checkbox-cover:checked ~ .book .cover label h1 {
    display: none;
  }

  #checkbox-cover:checked ~ .book .page {
    box-shadow: 0 0 3px rgb(99, 98, 98);
  }

  #checkbox-page1:checked ~ .book #page1 {
    transform: rotateY(-180deg);
    z-index: 2;
  }
</style>
