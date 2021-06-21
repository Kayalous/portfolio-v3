<template>
  <div>
    <Hero />
    <About :about="home" />
    <FeaturedProjects :projects="projects" />
    <FeaturedBlogs :blogs="blogs" />
    <CTA :CTA="home" />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Home | Abdulrhman Elkayal",
    };
  },
  data() {
    return {
      home: {},
      blogs: {},
      projects: {},
    };
  },
  async created() {
    this.home = await this.$content("pages/home").fetch();

    this.blogs = await this.$content("blog").limit(5).fetch();

    this.projects = await this.$content("projects").limit(3).fetch();

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

<style>
</style>
