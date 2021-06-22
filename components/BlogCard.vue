<template>
  <div class="w-full p-2 mx-auto sm:p-6 md:w-1/2 xl:w-1/3 h-96">
    <div class="relative h-full">
      <nuxt-link :to="`blog/${blog.slug}`">
        <nuxt-img
          quality="80"
          class="object-cover w-full h-full transition-all duration-200 rounded-md shadow-md  ease-overstep"
          :src="blog.image"
          alt="blog"
        />
      </nuxt-link>
      <div
        class="absolute bottom-0 left-0 flex flex-col justify-between w-full scale-105 translate-y-5 rounded-md shadow  glass tinted h-2/3"
      >
        <div class="flex-grow p-4 lg:p-8">
          <p
            class="text-xs tracking-tight text-left text-gray-700  dark:text-dark-theme-300 font-josefin"
          >
            {{ $moment(blog.date).format("MMMM Do YYYY") }}
          </p>
          <div class="flex">
            <nuxt-link
              :to="`blog/${blog.slug}`"
              class="mb-2 text-xs font-semibold tracking-widest uppercase  line-clamp-1 title-font text-rose-400"
            >
              {{ blog.title }}
            </nuxt-link>
          </div>
          <h3
            class="mx-auto text-2xl font-semibold leading-none tracking-tighter  line-clamp-2 title-font"
          >
            {{ blog.description }}
          </h3>
        </div>
        <div class="flex justify-end px-6 py-4 mt-auto">
          <nuxt-link
            :to="`blog/${blog.slug}`"
            class="mt-auto font-semibold lg:mb-0"
            title="Read Full Article"
          >
            Read Full Article »
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["blog"],
  mounted() {},
};
</script>