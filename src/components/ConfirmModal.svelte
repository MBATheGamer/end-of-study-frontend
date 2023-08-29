<script lang="ts">
  export let showModal: boolean;

  export let onConfirm = () => {}

  let dialog: HTMLDialogElement;

  $: if (dialog && showModal) dialog.showModal();

  const confirmModal = () => {
    onConfirm();
    closeModal();
  }

  const closeModal = () => {
    showModal = false;
    dialog.close();
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<dialog
  class="modal"
  bind:this={dialog}
  on:close={() => showModal = false}
  on:click|self={() => dialog.close()}
>
  <form method="dialog" class="modal-box space-y-8">
    <h3 class="font-bold text-3xl">Delete Confirmation</h3>
    <h4 class="text-lg">Are you sure you want to delete this record?</h4>
    <div class="modal-action">
      <button class="btn btn-error" on:click={confirmModal}>Delete</button>
      <button class="btn btn-base" on:click={closeModal}>Close</button>
    </div>
  </form>
</dialog>
