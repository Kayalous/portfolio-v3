<template>
  <div
    class="flex flex-col items-center justify-center group"
    :class="[
      compact
        ? ''
        : reverse
        ? 'md:flex-row-reverse md:gap-6'
        : 'md:flex-row md:gap-6',
    ]"
  >
    <nuxt-link
      :to="'/project/' + project.slug"
      class="relative flex-shrink-0 w-full overflow-hidden transition-all duration-700  hover-no-underline transform-gpu ease-overstep"
      :class="
        compact
          ? 'rounded-t-md'
          : 'md:w-6/12 md:group-hover:scale-101 rounded-md'
      "
    >
      <nuxt-img
        width="560"
        height="360"
        quality="80"
        :alt="project.title"
        :src="project.image"
        class="w-full h-auto transition-all duration-200 shadow-lg  ease-overstep"
      />
    </nuxt-link>
    <div
      class="relative z-10 flex flex-col justify-between w-full p-4 my-auto transition duration-700 -translate-y-1 shadow-md  glass transform-gpu ease-overstep"
      :class="[
        compact
          ? 'rounded-b-md -mt-2'
          : reverse
          ? 'md:group-hover:translate-x-12 md:translate-x-16 rounded-md md:rounded-t-md rounded-t-none  md:translate-y-0'
          : 'md:group-hover:-translate-x-12 md:-translate-x-16 rounded-md md:rounded-t-md rounded-t-none  md:translate-y-0',
      ]"
    >
      <div>
        <nuxt-link :to="'/project/' + project.slug">
          <h3 class="inline-block text-3xl font-semibold">
            {{ project.title }}
          </h3>
        </nuxt-link>
        <div
          class="flex flex-row flex-wrap gap-4 py-2"
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
        <p class="my-2 font-josefin line-clamp-4">
          {{ project.description }}
        </p>
        <div
          v-if="project.technologies.length > 0"
          class="flex flex-wrap w-full py-1 mb-1 text-gray-600  dark:text-dark-theme-400 font-Dosis"
        >
          <span
            class="mx-2 font-semibold"
            v-for="technology in project.technologies"
            :key="technology"
          >
            {{ technology }}
          </span>
        </div>

        <div class="flex items-center justify-end w-full pt-2">
          <div
            class="flex items-center justify-center mr-auto  gap-x-2 md:justify-start"
          >
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
              :href="project.githublink"
              target="_blank"
              rel="noopener noreferrer"
              alt="Github Repository"
              v-if="project.githublink"
            >
              <span
                class="
                  !px-1.5
                  !py-1.5
                  rose-button
                  glass
                  transform-gpu
                  !border-none
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 stroke-current  icon icon-tabler icon-tabler-brand-twitter"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  style="
                    filter: drop-shadow(rgba(251, 113, 133, 0.667) 0px 0px 2px);
                  "
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
                  />
                </svg>
              </span>
            </a>
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
              target="_blank"
              rel="noopener noreferrer"
              alt="Live preview"
              :href="project.link"
              v-if="project.link"
            >
              <span
                class="
                  !px-1.5
                  !py-1.5
                  rose-button
                  glass
                  transform-gpu
                  !border-none
                  !flex
                  !items-center
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 stroke-current  icon icon-tabler icon-tabler-brand-twitter"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  style="
                    filter: drop-shadow(rgba(251, 113, 133, 0.667) 0px 0px 2px);
                  "
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5"
                  />
                  <line x1="10" y1="14" x2="20" y2="4" />
                  <polyline points="15 4 20 4 20 9" />
                </svg>
              </span>
            </a>
          </div>
          <nuxt-link :to="'/project/' + project.slug" :title="project.title">
            Case study »
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: ["project", "reverse", "compact"],
};
</script>

