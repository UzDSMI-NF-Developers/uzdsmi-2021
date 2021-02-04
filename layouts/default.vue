<template>
  <div>
    <Header />
    <Container>
      <Nuxt />
    </Container>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Container from '@/components/Container'

export default {
  components: {
    Header,
    Footer,
    Container,
  }
}
</script>
