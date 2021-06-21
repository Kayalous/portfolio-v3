<template>
  <div
    class="fixed top-0 z-50 w-full mx-auto transform -translate-x-1/2  max-w-7xl left-1/2"
  >
    <div
      class="
        flex
        px-1
        sm:px-5
        mx-2
        sm:mx-5
        my-2
        !transition-all
        !duration-300
        rounded-md
        flex-nowrap
        glass
        shadow-sm
      "
    >
      <transition name="fade-in-down">
        <NuxtLink
          class="
            hidden
            absolute
            text-xl
            top-[50%]
            translate-y-[-50%]
            md:inline
            font-semibold
            transition
            duration-500
            transform
            whitespace-nowrap
            ease-overstep
            hover-no-underline
            z-50
          "
          v-if="home"
          to="/"
          :key="'back'"
        >
          &#60; Back to home</NuxtLink
        >
      </transition>
      <div class="w-10 h-10 sm:h-12 sm:w-12"></div>
      <div
        class="relative flex flex-row items-center justify-between flex-grow w-full py-2 "
      >
        <nav
          class="flex flex-row items-center justify-center flex-grow ml-auto  gap-x-5 sm:gap-x-10"
        >
          <NuxtLink class="font-semibold sm:text-xl" to="/blogs/"
            >Writings</NuxtLink
          >
          <NuxtLink
            class="font-semibold hover-no-underline"
            style="filter: drop-shadow(0px 0px 3px #fb7185aa)"
            to="/"
          >
            <svg
              class="w-10 h-10 sm:w-16 sm:h-16"
              viewBox="0 0 25 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.2109 0.0625C20.3594 0.0625 20.9336 0.378906 20.9336 1.01172C20.9336 1.55859 20.5 2.35938 19.6328 3.41406C19.5234 3.54688 19.2891 3.77344 18.9297 4.09375L17.5938 5.28906L13.6094 8.60547C13.8047 8.95703 14.1367 9.37891 14.6055 9.87109C15.0742 10.3633 15.4922 10.7656 15.8594 11.0781C16.6562 11.7812 17.1406 12.1328 17.3125 12.1328C17.4922 12.1328 17.7148 12.0664 17.9805 11.9336C18.2539 11.8008 18.5586 11.6289 18.8945 11.418C19.2305 11.1992 19.5859 10.9531 19.9609 10.6797L22.9141 8.44141C23.1953 8.22266 23.4766 8.11328 23.7578 8.11328C24.3438 8.11328 24.6367 8.35547 24.6367 8.83984C24.6367 9.47266 24.3281 10.2109 23.7109 11.0547C23.5234 11.3047 23.3438 11.5156 23.1719 11.6875L22.4336 12.3672C20.293 14.3281 18.3906 15.625 16.7266 16.2578C16.2109 16.4609 15.75 16.5625 15.3438 16.5625C14.9375 16.5625 14.5469 16.4922 14.1719 16.3516C13.7969 16.2109 13.4258 16.0234 13.0586 15.7891C12.6914 15.5547 12.332 15.2852 11.9805 14.9805C11.6367 14.668 11.3086 14.3398 10.9961 13.9961C10.4258 13.3711 9.89453 12.6836 9.40234 11.9336L7.24609 13.5391C4.94922 15.2109 3.54688 16.0469 3.03906 16.0469C2.49219 16.0469 1.96484 15.8906 1.45703 15.5781C1.30859 15.4922 1.20703 15.3984 1.15234 15.2969C0.863281 15.0078 0.71875 14.4141 0.71875 13.5156C0.71875 12.6172 0.792969 11.8164 0.941406 11.1133C1.08203 10.4023 1.27344 9.6875 1.51562 8.96875C1.75781 8.24219 2.03906 7.52344 2.35938 6.8125C2.67969 6.10156 3.01562 5.42188 3.36719 4.77344C3.71875 4.125 4.07812 3.52344 4.44531 2.96875C4.8125 2.40625 5.16406 1.92188 5.5 1.51562C6.20312 0.640625 6.73047 0.203125 7.08203 0.203125C7.44141 0.203125 7.80078 0.234375 8.16016 0.296875C8.51953 0.359375 8.84375 0.453125 9.13281 0.578125C9.78906 0.875 10.1172 1.27734 10.1172 1.78516C10.1172 2.08984 9.99609 2.41797 9.75391 2.76953C9.51172 3.12109 9.24219 3.53516 8.94531 4.01172C8.14844 5.34766 7.59375 6.29688 7.28125 6.85938L6.49609 8.33594C6.03516 9.24219 5.80469 9.80078 5.80469 10.0117C5.80469 10.1914 5.95312 10.2812 6.25 10.2812C6.36719 10.2812 6.79688 9.96094 7.53906 9.32031L9.50781 7.60938L15.6602 1.98438C15.957 1.71094 16.1289 1.55078 16.1758 1.50391C16.6523 1.01953 17.1602 0.660156 17.6992 0.425781C18.2461 0.183594 18.75 0.0625 19.2109 0.0625Z"
                fill="#FB7185"
              />
            </svg>
          </NuxtLink>
          <NuxtLink class="font-semibold sm:text-xl" to="/projects/"
            >Projects</NuxtLink
          >
        </nav>
      </div>
      <button
        @click="toggleTheme()"
        class="inline p-1 my-auto overflow-hidden transition-all duration-200 rounded-md  h-14 hover:brightness-125 hover-no-underline focus:outline-none text-rose-400"
      >
        <transition name="spin-grow" mode="out-in">
          <svg
            style="filter: drop-shadow(0px 0px 2px #fb7185aa)"
            key="light"
            v-if="checkTheme('light')"
            xmlns="http://www.w3.org/2000/svg"
            class="w-10 h-10 stroke-current  sm:h-12 sm:w-12 icon icon-tabler icon-tabler-sun"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="12" cy="12" r="4" />
            <path
              d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"
            />
          </svg>

          <svg
            style="filter: drop-shadow(0px 0px 3px #fb7185aa)"
            key="dark"
            v-if="checkTheme('dark')"
            xmlns="http://www.w3.org/2000/svg"
            class="w-10 h-10 stroke-current  sm:h-12 sm:w-12 icon icon-tabler icon-tabler-moon-stars"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"
            />
            <path
              d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2"
            />
            <path d="M19 11h2m-1 -1v2" />
          </svg>
        </transition>
      </button>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {};
  },
  methods: {
    checkTheme(theme) {
      return this.$store.state.theme.theme === theme;
    },
    toggleTheme() {
      this.$store.commit("theme/toggleTheme");
    },
  },
  computed: {
    home() {
      if (this.$nuxt.$route.path == "/") {
        return false;
      } else {
        return true;
      }
    },
  },
};
</script>

<style>
/* Theme switcher animation */

.spin-grow-leave-active {
  @apply duration-500 ease-overstep transition-all transform;
}

.spin-grow-enter-active {
  @apply duration-500  ease-overstep transition-all transform;
}

.spin-grow-enter {
  @apply opacity-0 rotate-180 scale-150;
}
.spin-grow-enter-to {
  @apply opacity-100 rotate-0 scale-100;
}

.spin-grow-leave-to {
  @apply opacity-0 -rotate-180 scale-150;
}

/* Back button animation */

.fade-in-down-leave-active {
  @apply duration-500 ease-overstep;
}

.fade-in-down-enter-active {
  @apply duration-500  ease-overstep;
}

.fade-in-down-enter {
  @apply opacity-0 -translate-y-full;
}
.fade-in-down-enter-to {
  @apply opacity-100 translate-y-[-50%];
}

.fade-in-down-leave-to {
  @apply opacity-0 -translate-y-full;
}
</style>