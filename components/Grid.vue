<template>
  <div
    class="absolute left-0 grid w-full transform -skew-y-12 -top-16 grid-cols-24 grid-rows-12"
    style="height: 1080px"
  >
    <div
      :class="[secondaryColor, alt ? 'row-start-7' : 'row-start-4']"
      class="w-full h-full col-span-5 transition duration-150 transform translate-y-4 rounded-sm col-end-25"
    ></div>
    <div
      :class="[primaryColor, alt ? 'row-start-8' : 'row-start-5']"
      class="w-full h-full col-span-3 row-span-1 transition duration-150 rounded-sm col-end-25"
    ></div>

    <div
      :class="primaryColor"
      class="w-full h-full col-span-5 col-start-1 row-start-2 transition duration-150 transform translate-y-4 rounded-sm"
    ></div>
    <div
      :class="secondaryColor"
      class="w-full h-full col-span-2 col-start-1 row-start-3 transition duration-150 rounded-sm"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    primaryColor: {
      default: "bg-rose-400",
      type: String,
    },
    secondaryColor: {
      default: "bg-gray-100 dark:bg-dark-theme-800",
      type: String,
    },
    alt: Boolean,
  },
};
</script>

<style scoped>
</style>