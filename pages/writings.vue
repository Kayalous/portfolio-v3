<template>
  <section class="px-2 pt-24 sm:pt-40">
    <div class="flex flex-col items-center justify-center w-full mb-16">
      <h1
        class="text-2xl font-semibold tracking-tight text-center  text-rose-400 font-josefin"
      >
        Writings
      </h1>
      <h2
        class="max-w-6xl text-4xl tracking-tight text-center  lg:text-6xl 2xl:text-7xl"
      >
        If you for some reason want to read my ramblings, then you're in the
        right place.
      </h2>
      <p
        class="max-w-4xl my-5 text-xl text-center text-gray-600  lg:my-10 2xl:text-2xl dark:text-dark-theme-200"
      >
        I write about whatever I find interesting at the time, or about my
        experinces with a specific technology, if you need to get in touch to
        have a conversation please feel free to email me.
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
            Let's talk
          </span>
        </a>
      </div>
    </div>
    <div
      class="grid max-w-5xl grid-cols-1 gap-5 mx-auto  md:grid-cols-2 xl:max-w-7xl"
    >
      <BlogCard v-for="blog in blogs" :key="blog.title" :blog="blog" />
    </div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: "Writings | Abdulrhman Elkayal",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Some writings of Abdulrhman Elkayal.",
        },
      ],
    };
  },
  async asyncData({ $content, params }) {
    const blogs = await $content("blog").fetch();

    return { blogs };
  },
  mounted() {},
};
</script>
