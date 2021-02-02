<template>
  <div class="heading">
    <h3>{{ title }}</h3>
    <div>
      <slot name="link"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style scoped>
  .heading {
    @apply border-b-2 border-gray-400 pt-1 pb-2;

    @screen sm {
      @apply flex items-center justify-between;
    }
  }

  h3 {
    @apply uppercase;
  }

  .heading a {
    @apply font-semibold text-lg;
  }
</style>
