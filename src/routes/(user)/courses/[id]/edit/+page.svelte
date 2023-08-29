<script lang="ts">
  import { goto } from "$app/navigation";
  import axios from "$lib/axios/axios";
  import { subjectValidator } from "$lib/common-functions";
  import type { PageData } from "./$types";

  export let data: PageData;
  const {id, subject, classrooms} = data;
  let classroomId = subject.classroom.id;
  delete subject.classroom;
  let teacherId = subject.teacher.id;
  delete subject.teacher;

  $: subject.credit = subject.multiplier * 2;

  const submit = async () => {
    subject["classroomId"] = classroomId;
    subject["teacherId"] = teacherId;
    if (subjectValidator(subject)) {
      await axios.put(`/subjects/${id}`, subject)
        .then(() => {
          goto("/courses");
        });
    }
  }
</script>

<div class="col-md-7 col-lg-8">
  <h4 class="mb-4">Edit Course #1</h4>
  <form class="needs-validation">
    <div class="row g-3">
      <div class="form-floating mb-1 col-12">
        <input bind:value={subject.name} type="text" class="form-control rounded-3" id="name" placeholder=" " required>
        <label for="name" class="form-label ms-2">Name</label>
        <div class="invalid-feedback">
          Please select a valid name.
        </div>
      </div>

      <div class="form-floating mb-1 col-6">
        <input bind:value={subject.multiplier} type="number" step="0.5" class="form-control rounded-3" id="multiplier" placeholder=" " required>
        <label for="multiplier" class="form-label ms-2">Multiplier</label>
        <div class="invalid-feedback">
          Please select a valid multiplier.
        </div>
      </div>

      <div class="form-floating mb-1 col-6">
        <input value={subject.credit} type="number" class="form-control rounded-3" id="credit" placeholder=" " disabled>
        <label for="credit" class="form-label ms-2">credit</label>
        <div class="invalid-feedback">
          Please select a valid credit.
        </div>
      </div>

      <div class="form-floating col-12">
        <select bind:value={classroomId} class="form-select form-control rounded-3" id="country" required>
          {#each classrooms as classroom}
            <option value={classroom.id}>
              {classroom.name}
            </option>
          {/each}
        </select>
        <label for="country" class="form-label ms-2">Classroom</label>
        <div class="invalid-feedback">
          Please select a valid classroom.
        </div>
      </div>

      <div class="form-floating mb-1 col-12">
        <textarea bind:value={subject.description} id="description" class="form-control rounded-3" placeholder=" " rows="10" style="height: 200px; resize: none" />
        <label for="description" class="ms-2">Description <span class="text-body-secondary">(Optional)</span></label>
      </div>
    </div>

    <nav>
      <div class="pagination justify-content-end text-center">
        <a class="mt-4 me-3 btn btn-lg rounded-3 btn-secondary" href="/admin/subjects">
          Close
        </a>
        <button class="mt-4 btn btn-lg rounded-3 btn-primary" on:click={submit}>
          Save
        </button>
      </div>
    </nav>
  </form>
</div>
