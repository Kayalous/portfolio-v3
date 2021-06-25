<template>
  <section class="px-2 pt-24 sm:pt-40">
    <div class="flex flex-col items-center justify-center w-full mb-16">
      <h1
        class="text-2xl font-semibold tracking-tight text-center  text-rose-400 font-josefin"
      >
        Projects
      </h1>
      <h2 class="text-4xl tracking-tight text-center lg:text-6xl 2xl:text-7xl">
        Check out some of the things I've worked on
      </h2>
      <p
        class="max-w-4xl my-5 text-xl text-center text-gray-600  lg:my-10 2xl:text-2xl dark:text-dark-theme-200"
      >
        It's commonly known that developers and designers can't really show all
        the work they do with clients, because of confidentiality agreements,
        non-disclosure agreement or just because the project isn't live yet.
        <br />
        <br />
        The projects presented here are just a sneak peak of what I can do. If
        you have any questions about a specific project, or if you need to get
        in touch feel free to email me.
      </p>
      <div class="flex justify-center">
        <a
          class="
            group
            hover-no-underline
            transform-gpu
            transition
            duration-400
            ease-overstep
            active:translate-y-0.5
            cursor-pointer
          "
          @click="$modal.show('contact-form')"
        >
          <span
            class="rose-button glass transform-gpu group-hover:-translate-y-1"
          >
            Get in touch
          </span>
        </a>
      </div>
    </div>
    <div
      class="grid max-w-5xl grid-cols-1 gap-5 mx-auto  md:grid-cols-2 xl:max-w-7xl"
    >
      <ProjectCard
        v-for="project in projects"
        :key="project.title"
        :project="project"
        compact="true"
      />
    </div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: "Projects | Abdulrhman Elkayal",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "Some projects of Abdulrhman Elkayal.",
        },
      ],
    };
  },
  async asyncData({ $content, params }) {
    const projects = await $content("projects").fetch();

    return { projects };
  },
  mounted() {
    this.getProjectColors();
  },
  methods: {
    getProjectColors() {
      this.projects = this.projects.map((project) => {
        let categories = [];
        project.categories.forEach((category) => {
          let split = category.split("*/*");
          categories.push({
            title: split[0],
            color: split[1],
          });
        });
        project.categories = categories;
        return project;
      });
    },
  },
};
</script>
