<template>
  <div>
    <Header />
    <Container>
      <Nuxt />
      <HomeServices />
      <HomePresident />
      <HomeResources />
    </Container>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Container from '@/components/Container'
import HomeServices from '@/components/HomeServices'
import HomePresident from '@/components/HomePresident'
import HomeResources from '@/components/HomeResources'

export default {
  components: {
    Header,
    Footer,
    Container,
    HomeServices,
    HomePresident,
    HomeResources
  }
}
</script>
