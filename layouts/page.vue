<template>
  <div>
    <Header />
    <Container class="p-4 mb-20 w-full">
      <Nuxt />
    </Container>
    <Container>
      <HomeResources />
    </Container>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Container from '@/components/Container'
import HomeResources from '@/components/HomeResources'

export default {
  components: {
    Header,
    Footer,
    Container,
    HomeResources
  }
}
</script>
