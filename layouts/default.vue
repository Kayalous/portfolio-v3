<template>
  <div :class="$store.state.theme.theme">
    <div
      class="
        relative
        flex flex-col
        justify-between
        text-blueGray-800
        duration-300
        bg-white
        dark:bg-dark-theme-900
        dark:text-gray-200
        max-w-[100vw]
        overflow-x-hidden
        min-h-[100vh]
      "
    >
      <transition name="fade-navbar">
        <Navbar />
      </transition>
      <transition name="fade-page" appear>
        <Nuxt class="flex-grow" />
      </transition>
      <Footer />
      <ContactModal />
    </div>
  </div>
</template>

<script>
import "@/assets/styles.css";
export default {
  scrollToTop: true,
  methods: {
    setTheme() {
      let html = document.querySelector("html");
      if (this.$store.state.theme.theme === "dark") html.classList.add("dark");
      else html.classList.remove("dark");
    },
  },

  async mounted() {
    const globalData = await this.$content("global/global-settings").fetch();

    this.$store.commit("global/setData", globalData);
    this.$store.commit("theme/getInitialTheme");
    this.setTheme();
  },
  watch: {
    "$store.state.theme.theme": function () {
      this.setTheme();
    },
  },
};
</script>
