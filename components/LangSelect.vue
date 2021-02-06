<template>
  <div class="relative inline-block">
    <button
      class="drop-btn"
      @click="toggleDropdown"
    >
      <div v-if="locale === 'ru'" class="flex items-center">
        <img src="/flags/flag-of-russia.svg" alt="Switch to English" />
        <span>Русский</span>
      </div>
      <div v-if="locale === 'en'" class="flex items-center">
        <img src="/flags/flag-of-great-britain.svg" alt="Switch to English" />
        <span>English</span>
      </div>
      <div v-if="locale === 'uz'" class="flex items-center">
        <img src="/flags/flag-of-uzbekistan.svg" alt="Switch to English" />
        <span>Uzbekcha</span>
      </div>
      <svg
        viewBox="0 0 20 20"
        :class="{ 'rotate-180': dropdownIsOpen, 'rotate-0': !dropdownIsOpen }"
        class="text-gray-900 inline w-4 h-4 ml-1 transition-transform duration-200 transform"
      >
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
    <div
      v-if="dropdownIsOpen"
      class="absolute left-0 md:right-0 w-40 mt-1 bg-white origin-top-right rounded-md shadow-lg z-50"
    >
      <div class="group bg-white rounded-md shadow hover:bg-blue-700">
        <NuxtLink :to="switchLocalePath('uz')" class="p-4 flex items-center group-hover:text-gray-200 group-hover:no-underline">
          <img src="/flags/flag-of-uzbekistan.svg" alt="Switch to Uzbek" />
          <span>Uzbekcha</span>
        </NuxtLink>
      </div>
      <div class="group bg-white rounded-md shadow hover:bg-blue-700">
        <NuxtLink :to="switchLocalePath('ru')" class="p-4 flex items-center group-hover:text-gray-200 group-hover:no-underline">
          <img src="/flags/flag-of-russia.svg" alt="Switch to Russia" />
          <span>Русский</span>
        </NuxtLink>
      </div>
      <div class="group bg-white rounded-md shadow hover:bg-blue-700">
        <NuxtLink :to="switchLocalePath('en')" class="p-4 flex items-center group-hover:text-gray-200 group-hover:no-underline">
          <img src="/flags/flag-of-great-britain.svg" alt="Switch to English" />
          <span>English</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dropdownIsOpen: false,
    }
  },
  mounted() {
    document.addEventListener('click', this.close)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.close)
  },
  methods: {
    toggleDropdown() {
      this.dropdownIsOpen = !this.dropdownIsOpen
    },
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.dropdownIsOpen = false
      }
    },
  },
  computed: {
    locale() {
      const currentLocale = this.$i18n.locale

      return currentLocale
    }
  }
}
</script>

<style scoped>
  .drop-btn {
    @apply bg-white flex flex-row items-center w-full px-4 py-2 mt-2;
    @apply font-semibold text-sm text-left text-black rounded normal-case;

    @screen md {
      @apply mt-0;
    }
  }

  .drop-btn:hover {
    @apply bg-blue-500 text-white;
  }

  .drop-btn:focus {
    @apply outline-none shadow-md;
  }

  img {
    @apply w-8 mr-2;
  }

  a {
    @apply font-semibold text-sm text-left text-black rounded normal-case text-gray-900;
  }
</style>
