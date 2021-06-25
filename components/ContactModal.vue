<template>
  <div>
    <!-- For netlify bots -->
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify
      hidden
      enctype="application/x-www-form-urlencoded"
    >
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="email" />
      <input type="hidden" name="name" />
      <input type="hidden" name="message" />
    </form>

    <client-only>
      <modal
        @closed="resetForm"
        :overlayTransition="'overlay-fade-in'"
        name="contact-form"
        :focusTrap="true"
        :scrollable="true"
        :height="'auto'"
        styles="background-color: transparent; box-shadow: none;"
        classes="px-1 py-5 sm:px-2 left-auto !w-full !max-w-[100vw] sm:!max-w-xl"
      >
        <div
          class="container w-full px-2 py-5 overflow-hidden rounded-md shadow-lg  sm:p-5 glass tinted glass-no-animation"
        >
          <div class="flex items-center justify-end w-full gap-x-2">
            <button
              class="
                group
                hover-no-underline
                transform-gpu
                transition
                duration-400
                ease-overstep
                active:translate-y-0.5
                form-button
                focus:outline-none
              "
              :disabled="loading"
              @click="$modal.hide('contact-form')"
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
                  class="w-8 h-8 stroke-current  icon icon-tabler icon-tabler-brand-twitter"
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
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </span>
            </button>
          </div>
          <tween-height switching name="fade" mode="out-in">
            <div
              :key="'success'"
              v-if="submitted"
              class="flex flex-col items-center justify-center w-full pt-4  gap-y-2"
            >
              <svg
                class="checkmark"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 52 52"
              >
                <circle
                  class="checkmark__circle"
                  cx="26"
                  cy="26"
                  r="25"
                  fill="none"
                />
                <path
                  class="checkmark__check"
                  fill="none"
                  d="M14.1 27.2l7.1 7.2 16.7-16.8"
                />
              </svg>
              <div>
                <h3
                  class="text-2xl tracking-tight text-center  2xl:text-5xl sm:text-4xl"
                >
                  Thank you!
                </h3>
                <p
                  class="w-full text-lg text-center text-gray-600  dark:text-dark-theme-300"
                >
                  I'll get back to you as soon as possible.
                </p>
              </div>
            </div>
            <div :key="'form'" v-else>
              <h3
                class="text-2xl tracking-tight text-center  2xl:text-5xl sm:text-4xl"
              >
                Let's talk!
              </h3>
              <div
                class="w-full text-lg text-center text-gray-600  dark:text-dark-theme-300"
              >
                <span>
                  Hey! I'm glad you want to get in touch with me. Just fill the
                  form below and I'll get back to you within a few days tops. If
                  you'd rather email me, you can reach me at
                </span>

                <a
                  class=" hover-no-underline focus:outline-none focus:brightness-125"
                  :href="'mailto:' + $store.state.global.data.email"
                  >{{ $store.state.global.data.email }}</a
                >.
              </div>
              <ValidationObserver v-slot="{ handleSubmit }">
                <form
                  ref="form"
                  @submit.prevent="handleSubmit(submitForm)"
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  enctype="application/x-www-form-urlencoded"
                  class="mt-10 font-josefin"
                >
                  <input type="hidden" name="form-name" value="contact" />

                  <div>
                    <label for="name" class="text-lg font-bold">Name</label>
                    <ValidationProvider
                      name="name"
                      mode="eager"
                      rules="required|min:2"
                      v-slot="{ errors }"
                    >
                      <input
                        v-model="formData.name"
                        id="name"
                        class="w-full p-3 mt-2 mb-1 border-none rounded-md shadow  caret-rose-400 glass-no-animation glass focus:ring focus:ring-transparent dark:hover:brightness-125 dark:focus:hover:brightness-125 dark:focus:brightness-110 hover:brightness-90 focus:hover:brightness-90 focus:brightness-80"
                        type="text"
                        name="name"
                      />
                      <span class="text-rose-400">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                  <div class="mt-8">
                    <label for="email" class="text-lg font-bold">Email</label>
                    <ValidationProvider
                      name="email"
                      mode="eager"
                      rules="required|email"
                      v-slot="{ errors }"
                    >
                      <input
                        v-model="formData.email"
                        id="email"
                        class="w-full p-3 mt-2 mb-1 border-none rounded-md shadow  caret-rose-400 glass-no-animation glass focus:ring focus:ring-transparent dark:hover:brightness-125 dark:focus:hover:brightness-125 dark:focus:brightness-110 hover:brightness-90 focus:hover:brightness-90 focus:brightness-80"
                        type="email"
                        name="email"
                      />
                      <span class="text-rose-400">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                  <div class="mt-8">
                    <label for="message" class="text-lg font-bold"
                      >Message</label
                    >
                    <ValidationProvider
                      name="message"
                      mode="eager"
                      rules="required|min:5"
                      v-slot="{ errors }"
                    >
                      <textarea
                        v-model="formData.message"
                        id="message"
                        name="message"
                        rows="5"
                        class="w-full p-3 mt-2 mb-1 border-none rounded-md shadow resize-none  caret-rose-400 glass-no-animation glass focus:ring focus:ring-transparent dark:hover:brightness-125 dark:focus:hover:brightness-125 dark:focus:brightness-110 hover:brightness-90 focus:hover:brightness-90 focus:brightness-80"
                      ></textarea>
                      <span class="text-rose-400">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>

                  <div class="pb-2 mt-8">
                    <span class="mb-2 text-rose-400">{{ errorMsg }}</span>
                    <button
                      class="
                        group
                        hover-no-underline
                        transform-gpu
                        transition
                        duration-400
                        ease-overstep
                        active:translate-y-0.5
                        cursor-pointer
                        w-full
                        form-button
                        focus:outline-none
                        disabled:opacity-75
                        disabled:cursor-not-allowed
                      "
                      type="submit"
                    >
                      <span
                        class="
                          w-full
                          rose-button
                          glass
                          transform-gpu
                          group-focus:translate-y-0.5
                        "
                      >
                        <svg
                          class="w-5 h-5 animate-spin"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          v-if="loading"
                        >
                          <circle
                            class="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            stroke-width="4"
                          ></circle>
                          <path
                            class="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        <template v-else> Get in touch </template>
                      </span>
                    </button>
                  </div>
                </form>
              </ValidationObserver>
            </div>
          </tween-height>
        </div>
      </modal>
    </client-only>
  </div>
</template>

<script>
import axios from "axios";

import * as qs from "query-string";

export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: "",
      },
      submitted: false,
      loading: false,
      errorMsg: "",
    };
  },
  methods: {
    encode(data) {
      let formData = new FormData();

      for (const key of Object.keys(data)) {
        formData.append(key, data[key]);
      }
      return formData;
    },
    resetForm() {
      this.formData.name = "";
      this.formData.email = "";
      this.formData.message = "";
      this.submitted = false;
      this.loading = false;
    },
    async submitForm() {
      this.loading = true;
      let vm = this;
      // Setting up the headers
      let formData = {
        "form-name": "contact",
        ...vm.formData,
      };
      const axiosConfig = {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: qs.stringify(formData),
      };

      // Form request
      fetch("/", axiosConfig)
        .then(() => vm.success())
        .catch(() => vm.error());
    },
    success() {
      let vm = this;
      this.submitted = true;
      setTimeout(function () {
        vm.$modal.hide("contact-form");
      }, 3000);
    },
    error() {
      this.errorMsg = "Whoops, something went wrong, please try again.";
      this.loading = false;
    },
  },
};
</script>

<style>
.checkmark {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: block;
  stroke-width: 2;
  stroke: #fff;
  stroke-miterlimit: 10;
  box-shadow: inset 0px 0px 0px #7ac142;
  animation: fill 0.4s ease-in-out 0.4s forwards,
    scale 0.3s ease-in-out 0.9s both;
}

.checkmark__circle {
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  stroke-width: 2;
  stroke-miterlimit: 10;
  stroke: #7ac142;
  fill: none;
  animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
}

.checkmark__check {
  transform-origin: 50% 50%;
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
}

@keyframes stroke {
  100% {
    stroke-dashoffset: 0;
  }
}

@keyframes scale {
  0%,
  100% {
    transform: none;
  }
  50% {
    transform: scale3d(1.1, 1.1, 1);
  }
}

@keyframes fill {
  100% {
    box-shadow: inset 0px 0px 0px 30px #7ac142;
  }
}

.fade-enter-active,
.fade-leave-active {
  @apply transition-all duration-300 ease-overstep;
}
.fade-enter,
.fade-leave-to {
  @apply opacity-0;
}
</style>