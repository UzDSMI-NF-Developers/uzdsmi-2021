<template>
  <div>
    <Heading title="Maqolalar">
      <template #link>
        <NuxtLink :to="localePath('/articles')">
          Barcha maqolalar
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
