<script lang="ts">
  import type { HTMLInputTypeAttribute } from "svelte/elements";

  export let value: any;
  export let type: HTMLInputTypeAttribute = "text";
  export let id: string;
  export let step = 1;
  export let disabled = false;
  export let required = false;
  export let label: string;
</script>

<div class="relative w-full m-2">
  {#if type === "text"}
    <input bind:value={value} type="text" {id} class="block px-3 pb-3 pt-6 bg-transparent text-black font-semibold w-full rounded-lg border-2 border-base-content appearance-none focus:outline-none peer disabled:bg-base-content/25" placeholder=" " {required} {disabled} />
  {:else if type === "email"}
    <input bind:value={value} type="email" {id} class="block px-3 pb-3 pt-6 bg-transparent text-black font-semibold w-full rounded-lg border-2 border-base-content appearance-none focus:outline-none peer disabled:bg-base-content/25" placeholder=" " {disabled} />
  {:else if type === "password"}
    <input bind:value={value} type="password" {id} class="block px-3 pb-3 pt-6 bg-transparent text-black font-semibold w-full rounded-lg border-2 border-base-content appearance-none focus:outline-none peer disabled:bg-base-content/25" placeholder=" " {disabled} />
  {:else if type === "date"}
    <input bind:value={value} type="date" {id} class="block px-3 pb-3 pt-6 bg-transparent text-black font-semibold w-full rounded-lg border-2 border-base-content appearance-none focus:outline-none peer disabled:bg-base-content/25" placeholder=" " {disabled} />
  {:else if type === "number"}
    <input bind:value={value} type="number" {step} {id} class="block px-3 pb-3 pt-6 bg-transparent text-black font-semibold w-full rounded-lg border-2 border-base-content appearance-none focus:outline-none peer disabled:bg-base-content/25" placeholder=" " {disabled} />
  {/if}
  <label for={id} class="absolute left-2 text-md font-semibold text-black transform duration-300 top-5 scale-75 -translate-y-4 origin-[0] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-5 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:font-bold">
    {label}
  </label>
</div>
