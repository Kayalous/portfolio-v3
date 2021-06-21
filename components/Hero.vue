<template>
  <section class="relative z-10 w-screen h-screen max-h-screen overflow-hidden">
    <div>
      <div class="absolute z-0 w-full h-full">
        <div class="slide-bl">
          <div
            class="w-48 h-48 mt-32 ml-auto shadow-md  sqaure-1 bg-gradient-to-br from-dark-theme-700 to-dark-theme-800 transform-gpu rotate-12 rounded-4xl"
          ></div>
        </div>
        <div class="slide-br">
          <div
            class="w-64 h-64 shadow-md  sqaure-2 -translate-x-28 bg-gradient-to-br from-orange-400 to-pink-600 transform-gpu rounded-2xl"
          ></div>
        </div>
      </div>
      <div class="absolute w-screen h-screen glass no-tint fade-in"></div>
      <!-- <div
        class="absolute bottom-0 left-0 z-10 w-full h-20 xl:h-32 bg-gradient-to-t from-white dark:from-dark-theme-900 to-transparent smooth-seperator"
      ></div> -->
    </div>

    <client-only>
      <particles-bg
        class="max-h-screen overflow-y-hidden"
        type="cobweb"
        num="10"
        color="#fb7185"
        :bg="true"
      />
    </client-only>
    <div class="container">
      <div
        class="
          relative
          flex
          items-center
          justify-start
          h-screen
          !min-h-[600px]
          px-5
        "
      >
        <div>
          <h1
            class="mb-4 text-2xl font-semibold tracking-tight text-center  text-rose-400 font-josefin md:text-left"
          >
            Hey, my name is
          </h1>
          <h2
            class="text-6xl tracking-tight text-center  2xl:text-8xl md:text-left"
          >
            Abdulrhman Elkayal.
          </h2>
          <h2
            class="mb-5 text-6xl tracking-tight text-center  2xl:text-8xl md:text-left"
          >
            I make things.
          </h2>
          <p
            class="max-w-xl mb-10 text-lg text-center text-gray-600  2xl:text-2xl dark:text-dark-theme-300 md:text-left"
          >
            I'm a fullstack software engineer specializing in building
            delightful, and engaing applications on the web.
          </p>
          <div class="flex justify-center md:justify-start">
            <a
              class="
                group
                hover-no-underline
                transform-gpu
                transition
                duration-400
                ease-overstep
                active:translate-y-0.5
              "
              href="mailto:aelkayal88@gmail.com"
            >
              <span
                class=" rose-button glass transform-gpu group-hover:-translate-y-1"
              >
                Get in touch
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.sqaure-1 {
  transform: rotate(30deg);
  -webkit-animation: sqaure-1 60s ease infinite, fade-in 5s 3s both;
  animation: sqaure-1 60s ease infinite, fade-in 5s 3s both;
}
.sqaure-2 {
  transform: rotate(45deg);
  -webkit-animation: sqaure-1 90s ease infinite, fade-in 8s 2s both;
  animation: sqaure-1 90s ease infinite, fade-in 8s 2s both;
}

.fade-in {
  -webkit-animation: fade-in 1s 0.5s both;
  animation: fade-in 1s 0.5s both;
}

@-webkit-keyframes sqaure-1 {
  0% {
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  100% {
    -webkit-transform: rotate(405deg);
    transform: rotate(405deg);
  }
}
@keyframes sqaure-1 {
  0% {
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  100% {
    -webkit-transform: rotate(405deg);
    transform: rotate(405deg);
  }
}

.slide-bl {
  -webkit-animation: slide-bl 40s ease-in-out infinite alternate-reverse both;
  animation: slide-bl 40s ease-in-out infinite alternate-reverse both;
}
.slide-br {
  -webkit-animation: slide-br 90s ease-in-out infinite alternate-reverse both;
  animation: slide-br 90s ease-in-out infinite alternate-reverse both;
}

@-webkit-keyframes slide-bl {
  0% {
    -webkit-transform: translateY(600px) translateX(-600px);
    transform: translateY(600px) translateX(-600px);
  }
  100% {
    -webkit-transform: translateY(0) translateX(0);
    transform: translateY(0) translateX(0);
  }
}
@keyframes slide-bl {
  0% {
    -webkit-transform: translateY(600px) translateX(-600px);
    transform: translateY(600px) translateX(-600px);
  }
  100% {
    -webkit-transform: translateY(0) translateX(0);
    transform: translateY(0) translateX(0);
  }
}

@-webkit-keyframes slide-br {
  0% {
    -webkit-transform: translateY(100px) translateX(1200px);
    transform: translateY(100px) translateX(1200px);
  }
  100% {
    -webkit-transform: translateY(0) translateX(0);
    transform: translateY(0) translateX(0);
  }
}
@keyframes slide-br {
  0% {
    -webkit-transform: translateY(100px) translateX(1200px);
    transform: translateY(100px) translateX(1200px);
  }
  100% {
    -webkit-transform: translateY(0) translateX(0);
    transform: translateY(0) translateX(0);
  }
}

@-webkit-keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.smooth-seperator {
  -webkit-animation: fade-in 1s 1s;
  animation: fade-in 1s 1s;
}

.dark .smooth-seperator {
  -webkit-animation: fade-in 1s 1s;
  animation: fade-in 1s 1s;
}
</style>
