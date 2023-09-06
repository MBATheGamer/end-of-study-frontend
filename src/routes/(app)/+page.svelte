<script lang="ts">
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<section id="home" class="py-10 md:py-16">
  <div class="container py-6 mx-auto">
    <div class="hero h-96 md:h-[500px] mx-auto rounded-box overflow-hidden">
      <div class="hero-overlay bg-opacity-60 bg-secondary"></div>
      <div class="hero-content text-center text-secondary-content">
        <div class="max-w-lg">
          <h1 class="mb-5 sm:mb-7 text-4xl sm:text-5xl font-bold">
            Let's make your
            learning easier
          </h1>
          <a href="/sign-up" class="btn btn-warning sm:btn-wide">Get Started</a>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="features" class="py-10 md:py-16">
  <div class="container mx-auto py-6">
    <div class="text-center">
      <h2 class="text-3xl sm:text-5xl font-bold mb-4">What make this platform special</h2>
      <p class="text-lg sm:text-2xl mb-6 md:mb-14">
        Saving time and efforts in teaching purpose
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 xl:gap-10">
      <div class="card bg-base-200 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
        <div class="card-body items-center text-center gap-4">
          <i class="bi bi-search text-4xl"></i>
          <h2 class="card-title">All-in-one place</h2>
          <p>
            This is a wider card with <br class="hidden xl:inline" />supporting text below as a <br class="hidden xl:inline" /> natural content.
          </p>
        </div>
      </div>

      <div class="card bg-base-200 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
        <div class="card-body items-center text-center gap-4">
          <i class="bi bi-chat-left-dots text-4xl"></i>
          <h2 class="card-title">Course Attachments</h2>
          <p>
            This is a wider card with <br class="hidden xl:inline" />supporting text below as a <br class="hidden xl:inline" /> natural content.
          </p>
        </div>
      </div>

      <div class="card bg-base-200 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
        <div class="card-body items-center text-center gap-4">
          <i class="bi bi-badge-ad text-4xl"></i>
          <h2 class="card-title">Homework Assignments</h2>
          <p>
            This is a wider card with <br class="hidden xl:inline" />supporting text below as a <br class="hidden xl:inline" /> natural content.
          </p>
        </div>
      </div>

      <div class="card bg-base-200 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
        <div class="card-body items-center text-center gap-4">
          <i class="bi bi-card-checklist text-4xl"></i>
          <h2 class="card-title">Online meeting</h2>
          <p>
            This is a wider card with <br class="hidden xl:inline" />supporting text below as a <br class="hidden xl:inline" /> natural content.
          </p>
        </div>
      </div>

      <div class="card bg-base-200 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
        <div class="card-body items-center text-center gap-4">
          <i class="bi bi-wallet2 text-4xl"></i>
          <h2 class="card-title">Ranking System</h2>
          <p>
            This is a wider card with <br class="hidden xl:inline" />supporting text below as a <br class="hidden xl:inline" /> natural content.
          </p>
        </div>
      </div>

      <div class="card bg-base-200 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
        <div class="card-body items-center text-center gap-4">
          <i class="bi bi-funnel text-4xl"></i>
          <h2 class="card-title">Optimize conversions</h2>
          <p>
            This is a wider card with <br class="hidden xl:inline" />supporting text below as a <br class="hidden xl:inline" /> natural content.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


<section id="fqas" class="py-12 md:py-16 bg-neutral">
  <div class="container mx-auto py-6">
    <div class="text-center text-white">
      <h2 class="text-3xl sm:text-5xl font-bold mb-4">We have some FQAs.</h2>
      <p class="text-lg sm:text-2xl mb-6 md:mb-14">
        We have answer for our previous users.
      </p>
    </div>

    <div class="columns-1 sm:columns-2 lg:columns-3 gap-6 lg:gap-8">
      <div class="block mb-8 lg:mb-10">
        <div class="stack">
          <div class="card bg-secondary text-secondary-content">
            <div class="card-body gap-4">
              <div class="flex items-center">
                <div class="avatar flex-shrink-0">
                  <div class="w-16 rounded-full border-2 border-white">
                    <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="people" />
                  </div>
                </div>

                <div class="ml-3">
                  <p class="text-lg font-medium leading-tight">Eric Ampire</p>
                  <small>Computer Sciences Student</small>
                </div>
              </div>
              <p class="text-3xl">How to sign up in this great platform?</p>
              <p>
                It's easy! Just click on "SIGN UP" button or <a href="/sign-up" class="link">click here</a>
              </p>
            </div>
          </div>
          <div class="card bg-primary h-10"></div>
          <div class="card bg-warning h-10"></div>
        </div>
      </div>

      <div class="block mb-8 lg:mb-10">
        <div class="stack">
          <div class="card bg-secondary text-secondary-content">
            <div class="card-body gap-4">
              <div class="flex items-center">
                <div class="avatar flex-shrink-0">
                  <div class="w-16 rounded-full border-2 border-white">
                    <img src="https://randomuser.me/api/portraits/men/2.jpg" alt="people" />
                  </div>
                </div>

                <div class="ml-3">
                  <p class="text-lg font-medium leading-tight">Adam Wathan</p>
                  <small>Algebra Teacher</small>
                </div>
              </div>
              <p class="text-3xl">
                Can this platform support uploading homework assignment and course attachments?
              </p>
              <p>
                Yes, It's full featured platform for studing purpose, support uploading homework assignments, course attachments and giving result for homework.
              </p>
            </div>
          </div>
          <div class="card bg-primary h-10"></div>
          <div class="card bg-warning h-10"></div>
        </div>
      </div>

      <div class="block mb-8 lg:mb-10">
        <div class="stack">
          <div class="card bg-secondary text-secondary-content">
            <div class="card-body gap-4">
              <div class="flex items-center">
                <div class="avatar flex-shrink-0">
                  <div class="w-16 rounded-full border-2 border-white">
                    <img src="https://randomuser.me/api/portraits/men/3.jpg" alt="people" />
                  </div>
                </div>

                <div class="ml-3">
                  <p class="text-lg font-medium leading-tight">Ben Sulumu</p>
                  <small>Manager</small>
                </div>
              </div>
              <p class="text-3xl">
                Can I upload my homework assignment to my teachers?
              </p>
              <p>
                Yes, you can and your teachers will give your marks on it.
              </p>
            </div>
          </div>
          <div class="card bg-primary h-10"></div>
          <div class="card bg-warning h-10"></div>
        </div>
      </div>

      <div class="block mb-8 lg:mb-10">
        <div class="stack">
          <div class="card bg-secondary text-secondary-content">
            <div class="card-body gap-4">
              <div class="flex items-center">
                <div class="avatar flex-shrink-0">
                  <div class="w-16 rounded-full border-2 border-white">
                    <img src="https://randomuser.me/api/portraits/men/4.jpg" alt="people" />
                  </div>
                </div>

                <div class="ml-3">
                  <p class="text-lg font-medium leading-tight">Rodrigo Aguilar</p>
                  <small>Creator of Tailwind Awesome</small>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.
              </p>
            </div>
          </div>
          <div class="card bg-primary h-10"></div>
          <div class="card bg-warning h-10"></div>
        </div>
      </div>

      <div class="block mb-8 lg:mb-10">
        <div class="stack">
          <div class="card bg-secondary text-secondary-content">
            <div class="card-body gap-4">
              <div class="flex items-center">
                <div class="avatar flex-shrink-0">
                  <div class="w-16 rounded-full border-2 border-white">
                    <img src="https://randomuser.me/api/portraits/men/5.jpg" alt="people" />
                  </div>
                </div>

                <div class="ml-3">
                  <p class="text-lg font-medium leading-tight">Dan Kyungu</p>
                  <small>Mobile dev</small>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.
              </p>
            </div>
          </div>
          <div class="card bg-primary h-10"></div>
          <div class="card bg-warning h-10"></div>
        </div>
      </div>

      <div class="block mb-8 lg:mb-10">
        <div class="stack">
          <div class="card bg-secondary text-secondary-content">
            <div class="card-body gap-4">
              <div class="flex items-center">
                <div class="avatar flex-shrink-0">
                  <div class="w-16 rounded-full border-2 border-white">
                    <img src="https://randomuser.me/api/portraits/men/6.jpg" alt="people" />
                  </div>
                </div>

                <div class="ml-3">
                  <p class="text-lg font-medium leading-tight">Randy Doe</p>
                  <small>Mobile dev</small>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.
              </p>
            </div>
          </div>
          <div class="card bg-primary h-10"></div>
          <div class="card bg-warning h-10"></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="about" class="py-12 md:py-24">
  <div class="container mx-auto py-6">
    <div class="flex flex-col md:flex-row justify-center items-center gap-6 text-center md:text-start">
      <div class="flex-grow">
        <p class="text-4xl md:text-5xl 2xl:text-6xl font-bold text-primary mb-12">About this platform</p>
        <p class="text-2xl md:text-3xl 2xl:text-3xl w-2/3">This platform was created by <strong>Mohamed Benamor</strong>, a Computer Sciences student for his purpose to gain a Computer Sciences Degree.</p>  
      </div>
    </div>
  </div>
</section>

<section class="py-12 md:py-24">
  <div class="container mx-auto py-6">
    <div class="flex flex-col md:flex-row justify-center items-center gap-6 text-center md:text-start">
      <span class="flex-grow text-4xl md:text-5xl 2xl:text-6xl font-bold text-primary">Let's make something <br class="hidden sm:inline" /> great together.</span>
      <a href="/login" class="btn btn-secondary rounded-full sm:btn-lg">Let's connect</a>
    </div>
  </div>
</section>

<footer class="bg-base-200 text-base-content">
  <div class="container mx-auto py-6">
    <div class="footer py-10 md:py-16 grid-cols-2 sm:grid-cols-4 lg:grid-cols-auto">
      <div>
        <span class="footer-title">Solutions</span>
        <a href="#!" class="link link-hover">Marketing</a>
        <a href="#!" class="link link-hover">Analytics</a>
        <a href="#!" class="link link-hover">Commerce</a>
        <a href="#!" class="link link-hover">Insights</a>
      </div>
      <div>
        <span class="footer-title">Services</span>
        <a href="#!" class="link link-hover">Branding</a>
        <a href="#!" class="link link-hover">Design</a>
        <a href="#!" class="link link-hover">Marketing</a>
        <a href="#!" class="link link-hover">Advertisement</a>
      </div>
      <div>
        <span class="footer-title">Company</span>
        <a href="#!" class="link link-hover">About us</a>
        <a href="#!" class="link link-hover">Contact</a>
        <a href="#!" class="link link-hover">Jobs</a>
        <a href="#!" class="link link-hover">Press kit</a>
      </div>
      <div>
        <span class="footer-title">Legal</span>
        <a href="#!" class="link link-hover">Terms of use</a>
        <a href="#!" class="link link-hover">Privacy policy</a>
        <a href="#!" class="link link-hover">Cookie policy</a>
      </div>
      <div class="w-full col-span-full md:col-auto">
        <span class="footer-title">Newsletter</span>
        <div class="form-control w-full">
          <label for="mail-address" class="label">
            <span id="mail-address" class="label-text">Enter your email address</span>
          </label>
          <div class="relative">
            <input type="text" placeholder="user@site.com" class="input input-bordered w-full pr-16" />
            <button class="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col sm:flex-row items-center border-t border-base-300 py-4 gap-2">
      <div class="flex-grow text-center sm:text-start">
        <p>© 2023 Company, Inc. All rights reserved.</p>
      </div>
      <div class="grid grid-flow-col gap-4">
        <a class="link link-secondary" href="#!"><i class="bi bi-facebook text-xl"></i></a>
        <a class="link link-secondary" href="#!"><i class="bi bi-instagram text-xl"></i></a>
        <a class="link link-secondary" href="#!"><i class="bi bi-twitter text-xl"></i></a>
        <a class="link link-secondary" href="#!"><i class="bi bi-github text-xl"></i></a>
        <a class="link link-secondary" href="#!"><i class="bi bi-dribbble text-xl"></i></a>
      </div>
    </div>
  </div>
</footer>
