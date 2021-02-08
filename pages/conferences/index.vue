<template>
  <Container>
    <Heading :title="$t('conferences.all')"></Heading>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6 mb-4">
      <ConferencesCard
        v-for="post in conferences"
        :key="post.id"
        :id="post.id"
        :title="post.title.rendered"
        :date="post.date"
      />
    </div>
  </Container>
</template>

<script>
import Container from '@/components/Container'
import Heading from '@/components/Heading'
import ConferencesCard from '@/components/ConferencesCard'

export default {
  async asyncData({ $axios, app }) {
    const { locale } = app.i18n
    const conferences = await $axios.$get(`https://admin.uzdsmi-nf.uz/wp-json/wp/v2/posts?categories=5&_embed`)

    return {
      conferences,
      locale
    }
  },
  components: {
    Container,
    Heading,
    ConferencesCard
  },
  layout: 'page',
}
</script>
