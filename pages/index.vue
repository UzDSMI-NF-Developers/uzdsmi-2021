<template>
  <Container>
    <HomeNews />
    <HomeAnnouncements />
    <HomeArticles />
    <HomeConferences />
  </Container>
</template>

<script>
import Container from '@/components/Container'
import HomeNews from '@/components/HomeNews'
import HomeAnnouncements from '@/components/HomeAnnouncements'
import HomeArticles from '@/components/HomeArticles'
import HomeConferences from '@/components/HomeConferences'

export default {
  components: {
    Container,
    HomeNews,
    HomeAnnouncements,
    HomeArticles,
    HomeConferences,
  }
}
</script>
