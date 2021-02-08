<template>
  <Container>
    <Heading :title="$t('announcements.all')"></Heading>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6 mb-4">
      <AnnouncementsCard
        v-for="post in announcements"
        :key="post.id"
        :id="post.id"
        :title="post.title.rendered"
        :excerpt="post.excerpt.rendered"
        :date="post.date"
      />
    </div>
  </Container>
</template>

<script>
import Container from '@/components/Container'
import Heading from '@/components/Heading'
import AnnouncementsCard from '@/components/AnnouncementsCard'

export default {
  async asyncData({ $axios, app }) {
    const { locale } = app.i18n
    const announcements = await $axios.$get(`https://admin.uzdsmi-nf.uz/wp-json/wp/v2/posts?categories=3&_embed`)

    return {
      announcements,
      locale
    }
  },
  components: {
    Container,
    Heading,
    AnnouncementsCard
  },
  layout: 'page',
}
</script>
