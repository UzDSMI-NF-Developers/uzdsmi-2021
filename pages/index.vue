<template>
  <Container>
    <HomeNews :posts="news" />
    <HomeAnnouncements :posts="announcements" />
    <HomeArticles :posts="articles" />
    <HomeConferences :posts="conferences" />
  </Container>
</template>

<script>
import Container from '@/components/Container'
import HomeNews from '@/components/HomeNews'
import HomeAnnouncements from '@/components/HomeAnnouncements'
import HomeArticles from '@/components/HomeArticles'
import HomeConferences from '@/components/HomeConferences'

const POSTS_URL = `https://admin.uzdsmi-nf.uz/wp-json/wp/v2/posts`

export default {
  async asyncData({ $axios }) {
    const news = await $axios.$get(`${POSTS_URL}?categories=2&_embed&per_page=8`)
    const announcements = await $axios.$get(`${POSTS_URL}?categories=3&_embed&per_page=8`)
    const articles = await $axios.$get(`${POSTS_URL}?categories=4&_embed&per_page=8`)
    const conferences = await $axios.$get(`${POSTS_URL}?categories=5&_embed&per_page=3`)

    // const news = await $axios.$get(`https://admin.uzdsmi-nf.uz/wp-json/base/views/1100`)

    return {
      news,
      announcements,
      articles,
      conferences
    }
  },
  components: {
    Container,
    HomeNews,
    HomeAnnouncements,
    HomeArticles,
    HomeConferences,
  }
}
</script>
