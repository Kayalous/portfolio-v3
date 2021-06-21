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
    </div>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
  scrollToTop: true,
  methods: {
    setTheme() {
      let html = document.querySelector("html");
      if (this.$store.state.theme.theme === "dark") html.classList.add("dark");
      else html.classList.remove("dark");
    },
  },

  mounted() {
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

<style>
* {
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  font-display: swap;
}

::selection {
  background-color: #fb718599;
  color: #222;
}

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

/* Light theme scrollbar */

::-webkit-scrollbar-track {
  background-color: theme("colors.gray.300");
}
::-webkit-scrollbar-track-piece {
  background-color: theme("colors.white");
}

::-webkit-scrollbar-thumb {
  height: 50px;
  background-color: theme("colors.gray.300");
  border-radius: 3px;
}

::-webkit-scrollbar-corner {
  background-color: theme("colors.white");
}
::-webkit-resizer {
  background-color: theme("colors.gray.300");
}

/* Dark theme scrollbar */

.dark ::-webkit-scrollbar-track {
  background-color: theme("colors.dark-theme.800");
}
.dark ::-webkit-scrollbar-track-piece {
  background-color: theme("colors.dark-theme.900");
}
.dark ::-webkit-scrollbar-thumb {
  height: 50px;
  background-color: theme("colors.dark-theme.800");
  border-radius: 3px;
}
.dark ::-webkit-scrollbar-corner {
  background-color: theme("colors.dark-theme.900");
}
.dark ::-webkit-resizer {
  background-color: theme("colors.dark-theme.800");
}

svg {
  @apply stroke-current;
}

html.dark {
  @apply transition-colors duration-300;
  background-color: #151728;
}

.prose > *:not(code) {
  color: currentColor !important;
}

.prose pre code {
  @apply !text-dark-theme-100;
}

.prose code {
  color: currentColor !important;
}

.prose a {
  color: theme("colors.rose.400") !important;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Fira Sans Extra Condensed", sans-serif;
}

a {
  color: theme("colors.rose.400") !important;
  text-decoration: none !important;
  @apply relative italic no-underline;
  font-family: "Josefin Sans", sans-serif;
  text-shadow: 0px 0px 4px #fb7185aa;
}

a:hover {
  text-decoration: none !important;
  @apply no-underline brightness-95;
}
.dark a:hover,
.dark a:hover > * {
  @apply brightness-125;
}

a:hover > img {
  @apply brightness-90;
}

.dark a:hover > img {
  @apply brightness-110;
}

a:not(.hover-no-underline):before,
.hover {
  position: absolute;
  display: block;
  background-color: currentColor;
  right: 0;
  bottom: 0;
  width: 0px;
  content: "";
  height: 1px;
  margin-top: 0px;
  transition: all 150ms ease-in-out;
  -webkit-transition: all 150ms ease-in-out;
  box-shadow: 0px 0px 5px #fb7185aa;
}

a:not(.hover-no-underline):hover:before,
a:not(.hover-no-underline).nuxt-link-exact-active:before {
  width: 100%;
  left: 0;
  background: currentColor;
}

.rose-button {
  @apply inline-flex items-center justify-center px-8 py-3 font-semibold leading-6 transition border rounded-md shadow select-none duration-400 ease-overstep text-rose-400 border-rose-400 hover:bg-rose-900 hover:bg-opacity-5 focus:outline-none focus:border-rose-500 md:py-4 md:text-lg md:px-10;
}

.prose {
  color: currentColor !important;
}

em {
  @apply inline-flex items-center justify-center;
}

a:not([href*="elkayal.me"]):not(.hover-no-underline):not([href^="#"]):not([href^="/"]):after {
  content: url("/img/external.svg");
  @apply ml-1;
}

/* em > a::after {
  content: url("/img/external.svg");
  @apply ml-1;
} */

#nprogress .bar {
  background: theme("colors.rose.400") !important;
}

#nprogress .peg {
  box-shadow: 0 0 10px theme("colors.rose.400"),
    0 0 5px theme("colors.rose.400") !important;
}

#nprogress .spinner-icon {
  display: none !important;
}

.glass {
  transform: translate3d(0);
  background-color: #f4f4f5f5;
}

.dark .glass {
  background-color: #25283df5;
}

@supports (
  (-webkit-backdrop-filter: blur(15px)) or (backdrop-filter: blur(15px))
) {
  .glass {
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    background-color: #f4f4f530;
  }

  .dark .glass {
    background-color: #25283d50;
  }

  .glass.tinted {
    backdrop-filter: blur(25px);
    -webkit-backdrop-filter: blur(25px);
    background-color: #f4f4f565;
  }

  .dark .glass.tinted {
    background-color: #25283da4;
  }

  .glass.weak {
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }

  .glass.no-tint {
    background-color: transparent;
  }
}
.fade-page-leave-active {
  @apply duration-400 transition;
}

.fade-page-enter-active {
  @apply duration-400 transition;
}

.fade-page-enter {
  @apply opacity-0;
}
.fade-page-enter-to {
  @apply opacity-100;
}

.fade-page-leave-to {
  @apply opacity-0;
}

.fade-navbar-leave-active {
  @apply duration-500 delay-150 transition transform-gpu ease-overstep;
}

.fade-navbar-enter-active {
  @apply duration-500 delay-150 transition transform-gpu ease-overstep;
}

.fade-navbar-enter {
  @apply opacity-0 -translate-y-10;
}
.fade-navbar-enter-to {
  @apply opacity-100 translate-y-0;
}

.category-green {
  @apply !text-green-700 !bg-green-200;
}
.category-purple {
  @apply !text-purple-700 !bg-purple-200;
}
.category-red {
  @apply !text-red-700 !bg-red-200;
}
.category-blue {
  @apply !text-blue-700 !bg-blue-200;
}
.category-rose {
  @apply !text-rose-400 !bg-rose-100;
}
</style>
