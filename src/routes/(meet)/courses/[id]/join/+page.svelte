<script>
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import Camera from "$icons/Camera.svelte";
  import Comment from "$icons/Comment.svelte";
  import Hand from "$icons/Hand.svelte";
  import HangOn from "$icons/HangOn.svelte";
  import Microphone from "$icons/Microphone.svelte";
  import Participants from "$icons/Participants.svelte";
  // import Record from "$icons/Record.svelte";
  import ScreenShare from "$icons/ScreenShare.svelte";
  import WhiteBoard from "$icons/WhiteBoard.svelte";
  import axios from "$lib/axios/axios";
  import { Roles } from "$lib/consts";
  import { roleIdStore, subjectStore, userStore } from "$lib/store/stores";

  let microphone = false;
  let camera = false;
  let join = false;
</script>

<svelte:head>
  <title>Meet{$subjectStore ? ` in ${$subjectStore.name}` : ""}</title>
</svelte:head>

<div class="h-100 d-flex">
  <div class="h-100 w-25 px-5 pt-5 bg-gray d-flex flex-column">
    <h2 class="mb-5 text-start">Join Meeting</h2>
    <a class="btn btn-primary mb-4" href="/courses/{$page.params.id}/meet">Join Meet</a>
    {#if $roleIdStore === Roles.TEACHER_ID}
      <a href="/courses/{$page.params.id}" class="btn btn-outline-danger" on:click={async () => {
        await axios.put(`subjects/${$page.params.id}`, {isOnMeet: false});
        subjectStore.set({...$subjectStore, isOnMeet : false});
      }}>
        Close Meet
      </a>
    {:else if $roleIdStore === Roles.STUDENT_ID}
      <a href="/courses/{$page.params.id}" class="btn btn-outline-danger">
        Close Meet
      </a>
    {/if}
    <div class="my-3 d-flex justify-content-center align-items-center">
      <button class="btn icon" on:click={() => microphone = !microphone}><Microphone open={microphone} /></button>
      <button class="btn icon" on:click={() => camera = !camera}><Camera open={camera} /></button>
    </div>
    <div class="warning bg-warning rounded-2 pt-3 px-1 mb-2">
      <p class="text-center">You need to enable microphone and camera to access.</p>
    </div>
  </div>

  <div class="h-100 w-75 bg-light d-flex justify-content-center align-items-center p-2">
    <div class="bg-gray h-100 w-100 d-flex justify-content-center align-items-center rounded-3">
      <div class="bg-green d-flex justify-content-center align-items-center" style="height: 300px; width: 300px; border-radius: 50%;">
        <p class="text-white meet-icon">{$userStore.firstName[0]}</p>
      </div>
    </div>
  </div>
</div>

<style>
  .bg-gray {
    background-color: #EEEEEE;
  }

  .icon {
    border: none;
  }

  .meet-icon {
    padding-top: 1rem;
    font-size: 9rem;
    font-weight: bold;
  }

  .bg-green {
    background-color: burlywood;
  }

  .warning {
    position: relative;
    bottom: -14rem;
  }
</style>
