<template>
  <div class="relative flex overflow-hidden w-screenh-screen">
    <div>
      <div class="absolute z-0 w-full h-full">
        <div class="slide-bl">
          <div
            class="w-48 h-48 mt-32 ml-auto shadow-md  sqaure-1 bg-gradient-to-br from-indigo-700 to-purple-800 transform-gpu rotate-12 rounded-4xl"
          ></div>
        </div>
        <div class="slide-br">
          <div
            class="w-64 h-64 shadow-md  sqaure-2 -translate-x-28 bg-gradient-to-br from-dark-theme-700 to-dark-theme-800 transform-gpu rounded-2xl"
          ></div>
        </div>
      </div>
      <div class="absolute w-screen h-screen glass no-tint fade-in"></div>
      <!-- <div
        class="absolute bottom-0 left-0 z-10 w-full h-20 xl:h-32 bg-gradient-to-t from-white dark:from-dark-theme-900 to-transparent smooth-seperator"
      ></div> -->
    </div>

    <div
      class="relative flex items-center justify-center flex-grow w-screen pt-32"
    >
      <div class="notfound-404">
        <h1 class="pb-10 text-center text-9xl sm:text-16xl">
          {{ error.statusCode }}
        </h1>

        <p
          class="mb-10 text-lg text-center text-gray-600  font-josefin 2xl:text-2xl dark:text-dark-theme-200"
        >
          “Sometimes it takes a wrong turn to get you to the right place.”
        </p>
        <div class="flex justify-center">
          <nuxt-link
            class="
              group
              hover-no-underline
              transform-gpu
              transition
              duration-400
              ease-overstep
              active:translate-y-0.5
            "
            to="/"
          >
            <span
              class="rose-button glass transform-gpu group-hover:-translate-y-1"
            >
              Let's get you back home
            </span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  background: url("/img/404.jpg") no-repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: cover;
  background-position: center;
}
</style>

<script>
export default {
  layout: "default",
  props: ["error"],
};
</script>