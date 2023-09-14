<script lang="ts">
  import { roleIdStore, subjectStore } from "$lib/store/stores";
  import type { PostRequest } from "$lib/custom-types";
  import type { PageData } from "./$types";
  import "$styles/book.css";
  import Textarea from "$components/Textarea.svelte";
  import Input from "$components/Input.svelte";
  import axios from "$lib/axios/axios";
  import { marked } from "marked";

  export let data: PageData;

  let { posts } = data;

  let disabled = posts.length > 13;

  $: posts = data.posts;

  console.log(posts);

  subjectStore.set(data.subject);

  const post: PostRequest = {
    title: "",
    content: "",
    subjectId: $subjectStore.id
  }

  let files: FileList;

  $: submit = async () => {
    if (post.title.trim() !== "" && post.content.trim() !== "") {
      if (files) {
        post.files = [];
        for (const file of files) {
          const { data } = await axios.post(`/uploads`, {"image": file}, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
          post.files.push(data.url);
		    }
      }
      const { data } = await axios.post(`/posts`, post);
      console.log(data);
      posts.push(data);
    }
  }
</script>

<main class="mx-auto">
  <input type="checkbox" id="checkbox-cover">
  <input type="checkbox" id="checkbox-page1">
  <input type="checkbox" id="checkbox-page2">
  <input type="checkbox" id="checkbox-page3">
  <input type="checkbox" id="checkbox-page4">
  <input type="checkbox" id="checkbox-page5">
  <input type="checkbox" id="checkbox-page6">
  <input type="checkbox" id="checkbox-page7">
  <input type="checkbox" id="checkbox-page8">
  <input type="checkbox" id="checkbox-page9">
  <input type="checkbox" id="checkbox-page10">
  <input type="checkbox" id="checkbox-page11">
  <input type="checkbox" id="checkbox-page12">
  <input type="checkbox" id="checkbox-page13">
  <div class="book w-[30rem] h-[36rem] 2xl:w-[40rem] 2xl:h-[48rem]">
    <div class="cover">
      <label for="checkbox-cover">
        <h1 class="absolute text-5xl text-black font-bold top-36 left-8">{$subjectStore.name}</h1>
      </label>
    </div>
    <div class="page w-[30rem] h-[36rem] 2xl:w-[38rem] 2xl:h-[45.6rem] 2xl:my-4" id="page1">
      <div class="front-page">
        {#if $roleIdStore === 2}
          <form>
            <Input bind:value={post.title} id="title" label="Title" type="text" required={true} {disabled} />
            <Textarea bind:value={post.content} rows={11} label={"Content"} {disabled} />

            <div class="relative w-full m-2">
              <input  bind:files multiple type="file" class="file-input bg-white file-input-bordered w-full disabled:bg-base-content/25" {disabled} />
            </div>

            <div class="flex justify-end text-center space-x-2 absolute bottom-10 right-4">
              <button class="btn btn-primary rounded-3" on:click={submit}>
                Post
              </button>
            </div>
          </form>
        {:else}
          <h1 class="absolute text-5xl text-black font-bold top-36 left-8">
            Welcome to
            <br/>
            {$subjectStore.name}
          </h1>
        {/if}
        <label class="next" for="checkbox-page1">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </label>
      </div>
      <div class="back-page">
        {#if posts[0]}
          <h1 class="ml-2 mb-3 font-bold text-3xl">Attachments</h1>
          {#if posts[0]["files"]}
            {#each posts[0]["files"] as file}
              <a href={file.path} target="_blank" class="btn">Open Document</a>
            {/each}
          {/if}
        {/if}
        <label class="prev" for="checkbox-page1">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
          </svg>
        </label>
      </div>
    </div>
    <div class="page w-[30rem] h-[36rem] 2xl:w-[38rem] 2xl:h-[45.6rem] 2xl:my-4" id="page2">
      {#if posts[0]}
        <div class="front-page">
          <h2 class="text-center font-bold text-3xl mb-4">{posts[0].title}</h2>
          <div class="w-full h-[90%] overflow-y-auto">
            {@html marked(posts[0].content)}
          </div>
          <label class="next" for="checkbox-page2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </label>
        </div>
      {/if}
      <div class="back-page">
        {#if posts[1]}
          <h1 class="ml-2 mb-3 font-bold text-3xl">Attachments</h1>
          {#if posts[1]["files"]}
            {#each posts[1]["files"] as file}
              <a href={file.path} target="_blank" class="btn">Open Document</a>
            {/each}
          {/if}
        {/if}
        <label class="prev" for="checkbox-page2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
          </svg>
        </label>
      </div>
    </div>
    <div class="page w-[30rem] h-[36rem] 2xl:w-[38rem] 2xl:h-[45.6rem] 2xl:my-4" id="page3">
      {#if posts[1]}
        <div class="front-page">
          <h2 class="text-center font-bold text-3xl mb-4">{posts[1].title}</h2>
          <div class="w-full h-[90%] overflow-y-auto">
            {@html marked(posts[1].content)}
          </div>
          <label class="next" for="checkbox-page3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </label>
        </div>
      {/if}
      <div class="back-page">
        {#if posts[2]}
          <h1 class="ml-2 mb-3 font-bold text-3xl">Attachments</h1>
          {#if posts[2]["files"]}
            {#each posts[2]["files"] as file}
              <a href={file.path} target="_blank" class="btn">Open Document</a>
            {/each}
          {/if}
        {/if}
        <label class="prev" for="checkbox-page3">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
          </svg>
        </label>
      </div>
    </div>
    <div class="page w-[30rem] h-[36rem] 2xl:w-[38rem] 2xl:h-[45.6rem] 2xl:my-4" id="page4">
      {#if posts[2]}
        <div class="front-page">
          <h2 class="text-center font-bold text-3xl mb-4">{posts[2].title}</h2>
          <div class="w-full h-[90%] overflow-y-auto">
            {@html marked(posts[2].content)}
          </div>
          <label class="next" for="checkbox-page4">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </label>
        </div>
      {/if}
      <div class="back-page">
        {#if posts[3]}
          <h1 class="ml-2 mb-3 font-bold text-3xl">Attachments</h1>
          {#if posts[3]["files"]}
            {#each posts[3]["files"] as file}
              <a href={file.path} target="_blank" class="btn">Open Document</a>
            {/each}
          {/if}
        {/if}
        <label class="prev" for="checkbox-page4">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
          </svg>
        </label>
      </div>
    </div>
    <div class="page w-[30rem] h-[36rem] 2xl:w-[38rem] 2xl:h-[45.6rem] 2xl:my-4" id="page5">
      {#if posts[3]}
        <div class="front-page">
          <h2 class="text-center font-bold text-3xl mb-4">{posts[3].title}</h2>
          <div class="w-full h-[90%] overflow-y-auto">
            {@html marked(posts[3].content)}
          </div>
          <label class="next" for="checkbox-page5">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </label>
        </div>
      {/if}
      <div class="back-page">
        {#if posts[4]}
          <h1 class="ml-2 mb-3 font-bold text-3xl">Attachments</h1>
              {#if posts[4]["files"]}
                {#each posts[4]["files"] as file}
                <a href={file.path} target="_blank" class="btn">Open Document</a>
              {/each}
            {/if}
        {/if}
        <label class="prev" for="checkbox-page5">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
          </svg>
        </label>
      </div>
    </div>
    <div class="page w-[30rem] h-[36rem] 2xl:w-[38rem] 2xl:h-[45.6rem] 2xl:my-4" id="page6">
      {#if posts[4]}
        <div class="front-page">
          <h2 class="text-center font-bold text-3xl mb-4">{posts[4].title}</h2>
          <div class="w-full h-[90%] overflow-y-auto">
            {@html marked(posts[4].content)}
          </div>
          <label class="next" for="checkbox-page6">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </label>
        </div>
      {/if}
      <div class="back-page">
        {#if posts[5]}
          <h1 class="ml-2 mb-3 font-bold text-3xl">Attachments</h1>
            {#if posts[5]["files"]}
              {#each posts[5]["files"] as file}
                <a href={file.path} target="_blank" class="btn">Open Document</a>
              {/each}
            {/if}
          {/if}
        <label class="prev" for="checkbox-page6">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
          </svg>
        </label>
      </div>
    </div>
    <div class="page w-[30rem] h-[36rem] 2xl:w-[38rem] 2xl:h-[45.6rem] 2xl:my-4" id="page7">
      {#if posts[5]}
        <div class="front-page">
          <h2 class="text-center font-bold text-3xl mb-4">{posts[5].title}</h2>
          <div class="w-full h-[90%] overflow-y-auto">
            {@html marked(posts[5].content)}
          </div>
          <label class="next" for="checkbox-page7">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </label>
        </div>
      {/if}
      <div class="back-page">
        {#if posts[6]}
          <h1 class="ml-2 mb-3 font-bold text-3xl">Attachments</h1>
          {#if posts[6]["files"]}
            {#each posts[6]["files"] as file}
              <a href={file.path} target="_blank" class="btn">Open Document</a>
            {/each}
          {/if}
        {/if}
        <label class="prev" for="checkbox-page7">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
          </svg>
        </label>
      </div>
    </div>
    <div class="page w-[30rem] h-[36rem] 2xl:w-[38rem] 2xl:h-[45.6rem] 2xl:my-4" id="page8">
      {#if posts[6]}
        <div class="front-page">
          <h2 class="text-center font-bold text-3xl mb-4">{posts[6].title}</h2>
          <div class="w-full h-[90%] overflow-y-auto">
            {@html marked(posts[6].content)}
          </div>
          <label class="next" for="checkbox-page8">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </label>
        </div>
      {/if}
      <div class="back-page">
        {#if posts[7]}
          <h1 class="ml-2 mb-3 font-bold text-3xl">Attachments</h1>
          {#if posts[7]["files"]}
            {#each posts[7]["files"] as file}
              <a href={file.path} target="_blank" class="btn">Open Document</a>
            {/each}
          {/if}
        {/if}
        <label class="prev" for="checkbox-page8">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
          </svg>
        </label>
      </div>
    </div>
    <div class="page w-[30rem] h-[36rem] 2xl:w-[38rem] 2xl:h-[45.6rem] 2xl:my-4" id="page9">
      {#if posts[7]}
        <div class="front-page">
          <h2 class="text-center font-bold text-3xl mb-4">{posts[7].title}</h2>
          <div class="w-full h-[90%] overflow-y-auto">
            {@html marked(posts[7].content)}
          </div>
          <label class="next" for="checkbox-page9">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </label>
        </div>
      {/if}
      <div class="back-page">
        {#if posts[8]}
          <h1 class="ml-2 mb-3 font-bold text-3xl">Attachments</h1>
          {#if posts[8]["files"]}
            {#each posts[8]["files"] as file}
              <a href={file.path} target="_blank" class="btn">Open Document</a>
            {/each}
          {/if}
        {/if}
        <label class="prev" for="checkbox-page9">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
          </svg>
        </label>
      </div>
    </div>
    <div class="page w-[30rem] h-[36rem] 2xl:w-[38rem] 2xl:h-[45.6rem] 2xl:my-4" id="page10">
      {#if posts[8]}
        <div class="front-page">
          <h2 class="text-center font-bold text-3xl mb-4">{posts[8].title}</h2>
          <div class="w-full h-[90%] overflow-y-auto">
            {@html marked(posts[8].content)}
          </div>
          <label class="next" for="checkbox-page10">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </label>
        </div>
      {/if}
      <div class="back-page">
        {#if posts[9]}
          <h1 class="ml-2 mb-3 font-bold text-3xl">Attachments</h1>
          {#if posts[9]["files"]}
            {#each posts[9]["files"] as file}
              <a href={file.path} target="_blank" class="btn">Open Document</a>
            {/each}
          {/if}
        {/if}
        <label class="prev" for="checkbox-page10">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
          </svg>
        </label>
      </div>
    </div>
    <div class="page w-[30rem] h-[36rem] 2xl:w-[38rem] 2xl:h-[45.6rem] 2xl:my-4" id="page11">
      {#if posts[9]}
        <div class="front-page">
          <h2 class="text-center font-bold text-3xl mb-4">{posts[9].title}</h2>
          <div class="w-full h-[90%] overflow-y-auto">
            {@html marked(posts[9].content)}
          </div>
          <label class="next" for="checkbox-page11">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </label>
        </div>
      {/if}
      <div class="back-page">
        {#if posts[10]}
          <h1 class="ml-2 mb-3 font-bold text-3xl">Attachments</h1>
          {#if posts[10]["files"]}
            {#each posts[10]["files"] as file}
              <a href={file.path} target="_blank" class="btn">Open Document</a>
            {/each}
          {/if}
        {/if}
        <label class="prev" for="checkbox-page11">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
          </svg>
        </label>
      </div>
    </div>
    <div class="page w-[30rem] h-[36rem] 2xl:w-[38rem] 2xl:h-[45.6rem] 2xl:my-4" id="page12">
      {#if posts[10]}
        <div class="front-page">
          <h2 class="text-center font-bold text-3xl mb-4">{posts[10].title}</h2>
          <div class="w-full h-[90%] overflow-y-auto">
            {@html marked(posts[10].content)}
          </div>
          <label class="next" for="checkbox-page12">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </label>
        </div>
      {/if}
      <div class="back-page">
        {#if posts[11]}
          <h1 class="ml-2 mb-3 font-bold text-3xl">Attachments</h1>
          {#if posts[11]["files"]}
            {#each posts[11]["files"] as file}
              <a href={file.path} target="_blank" class="btn">Open Document</a>
            {/each}
          {/if}
        {/if}
        <label class="prev" for="checkbox-page12">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
          </svg>
        </label>
      </div>
    </div>
    <div class="page w-[30rem] h-[36rem] 2xl:w-[38rem] 2xl:h-[45.6rem] 2xl:my-4" id="page13">
      {#if posts[11]}
        <div class="front-page">
          <h2 class="text-center font-bold text-3xl mb-4">{posts[11].title}</h2>
          <div class="w-full h-[90%] overflow-y-auto">
            {@html marked(posts[11].content)}
          </div>
          <label class="next" for="checkbox-page13">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </label>
        </div>
      {/if}
      {#if posts[12]}
        <div class="back-page">
          <h1 class="ml-2 mb-3 font-bold text-3xl">Attachments</h1>
          {#if posts[12]["files"]}
            {#each posts[12]["files"] as file}
            <a href={file.path} target="_blank" class="btn">Open Document</a>
          {/each}
          {/if}
          <label class="prev" for="checkbox-page13">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
            </svg>
          </label>
        </div>
      {/if}
    </div>
    <div class="page w-[30rem] h-[36rem] 2xl:w-[38rem] 2xl:h-[45.6rem] 2xl:my-4" id="page14">
      {#if posts[12]}
        <div class="front-page">
          <h2 class="text-center font-bold text-3xl mb-4">{posts[12].title}</h2>
          <div class="w-full h-[90%] overflow-y-auto">
            {@html marked(posts[12].content)}
          </div>
        </div>
      {/if}
    </div>
    <div class="back-cover"></div>
  </div>
</main>
