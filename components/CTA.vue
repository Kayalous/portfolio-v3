<template>
  <div class="relative py-10 my-16 overflow-hidden">
    <Grid class="hidden lg:grid" />
    <div class="relative z-10 flex flex-col items-center justify-center px-5">
      <h1
        class="mb-4 text-2xl font-semibold tracking-tight text-center  text-rose-400 font-josefin"
      >
        Connect
      </h1>
      <h2 class="text-6xl tracking-tight text-center">Get in touch with me</h2>
      <div class="w-full mt-2 text-gray-600 dark:text-dark-theme-400">
        <RichText
          class="text-gray-600 2xl:text-2xl dark:text-dark-theme-400"
          :data="CTA.contact"
        />
      </div>
      <div class="flex justify-center md:justify-start">
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
  </div>
</template>

<script>
export default {
  props: ["CTA"],
};
</script>