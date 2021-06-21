<template>
  <div class="container flex justify-center pt-32 mx-auto">
    <article class="max-w-5xl px-2 overflow-x-scroll">
      <img
        class="object-fill w-full h-auto mb-5"
        :src="blog.image"
        :alt="blog.title"
      />
      <h1
        class="font-light tracking-tight text-center text-gray-600  dark:text-dark-theme-300 font-josefin md:text-left"
      >
        {{ $moment(blog.date).format("MMMM Do YYYY") }}
      </h1>
      <h2
        class="mb-4 text-xl font-semibold tracking-tight text-center  sm:text-2xl text-rose-400 font-josefin md:text-left"
      >
        {{ blog.title }}
      </h2>

      <h3 class="text-2xl tracking-tight text-center sm:text-4xl md:text-left">
        {{ blog.description }}
      </h3>
      <div class="mt-10 text-gray-600 dark:text-dark-theme-100">
        <RichText
          class="text-gray-600 dark:text-dark-theme-100"
          :data="blog.content"
        />
      </div>
    </article>
  </div>
</template>





<script>
export default {
  head() {
    return {
      title: this.blog.title + " | Abdulrhman Elkayal",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: this.blog.description,
        },
      ],
    };
  },
  async asyncData({ $content, params }) {
    const blog = await $content("blog", params.slug).fetch();

    return { blog };
  },

  mounted() {},
};
</script>

