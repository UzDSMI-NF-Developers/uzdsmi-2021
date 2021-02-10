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

export default {
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
  data() {
    return {
      news: [],
      announcements: [],
      articles: [],
      conferences: []
    }
  },
  methods: {
    async loadNews() {
      const news = await this.$axios.$get(`https://admin.uzdsmi-nf.uz/wp-json/wp/v2/posts?categories=2&_embed`)
      this.news = news
    },
    async loadAnnouncements() {
      const announcements = await this.$axios.$get(`https://admin.uzdsmi-nf.uz/wp-json/wp/v2/posts?categories=3&_embed`)
      this.announcements = announcements
    },
    async loadArticles() {
      const articles = await this.$axios.$get(`https://admin.uzdsmi-nf.uz/wp-json/wp/v2/posts?categories=4&_embed`)
      this.articles = articles
    },
    async loadConferences() {
      const conferences = await this.$axios.$get(`https://admin.uzdsmi-nf.uz/wp-json/wp/v2/posts?categories=5&_embed`)
      this.conferences = conferences
    },
  },
  mounted() {
    this.loadNews();
    this.loadAnnouncements();
    this.loadArticles();
    this.loadConferences();
  }
}
</script>
