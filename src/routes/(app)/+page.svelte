<script lang="ts">
  let name: string;
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>


<!-- Full -->
<div class="relative m-2">
  <input bind:value={name} type="text" id="cin" class="block px-3 pb-3 pt-6 w-full bg-transparent text-accent-content font-semibold rounded-lg border-2 border-base-content appearance-none focus:outline-none peer" placeholder=" " />
  <label for="cin" class="absolute left-2 text-md font-semibold text-accent-content transform duration-300 top-5 scale-75 -translate-y-4 origin-[0] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-5 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:font-bold">
    C.I.N.
  </label>
</div>

<!-- Half -->
<div class="flex my-2">
  <div class="relative w-full mx-2">
    <input bind:value={name} type="text" id="firstName" class="block px-3 pb-3 pt-6 bg-transparent text-accent-content font-semibold w-full rounded-lg border-2 border-base-content appearance-none focus:outline-none peer" placeholder=" " />
    <label for="firstName" class="absolute left-2 text-md font-semibold text-accent-content transform duration-300 top-5 scale-75 -translate-y-4 origin-[0] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-5 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:font-bold">
      First Name
    </label>
  </div>
  <div class="relative w-full mx-2">
    <input bind:value={name} type="text" id="lastName" class="block px-3 pb-3 pt-6 bg-transparent text-accent-content font-semibold w-full rounded-lg border-2 border-base-content appearance-none focus:outline-none peer" placeholder=" " />
    <label for="lastName" class="absolute left-2 text-md font-semibold text-accent-content transform duration-300 top-5 scale-75 -translate-y-4 origin-[0] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-5 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:font-bold">
      Last Name
    </label>
  </div>
</div>

<!-- Full -->
<div class="relative m-2">
  <select bind:value={name} class="select w-full h-[64px] border-base-content border-2" required>
    <option disabled value={0}>Pick a Role</option>
    <option value="Hi">Hi</option>
  </select>
</div>

<!-- Half -->
<div class="flex my-2">
  <div class="relative w-full mx-2">
    <select bind:value={name} class="select w-full h-[64px] border-base-content border-2" required>
      <option disabled value={0}>Pick a Role</option>
      <option value="Hi">Hi</option>
    </select>
  </div>

  <div class="relative w-full mx-2">
    <select bind:value={name} class="select w-full h-[64px] border-base-content border-2" required>
      <option disabled value={0}>Pick a Role</option>
      <option value="Hi">Hi</option>
    </select>
  </div>
</div>


<!-- Not Finished -->
<div class="relative">
  <textarea id="firstName" class="block px-3 pb-3 pt-6 w-full bg-transparent rounded-lg border-2 border-base-content appearance-none focus:outline-none peer resize-none" placeholder=" " rows="10" />
  <label for="firstName" class="absolute left-2 text-md text-accent-content transform duration-300 origin-[0] bg-base-100 px-2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-9 peer-focus:top-5 peer-focus:scale-75 peer-focus:-translate-y-4">Floating outlined</label>
</div>

<div class="relative m-6">
  <input type="date" id="firstName" class="block px-3 pb-3 pt-6 w-full bg-transparent disabled:bg-base-content/50 rounded-lg border-2 border-base-content appearance-none focus:outline-none" placeholder=" " />
  <label for="firstName" class="absolute left-1 text-md text-accent-content transform duration-300 top-5 scale-75 -translate-y-4 origin-[0] px-2">Floating outlined</label>
</div>

<div class="relative m-6">
  <input value="Mohamed" type="text" id="firstName" class="block px-3 pb-3 pt-6 w-full bg-transparent disabled:bg-base-content/25 rounded-lg border-2 border-base-content appearance-none focus:outline-none" placeholder=" " disabled />
  <label for="firstName" class="absolute left-1 text-md text-accent-content transform duration-300 top-5 scale-75 -translate-y-4 origin-[0] px-2">Floating outlined</label>
</div>
