<template>
  <Container>
    <Heading :title="$t('articles.all')"></Heading>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6 mb-4">
      <ArticlesCard
        v-for="post in articles"
        :key="post.id"
        :id="post.id"
        :title="post.title.rendered"
        :imageUrl="post._embedded['wp:featuredmedia']['0'].source_url"
        :date="post.date"
      />
    </div>
  </Container>
</template>

<script>
import Container from '@/components/Container'
import Heading from '@/components/Heading'
import ArticlesCard from '@/components/ArticlesCard'

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
    Heading,
    ArticlesCard
  },
  layout: 'page',
}
</script>
