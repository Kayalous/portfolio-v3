<template>
  <section class="px-1 pt-32">
    <div class="flex flex-col items-center justify-center w-full mb-10">
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
          "
          href="mailto:aelkayal88@gmail.com"
        >
          <span
            class="rose-button glass transform-gpu group-hover:-translate-y-1"
          >
            Get in touch
          </span>
        </a>
      </div>
    </div>
    <div class="flex flex-wrap justify-center max-w-5xl mx-auto xl:max-w-7xl">
      <div
        class="p-3 xl:w-1/3 md:w-1/2"
        v-for="project in projects"
        :key="project.title"
      >
        <div class="bg-gray-100 rounded-lg dark:bg-dark-theme-800">
          <nuxt-link :to="`project/${project.slug}`">
            <img
              class="object-cover object-center w-full h-64 mb-6 transition duration-200 rounded  ease-overstep"
              :src="project.image"
              alt="content"
            />
          </nuxt-link>
          <div class="px-6 py-6">
            <div
              class="flex flex-row flex-wrap gap-4 py-2 mb-2"
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
            <nuxt-link
              :to="`project/${project.slug}`"
              class="mb-4 text-lg font-medium title-font"
            >
              {{ project.title }}
            </nuxt-link>
            <p class="text-base leading-relaxed font-josefin">
              {{ project.description }}
            </p>
            <div
              v-if="project.technologies.length > 0"
              class="flex flex-wrap w-full py-1 mt-2 text-gray-600  dark:text-dark-theme-400 font-Dosis"
            >
              <span
                class="mx-2 font-semibold"
                v-for="technology in project.technologies"
                :key="technology"
              >
                {{ technology }}
              </span>
            </div>
            <div class="flex justify-end mt-5">
              <nuxt-link :to="'project/' + project.slug" :title="project.title">
                View project »
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
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
