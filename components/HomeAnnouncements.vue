<template>
  <div>
    <Heading title="So'ngi e'lonlar">
      <template #link>
        <NuxtLink :to="localePath('/announcements')">
          Barcha e'lonlar
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
