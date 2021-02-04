<template>
  <Container>
    <Heading title="Maqolalar"></Heading>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6 mb-4">
      <!-- card -->
      <div
        v-for="post in articles"
        :key="post.id"
        class="bg-white dark:bg-gray-600 shadow border border-width-2 border-gray-200 rounded px-4 py-2 flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left mb-10"
      >
        <img
          :src="post._embedded['wp:featuredmedia']['0'].source_url"
          :alt="post.title.rendered"
          class="flex-shrink-0 rounded-lg w-48 h-48 object-contain object-center sm:mb-0 mb-4"
        />
        <div class="flex-grow sm:pl-8">
          <h2
            v-html="post.title.rendered"
            class="title-font font-medium text-lg"
          ></h2>
          <p class="text-gray-600 text-sm font-semibold mb-3">
            {{ $dateFns.format(post.date, 'eeee, d MMMM, y'), { locale } }}
          </p>
        </div>
      </div>
    </div>
  </Container>
</template>

<script>
import Container from '@/components/Container'
import Heading from '@/components/Heading'

export default {
  async asyncData({ $axios, app }) {
    const { locale } = app.i18n
    const articles = await $axios.$get(`https://admin.uzdsmi-nf.uz/wp-json/wp/v2/posts?categories=4&_embed`)

    return {
      articles,
      locale
    }
  },
  components: {
    Container,
    Heading
  },
  layout: 'page',
}
</script>
