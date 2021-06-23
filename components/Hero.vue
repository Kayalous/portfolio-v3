<template>
  <section
    class="
      relative
      z-10
      w-screen
      h-screen
      min-h-[800px]
      max-h-screen
      overflow-hidden
    "
  >
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
      <div class="absolute w-screen h-full glass no-tint fade-in"></div>
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
          !min-h-[800px]
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
            class="text-4xl tracking-tight text-center  sm:text-6xl 2xl:text-8xl md:text-left"
          >
            Abdulrhman Elkayal.
          </h2>
          <h2
            class="mb-5 text-4xl tracking-tight text-center  sm:text-6xl 2xl:text-8xl md:text-left"
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
              target="_blank"
              rel="noopener noreferrer"
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
