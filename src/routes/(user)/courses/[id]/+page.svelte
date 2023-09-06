<script lang="ts">
  import { subjectStore } from "$lib/store/stores";
  import type { PageData } from "./$types";

  export let data: PageData;

  subjectStore.set(data.subject);
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
        <div class="relative m-2 space-y-6">
          <label class="absolute top-0 left-0 w-full text-center text-3xl" for="description">
            Title
          </label>
          <textarea class="absolute top-5 left-0 ring-2 ring-black w-full rounded-md resize-none px-2 py-1" id="description" placeholder=" " rows="1" />
        </div>

        <div class="relative top-[5rem] m-2 space-y-6">
          <label class="absolute top-0 left-0 w-full text-center text-3xl" for="description">
            Description
          </label>
          <textarea class="absolute top-5 left-0 ring-2 ring-black w-full rounded-md resize-none px-2 py-1" id="description" placeholder=" " rows="15" />
        </div>

        <label class="next" for="checkbox-page1">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </label>
      </div>
      <div class="back-page">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ex placeat nobis odio nesciunt blanditiis cum commodi explicabo nulla iure natus corporis laudantium, similique est architecto aspernatur? Blanditiis, vero deserunt!
        </p>
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

  input {
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
