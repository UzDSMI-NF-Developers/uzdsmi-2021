<template>
  <div class="relative">
    <button
      class="drop-btn"
      @click="toggleDropdown"
    >
      <span>{{ title }}</span>
      <svg
        fill="currentColor"
        viewBox="0 0 20 20"
        :class="{ 'rotate-180': dropdownIsOpen, 'rotate-0': !dropdownIsOpen }"
        class="inline w-4 h-4 ml-1 transition-transform duration-200 transform"
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
      class="absolute right-0 w-full mt-2 bg-white origin-top-right rounded-md shadow-lg md:w-64 z-50"
    >
      <div class="bg-white rounded-md shadow">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
  },
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
}
</script>

<style scoped>
  .drop-btn {
    @apply flex flex-row items-center w-full px-4 py-2 mt-2;
    @apply font-semibold text-sm text-left text-black bg-transparent rounded normal-case;

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
</style>
