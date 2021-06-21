<template>
  <section class="relative pb-16 mt-5 overflow-hidden lg:pb-32">
    <Grid class="hidden xl:grid" />
    <div class="relative z-10 px-3 lg:px-0">
      <h1
        class="mb-4 text-2xl font-semibold tracking-tight text-center  text-rose-400 font-josefin"
      >
        Get to know me better
      </h1>
      <h2 class="text-4xl tracking-tight text-center sm:text-6xl">
        {{ about.header }}
      </h2>
      <div class="w-full mt-2 text-gray-600 dark:text-dark-theme-300">
        <RichText
          class="text-gray-600 2xl:text-2xl dark:text-dark-theme-300"
          :data="about.bio"
        />
      </div>
    </div>
  </section>
</template>

<script>
import Grid from "@/components/Grid.vue";
export default {
  components: {
    Grid,
  },
  props: ["about"],
};
</script>