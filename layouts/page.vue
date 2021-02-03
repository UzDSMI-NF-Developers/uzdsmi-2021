<template>
  <div>
    <Header />
    <Container class="flex flex-wrap items-start">
      <div class="content p-4 mb-20 w-full lg:w-9/12">
        <Nuxt />
      </div>
      <div class="p-4 w-full lg:w-3/12 min-h-screen">
        <Sidebar />
      </div>
    </Container>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Container from '@/components/Container'
import Sidebar from '@/components/Sidebar'

export default {
  components: {
    Header,
    Container,
    Sidebar,
  }
}
</script>
