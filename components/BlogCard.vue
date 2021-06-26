<template>
  <div
    class="flex flex-col items-center justify-center group"
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
      class="relative flex-shrink-0 w-full overflow-hidden transition-all duration-700  hover-no-underline transform-gpu ease-overstep"
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
        class="w-full h-auto transition-all duration-200 shadow-lg  ease-overstep"
      />
    </nuxt-link>
    <div
      class="relative z-10 flex flex-col justify-between w-full p-4 my-auto transition duration-700 -translate-y-1 shadow-md  glass transform-gpu ease-overstep"
      :class="[
        compact
          ? 'rounded-b-md -mt-2'
          : reverse
          ? 'md:group-hover:translate-x-12 md:translate-x-16 rounded-md md:rounded-t-md rounded-t-none  md:translate-y-0'
          : 'md:group-hover:-translate-x-12 md:-translate-x-16 rounded-md md:rounded-t-md rounded-t-none  md:translate-y-0',
      ]"
    >
      <div>
        <nuxt-link :to="'/article/' + blog.slug">
          <h3 class="inline-block text-3xl font-semibold">
            {{ blog.title }}
          </h3>
        </nuxt-link>
        <p class="my-2 font-josefin line-clamp-4">
          {{ blog.description }}
        </p>

        <div class="flex items-center justify-end w-full pt-2">
          <nuxt-link :to="'/article/' + blog.slug" :title="blog.title">
            Read full article »
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: ["blog", "reverse", "compact"],
};
</script>

