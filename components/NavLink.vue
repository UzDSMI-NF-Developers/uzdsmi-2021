<template>
  <NuxtLink :to="to">
    <slot></slot>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: '/',
    },
  },
}
</script>

<style scoped>
  a {
    @apply block px-4 py-2 mt-2 font-semibold text-black rounded;

    @screen md {
      @apply mt-0;
    }
  }

  a:hover {
    @apply bg-blue-500 text-white no-underline;
  }

  a:focus {
    @apply outline-none shadow-md;
  }
</style>
