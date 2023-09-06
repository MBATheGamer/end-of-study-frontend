<script lang="ts">
  import { roleIdStore } from "$lib/store/stores";

  export let title = "Book Name";
  export let author = "Author of the book";
  export let href = "";
</script>

<a {href}>
  <div class="book">
    <div class="front">
      <div class="cover">
        <h1 class="absolute text-5xl font-bold top-36 left-8">{title}</h1>
        <p class="author">by {author}</p>
      </div>
    </div>
    <div class="left-side">
      <h2>
        <span>{title}</span>
        <span>by {author}</span>
      </h2>
    </div>
  </div>
</a>

<style>
  .book {
    width: 400px;
    height: 550px;
    border-radius: 2px 4px 4px 2px;
    background: linear-gradient(45deg,  #8b868d 0%, #f2ebf4 100%);
    font-family: acumin-pro, sans-serif;
    box-shadow: 13px 13px 8px 0px rgba(151, 146, 153,0.6);
    font-weight: 400;
    color: #2b2b2b;
    transform-style: preserve-3d;
    transition: transform .5s;
  }

  .book:hover {
    transform: rotate3d(0, 1, 0, 35deg);
  }

  .book > div,
  .front > div {
    display: block;
    position: absolute;
  }


  .front {
    transform-style: preserve-3d;
    transform-origin: 0% 50%;
    transition: transform .5s;
    transform: translate3d(0,0,20px);
    z-index: 10;
  }

  .front > div {
    width: 400px;
    height: 550px;
  }

  .left-side{
    width: 40px;
    left: -20px;
    height: 550px;
    background-color: rgba(232,229,234);
    transform: rotate3d(0,1,0,-90deg);
  }

  .author{
    font-family: acumin-pro, sans-serif;
    font-weight: 400;
    position: absolute;
    top: 475px;
    left: 50px;
    opacity: .8;
  }

  .front > div {
    border-radius: 0 3px 3px 0;
    box-shadow: 
      inset 4px 0 10px rgba(0, 0, 0, 0.1);
  }

  .front:after {
    content: '';
    position: absolute;
    top: 1px;
    bottom: 1px;
    left: -1px;
    width: 1px;
  }

  .cover:after {
    content: '';
    position: absolute;
    top: 0;
    left: 10px;
    bottom: 0;
    width: 3px;
    background: rgba(0,0,0,0.1);
    box-shadow: 1px 0 3px rgba(255, 255, 255, 0.1);
  }

  h2 {
    width: 500px;
    height: 40px;
    color: #2b2b2b;
    font-size: 15px;
    line-height: 40px;
    padding-right: 10px;
    text-align: right;
    transform-origin: 0 0;
    transform: rotate(90deg) translateY(-40px);
  }

  .cover {
    background: linear-gradient(45deg,  #DAD5DC 0%, #f2ebf4 100%);
  }


  .left-side h2 span:first-child {
    font-weight: 400;
    font-size: 13px;
    padding-right: 20px;
  }

  .left-side h2 span:last-child{
    font-family: acumin-pro, sans-serif;
  } 
</style>