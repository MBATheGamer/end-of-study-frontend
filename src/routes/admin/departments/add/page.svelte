<script lang="ts">
  import { goto } from "$app/navigation";
  import axios from "$lib/axios/axios";
  import { departmentValidator } from "$lib/common-functions";
  import type { DepartmentResponse } from "$lib/custom-types";

  
  const department: DepartmentResponse = {
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

<div class="col-md-7 col-lg-8">
  <h4 class="mb-4">Add Department</h4>
  <form class="needs-validation">
    <div class="row g-3">
      <div class="form-floating mb-1 col-12">
        <input bind:value={department.name} type="text" class="form-control rounded-3" id="name" placeholder=" " required />
        <label for="name" class="form-label ms-2">Name</label>
        <div class="invalid-feedback">
          Please select a valid name.
        </div>
      </div>

      <div class="form-floating mb-1 col-12">
        <textarea bind:value={department.description} id="description" class="form-control rounded-3" placeholder=" " rows="10" style="height: 200px; resize: none" />
        <label for="description" class="ms-2">Description <span class="text-body-secondary">(Optional)</span></label>
      </div>  
    </div>

    <nav>
      <div class="pagination justify-content-end text-center">
        <a class="mt-4 me-3 btn btn-lg rounded-3 btn-secondary" href="/admin/departments">
          Close
        </a>
        <button class="mt-4 btn btn-lg rounded-3 btn-primary" on:click={submit}>
          Save
        </button>
      </div>
    </nav>
  </form>
</div>
