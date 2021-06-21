import Vue from "vue"


if (!Vue.sluggify) {
  Vue.sluggify = true
  Vue.mixin({ 
      slug: function(string) {
        return string
        .toString()
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w\-]+/g, "")
        .replace(/\-\-+/g, "-")
        .replace(/^-+/, "")
        .replace(/-+$/, "");
      }
   })
}