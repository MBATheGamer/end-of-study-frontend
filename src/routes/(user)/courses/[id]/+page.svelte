<script lang="ts">
  import { subjectStore } from "$lib/store/stores";
    import type { PostRequest } from "$main/lib/custom-types";
  import type { PageData } from "./$types";

  export let data: PageData;

  subjectStore.set(data.subject);

  const post: PostRequest = {
    title: "",
    content: ""
  }

  const submit = () => {
    if (files) {
    post.files = files;

		for (const file of post.files) {
			console.log(`${file.name}: ${file.size} bytes`);
		}
  }
  }
  let files: FileList;
</script>

<main class="mx-auto">
  <input type="checkbox" id="checkbox-cover">
  <input type="checkbox" id="checkbox-page1">
  <input type="checkbox" id="checkbox-page2">
  <input type="checkbox" id="checkbox-page3">
  <div class="book">
    <div class="cover">
      <label for="checkbox-cover">
        <h1 class="absolute text-5xl font-bold top-36 left-8">{$subjectStore.name}</h1>
      </label>
    </div>
    <div class="page" id="page1">
      <div class="front-page">
        <form>
          <div class="relative m-2">
            <input bind:value={post.title} type="text" id="title" class="block px-3 pb-3 pt-6 w-full bg-transparent text-accent-content font-semibold rounded-lg border-2 border-base-content appearance-none focus:outline-none peer" placeholder=" " required />
            <label for="title" class="absolute left-2 text-md font-semibold text-accent-content transform duration-300 top-5 scale-75 -translate-y-4 origin-[0] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-5 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:font-bold">
              Title
            </label>
          </div>

          <div class="relative m-2">
            <textarea bind:value={post.content} id="Content" class="block px-3 pb-3 pt-6 w-full bg-transparent rounded-lg border-2 border-base-content appearance-none focus:outline-none peer resize-none" placeholder=" " rows="13" />
            <label for="Content" class="absolute left-2 text-md font-semibold text-accent-content transform duration-300 top-5 scale-75 -translate-y-4 origin-[0] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-9 peer-focus:top-5 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:font-bold">
              Content
            </label>
          </div>

          <div class="relative m-2">
            <input bind:files multiple type="file" class="file-input bg-white file-input-bordered w-full" />
          </div>

          <div class="flex justify-end text-center space-x-2 me-2 absolute bottom-8 right-10">
            <button class="btn btn-primary rounded-3" on:click={submit}>
              Post
            </button>
          </div>
        </form>

        <label class="next" for="checkbox-page1">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </label>
      </div>
      <div class="back-page">
        <h1 class="ml-2 mb-3 font-bold text-3xl">Attachments</h1>
        <label class="prev" for="checkbox-page1">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
          </svg>
        </label>
      </div>
    </div>
    <div class="page" id="page2">
      <div class="front-page">
        <h2>Page 2</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil magni laudantium beatae quia. Recusandae, fuga quas consectetur perferendis aperiam esse velit veniam ducimus? Quisquam consequatur perferendis quidem quia, recusandae ab!
        </p>
        <label class="next" for="checkbox-page2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </label>
      </div>
      <div class="back-page">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ex placeat nobis odio nesciunt blanditiis cum commodi explicabo nulla iure natus corporis laudantium, similique est architecto aspernatur? Blanditiis, vero deserunt!
        </p>
        <label class="prev" for="checkbox-page2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
          </svg>
        </label>
      </div>
    </div>
    <div class="page" id="page3">
      <div class="front-page">
        <h2>Page 3</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil magni laudantium beatae quia. Recusandae, fuga quas consectetur perferendis aperiam esse velit veniam ducimus? Quisquam consequatur perferendis quidem quia, recusandae ab!
        </p>
      </div>
    </div>
    <div class="back-cover"></div>
  </div>
</main>

<style>
  main {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .book {
    width: 32.5rem;
    height: 40rem;
    position: relative;
    transition-duration: 1s;
    perspective: 1500;
  }

  input[type="checkbox"] {
    display: none;
  }

  .cover, .back-cover {
    background: linear-gradient(45deg,  #8b868d 0%, #f2ebf4 100%);
    width: 100%;
    height: 100%;
    border-radius: 0 15px 15px 0;
    box-shadow: 0 0 5px rgb(41, 41, 41);
    display: flex;
    align-items: center;
    justify-content: center;
    transform-origin: center left;
  }
  .cover {
    position: absolute;
    z-index: 4;
    transition: transform 1s;
  }
  .cover label {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
  .back-cover {
    position: relative;
    z-index: -1;
  }
  .page {
    position: absolute;
    background-color: white;
    width: 31.5rem;
    height: 38rem;
    border-radius: 0 15px 15px 0;
    margin-top: 1rem;
    transform-origin: left;
    transform-style: preserve-3d;
    transform: rotateY(0deg);
    transition-duration: 1.5s;
  }

  .front-page {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    box-sizing: border-box;
    padding: 2rem;
  }

  .back-page {
    transform: rotateY(180deg);
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    box-sizing: border-box;
    padding: 2rem;
    z-index: 99;
  }

  .next, .prev {
    position: absolute;
    bottom: 1em;
    cursor: pointer;
  }

  .next {
    right: 1em;
  }

  .prev {
    left: 1em;
  }

  #page1 {
    z-index: 3;
  }

  #page2 {
    z-index: 2;
  }

  #page3 {
    z-index: 1;
  }

  #checkbox-cover:checked ~ .book {
    transform: translateX(200px);
  }

  #checkbox-cover:checked ~ .book .cover {
    transition: transform 1.5s, z-index 0.5s 0.5s;
    transform: rotateY(-180deg);
    z-index: 1;
  }
  #checkbox-cover:checked ~ .book .cover label h1 {
    display: none;
  }

  #checkbox-cover:checked ~ .book .page {
    box-shadow: 0 0 3px rgb(99, 98, 98);
  }

  #checkbox-page1:checked ~ .book #page1 {
    transform: rotateY(-180deg);
    z-index: 2;
  }
  
  #checkbox-page2:checked ~ .book #page2 {
    transform: rotateY(-180deg);
    z-index: 3;
  }
</style>
