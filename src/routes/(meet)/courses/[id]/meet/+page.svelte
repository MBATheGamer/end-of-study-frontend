<script lang="ts">
  import Camera from "$icons/Camera.svelte";
  import Comment from "$icons/Comment.svelte";
  import HangOn from "$icons/HangOn.svelte";
  import Microphone from "$icons/Microphone.svelte";
  import Participants from "$icons/Participants.svelte";
  import ScreenShare from "$icons/ScreenShare.svelte";
  import WhiteBoard from "$icons/WhiteBoard.svelte";
  import { userStore } from "$lib/store/stores";

  let comments = false;
  let microphone = false;
  let camera = false;
</script>

<div class="h-100 d-flex">
  {#if comments}
    <div class="h-100 w-25 px-5 pt-5 bg-gray d-flex flex-column">
      X
    </div>
  {/if}

  <div class="h-100 w-100 bg-light d-flex justify-content-center align-items-center p-2">
    <div class="bg-gray h-100 w-100 d-flex flex-column justify-content-center align-items-center rounded-3">
      <div class="bg-green d-flex justify-content-center align-items-center" style="height: 300px; width: 300px; border-radius: 50%;">
        <p class="text-white meet-icon">{$userStore.firstName[0]}</p>
      </div>
      <nav class="bottom nav bg-dark-gray p-3 rounded-3">
          <button class="nav-item btn me-3" on:click={() => microphone = !microphone}>
            <Microphone open={microphone} size={32} />
          </button>
          <button class="nav-item btn me-3" on:click={() => camera = !camera}>
            <Camera open={camera} size={32} />
          </button>
          <button class="nav-item btn me-3" on:click={() => comments = !comments}>
            <Comment size={32} />
          </button>
          <button class="nav-item btn me-3">
            <Participants size={32} />
          </button>
          <button class="nav-item btn me-3">
            <WhiteBoard size={32} />
          </button>
          <button class="nav-item btn me-3">
            <ScreenShare size={32} />
          </button>
          <button class="nav-item btn">
            <HangOn size={32} />
          </button>
      </nav>
    </div>
  </div>
</div>

<style>
  .bg-gray {
    background-color: #EEEEEE;
  }

  .bg-dark-gray {
    background-color: #c0c0c0;
  }

  .meet-icon {
    padding-top: 1rem;
    font-size: 9rem;
    font-weight: bold;
  }

  .bg-green {
    background-color: burlywood;
  }

  .bottom {
    position: relative;
    top: 7rem;
  }
</style>

