<template>
  <section class="mt-10 text-blueGray-700 dark:text-white">
    <div class="container items-center px-5 py-8 mx-auto lg:px-24">
      <h1
        class="text-2xl font-semibold tracking-tight text-center  text-rose-400 font-josefin md:text-left"
      >
        Writing
      </h1>
      <h2
        class="mb-5 text-4xl tracking-tight text-center  sm:text-6xl md:text-left"
      >
        Some of my writings
      </h2>
      <div
        class="grid w-full grid-cols-1 mb-12 text-left md:grid-cols-2 xl:grid-cols-3 gap-y-12 gap-x-4"
      >
        <BlogCard
          :compact="true"
          :blog="blog"
          v-for="blog in blogs"
          :key="blog.title"
          class="h-full flex flex-col"
        />
      </div>
      <div class="flex items-center justify-center w-full">
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
          to="/writings"
        >
          <span
            class="rose-button glass transform-gpu group-hover:-translate-y-1"
          >
            All writings
          </span>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: ["blogs"],
};
</script>