<template>
  <div>
    <Heading title="So'ngi yangiliklar">
      <template #link>
        <NuxtLink :to="localePath('/news')">
          Barcha yangiliklar
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
