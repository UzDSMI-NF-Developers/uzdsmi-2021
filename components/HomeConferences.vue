<template>
  <div>
    <Heading title="Konferensiyalar">
      <template #link>
        <NuxtLink :to="localePath('/conferences')">
          Barcha konferensiyalar
        </NuxtLink>
      </template>
    </Heading>
  </div>
</template>

<script>
import Heading from '@/components/Heading'

export default {
  components: {
    Heading
  }
}
</script>
