<template>
  <div class="py-4">
    <Markdown :source="data" class="mx-auto prose prose-xl xl:prose-2xl" />
  </div>
</template>

<script>
import Markdown from "vue-markdown";
import Prism from "prismjs";
import "@/assets/prism-duotones.css";

export default {
  props: ["data"],
  components: {
    Markdown,
  },
  mounted() {
    this.$nextTick(() => {
      Prism.highlightAll();
    });
  },
};
</script>