<script>
  import homeImage from "$assets/home.png";
  import wave1Image from "$assets/wave1.png";
  import wave2Image from "$assets/wave2.png";
  import { ABOUT_DATA, BANNER_DATA, FOOTER_DATA, HEADER, NAVBAR_DATA, SERVICE_DATA, SOCIAL_DATA, TESTIMONIAL_DATA } from "$main/lib/data/data";
</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<!-- Navbar -->
<section id="nav-bar">
  <nav class="navbar main-bgcolor navbar-expand-md navbar-dark">
    <a class="navbar-brand company_brand" href="/">
      {HEADER}
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon" />
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        {#each NAVBAR_DATA as list}
          <li class="nav-item">
            <a class="nav-link light-color" href={list.url}>{list.label}</a>
          </li>
        {/each}
      </ul>
    </div>
  </nav>
</section>

<!-- Banner -->
<section class="main-bgcolor light-color" id="banner">
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <h1>{BANNER_DATA.HEADING}</h1>
        <p>{BANNER_DATA.DECRIPTION}</p>
        <a href={BANNER_DATA.TUTORIAL_URL} target="_blank" class="light-color">
          <i class="far fa-play-circle fa-2x watch-btn" />
          {BANNER_DATA.WATCH_TUTORIAL}
        </a>
      </div>
      <div class="col-md-6">
        <img src={homeImage} alt="" class="img-fluid" />
      </div>
    </div>
  </div>
  <img src={wave1Image} alt="" class="wave-img" />
</section>

<!-- Services -->
<section id="services" class="section">
  <div class="container text-center">
    <h2 class="title">{SERVICE_DATA.HEADING}</h2>
    <div class="row section-body">
      {#each SERVICE_DATA.SERVICE_LIST as list}
        <div class="col-md-4 service">
          <img src={list.URL} alt={list.LABEL} class="service-img" />
          <h4>{list.LABEL}</h4>
          <p>{list.DESCRIPTION}</p>
        </div>
      {/each}
    </div>
    <buttom class="btn btn-primary round-border main-bgcolor">
      {SERVICE_DATA.ALL_SERVICES}
    </buttom>
  </div>
</section>

<!-- About -->
<section id="about-us" class="section grey-bgcolor">
  <div class="container">
    <h2 class="title text-center">{ABOUT_DATA.HEADING}</h2>
    <div class="row section-body">
      <div class="col-md-6">
        <h3 class="about-title">{ABOUT_DATA.TITLE}</h3>
        <ul>
          {#each ABOUT_DATA.WHY_CHOOSE_US_LIST as list}
            <li>{list}</li>
          {/each}
        </ul>
      </div>
      <div class="col-md-6">
        <img src={ABOUT_DATA.IMAGE_URL} alt="" class="img-fluid" />
      </div>
    </div>
  </div>
</section>

<!-- Testimonials -->
<section id="testimonials" class="section">
  <div class="container">
    <h2 class="title text-center">{TESTIMONIAL_DATA.HEADING}</h2>
    <div class="row offset-1 section-body">
      {#each TESTIMONIAL_DATA.TESTIMONIAL_LIST as list}
        <div class="col-md-5 testimonial">
          <p>{list.DESCRIPTION}</p>
          <img src={list.IMAGE_URL} alt="" />
          <p class="user-details">
            <b>{list.NAME}</b>
            <br />
            {list.DESIGNATION}
          </p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Social Media -->
<section id="social-media" class="section grey-bgcolor">
  <div class="container text-center">
    <h2 class="title text-center">{SOCIAL_DATA.HEADING}</h2>
    <div class="social-icons section-body">
      {#each SOCIAL_DATA.IMAGES_LIST as list}
        <a
          href="https://www.linkedin.com/in/nikhil-karkra-73a15319/"
          target="_blank">
          <img src={list} alt="Social media {list}" />
        </a>
      {/each}
    </div>
  </div>
</section>

<!-- Footer -->
<section class="main-bgcolor light-color" id="footer">
  <img src={wave2Image} alt="" class="wave-img" />
  <div class="container">
    <div class="row section-body">
      <div class="col-md-4 footer-box">
        <div class="company_brand">{HEADER}</div>
        <p>{FOOTER_DATA.DESCRIPTION}</p>
      </div>
      <div class="col-md-4 footer-box">
        <p class="footer-title">{FOOTER_DATA.CONTACT_DETAILS.HEADING}</p>
        <p>
          <i class="fas fa-map-marker-alt" />
          {FOOTER_DATA.CONTACT_DETAILS.ADDRESS}
        </p>
        <p>
          <i class="fas fa-phone" />
          {FOOTER_DATA.CONTACT_DETAILS.MOBILE}
        </p>
        <p>
          <i class="fas fa-envelope" />
          {FOOTER_DATA.CONTACT_DETAILS.EMAIL}
        </p>
      </div>
      <div class="col-md-4 footer-box">
        <p class="footer-title">{FOOTER_DATA.SUBSCRIBE_NEWSLETTER}</p>
        <input
          type="email"
          class="form-control round-border"
          placeholder="Your Email" />
        <button type="button" class="btn btn-outline-light round-border">
          {FOOTER_DATA.SUBSCRIBE}
        </button>
      </div>
    </div>
  </div>
</section>


<style>
  /* Navbar */
  #nav-bar {
    position: sticky;
    top: 0;
    z-index: 10;
  }

  .navbar {
    padding: 0 20px !important;
  }

  .navbar-nav li {
    padding: 0 0 0 20px;
  }

  .navbar-nav li a {
    font-weight: 600;
    text-transform: uppercase;
    float: right;
    text-align: left;
  }

  /* Banner */
  section {
    padding-top: 5%;
  }

  h1 {
    font-size: 40px;
    font-weight: 600;
    margin-top: 100px;
    text-transform: uppercase;
  }

  .watch-btn {
    margin: auto 20px;
    position: relative;
    top: 8px;
  }

  section a {
    text-decoration: none;
  }

  .wave-img {
    width: 100%;
    height: auto;
  }
  
  /* Services */
  .service-img {
    width: 200px;
    height: 200px;
    margin-top: 20px;
  }

  .service h4 {
    padding: 5px;
    margin-top: 25px;
    text-transform: uppercase;
  }

  .title {
    text-transform: uppercase;
  }

  .title::before {
    content: "";
    background: linear-gradient(90deg, #0072ff 0%, #00d4ff 100%);
    height: 5px;
    width: 200px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    transform: translateY(60px);
  }

  .title::after {
    content: "";
    background: linear-gradient(90deg, #0072ff 0%, #00d4ff 100%);
    height: 10px;
    width: 50px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
    display: block;
    transform: translateY(14px);
  }

  section .btn-primary {
    box-shadow: none;
    padding: 8px 25px;
    border: none;
  }

  /* About */
  .about-title {
    margin-top: 8%;
    margin-bottom: 20px;
  }

  section ul li {
    margin: 10px 0;
  }

  section ul {
    padding-left: 23px;
  }

  /* Testimonials */
  .testimonial {
    border-left: 4px solid #0072ff80;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .testimonial img {
    height: 60px;
    width: 60px;
    border-radius: 50%;
    margin: 0 10px;
  }

  .user-details {
    display: inline-block;
    font-size: 12px;
  }

  /* Social Media */
  .social-icons img {
    width: 75px;
    transition: 0.5s;
  }
  .social-icons a:hover img {
    transform: translateY(-10px);
  }
  a:hover {
    text-decoration: none;
  }

  /* Footer */
  .footer-title {
    font-weight: bold;
    text-transform: uppercase;
  }

  .footer-box button {
    margin-top: 30px;
  }

  .round-border {
    border-radius: 20px !important;
  }
  .wave-img {
    width: 100%;
    height: auto;
  }
</style>
