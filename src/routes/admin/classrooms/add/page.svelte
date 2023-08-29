<script lang="ts">
  import { goto } from "$app/navigation";
  import axios from "$lib/axios/axios";
  import { classroomValidator } from "$lib/common-functions";
  import type { ClassroomRequest } from "$lib/custom-types";
  import type { PageData } from "./$types";

  export let data: PageData;
  const {departments} = data;
  let departmentId = 0;

  const classroom: ClassroomRequest = {
    name: "",
    description: "",
    departmentId: 0
  }

  const submit = async () => {
    classroom["departmentId"] = departmentId;
    if (classroomValidator(classroom)) {
      await axios.post(`/classrooms`, classroom)
        .then(() => {
          goto("/admin/classrooms");
        });
    }
  }
</script>

<div class="col-md-7 col-lg-8">
  <h4 class="mb-4">Add Classroom</h4>
  <form class="needs-validation">
    <div class="row g-3">
      <div class="form-floating mb-1 col-12">
        <input bind:value={classroom.name} type="text" class="form-control rounded-3" id="name" placeholder=" " required>
        <label for="name" class="form-label ms-2">Name</label>
        <div class="invalid-feedback">
          Please select a valid name.
        </div>
      </div>

      <div class="form-floating col-12">
        <select bind:value={departmentId} class="form-select form-control rounded-3" id="country" required>
          {#each departments as department}
            <option value={department.id}>
              {department.name}
            </option>
          {/each}
        </select>
        <label for="country" class="form-label ms-2">Department</label>
        <div class="invalid-feedback">
          Please select a valid department.
        </div>
      </div>

      <div class="form-floating mb-1 col-12">
        <textarea bind:value={classroom.description} id="description" class="form-control rounded-3" placeholder=" " rows="10" style="height: 200px; resize: none" />
        <label for="description" class="ms-2">Description <span class="text-body-secondary">(Optional)</span></label>
      </div>
    </div>
  
    <nav>
      <div class="pagination justify-content-end text-center">
        <a class="mt-4 me-3 btn btn-lg rounded-3 btn-secondary" href="/admin/classrooms">
          Close
        </a>
        <button class="mt-4 btn btn-lg rounded-3 btn-primary" on:click={submit}>
          Save
        </button>
      </div>
    </nav>
  </form>
</div>
