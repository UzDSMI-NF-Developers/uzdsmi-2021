<template>
  <Container>
    <HomeSlider />
    <HomeNews :posts="news" />
    <HomeAnnouncements :posts="announcements" />
    <HomeArticles :posts="articles" />
    <HomeConferences :posts="conferences" />
    <HomeServices />
    <HomePresident />
    <HomeResources />
  </Container>
</template>

<script>
import Container from '@/components/Container'
import HomeNews from '@/components/HomeNews'
import HomeAnnouncements from '@/components/HomeAnnouncements'
import HomeArticles from '@/components/HomeArticles'
import HomeConferences from '@/components/HomeConferences'
import HomeSlider from '@/components/HomeSlider'
import HomeServices from '@/components/HomeServices'
import HomePresident from '@/components/HomePresident'
import HomeResources from '@/components/HomeResources'

const POSTS_URL = `https://admin.uzdsmi-nf.uz/wp-json/wp/v2/posts`

export default {
  async asyncData({ $axios }) {
    const news = await $axios.$get(`${POSTS_URL}?categories=2&per_page=8&_embed`)
    const announcements = await $axios.$get(`${POSTS_URL}?categories=3&_embed`)
    const articles = await $axios.$get(`${POSTS_URL}?categories=4&_embed`)
    const conferences = await $axios.$get(`${POSTS_URL}?categories=5&_embed`)

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
    HomeSlider,
    HomeServices,
    HomePresident,
    HomeResources
  },
}
</script>
