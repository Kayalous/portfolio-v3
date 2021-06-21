<template>
  <div class="container flex justify-center pt-32 mx-auto">
    <article class="max-w-5xl px-2 overflow-x-scroll">
      <img
        class="object-fill w-full h-auto mb-5"
        :src="project.image"
        :alt="project.title"
      />
      <h1
        class="font-light tracking-tight text-center text-gray-600  dark:text-dark-theme-300 font-josefin md:text-left"
      >
        {{ $moment(project.date).format("MMMM Do YYYY") }}
      </h1>
      <h2
        class="mb-4 text-xl font-semibold tracking-tight text-center  sm:text-2xl text-rose-400 font-josefin md:text-left"
      >
        {{ project.title }}
      </h2>

      <h3 class="text-2xl tracking-tight text-center sm:text-4xl md:text-left">
        {{ project.description }}
      </h3>
      <div class="mt-10 text-gray-600 dark:text-dark-theme-100">
        <RichText
          class="text-gray-600 dark:text-dark-theme-100"
          :data="project.content"
        />
      </div>
    </article>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.project.title + " | Abdulrhman Elkayal",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: this.project.description,
        },
      ],
    };
  },
  async asyncData({ $content, params }) {
    const project = await $content("projects", params.slug).fetch();

    return { project };
  },

  mounted() {
    this.getCategories();
  },
  methods: {
    getCategories() {
      let categories = [];
      this.project.categories.forEach((category) => {
        let split = category.split("*/*");
        categories.push({
          title: split[0],
          color: split[1],
        });
      });
      this.project.categories = categories;
    },
  },
};
</script>