<template>
  <div class="flex flex-col h-full">
    <div
      class="flex flex-col items-center justify-center group flex-grow"
      :class="[
        compact
          ? ''
          : reverse
          ? 'md:flex-row-reverse md:gap-6'
          : 'md:flex-row md:gap-6',
      ]"
    >
      <nuxt-link
        :to="'/article/' + blog.slug"
        class="relative w-full overflow-hidden transition-all duration-700 hover-no-underline transform-gpu ease-overstep"
        :class="
          compact
            ? 'rounded-t-md'
            : 'md:w-6/12 md:group-hover:scale-101 rounded-md'
        "
      >
        <nuxt-img
          width="560"
          height="360"
          quality="80"
          :alt="blog.title"
          :src="blog.image"
          class="w-full h-auto transition-all duration-200 shadow-lg ease-overstep"
        />
      </nuxt-link>
      <div
        class="relative z-10 flex flex-col w-full p-4 transition duration-700 -translate-y-1 shadow-md glass transform-gpu ease-overstep flex-grow"
        :class="[
          compact
            ? 'rounded-b-md -mt-2'
            : reverse
            ? 'md:group-hover:translate-x-12 md:translate-x-16 rounded-md md:rounded-t-md rounded-t-none md:translate-y-0'
            : 'md:group-hover:-translate-x-12 md:-translate-x-16 rounded-md md:rounded-t-md rounded-t-none md:translate-y-0',
        ]"
      >
        <div class="flex flex-col h-full">
          <nuxt-link :to="'/article/' + blog.slug" class="mb-2 hover-no-underline">
            <h3 class="inline-block text-3xl font-semibold group-hover:underline decoration-2 decoration-rose-400 underline-offset-4 transition-all duration-300">
              {{ blog.title }}
            </h3>
          </nuxt-link>
          <p class="mb-4 font-josefin line-clamp-4 flex-grow">
            {{ blog.description }}
          </p>

          <div class="flex items-center justify-end w-full mt-auto">
            <nuxt-link :to="'/article/' + blog.slug" :title="blog.title" class="hover-no-underline">
              <span class="underline decoration-2 decoration-rose-400 underline-offset-4 transition-all duration-300 hover:decoration-4">
                Read full article »
              </span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hover-no-underline {
  text-decoration: none !important;
}
</style>

<script>
export default {
  props: ["blog", "reverse", "compact"],
};
</script>

