<template>
  <section>
    <div class="container">
      <h1
        class="text-2xl font-semibold tracking-tight text-center  text-rose-400 font-josefin md:text-left"
      >
        Featured
      </h1>
      <h2
        class="mb-5 text-4xl tracking-tight text-center  sm:text-6xl md:text-left"
      >
        Stuff I've made
      </h2>
    </div>
    <div class="max-w-6xl mx-auto 2xl:max-w-none 2xl:container">
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
    </div>
  </section>
</template>

<script>
export default {
  props: ["projects"],
};
</script>