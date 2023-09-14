<script lang="ts">
  export let value: any;
  export let label: string;
  export let rows: number;
  export let xlrows: number;
  export let disabled = false;
</script>


<div class="relative w-full m-2">
  <textarea bind:value={value} id="description" class="block 2xl:hidden px-3 pb-3 pt-6 bg-transparent text-black font-semibold w-full rounded-lg border-2 border-base-content appearance-none focus:outline-none peer resize-none disabled:bg-base-content/25" placeholder=" " {rows} {disabled} />
  <textarea bind:value={value} id="description" class="hidden 2xl:block px-3 pb-3 pt-6 bg-transparent text-black font-semibold w-full rounded-lg border-2 border-base-content appearance-none focus:outline-none peer resize-none disabled:bg-base-content/25" placeholder=" " rows={xlrows} {disabled} />
  <label for="description" class="absolute left-2 text-md font-semibold  text-black transform duration-300 top-5 scale-75 -translate-y-4 origin-[0] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-9 peer-focus:top-5 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:font-bold">
    {label}
  </label>
</div>
