<template>
  <div>
    <Heading :title="title" />
    <div
      class="prose prose-lg lg:prose=2xl dark:text-gray-300 nuxt-content max-w-3xl mx-auto mt-10"
    >
      <div v-html="content"></div>
    </div>
    <Container>
      <div class="p-2 flex justify-between border-t border-gray-300">
        <span class="text-gray-800 dark:text-gray-200 text-base font-semibold flex items-center">
          <svg class="mr-1 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {{ $dateFns.format(date, 'eeee, d MMMM, y', { locale }) }}
        </span>
        <span class="text-gray-800 dark:text-gray-200 text-base font-semibold flex items-center">
          <svg class="mr-1 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          <div v-html="pageViews"></div>
        </span>
      </div>
    </Container>
  </div>
</template>

<script>
import Heading from '@/components/Heading'
import Container from '@/components/Container'

export default {
  props: ['id', 'title', 'content', 'date'],
  components: {
    Heading,
    Container
  },
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
