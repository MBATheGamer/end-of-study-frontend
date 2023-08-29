<script lang="ts">
  import { goto } from "$app/navigation";
  import axios from "$lib/axios/axios";
  import { subjectValidator } from "$lib/common-functions";
  import type { SubjectRequest } from "$lib/custom-types";
    import { authenticated, userStore } from "$lib/store/stores";
  import type { PageData } from "./$types";

  export let data: PageData;
  const {classrooms} = data;

  const subject: SubjectRequest = {
    name: "",
    description: "",
    multiplier: 0,
    credit: 0,
    classroomId: 0,
    teacherId: $userStore.id
  }

  $: subject.credit = subject.multiplier * 2;

  const submit = async () => {
    if (subjectValidator(subject)) {
      await axios.post(`/subjects`, subject)
        .then(() => {
          goto("/courses");
        });
    }
  }
</script>

<svelte:head>
  <title>{$authenticated ? "Add Course" : "Not Found"}</title>
</svelte:head>

<div class="p-6 ml-12 sm:w-[37rem]">
  <h1 class="text-3xl font-semibold">Add Course</h1>
  <form class="flex justify-between">
    <div>
      <div>
        <label for="cin" class="label">
          <span class="text-base label-text">CIN</span>
        </label>
        <input id="cin" type="text" placeholder="CIN" class="w-full input input-bordered" required />
      </div>
      <div class="flex justify-between">
        <div class="w-full me-2">
          <label for="firstName" class="label">
            <span class="text-base label-text">First Name</span>
          </label>
          <input id="firstName" type="text" placeholder="First Name" class="w-full input input-bordered" required />
        </div>
        <div class="w-full ms-2">
          <label for="lastName" class="label">
              <span class="text-base label-text">Last Name</span>
          </label>
          <input id="lastName" type="text" placeholder="Last Name" class="w-full input input-bordered" required />
        </div>
      </div>
      <div>
        <label for="email" class="label">
          <span class="text-base label-text">Email</span>
        </label>
        <input id="email" type="text" placeholder="Email Address" class="w-full input input-bordered" required />
      </div>
      <div class="flex justify-between">
        <div class="w-full me-2">
          <label for="password" class="label">
            <span class="text-base label-text">Password</span>
          </label>
          <input id="password" type="text" placeholder="Password" class="w-full input input-bordered" required />
        </div>
        <div class="w-full ms-2">
          <label for="passwordConfirm" class="label">
            <span class="text-base label-text">Confirm Password</span>
          </label>
          <input id="passwordConfirm" type="text" placeholder="Confirm Password" class="w-full input input-bordered" required />
        </div>
      </div>
    </div>
    <div>
      <div class="w-full ms-2">
        <label for="passwordConfirm" class="label">
          <span class="text-base label-text">Confirm Password</span>
        </label>
        <input id="passwordConfirm" type="text" placeholder="Confirm Password" class="w-full input input-bordered" required />
      </div>
      <div class="pt-2">
        <button class="btn btn-primary btn-block" on:click={() => submit()}>Sign Up</button>
      </div>
      <span>Already have an account?
        <a href="/login" class="text-blue-600 hover:text-blue-800 hover:underline">Login</a>
      </span>
    </div>
  </form>
</div>

