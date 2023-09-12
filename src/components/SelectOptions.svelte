<script lang="ts">
  export let id: number;
  export let items: any[];
  export let isTeacher = false;
  export let label: string;
  export let required = false;
  export let disabled = false;
</script>

<div class="relative w-full mx-2">
  <select bind:value={id} class="select w-full h-[64px] text-black bg-transparent border-base-content border-2" {required} {disabled}>
    <option disabled value={0} class="text-base">{label}</option>
    {#each items as item}
      <option class="text-black" value={item["id"]}>
        {#if isTeacher}
          {`${item["firstName"]} ${item["lastName"]} `}
        {:else}
          {item["name"]}
        {/if}
      </option>
    {/each}
  </select>
</div>
