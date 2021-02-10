<template>
  <div class="my-10">
    <Heading :title="$t('news.latest')">
      <template #link>
        <NuxtLink :to="localePath('/news')">
          {{ $t('news.all') }}
        </NuxtLink>
      </template>
    </Heading>
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-8 mb-6">

      <NewsCard
        v-for="post in posts"
        :key="post.id"
        :id="post.id"
        :title="post.title.rendered"
        :imageUrl="post._embedded['wp:featuredmedia'][0].source_url"
        :excerpt="post.excerpt.rendered"
        :date="post.date"
      />

    </div>
  </div>
</template>

<script>
import Heading from '@/components/Heading'
import NewsCard from '@/components/NewsCard'

export default {
  props: ['posts'],
  components: {
    Heading,
    NewsCard
  }
}
</script>
