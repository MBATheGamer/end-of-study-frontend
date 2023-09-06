<script lang="ts">
  import { subjectStore } from "$lib/store/stores";
  import type { PageData } from "./$types";

  export let data: PageData;

  subjectStore.set(data.subject);

  let counter = 0;

  const isTurn = (condition: boolean) => {
    return condition ? "" : "turn";
  }

  const isTurnZIndex = (condition: boolean) => {
    return condition ? "" : "z-[-1]";
  }

  // const pageTurnBtn = document.querySelectorAll("nextprev-btn");
  // pageTurnBtn.forEach((element, index: number) => {
  //   (element as HTMLElement).onclick = () => {
  //     const pageTurnId = element.getAttribute("data-page");
  //     const pageTurn = document.getElementById(pageTurnId as string) as HTMLElement;

  //     if (pageTurn.classList.contains("turn")) {
  //       pageTurn.classList.remove("turn");
  //       setTimeout(() => {
  //         pageTurn.style.zIndex = (20 - index).toString();
  //       }, 500);
  //     }
  //     else {
  //       pageTurn.classList.add("turn");
  //       setTimeout(() => {
  //         pageTurn.style.zIndex = (20 + index).toString();
  //       }, 500);
  //     }
  //   }
  // })
</script>

<main>
  <div class="wrapper">
    <div class="cover cover-left"></div>
    <div class="cover cover-right turn"></div>

    <div class="book">
      <div class="book-page page-left">
        <div class="profile-page">
          <img src="" alt="" />
          <h1>Gordon Felix</h1>
          <h3>Web Developer</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, omnis eligendi fugit aliquid animi consequuntur incidunt magni quod dicta doloremque quis ratione nobis molestias consectetur corporis sapiente nihil ad rerum?
          </p>
        </div>
      </div>
      <div class="book-page page-right {isTurn(counter === 0)}">
        <div class="page-front {isTurnZIndex(counter === 0)}">
          <h1 class="title">Chapter 1</h1>
          <div>
            <h3>1. Introduction</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sapiente illo architecto assumenda, et, tempora placeat non nam saepe porro voluptatem, neque atque mollitia! Tempora vel sapiente accusantium qui voluptatum!</p>
          </div>
          <span class="number-page">1</span>
          <button class="nextprev-btn" on:click={() => counter++}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </button>
        </div>
        <div class="page-back {isTurnZIndex(counter === 0)}">
          <h1 class="title">Chapter 2</h1>
          <div class="workeduc-content">
            <h3>1. Introduction</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sapiente illo architecto assumenda, et, tempora placeat non nam saepe porro voluptatem, neque atque mollitia! Tempora vel sapiente accusantium qui voluptatum!</p>
          </div>
          <span class="number-page">2</span>
          <button class="nextprev-btn back" on:click={() => counter--}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
            </svg>
          </button>
        </div>
      </div>
      <div class="book-page page-right {isTurn(counter === 1)}">
        <div class="page-front {isTurnZIndex(counter === 1)}">
          <h1 class="title">Chapter 3</h1>
          <div class="workeduc-content">
            <h3>1. Introduction</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sapiente illo architecto assumenda, et, tempora placeat non nam saepe porro voluptatem, neque atque mollitia! Tempora vel sapiente accusantium qui voluptatum!</p>
          </div>
          <span class="number-page">3</span>
          <button class="nextprev-btn" on:click={() => counter++}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </button>
        </div>
        <div class="page-back {isTurnZIndex(counter === 1)}">
          <h1 class="title">Chapter 4</h1>
          <div class="workeduc-content">
            <h3>1. Introduction</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sapiente illo architecto assumenda, et, tempora placeat non nam saepe porro voluptatem, neque atque mollitia! Tempora vel sapiente accusantium qui voluptatum!</p>
          </div>
          <span class="number-page">4</span>
          <button class="nextprev-btn back" on:click={() => counter--}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
            </svg>
          </button>
        </div>
      </div>
      <div class="book-page page-right {isTurn(counter === 2)}">
        <div class="page-front {isTurnZIndex(counter === 2)}">
          <h1 class="title">Chapter 5</h1>
          <div>
            <h3>1. Introduction</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sapiente illo architecto assumenda, et, tempora placeat non nam saepe porro voluptatem, neque atque mollitia! Tempora vel sapiente accusantium qui voluptatum!</p>
          </div>
          <span class="number-page">1</span>
          <button class="nextprev-btn" on:click={() => counter++}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </button>
        </div>
        <div class="page-back {isTurnZIndex(counter === 2)}">
          <h1 class="title">Chapter 6</h1>
          <div class="workeduc-content">
            <h3>1. Introduction</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sapiente illo architecto assumenda, et, tempora placeat non nam saepe porro voluptatem, neque atque mollitia! Tempora vel sapiente accusantium qui voluptatum!</p>
          </div>
          <span class="number-page">2</span>
          <button class="nextprev-btn back" on:click={() => counter--}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
            </svg>
          </button>
        </div>
      </div>
      <div class="book-page page-right {isTurn(counter === 3)}">
        <div class="page-front {isTurnZIndex(counter === 3)}">
          <h1 class="title">Chapter 7</h1>
          <div class="workeduc-content">
            <h3>1. Introduction</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sapiente illo architecto assumenda, et, tempora placeat non nam saepe porro voluptatem, neque atque mollitia! Tempora vel sapiente accusantium qui voluptatum!</p>
          </div>
          <span class="number-page">3</span>
          <button class="nextprev-btn" on:click={() => counter++}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </button>
        </div>
        <div class="page-back {isTurnZIndex(counter === 3)}">
          <h1 class="title">Chapter 8</h1>
          <div class="workeduc-content">
            <h3>1. Introduction</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sapiente illo architecto assumenda, et, tempora placeat non nam saepe porro voluptatem, neque atque mollitia! Tempora vel sapiente accusantium qui voluptatum!</p>
          </div>
          <span class="number-page">4</span>
          <button class="nextprev-btn back" on:click={() => counter--}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</main>
<p>{counter}</p>
<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    border: none;
    outline: none;
    font-family: sans-serif;
  }

  :root {
    --bg-color: #081b29;
    --main-color: #00abf0;
    --text-color: #333;
    --second-text-color: #555;
    --white-color: #fff;
    --cover-color: linear-gradient(45deg, #00abf0, #006e9a);
    --pages-color: linear-gradient(90deg, #fff, #ddd);
    --border: 0.125rem solid #00abf0;
    --box-shadow: 0 0 0.6rem rgba(0, 0, 0, 0.2);
  }

  main {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    color: var(--text-color);
  }

  .wrapper {
    position: relative;
    width: 70rem;
    height: 50rem;
    padding: 2rem;
  }

  .cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: var(--cover-color);
    box-shadow: var(--box-shadow);
    border-top-left-radius: 0.6rem;
    border-bottom-left-radius: 0.6rem;
    transform-origin: right;
  }

  .cover.cover-left {
    z-index: 0;
  }

  .cover.cover-right.turn {
    transform: rotateY(180deg);
  }

  .book {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
  }

  .book .book-page {
    position: absolute;
    width: 50%;
    height: 100%;
    background: var(--pages-color);
    box-shadow: 0 0 0.6rem rgba(0, 0, 0, 0.1);
    display: flex;
    padding: 2rem;
  }

  .profile-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .profile-page img {
    max-width: 180px;
    border: 0.25rem solid var(--main-color);
    margin-bottom: 0.8rem;
  }

  .profile-page h1 {
    font-size: 2.7rem;
    line-height: 1;
  }

  .profile-page h3 {
    font-size: 1.5rem; 
    color: var(--main-color);
  }

  .profile-page p {
    text-align: justify;
  }

  .book-page.page-right {
    position: absolute;
    right: 0;
    transform-style: preserve-3d;
    transform-origin: left;
  }

  .book-page.page-right.turn {
    transform: rotateY(180deg);
  }

  .book-page .page-front,
  .book-page .page-back {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--pages-color);
    padding: 2rem;
  }

  .book-page .page-front {
    transform: rotateY(0deg) translateZ(1px);
  }

  .book-page .page-back {
    transform: rotateY(180deg) translateZ(1px);
  }

  .title {
    text-align: center;
    margin-bottom: 1rem;
  }

  .number-page {
    position: absolute;
    bottom: 1.2rem;
    left: 50%;
    transform: translateX(-50%);
  }

  .nextprev-btn {
    position: absolute;
    bottom: 0.9rem;
    right: 1.5rem;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    font-size: 2rem;
    color: var(--second-text-color);
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  .nextprev-btn.back {
    left: 1.5rem;
  }

  .nextprev-btn:hover {
    color: var(--main-color);
  }
</style>
