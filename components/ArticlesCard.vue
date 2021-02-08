<template>
  <div
    class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left mb-10"
  >
    <img
      :src="imageUrl"
      :alt="title"
      class="flex-shrink-0 rounded-lg w-48 h-48 object-contain object-center sm:mb-0 mb-4"
    />
    <div class="flex-grow sm:pl-8">
      <h2
        v-html="title"
        class="font-semibold title-font font-medium text-lg"
      ></h2>
      <p class="text-gray-600 dark:text-gray-200 text-sm font-semibold mb-3">
        {{ $dateFns.format(date, 'eeee, d MMMM, y', { locale }) }}
      </p>
      <span class="text-gray-600 dark:text-gray-200 text-sm font-semibold flex items-center">
        <svg class="mr-1 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
        <div v-html="pageViews"></div>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id', 'title', 'imageUrl', 'date'],
  data() {
    return {
      pageViews: ''
    }
  },
  computed: {
    locale() {
      const currentLocale = this.$i18n.locale

      return currentLocale === 'en' ? 'en-US' : currentLocale
    }
  },
  methods: {
    async getPostViews(id) {
      const postViews = await this.$axios.$get(`https://admin.uzdsmi-nf.uz/wp-json/wp/v2/postviews/${id}`)
      this.pageViews = postViews
    }
  },
  mounted() {
    this.getPostViews(this.id)
  }
}
</script>
