<template>
  <section class="container">
    <h1
      class="text-2xl font-semibold tracking-tight text-center  text-rose-400 font-josefin md:text-left"
    >
      Featured
    </h1>
    <h2 class="mb-5 text-6xl tracking-tight text-center md:text-left">
      Somethings I've built
    </h2>
    <div class="flex flex-col gap-12 px-3">
      <ProjectCard
        v-for="(project, i) in projects"
        :key="project.title"
        :project="project"
        :reverse="i % 2 === 0"
      />
    </div>
    <div class="flex justify-center w-full mt-10">
      <div class="flex justify-center md:justify-start">
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
          to="/projects"
        >
          <span
            class="rose-button glass transform-gpu group-hover:-translate-y-1"
          >
            All projects
          </span>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["projects"],
};
</script>