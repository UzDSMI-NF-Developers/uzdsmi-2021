<template>
  <div>
    <Header />
    <Container>
      <Nuxt />
    </Container>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Container from '@/components/Container'

export default {
  components: {
    Header,
    Container
  }
}
</script>
