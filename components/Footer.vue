<template>
  <div class="relative z-50 bg-transparent">
    <div
      class="fixed bottom-0 z-50 items-start justify-between hidden w-full h-0  lg:flex"
    >
      <div
        class="absolute bottom-0 left-0 flex flex-col items-center justify-end ml-10 "
      >
        <ul class="flex flex-col gap-1">
          <li
            class="group"
            v-for="footerLink in globalData.footerlinks"
            :key="footerLink.name"
          >
            <a
              :aria-label="footerLink.name"
              :href="footerLink.url"
              target="_blank"
              rel="noopener noreferrer"
              class="flex flex-row items-center gap-2 py-1 transition  hover-no-underline transform-gpu duration-400 ease-overstep group-hover:-translate-y-1"
              style="filter: drop-shadow(0px 0px 3px #fb7185aa)"
            >
              <span class="w-8 h-8" v-html="footerLink.icon"></span>
            </a>
          </li>
        </ul>
        <div
          class="
            w-0.5
            h-20
            mb-4
            transition
            duration-300
            bg-gray-500
            dark:bg-dark-theme-800
            mt-5
          "
        ></div>
      </div>
      <div
        class="absolute bottom-0 right-0 flex flex-col items-center justify-end mr-10 "
      >
        <div class="group">
          <a
            class="p-0 m-0 text-xl transition  hover-no-underline transform-gpu duration-400 ease-overstep group-hover:-translate-y-1 email-vertical"
            :href="'mailto:' + globalData.email"
            >{{ globalData.email }}</a
          >
        </div>
        <div
          class="
            w-0.5
            h-20
            mb-4
            transition
            duration-300
            bg-gray-500
            dark:bg-dark-theme-800
            mt-5
          "
        ></div>
      </div>
    </div>
    <footer class="flex flex-col items-center justify-center w-full py-5 mt-10">
      <ul class="flex gap-5 mb-5 lg:hidden">
        <li
          class="group"
          v-for="footerLink in globalData.footerlinks"
          :key="footerLink.name"
        >
          <a
            :href="footerLink.url"
            target="_blank"
            rel="noopener noreferrer"
            class="flex flex-row items-center gap-2 py-1 transition  hover-no-underline transform-gpu duration-400 ease-overstep group-hover:-translate-y-1"
            style="filter: drop-shadow(0px 0px 3px #fb7185aa)"
          >
            <span class="w-8 h-8" v-html="footerLink.icon"></span>
          </a>
        </li>
        <li class="group">
          <a
            :href="'mailto:' + globalData.email"
            target="_blank"
            rel="noopener noreferrer"
            class="flex flex-row items-center gap-2 py-1 transition  hover-no-underline transform-gpu duration-400 ease-overstep group-hover:-translate-y-1"
            style="filter: drop-shadow(0px 0px 3px #fb7185aa)"
          >
            <span class="w-8 h-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8 stroke-current  icon icon-tabler icon-tabler-brand-twitter"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <polyline points="3 7 12 13 21 7" />
              </svg>
            </span>
          </a>
        </li>
      </ul>

      <p
        class="font-semibold tracking-tight text-center  text-rose-400 font-josefin"
      >
        Abdulrhman Elkayal | {{ new Date().getFullYear() }}
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      globalData: {},
    };
  },
  async mounted() {
    this.globalData = await this.$content("global/global-settings").fetch();
  },
};
</script>


<style scoped>
.email-vertical {
  writing-mode: vertical-rl;
}
</style>