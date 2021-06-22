<template>
  <div
    class="flex flex-col items-center justify-center md:gap-6 group"
    :class="[reverse ? 'md:flex-row-reverse' : 'md:flex-row']"
  >
    <nuxt-link
      :to="'project/' + project.slug"
      class="relative flex-shrink-0 w-full transition duration-700  md:w-6/12 hover-no-underline transform-gpu ease-overstep md:group-hover:scale-101"
    >
      <nuxt-img
        width="560"
        height="360"
        quality="80"
        :alt="project.title"
        :src="project.image"
        class="w-full h-auto rounded-md shadow-lg"
      />
    </nuxt-link>
    <div
      class="flex flex-col justify-between w-full p-4 my-auto transition duration-700 -translate-y-1 rounded-md rounded-t-none shadow-md  glass md:translate-y-0 md:rounded-t-md transform-gpu ease-overstep"
      :class="[
        reverse
          ? 'md:group-hover:translate-x-12 md:translate-x-16'
          : 'md:group-hover:-translate-x-12 md:-translate-x-16',
      ]"
    >
      <div>
        <nuxt-link :to="'project/' + project.slug">
          <h3 class="inline-block text-3xl font-semibold">
            {{ project.title }}
          </h3>
        </nuxt-link>
        <div
          class="flex flex-row flex-wrap gap-4 py-2"
          v-if="project.categories.length > 0"
        >
          <span
            v-for="category in project.categories"
            :key="category.title"
            class="
              px-1.5
              text-sm
              font-bold
              tracking-tight
              uppercase
              rounded-full
              select-none
            "
            :class="[category.color]"
          >
            {{ category.title }}
          </span>
        </div>
        <p class="my-2 font-josefin line-clamp-4">
          {{ project.description }}
        </p>
        <div
          v-if="project.technologies.length > 0"
          class="flex flex-wrap w-full py-1 mb-1 text-gray-600  dark:text-dark-theme-400 font-Dosis"
        >
          <span
            class="mx-2 font-semibold"
            v-for="technology in project.technologies"
            :key="technology"
          >
            {{ technology }}
          </span>
        </div>
        <div class="flex justify-end w-full">
          <nuxt-link :to="'project/' + project.slug" :title="project.title">
            View project »
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: ["project", "reverse"],
  mounted() {},
};
</script>

